"use client";

import { useEffect, useState } from "react";
import { site, waLink, telHref, mailHref } from "@/site.config";

const Dot = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
    <circle cx="4" cy="4" r="4" />
  </svg>
);

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Status = "idle" | "sending" | "ok" | "err";

const wa = waLink();

export default function AgendaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    // Las fichas de servicio llegan como /contacto?servicio=<nombre>:
    // el desplegable queda preseleccionado con lo que el visitante venía
    // mirando. Solo se acepta un valor que exista en el catálogo.
    const wanted = new URLSearchParams(window.location.search).get("servicio");
    if (wanted && site.services.some((s) => s.name === wanted)) {
      setSelectedService(wanted);
    }

    function onSelectService(event: Event) {
      setSelectedService((event as CustomEvent<string>).detail);
    }

    window.addEventListener("select-service", onSelectService);
    return () => window.removeEventListener("select-service", onSelectService);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/agenda", {
        method: "POST",
        body: new FormData(form),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "No se pudo enviar la solicitud.");
      }
      setStatus("ok");
      form.reset();
      setSelectedService("");
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Error inesperado.");
    }
  }

  return (
    <section className="section" id="agendar">
      <div className="wrap form-in">
        <div className="form-side">
          <span className="kicker">Cuéntanos tu proyecto</span>
          <h2 className="section-title">Cuéntanos qué necesitas</h2>
          <p className="section-lead">
            Fotos del tablero o del empalme ayudan mucho. Evaluamos el costo
            sobre lo que envías, sin cobrar nada por esa primera evaluación.
          </p>
          <ul>
            <li>
              <Check />
              Te respondemos directamente con la evaluación de costo.
            </li>
            <li>
              <Check />
              Visita técnica en terreno solo si el proyecto lo amerita.
            </li>
            <li>
              <Check />
              Cotización clara, con alcance y plazos definidos.
            </li>
          </ul>

          <div className="contact-block">
            <div className="meta-row">
              <Dot />
              <span>
                <b>Directo con {site.owner.split(" ")[0]}</b>
                <a href={telHref}>{site.phone}</a>
              </span>
            </div>
            <div className="meta-row">
              <Dot />
              <span>
                <b>Correo</b>
                <a href={mailHref}>{site.email}</a>
              </span>
            </div>
            <div className="meta-row">
              <Dot />
              <span>
                <b>Taller / oficina</b>
                {site.address.street}, {site.address.city}
              </span>
            </div>
            {wa ? (
              <a
                className="btn btn-wa"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <form className="form-card" onSubmit={onSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="nombre">
                Nombre <b>*</b>
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="telefono">
                Teléfono <b>*</b>
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                placeholder="+56 9 ..."
                autoComplete="tel"
              />
            </div>
            <div className="field">
              <label htmlFor="correo">Correo</label>
              <input
                id="correo"
                name="correo"
                type="email"
                placeholder="correo@empresa.cl"
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="empresa">Empresa (si aplica)</label>
              <input id="empresa" name="empresa" placeholder="Nombre empresa" />
            </div>
            <div className="field">
              <label htmlFor="comuna">
                Comuna <b>*</b>
              </label>
              <input id="comuna" name="comuna" required placeholder="Comuna" />
            </div>
            <div className="field">
              <label htmlFor="direccion">Dirección del servicio</label>
              <input
                id="direccion"
                name="direccion"
                placeholder="Calle y número"
                autoComplete="street-address"
              />
            </div>
            <div className="field field-full">
              <label htmlFor="servicio">
                Tipo de servicio requerido <b>*</b>
              </label>
              <select
                id="servicio"
                name="servicio"
                required
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona un servicio
                </option>
                {site.services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
                <option value="Otro">Otro / no estoy seguro</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="fecha">Fecha tentativa</label>
              <input id="fecha" name="fecha" type="date" />
            </div>
            <div className="field">
              <label htmlFor="horario">Horario preferido</label>
              <select id="horario" name="horario" defaultValue="">
                <option value="" disabled>
                  Selecciona horario
                </option>
                <option>Mañana (9:00 – 13:00)</option>
                <option>Tarde (14:00 – 18:00)</option>
                <option>Indiferente</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="descripcion">Descripción del requerimiento</label>
              <textarea
                id="descripcion"
                name="descripcion"
                placeholder="Describe brevemente qué necesitas: tipo de instalación, problema actual, tamaño del proyecto, etc."
              />
            </div>
            {/* Campo trampa: invisible para una persona, tentador para
                un robot. Si llega con contenido, el servidor descarta. */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="empresa_web">No completar</label>
              <input
                id="empresa_web"
                name="empresa_web"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          </div>

          <p className="form-note">
            Te respondemos con la evaluación de costo. Si el proyecto lo
            amerita, coordinamos una visita técnica.
            {wa ? (
              <>
                {" "}
                ¿Tienes fotos del tablero o del empalme?{" "}
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  Mándalas por WhatsApp
                </a>{" "}
                y adelantamos el diagnóstico.
              </>
            ) : null}
          </p>

          <p className="form-legal">
            Al enviar aceptas que usemos estos datos para responder tu
            solicitud. Nada más. <a href="/privacidad">Cómo tratamos tus datos</a>.
          </p>

          <button
            className="btn btn-primary form-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Enviando..."
              : "Enviar solicitud de cotización"}
          </button>

          {status === "ok" ? (
            <p className="form-status ok" role="status">
              Solicitud recibida. Te contactaremos pronto con la evaluación de
              costo.
              {wa ? (
                <>
                  {" "}
                  Si prefieres, también puedes{" "}
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    escribirnos por WhatsApp
                  </a>
                  .
                </>
              ) : null}
            </p>
          ) : null}
          {status === "err" ? (
            <p className="form-status err" role="alert">
              {error} Inténtalo de nuevo
              {wa ? (
                <>
                  {" "}
                  o{" "}
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    contáctanos por WhatsApp
                  </a>
                </>
              ) : null}
              .
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
