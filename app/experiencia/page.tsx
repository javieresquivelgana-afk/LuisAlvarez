import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Experience from "@/components/Experience";
import VideoBand from "@/components/VideoBand";
import { site } from "@/site.config";

const ejecucion = [
  {
    t: "Reconocimiento del lugar",
    d: "Antes de mover un cable se levanta el estado real: tableros, empalme, canalizaciones existentes, accesos y horarios en que se puede intervenir.",
  },
  {
    t: "Programa de trabajo",
    d: "Se define qué se hace en cada jornada y qué obliga a cortar energía. Los cortes se acuerdan con la administración o la jefatura, no se avisan el mismo día.",
  },
  {
    t: "Ejecución por etapas",
    d: "La obra avanza en tramos cerrados para que el lugar siga operando entre una etapa y la siguiente, con el área de trabajo delimitada.",
  },
  {
    t: "Pruebas y entrega",
    d: "Pruebas de funcionamiento con carga real, tablero identificado y la instalación en condiciones de ser declarada ante la SEC.",
  },
];

const crumbs = [{ href: "/experiencia", label: "Experiencia" }];

export const metadata: Metadata = {
  title: `Experiencia y sectores — ${site.brand} ${site.brandSuffix}`,
  description:
    "Proyectos eléctricos para cadenas de alimentación, retail, empresas de servicios y plataformas de logística. Obras ejecutadas con la operación funcionando y respaldo de instalador Clase A.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperienciaPage() {
  return (
    <SitePage path="/experiencia">
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Experiencia"
        title="Obras hechas donde parar la operación no es opción"
        lead="Locales con fecha de apertura, cadenas con estándar propio y centros de operación que no pueden detenerse."
        media="obra"
        crumbs={crumbs}
      />
      <Experience />

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">En obra</span>
          <h2 className="section-title">
            Cómo entra una obra donde no se puede parar
          </h2>
          <p className="section-lead">
            La diferencia está en lo que se acuerda antes de empezar.
          </p>
          <div className="steps">
            {ejecucion.map((e) => (
              <div className="step" key={e.t}>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoBand />
    </SitePage>
  );
}
