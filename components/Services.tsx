import { site } from "@/site.config";

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 6h8M7 3l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Grilla de servicios. Cada tarjeta lleva a su ficha en /servicios/<id>. */
export function ServicesGrid({
  exclude,
  limit,
}: {
  exclude?: string;
  /** Corta el listado — útil en las fichas, donde 8 tarjetas alargan de más. */
  limit?: number;
}) {
  const filtered = exclude
    ? site.services.filter((s) => s.id !== exclude)
    : site.services;
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="services-grid">
      {items.map((s) => (
        <a className="service-card" key={s.id} href={`/servicios/${s.id}`}>
          <span className="service-code">{s.code}</span>
          <h3>{s.name}</h3>
          <p>{s.desc}</p>
          <span className="service-link">
            Ver el servicio
            <Arrow />
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Services() {
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
              y la declaración de la instalación. Cada servicio tiene su ficha
              con alcance y casos concretos.
            </p>
          </div>
          <a className="btn btn-outline" href="/servicios">
            Ver todos los servicios
          </a>
        </div>

        <ServicesGrid />
      </div>
    </section>
  );
}
