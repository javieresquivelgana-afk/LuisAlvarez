import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { site, waLink, telHref } from "@/site.config";

export const metadata: Metadata = {
  title: `Página no encontrada — ${site.brand} ${site.brandSuffix}`,
  robots: { index: false, follow: true },
};

const salidas = [
  { href: "/servicios", label: "Los diez servicios" },
  { href: "/clase-a", label: "Qué es un instalador Clase A" },
  { href: "/contacto", label: "Agendar una visita técnica" },
];

export default function NotFound() {
  const wa = waLink();

  return (
    <SitePage cta={false}>
      <section className="section" style={{ paddingTop: 180 }}>
        <div className="wrap">
          <span className="kicker">Error 404</span>
          <h1 className="section-title">Esta página no existe</h1>
          <p className="section-lead">
            El enlace quedó viejo o la dirección tiene algo mal escrito. Lo que
            buscas probablemente esté acá abajo; si no, escríbenos y lo vemos.
          </p>

          <div className="explore-grid" style={{ marginTop: 40 }}>
            {salidas.map((s) => (
              <a className="explore-card" key={s.href} href={s.href}>
                <span className="explore-label">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="hero-actions" style={{ margin: "36px 0 0" }}>
            <a className="btn btn-primary" href={telHref}>
              Llamar {site.phone}
            </a>
            {wa ? (
              <a
                className="btn btn-outline"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
