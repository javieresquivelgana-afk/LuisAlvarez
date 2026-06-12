import Image from "next/image";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ClaseA() {
  return (
    <section className="section" id="clase-a">
      <div className="wrap clasea-in">
        <div className="clasea-photo">
          <Image
            src="/img/tecnico.jpg"
            alt="Electricista trabajando en una instalación"
            width={1042}
            height={695}
            sizes="(max-width: 880px) 100vw, 42vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div>
          <span className="kicker">Respaldo técnico</span>
          <h2 className="section-title">
            Servicio liderado por instalador eléctrico Clase A
          </h2>
          <p className="section-lead">
            Con experiencia en proyectos eléctricos comerciales, redes,
            empalmes, mantención e instalaciones profesionales. Cada trabajo
            se ejecuta con seguridad, cumplimiento normativo y respaldo
            técnico en todas sus etapas.
          </p>
          <ul className="clasea-points">
            <li>
              <Check />
              Seguridad en cada intervención
            </li>
            <li>
              <Check />
              Cumplimiento normativo
            </li>
            <li>
              <Check />
              Conocimiento técnico especializado
            </li>
            <li>
              <Check />
              Respaldo profesional
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
