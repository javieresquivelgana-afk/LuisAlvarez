import Image from "next/image";
import { hasLicencia, site, PENDIENTE } from "@/site.config";

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
            Clase A: la categoría más alta del registro de instaladores
          </h2>
          <p className="section-lead">
            La licencia Clase A es la máxima categoría del registro de
            instaladores eléctricos autorizados de la SEC. Es la que habilita
            a proyectar, ejecutar y declarar instalaciones sin las
            limitaciones de potencia que sí aplican a las categorías
            inferiores — por eso es la que exigen los proyectos de empresas,
            edificios y locales comerciales.
          </p>

          <div className="licencia">
            <span className="licencia-label">Licencia SEC de instalador</span>
            <span className="licencia-value">
              Clase A
              {hasLicencia ? (
                <span className="licencia-num">
                  N° {site.claseA.licencia}
                </span>
              ) : (
                <span className="pendiente">{PENDIENTE}</span>
              )}
            </span>
          </div>

          <ul className="clasea-points">
            <li>
              <Check />
              Instalaciones sin límite de potencia
            </li>
            <li>
              <Check />
              Declaración de instalaciones ante la SEC
            </li>
            <li>
              <Check />
              Un solo responsable técnico por obra
            </li>
            <li>
              <Check />
              Cumplimiento normativo verificable
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
