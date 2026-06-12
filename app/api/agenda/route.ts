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
    // Las fotos adjuntas se registran por nombre; para almacenarlas,
    // conectar Vercel Blob u otro storage.
    fotos: form
      .getAll("fotos")
      .filter((f): f is File => f instanceof File && f.size > 0)
      .map((f) => f.name),
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
            ``,
            `Fotos adjuntas: ${data.fotos.length > 0 ? data.fotos.join(", ") : "ninguna"}`,
          ].join("\n"),
        }),
      });
    } catch (e) {
      console.error("[agenda] Error enviando correo:", e);
    }
  }

  return NextResponse.json({ ok: true });
}
