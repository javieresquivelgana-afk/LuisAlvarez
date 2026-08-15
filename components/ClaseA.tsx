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
            La licencia Clase A es la máxima categoría del registro de
            instaladores eléctricos autorizados de la SEC. Habilita a
            proyectar, ejecutar y declarar instalaciones sin las limitaciones
            de potencia que sí aplican a las categorías inferiores — por eso es
            la que exigen los proyectos de empresas, edificios y locales
            comerciales.
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
        </div>

        <div>
          <div className="split-media" style={{ aspectRatio: "5 / 4" }}>
            <Image
              src="/img/tecnico.jpg"
              alt="Electricista trabajando en una instalación"
              width={1042}
              height={695}
              sizes="(max-width: 880px) 100vw, 46vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className="media-tag">Ejecución certificada</span>
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
