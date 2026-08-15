import LazyVideo from "@/components/LazyVideo";
import { site, waLink } from "@/site.config";

type Crumb = { href: string; label: string };

type Props = {
  kicker: string;
  title: string;
  lead: string;
  /** Nombre base del clip de fondo en /public/video. */
  media: string;
  crumbs: Crumb[];
  /** CTA principal; por defecto lleva al formulario de contacto. */
  cta?: { href: string; label: string };
};

/**
 * Encabezado de las páginas interiores: mismo lenguaje que el hero de
 * la portada (video de fondo + velo grafito) pero a media altura, para
 * que el contenido de la página empiece sin hacer scroll.
 */
export default function PageHero({
  kicker,
  title,
  lead,
  media,
  crumbs,
  cta,
}: Props) {
  const wa = waLink();

  return (
    <section className="phero">
      <LazyVideo name={media} />

      <div className="wrap phero-in">
        <nav className="crumbs" aria-label="Ruta de navegación">
          <a href="/">Inicio</a>
          {crumbs.map((c, i) => (
            <span key={c.href}>
              <span aria-hidden="true">/</span>
              {i === crumbs.length - 1 ? (
                <b aria-current="page">{c.label}</b>
              ) : (
                <a href={c.href}>{c.label}</a>
              )}
            </span>
          ))}
        </nav>

        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="phero-lead">{lead}</p>

        <div className="hero-actions">
          <a className="btn btn-primary" href={cta?.href ?? "/contacto"}>
            {cta?.label ?? "Agenda tu visita técnica"}
          </a>
          {wa ? (
            <a
              className="btn btn-ghost"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {site.phone}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
