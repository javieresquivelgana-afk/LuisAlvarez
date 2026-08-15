import {
  site,
  fullAddress,
  mapsUrl,
  telHref,
  mailHref,
  instagramUrl,
} from "@/site.config";

const Pin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

const Phone = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 5c0-.6.4-1 1-1h3l1.6 4-2 1.4a13 13 0 006 6l1.4-2 4 1.6v3c0 .6-.4 1-1 1A15.5 15.5 0 014 5z" />
  </svg>
);

const Mail = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6 8.5-6" />
  </svg>
);

const Ig = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Coverage() {
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress,
  )}&z=13&output=embed`;

  return (
    <section className="section" id="cobertura">
      <div className="wrap coverage">
        <div>
          <span className="kicker">Cobertura</span>
          <h2 className="section-title">
            Base en {site.address.city}, obra donde el proyecto lo pida
          </h2>
          <p className="section-lead">
            La casa matriz está en el puerto de {site.address.city}, y desde
            ahí se atienden proyectos en {site.zones}. Si tu obra queda fuera de
            esa zona, escríbenos igual: se evalúa según el tamaño y el plazo del
            trabajo.
          </p>

          <div className="coverage-meta" style={{ borderTop: 0, padding: 0, marginTop: 28 }}>
            <div className="meta-row">
              <Pin />
              <span>
                <b>Dirección</b>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {site.address.street}, {site.address.city} —{" "}
                  {site.address.region}
                </a>
              </span>
            </div>
            <div className="meta-row">
              <Phone />
              <span>
                <b>Teléfono / WhatsApp</b>
                <a href={telHref}>{site.phone}</a>
              </span>
            </div>
            <div className="meta-row">
              <Mail />
              <span>
                <b>Correo</b>
                <a href={mailHref}>{site.email}</a>
              </span>
            </div>
            <div className="meta-row">
              <Ig />
              <span>
                <b>Instagram</b>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  @{site.instagram}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="coverage-card">
          <iframe
            src={embed}
            title={`Ubicación de ${site.legalName} en ${site.address.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="coverage-meta">
            <div className="meta-row">
              <Pin />
              <span>
                <b>Zona de atención</b>
                {site.zones}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
