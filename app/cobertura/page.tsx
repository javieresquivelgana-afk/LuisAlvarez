import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Coverage from "@/components/Coverage";
import { site, fullAddress } from "@/site.config";

const crumbs = [{ href: "/cobertura", label: "Cobertura" }];

export const metadata: Metadata = {
  title: `Cobertura y contacto — ${site.brand} ${site.brandSuffix}`,
  description: `Electricista Clase A con base en ${site.address.city}, ${site.address.region}. Zona de atención: ${site.zones}. ${fullAddress}.`,
  alternates: { canonical: "/cobertura" },
};

const modos = [
  {
    t: "Obra en la zona",
    d: "Proyectos en la provincia de San Antonio y el litoral: visita técnica, ejecución y seguimiento sin costo de traslado que distorsione el presupuesto.",
  },
  {
    t: "Obra en la región",
    d: "Trabajos en la Región de Valparaíso y la Región Metropolitana, programados por jornada completa para aprovechar cada viaje.",
  },
  {
    t: "Fuera de zona",
    d: "Se evalúa caso a caso según el tamaño y el plazo del trabajo. Si no es viable, se dice de frente en vez de encarecer la cotización.",
  },
];

export default function CoberturaPage() {
  return (
    <SitePage path="/cobertura">
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Cobertura"
        title={`Base en ${site.address.city}, obra donde el proyecto lo pida`}
        lead={`Casa matriz en ${site.address.city}. Zona de atención: ${site.zones}.`}
        media="hero-lineas"
        crumbs={crumbs}
        cta={{ href: "/contacto", label: "Consultar por mi zona" }}
      />
      <Coverage bare />

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">Cómo se atiende</span>
          <h2 className="section-title">Tres formas según dónde esté la obra</h2>
          <div className="sectors sectors-3">
            {modos.map((m, i) => (
              <article className="sector" key={m.t}>
                <span className="sector-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
