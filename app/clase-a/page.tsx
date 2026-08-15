import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import ClaseA from "@/components/ClaseA";
import TrustBar from "@/components/TrustBar";
import { site } from "@/site.config";

const crumbs = [{ href: "/clase-a", label: "Clase A" }];

export const metadata: Metadata = {
  title: `Instalador eléctrico Clase A — ${site.brand} ${site.brandSuffix}`,
  description:
    "Qué habilita la licencia Clase A del registro SEC de instaladores eléctricos, qué es la declaración TE1 y por qué la exigen los proyectos de empresas, edificios y locales comerciales.",
  alternates: { canonical: "/clase-a" },
};

const puntos = [
  {
    t: "Categorías del registro",
    d: "La SEC clasifica a los instaladores autorizados por categoría. Las categorías inferiores tienen límites de potencia y de tipo de instalación; la Clase A no los tiene: cubre baja y media tensión sin tope de potencia.",
  },
  {
    t: "Qué es declarar una instalación",
    d: "Es el trámite con el que la instalación queda registrada ante la SEC bajo la responsabilidad de un instalador autorizado. Sin esa declaración, muchas instalaciones no pueden energizarse formalmente ni recepcionarse.",
  },
  {
    t: "Por qué te la exigen",
    d: "Mandantes, administraciones de centros comerciales y compañías de seguro piden un responsable técnico identificable. La licencia es lo que permite que alguien responda con nombre por el trabajo ejecutado.",
  },
  {
    t: "Qué significa para tu obra",
    d: "Que el proyecto, la ejecución y la firma están en la misma mano. No hay que buscar después a alguien que declare un trabajo que no hizo.",
  },
];

export default function ClaseAPage() {
  return (
    <SitePage>
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Respaldo técnico"
        title="Qué significa contratar a un instalador Clase A"
        lead="La máxima categoría del registro de instaladores eléctricos autorizados de la SEC: sin límite de potencia, en baja y media tensión, con facultad para declarar la instalación."
        media="hero-tablero"
        crumbs={crumbs}
      />
      <TrustBar />
      <ClaseA />

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">En simple</span>
          <h2 className="section-title">
            Lo que hay que saber antes de firmar un contrato eléctrico
          </h2>
          <div className="sectors">
            {puntos.map((p, i) => (
              <article className="sector" key={p.t}>
                <span className="sector-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
