import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-in">
        <div>
          <span className="kicker">Instalador eléctrico Clase A</span>

          <h1>
            Ingeniería eléctrica profesional para empresas, locales
            comerciales y proyectos
          </h1>

          <p className="hero-sub">
            Servicios de redes de baja y media tensión, fuerza, mantenimiento
            eléctrico, empalmes y proyectos fotovoltaicos, liderados por
            instalador eléctrico Clase A.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#agendar">
              Agenda tu visita técnica
            </a>
          </div>

          <div className="hero-facts">
            <div className="fact">
              <b>Baja y media tensión</b>
              <span>Redes, empalmes y obras de fuerza</span>
            </div>
            <div className="fact">
              <b>Licencia Clase A</b>
              <span>Máxima categoría de instalador</span>
            </div>
            <div className="fact">
              <b>Foco comercial</b>
              <span>Empresas, edificios y locales</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <Image
              src="/img/hero-lineas.jpg"
              alt="Líneas de transmisión eléctrica de media tensión"
              fill
              priority
              sizes="(max-width: 880px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
