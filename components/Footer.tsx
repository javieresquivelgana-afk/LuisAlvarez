import { LogoMark } from "@/components/Logo";
import {
  site,
  waLink,
  telHref,
  mailHref,
  instagramUrl,
  mapsUrl,
} from "@/site.config";

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = waLink();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo" aria-label="Inicio">
              <LogoMark />
              <span className="logo-text">
                <span className="logo-name">{site.brand}</span>
                <span className="logo-sub">{site.brandSuffix}</span>
              </span>
            </a>
            <p>
              {site.legalName}. Ingeniería eléctrica y electrónica para
              empresas, locales comerciales, edificios y faenas.{" "}
              {site.credential}.
            </p>
            <div className="footer-social">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram @${site.instagram}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a9.9 9.9 0 00-8.6 14.9L2 22l5.3-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 00-1 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
                  </svg>
                </a>
              ) : null}
              <a href={mailHref} aria-label="Correo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 6.5l8.5 6 8.5-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              {site.services.slice(0, 4).map((s) => (
                <li key={s.id}>
                  <a href={`/servicios/${s.id}`}>{s.name}</a>
                </li>
              ))}
              <li>
                <a href="/servicios">Ver los diez servicios</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href={telHref}>{site.phone}</a>
              </li>
              <li>
                <a href={mailHref}>{site.email}</a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{site.instagram}
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.address.street}, {site.address.city}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Atención</h4>
            <ul>
              <li>{site.zones}</li>
              <li>
                <a href="/contacto">Cuéntanos tu proyecto</a>
              </li>
              <li>
                <a href="/experiencia">Quiénes somos</a>
              </li>
              <li>
                <a href="/experiencia#mision-vision-valores">
                  Misión, Visión y Valores
                </a>
              </li>
              <li>
                <a href="/preguntas">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="/privacidad">Tratamiento de datos</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.legalName} — {site.owner}
          </span>
          <span>{site.credential} · {site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
