import Image from "next/image";
import { site } from "@/site.config";

export default function Experience() {
  return (
    <section className="exp" id="experiencia">
      <div className="wrap exp-in">
        <div>
          <span className="kicker">Experiencia</span>
          <h2 className="section-title">
            Trayectoria en proyectos eléctricos comerciales
          </h2>
          <p className="section-lead">
            Proyectos eléctricos para empresas, edificios y locales
            comerciales: habilitaciones completas, redes, mantención y obras
            de fuerza para operaciones que no pueden detenerse.
          </p>

          <div className="exp-photo">
            <Image
              src="/img/planos.jpg"
              alt="Planos de un proyecto eléctrico sobre mesa de trabajo"
              width={1042}
              height={695}
              sizes="(max-width: 880px) 100vw, 42vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div>
          {site.showClientNames ? (
            <>
              <div className="clients-grid">
                {site.clients.map((c) => (
                  <div className="client" key={c}>
                    {c}
                  </div>
                ))}
                <div className="client">Y otros clientes comerciales</div>
              </div>
              <p className="exp-note">
                Proyectos ejecutados de forma directa o como parte de equipos
                de obra.
              </p>
            </>
          ) : (
            <>
              <ul className="sectors">
                {site.sectors.map((s) => (
                  <li className="sector" key={s.name}>
                    <h3>{s.name}</h3>
                    <p>{s.desc}</p>
                  </li>
                ))}
              </ul>
              <p className="exp-note">
                Proyectos ejecutados de forma directa o como parte de equipos
                de obra.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
