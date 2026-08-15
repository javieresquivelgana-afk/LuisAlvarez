import LazyVideo from "@/components/LazyVideo";
import { site } from "@/site.config";

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="wrap">
        <span className="kicker">Experiencia</span>
        <h2 className="section-title">
          Proyectos ejecutados para operaciones que no pueden parar
        </h2>
        <p className="section-lead">
          Locales comerciales con fecha de apertura, cadenas con estándar
          propio, empresas de servicios y centros de operación. Cada frente
          tiene sus tiempos, sus exigencias de seguridad y su forma de
          recepcionar la obra.
        </p>

        <div className="sectors">
          {site.sectors.map((s, i) => (
            <article className="sector" key={s.name}>
              <span className="sector-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>

        {site.showClientNames ? (
          <div className="client-chips">
            {site.clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        ) : null}

        <div className="split" style={{ marginTop: "clamp(40px, 6vw, 72px)" }}>
          <div className="split-media">
            <LazyVideo name="obra" />
            <span className="media-tag">Trabajo en faena</span>
          </div>
          <div>
            <span className="kicker">En terreno</span>
            <h2 className="section-title">
              La obra se resuelve donde está el problema
            </h2>
            <p className="section-lead">
              Toda cotización parte con una visita técnica: estado real de la
              instalación, potencia disponible, condiciones del lugar y
              restricciones de la operación. Recién ahí se define alcance,
              materiales y plazo.
            </p>
            <ul className="bullets">
              <li>
                <Check />
                Levantamiento en terreno antes de comprometer alcance.
              </li>
              <li>
                <Check />
                Coordinación con administración, obra o arriendo del local.
              </li>
              <li>
                <Check />
                Trabajos programados para no detener la operación.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
