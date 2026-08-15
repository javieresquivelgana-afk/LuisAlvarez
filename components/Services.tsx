"use client";

import { site } from "@/site.config";

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
    <path
      d="M2 6h8M7 3l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Services() {
  function selectService(service: string) {
    window.dispatchEvent(
      new CustomEvent("select-service", { detail: service }),
    );
  }

  return (
    <section className="section section-soft" id="servicios">
      <div className="wrap">
        <div className="services-head">
          <div>
            <span className="kicker">Servicios</span>
            <h2 className="section-title">
              Nueve frentes, un solo responsable técnico
            </h2>
            <p className="section-lead">
              Desde el proyecto de ingeniería hasta la ejecución, la mantención
              y la declaración de la instalación. Toca un servicio y queda
              precargado en el formulario de agenda.
            </p>
          </div>
          <a className="btn btn-outline" href="#agendar">
            Solicitar cotización
          </a>
        </div>

        <div className="services-grid">
          {site.services.map((s) => (
            <button
              type="button"
              className="service-card"
              key={s.id}
              onClick={() => {
                selectService(s.name);
                document
                  .getElementById("agendar")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="service-code">{s.code}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="service-link">
                Agendar este servicio
                <Arrow />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
