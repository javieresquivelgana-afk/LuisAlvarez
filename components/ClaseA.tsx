import Image from "next/image";
import { hasLicencia, site, PENDIENTE } from "@/site.config";

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

export default function ClaseA() {
  return (
    <section className="section section-dark" id="clase-a">
      <div className="wrap split split-rev">
        <div>
          <span className="kicker">Respaldo técnico</span>
          <h2 className="section-title">
            Clase A: la categoría más alta del registro de instaladores
          </h2>
          <p className="section-lead">
            Habilita a proyectar, ejecutar y declarar instalaciones sin el
            límite de potencia de las categorías inferiores. Por eso es la que
            exigen empresas, edificios y locales comerciales.
          </p>

          <ul className="bullets">
            <li>
              <Check />
              Instalaciones sin límite de potencia, en baja y media tensión.
            </li>
            <li>
              <Check />
              Declaración TE1 de la instalación ante la SEC.
            </li>
            <li>
              <Check />
              Un solo responsable técnico por obra, con nombre y licencia.
            </li>
            <li>
              <Check />
              Cumplimiento normativo verificable ante mandantes y seguros.
            </li>
          </ul>

          <div className="hero-actions" style={{ margin: "30px 0 0" }}>
            <a className="link-arrow" href="/clase-a">
              Qué implica la licencia Clase A
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div>
          <div className="split-media" style={{ aspectRatio: "5 / 4" }}>
            <Image
              src="/img/obras/trabajo-media-tension.webp"
              alt="Técnico de A/Z con arnés trabajando en un poste de media tensión, junto a un transformador"
              width={1400}
              height={1050}
              sizes="(max-width: 880px) 100vw, 46vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className="media-tag">Trabajo propio en media tensión</span>
          </div>

          <div className="cred-card" style={{ marginTop: "18px" }}>
            <div className="cred-row">
              <span>Responsable técnico</span>
              <b>{site.owner}</b>
            </div>
            <div className="cred-row">
              <span>Registro SEC</span>
              <b>
                {hasLicencia ? (
                  `Clase A · N° ${site.claseA.licencia}`
                ) : (
                  <>
                    Clase A <span className="pendiente">{PENDIENTE}</span>
                  </>
                )}
              </b>
            </div>
            <div className="cred-row">
              <span>Razón social</span>
              <b>{site.legalName}</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
