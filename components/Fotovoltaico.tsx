import LazyVideo from "@/components/LazyVideo";

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

export default function Fotovoltaico() {
  return (
    <section className="section" id="fotovoltaico">
      <div className="wrap split">
        <div className="split-media">
          <LazyVideo name="solar-campo" />
          <span className="media-tag">Generación fotovoltaica</span>
        </div>

        <div>
          <span className="kicker">Energía propia</span>
          <h2 className="section-title">
            Paneles solares instalados por quien también hace la eléctrica
          </h2>
          <p className="section-lead">
            La instalación fotovoltaica se conecta a un tablero, un empalme y
            una instalación existente. Cuando el mismo instalador Clase A ve
            los dos lados, el sistema queda dimensionado con la realidad
            eléctrica del lugar y no con una planilla genérica.
          </p>

          <ul className="bullets">
            <li>
              <Check />
              Evaluación previa: consumo, techumbre o terreno y capacidad del
              empalme.
            </li>
            <li>
              <Check />
              Montaje completo: paneles, inversor, protecciones y conexión al
              tablero.
            </li>
            <li>
              <Check />
              Instalación ejecutada para quedar en regla y ser declarada.
            </li>
          </ul>

          <div className="hero-actions" style={{ margin: "28px 0 0" }}>
            <a className="btn btn-primary" href="/servicios/fotovoltaico">
              Ver el servicio fotovoltaico
            </a>
            <a className="btn btn-outline" href="/contacto?servicio=Generaci%C3%B3n%20fotovoltaica">
              Evaluar mi proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
