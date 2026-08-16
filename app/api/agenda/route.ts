import { NextResponse } from "next/server";

/**
 * Recibe solicitudes de visita técnica del formulario.
 *
 * Integraciones opcionales (se activan con variables de entorno en Vercel):
 *  - CONTACT_WEBHOOK_URL : URL de un Apps Script de Google Sheets o CRM.
 *    Recibe la solicitud como JSON vía POST.
 *  - RESEND_API_KEY + CONTACT_EMAIL : envía la solicitud por correo usando
 *    la API de Resend (https://resend.com), sin SDK adicional.
 *
 * Sin variables configuradas, la solicitud queda registrada en los logs de
 * Vercel y el usuario recibe confirmación con alternativa de WhatsApp.
 */

const REQUIRED = ["nombre", "telefono", "comuna", "servicio"] as const;

/** Formato de correo: no valida que exista, sí que sea un correo. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/**
 * Límite simple por IP: seis solicitudes por hora. Vive en memoria del
 * proceso, así que un reinicio lo borra — suficiente para frenar el
 * envío automático, sin agregar dependencias ni base de datos.
 */
const HORA = 60 * 60 * 1000;
const MAX_POR_HORA = 6;
const envios = new Map<string, number[]>();

function excedeLimite(ip: string): boolean {
  const ahora = Date.now();
  const previos = (envios.get(ip) ?? []).filter((t) => ahora - t < HORA);
  previos.push(ahora);
  envios.set(ip, previos);

  // Limpieza oportunista para que el mapa no crezca sin control
  if (envios.size > 500) {
    for (const [k, v] of envios) {
      if (v.every((t) => ahora - t > HORA)) envios.delete(k);
    }
  }

  return previos.length > MAX_POR_HORA;
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Formato de solicitud inválido." },
      { status: 400 },
    );
  }

  const get = (k: string) => String(form.get(k) ?? "").trim();

  /* Campo trampa: está oculto en el formulario, así que una persona
     nunca lo llena. Los robots sí. Se responde ok para no darles pista
     de que fueron detectados, pero no se procesa nada. */
  if (get("empresa_web")) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconocida";

  if (excedeLimite(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Recibimos varias solicitudes desde esta conexión. Escríbenos por WhatsApp y te respondemos al tiro.",
      },
      { status: 429 },
    );
  }

  const data = {
    nombre: get("nombre"),
    telefono: get("telefono"),
    correo: get("correo"),
    empresa: get("empresa"),
    comuna: get("comuna"),
    direccion: get("direccion"),
    servicio: get("servicio"),
    fecha: get("fecha"),
    horario: get("horario"),
    descripcion: get("descripcion"),
    recibido: new Date().toISOString(),
    origen: "landing",
  };

  const faltantes = REQUIRED.filter((k) => !data[k]);
  if (faltantes.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Faltan campos: ${faltantes.join(", ")}` },
      { status: 400 },
    );
  }

  if (data.correo && !EMAIL.test(data.correo)) {
    return NextResponse.json(
      { ok: false, error: "Revisa el correo: falta el @ o el dominio." },
      { status: 400 },
    );
  }

  if (data.telefono.replace(/\D/g, "").length < 8) {
    return NextResponse.json(
      { ok: false, error: "Revisa el teléfono: faltan dígitos." },
      { status: 400 },
    );
  }

  console.log("[agenda] Nueva solicitud de visita técnica:", data);

  // ── Integración 1: webhook (Google Sheets / CRM) ──────────
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error("[agenda] Error enviando al webhook:", e);
    }
  }

  // ── Integración 2: correo vía Resend ──────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  if (resendKey && contactEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Landing <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `Nueva solicitud de visita técnica — ${data.nombre} (${data.comuna})`,
          text: [
            `Nombre: ${data.nombre}`,
            `Teléfono: ${data.telefono}`,
            `Correo: ${data.correo || "—"}`,
            `Empresa: ${data.empresa || "—"}`,
            `Comuna: ${data.comuna}`,
            `Dirección: ${data.direccion || "—"}`,
            `Servicio: ${data.servicio}`,
            `Fecha tentativa: ${data.fecha || "—"}`,
            `Horario preferido: ${data.horario || "—"}`,
            ``,
            `Descripción:`,
            data.descripcion || "—",
          ].join("\n"),
        }),
      });
    } catch (e) {
      console.error("[agenda] Error enviando correo:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
