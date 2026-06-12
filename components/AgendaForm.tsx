"use client";

import { useState } from "react";
import { site, waLink } from "@/site.config";

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

export default function AgendaForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

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
    } catch (err) {
      setStatus("err");
      setError(err instanceof Error ? err.message : "Error inesperado.");
    }
  }

  return (
    <section className="section section-alt" id="agendar">
      <div className="wrap form-in">
        <div className="form-side">
          <span className="kicker">Agenda tu visita</span>
          <h2 className="section-title">Solicita una visita técnica</h2>
          <p className="section-lead">
            Cuéntanos qué necesitas y coordinaremos una evaluación en terreno
            para tu proyecto o instalación.
          </p>
          <ul>
            <li>
              <Check />
              Respuesta por WhatsApp o llamada para confirmar la visita.
            </li>
            <li>
              <Check />
              Evaluación técnica del requerimiento en terreno.
            </li>
            <li>
              <Check />
              Cotización clara, con alcance y plazos definidos.
            </li>
          </ul>
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
              <select id="servicio" name="servicio" required defaultValue="">
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
            <div className="field field-full">
              <label htmlFor="fotos">Adjuntar fotos (opcional)</label>
              <input
                id="fotos"
                name="fotos"
                type="file"
                accept="image/*"
                multiple
              />
            </div>
          </div>

          <p className="form-note">
            Una vez enviada la solicitud, nos contactaremos para confirmar la
            visita técnica por WhatsApp o llamada.
          </p>

          <button
            className="btn btn-volt form-submit"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Enviando..."
              : "Enviar solicitud de agenda"}
          </button>

          {status === "ok" && (
            <p className="form-status ok" role="status">
              ✓ Solicitud recibida. Te contactaremos pronto para confirmar la
              visita. Si prefieres, también puedes{" "}
              <a href={waLink()} target="_blank">
                escribirnos por WhatsApp
              </a>
              .
            </p>
          )}
          {status === "err" && (
            <p className="form-status err" role="alert">
              {error} Inténtalo de nuevo o{" "}
              <a href={waLink()} target="_blank">
                contáctanos por WhatsApp
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
