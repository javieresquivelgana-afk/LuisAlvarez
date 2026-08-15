import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import { ServicesGrid } from "@/components/Services";
import { site } from "@/site.config";

const crumbs = [{ href: "/servicios", label: "Servicios" }];

export const metadata: Metadata = {
  title: `Servicios eléctricos — ${site.brand} ${site.brandSuffix}`,
  description:
    "Ingeniería eléctrica, redes de baja y media tensión, obras de fuerza, mantenimiento, mejoramiento de líneas, empalmes BT/MT, generación fotovoltaica y proyectos para locales y edificios. Ejecutados por instalador Clase A.",
  alternates: { canonical: "/servicios" },
};

const criterios = [
  {
    t: "Se cotiza sobre lo que hay",
    d: "Ningún alcance se define por teléfono. Primero la visita técnica, después el precio: así el número corresponde al trabajo real y no a un supuesto.",
  },
  {
    t: "Un responsable, no una cadena",
    d: "El mismo instalador Clase A que proyecta es el que ejecuta y el que firma. No hay traspaso de responsabilidad entre subcontratos.",
  },
  {
    t: "La obra entra donde puede entrar",
    d: "Los trabajos se programan alrededor de la operación del cliente: horarios, cortes acotados y coordinación con administración u obra.",
  },
];

export default function ServiciosPage() {
  return (
    <SitePage path="/servicios">
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Servicios"
        title="Todo lo eléctrico de una obra, bajo una sola licencia"
        lead="Nueve líneas de trabajo: proyectar, ejecutar, energizar, mantener y dejar la instalación en condiciones de ser declarada."
        media="franja-subestacion"
        crumbs={crumbs}
      />

      <section className="section">
        <div className="wrap">
          <span className="kicker">Catálogo</span>
          <h2 className="section-title">Elige el frente que necesitas</h2>
          <p className="section-lead">
            Cada ficha trae el alcance del trabajo y cuándo hace falta.
          </p>
          <div style={{ marginTop: 38 }}>
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">Cómo se trabaja</span>
          <h2 className="section-title">
            Tres reglas que valen para los nueve servicios
          </h2>
          <div className="sectors sectors-3">
            {criterios.map((c, i) => (
              <article className="sector" key={c.t}>
                <span className="sector-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
