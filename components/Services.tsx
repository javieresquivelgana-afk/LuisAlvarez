"use client";

import { site } from "@/site.config";

/* Íconos lineales por servicio */
const icons: Record<string, React.ReactNode> = {
  ingenieria: (
    <path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" strokeLinejoin="round" />
  ),
  "redes-bt-mt": (
    <path
      d="M12 3v5m0 0l-6 5m6-5l6 5M6 13v8m12-8v8M3 21h18"
      strokeLinejoin="round"
    />
  ),
  fuerza: <path d="M13 2L5 13h6l-2 9 8-11h-6l2-9z" strokeLinejoin="round" />,
  mantenimiento: (
    <path
      d="M14.5 6.5a4 4 0 015 5L9 22l-4 1 1-4L16.5 8.5M14.5 6.5L17 4a3.5 3.5 0 014 4l-2.5 2.5"
      strokeLinejoin="round"
    />
  ),
  lineas: (
    <path d="M3 18c4-8 6-8 9-4s5 4 9-4M3 8h4M17 16h4" strokeLinecap="round" />
  ),
  empalmes: (
    <path
      d="M4 12h5m6 0h5M9 8v8m6-8v8M9 12a3 3 0 016 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  fotovoltaico: (
    <path
      d="M4 14h16l-2-8H6l-2 8zm4-8v8m8-8v8M4 10h16M12 14v5m-4 3h8"
      strokeLinejoin="round"
    />
  ),
  locales: (
    <path
      d="M4 9l2-5h12l2 5M4 9v11h16V9M4 9h16M10 20v-6h4v6"
      strokeLinejoin="round"
    />
  ),
  edificios: (
    <path
      d="M3 21h18M5 21V5l7-2v18m0 0V8l7 2v11M8 8h1m-1 4h1m-1 4h1m7-3h1m-1 4h1"
      strokeLinejoin="round"
    />
  ),
};

export default function Services() {
  function selectService(service: string) {
    window.dispatchEvent(
      new CustomEvent("select-service", { detail: service }),
    );
  }

  return (
    <section className="section section-soft" id="servicios">
      <div className="wrap">
        <span className="kicker">Servicios</span>
        <h2 className="section-title">Soluciones eléctricas completas</h2>
        <p className="section-lead">
          Desde el proyecto de ingeniería hasta la ejecución, mantención y
          puesta en marcha, con un solo responsable técnico para toda la
          instalación.
        </p>

        <div className="services-grid">
          {site.services.map((s) => (
            <article className="svc" key={s.id}>
              <span className="svc-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  {icons[s.id]}
                </svg>
              </span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <a
                className="svc-link"
                href="#agendar"
                onClick={() => selectService(s.name)}
              >
                Agendar servicio
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M7 3l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
