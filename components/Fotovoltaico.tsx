import Image from "next/image";

const points = [
  {
    title: "Evaluación previa",
    desc: "Revisamos consumo, techumbre o terreno disponible y capacidad del empalme antes de proponer un sistema.",
  },
  {
    title: "Instalación completa",
    desc: "Montaje de paneles, inversor, protecciones y conexión al tablero, ejecutado por instalador Clase A.",
  },
  {
    title: "Integración con tu instalación",
    desc: "El sistema se conecta a la instalación existente, normalizando lo que sea necesario para que opere seguro.",
  },
];

export default function Fotovoltaico() {
  return (
    <section className="section fv" id="fotovoltaico">
      <div className="wrap fv-in">
        <div>
          <span className="kicker">Generación fotovoltaica</span>
          <h2 className="section-title">
            Paneles solares instalados por quien también hace la red
          </h2>
          <p className="section-lead">
            Un sistema fotovoltaico rinde según cómo esté conectado al resto
            de la instalación. Aquí el proyecto eléctrico y la instalación
            solar los ejecuta el mismo responsable técnico, sin coordinar dos
            contratistas distintos.
          </p>

          <ul className="fv-points">
            {points.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ul>

          <a className="btn btn-primary" href="#agendar">
            Evaluar un proyecto fotovoltaico
          </a>
        </div>

        <div className="fv-photo">
          <Image
            src="/img/fotovoltaico.jpg"
            alt="Paneles solares fotovoltaicos instalados"
            width={1042}
            height={695}
            sizes="(max-width: 880px) 100vw, 42vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
