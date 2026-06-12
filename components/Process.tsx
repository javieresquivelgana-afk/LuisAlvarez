const steps = [
  {
    title: "Envías tu solicitud",
    desc: "Completas el formulario o escribes por WhatsApp con tu requerimiento.",
  },
  {
    title: "Coordinamos la visita",
    desc: "Te contactamos para confirmar día y hora de la visita técnica.",
  },
  {
    title: "Evaluamos en terreno",
    desc: "Revisamos la instalación y levantamos el requerimiento técnico.",
  },
  {
    title: "Recibes tu cotización",
    desc: "Te enviamos una propuesta clara con alcance, plazos y valores.",
  },
  {
    title: "Ejecutamos el trabajo",
    desc: "Realizamos la obra con materiales adecuados y estándar profesional.",
  },
  {
    title: "Revisión final y cierre",
    desc: "Verificamos el funcionamiento y entregamos el trabajo operativo.",
  },
];

export default function Process() {
  return (
    <section className="section section-soft" id="proceso">
      <div className="wrap">
        <span className="kicker">Cómo trabajamos</span>
        <h2 className="section-title">Un proceso claro, de principio a fin</h2>
        <p className="section-lead">
          Sabes en qué etapa está tu proyecto en todo momento, desde la
          solicitud hasta la entrega final.
        </p>

        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
