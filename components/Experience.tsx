import { site } from "@/site.config";

export default function Experience() {
  return (
    <section className="section section-alt" id="experiencia">
      <div className="wrap exp-in">
        <div>
          <span className="kicker">Experiencia</span>
          <h2 className="section-title">
            Trayectoria en proyectos comerciales reales
          </h2>
          <p className="section-lead">
            Experiencia en proyectos eléctricos para empresas, edificios y
            locales comerciales: habilitaciones, redes, mantención y obras de
            fuerza ejecutadas para marcas y operaciones exigentes.
          </p>
        </div>

        <div>
          <div className="clients-grid">
            {site.clients.map((c) => (
              <div className="client reveal" key={c}>
                {c}
              </div>
            ))}
            <div className="client reveal">+ Clientes comerciales</div>
          </div>
          <p className="exp-note">
            // Proyectos ejecutados de forma directa o como parte de equipos
            de obra.
          </p>
        </div>
      </div>
    </section>
  );
}
