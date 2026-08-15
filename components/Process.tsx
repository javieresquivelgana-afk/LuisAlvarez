import LazyVideo from "@/components/LazyVideo";

const steps = [
  {
    title: "Contacto y requerimiento",
    desc: "Nos escribes por WhatsApp o dejas la solicitud en el formulario con el tipo de servicio que necesitas.",
  },
  {
    title: "Visita técnica",
    desc: "Evaluación en terreno: estado de la instalación, potencia disponible y condiciones reales del lugar.",
  },
  {
    title: "Cotización con alcance",
    desc: "Propuesta con lo que se ejecuta, los materiales considerados y el plazo comprometido. Sin letra chica.",
  },
  {
    title: "Ejecución y cierre",
    desc: "Obra ejecutada por instalador Clase A, pruebas de funcionamiento y entrega en condiciones de ser declarada.",
  },
];

export default function Process() {
  return (
    <section className="section section-soft" id="proceso">
      <div className="wrap">
        <div className="split" style={{ alignItems: "start" }}>
          <div>
            <span className="kicker">Cómo trabajamos</span>
            <h2 className="section-title">
              Cuatro pasos, sin sorpresas a mitad de obra
            </h2>
            <p className="section-lead">
              Primero se mira la instalación, después se cotiza. Así el precio
              corresponde al trabajo y no a un supuesto.
            </p>
            <div className="hero-actions" style={{ margin: "28px 0 0" }}>
              <a className="link-arrow" href="/proceso">
                Ver el proceso completo
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
          <div className="split-media" style={{ aspectRatio: "16 / 10" }}>
            <LazyVideo name="planos" />
            <span className="media-tag">Proyecto y cálculo</span>
          </div>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
