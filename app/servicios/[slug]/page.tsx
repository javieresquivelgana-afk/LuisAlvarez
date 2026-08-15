import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import LazyVideo from "@/components/LazyVideo";
import { ServicesGrid } from "@/components/Services";
import { site, waLink } from "@/site.config";

type Params = { params: Promise<{ slug: string }> };

const find = (slug: string) => site.services.find((s) => s.id === slug);

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = find(slug);
  if (!service) return {};

  return {
    title: `${service.name} — ${site.brand} ${site.brandSuffix}`,
    description: `${service.desc} Servicio ejecutado por instalador eléctrico Clase A en ${site.zones}.`,
    alternates: { canonical: `/servicios/${service.id}` },
    openGraph: {
      title: `${service.name} — ${site.legalName}`,
      description: service.desc,
      url: `/servicios/${service.id}`,
    },
  };
}

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const service = find(slug);
  if (!service) notFound();

  const crumbs = [
    { href: "/servicios", label: "Servicios" },
    { href: `/servicios/${service.id}`, label: service.name },
  ];

  const contactHref = `/contacto?servicio=${encodeURIComponent(service.name)}`;
  const wa = waLink(
    `Hola, vengo del sitio web. Necesito cotizar: ${service.name}.`,
  );

  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.desc,
    serviceType: service.name,
    areaServed: site.zones,
    provider: {
      "@type": "Electrician",
      name: site.legalName,
      telephone: site.phone,
      email: site.email,
    },
  };

  return (
    <SitePage>
      <BreadcrumbLd items={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />

      <PageHero
        kicker={`Servicio ${service.code}`}
        title={service.name}
        lead={service.desc}
        media={service.media}
        crumbs={crumbs}
        cta={{ href: contactHref, label: "Cotizar este servicio" }}
      />

      <section className="section">
        <div className="wrap split">
          <div className="split-media">
            <LazyVideo name={service.media} />
            <span className="media-tag">{service.name}</span>
          </div>

          <div>
            <span className="kicker">En qué consiste</span>
            <h2 className="section-title">Qué resuelve este servicio</h2>
            <p className="section-lead">{service.intro}</p>

            <h3 style={{ marginTop: 32, fontSize: 20 }}>Qué incluye</h3>
            <ul className="bullets">
              {service.incluye.map((i) => (
                <li key={i}>
                  <Check />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">Cuándo se necesita</span>
          <h2 className="section-title">
            Señales de que este trabajo ya no puede esperar
          </h2>
          <div className="sectors sectors-3">
            {service.cuando.map((c, i) => (
              <article className="sector" key={c}>
                <span className="sector-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{c}</p>
              </article>
            ))}
          </div>

          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <a className="btn btn-primary" href={contactHref}>
              Solicitar visita técnica
            </a>
            {wa ? (
              <a
                className="btn btn-outline"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar por WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="kicker">Otros servicios</span>
          <h2 className="section-title">Lo demás que resuelve el mismo equipo</h2>
          <div style={{ marginTop: 34 }}>
            <ServicesGrid exclude={service.id} limit={3} />
          </div>

          <div className="hero-actions" style={{ marginBottom: 0 }}>
            <a className="btn btn-outline" href="/servicios">
              Ver los nueve servicios
            </a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
