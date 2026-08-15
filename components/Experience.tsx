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
          Locales con fecha de apertura, cadenas con estándar propio y
          empresas de servicios. Cada frente tiene sus tiempos y su forma de
          recibir la obra.
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
              Toda cotización parte con una visita técnica. Recién ahí se
              define alcance, materiales y plazo.
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

            <div className="hero-actions" style={{ margin: "30px 0 0" }}>
              <a className="link-arrow" href="/experiencia">
                Ver experiencia y sectores
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
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
