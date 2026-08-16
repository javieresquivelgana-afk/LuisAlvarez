"use client";

import { useState } from "react";
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

export default function Coverage({ bare = false }: { bare?: boolean }) {
  /* El visor de OpenStreetMap pesa 770 KB de código ajeno. Se carga
     solo si el visitante lo pide: hasta entonces se ve el encuadre
     estático de la zona, que es lo que la mayoría necesita. */
  const [verMapa, setVerMapa] = useState(false);

  /**
   * Mapa de la zona base, servido por OpenStreetMap: no necesita API key
   * ni cookies de terceros, y siempre carga (el embed de Google queda en
   * blanco cuando el navegador bloquea sus cookies).
   *
   * Se muestra el área de operación — provincia de San Antonio y borde
   * costero — y no un pin exacto: "Costanera del Mar" es una avenida
   * larga del litoral y la ubicación puntual está por confirmar con el
   * cliente. La dirección textual sí está a la izquierda, con enlace a
   * Google Maps para quien quiera navegar hasta allá.
   */
  const embed =
    "https://www.openstreetmap.org/export/embed.html?bbox=-71.72%2C-33.66%2C-71.48%2C-33.48&layer=mapnik";

  return (
    <section className="section" id="cobertura">
      <div className="wrap coverage">
        <div>
          {bare ? null : (
            <>
              <span className="kicker">Cobertura</span>
              <h2 className="section-title">
                Base en {site.address.city}, obra donde el proyecto lo pida
              </h2>
            </>
          )}
          <p className="section-lead">
            Casa matriz en el puerto de {site.address.city}. Se atienden
            proyectos en {site.zones}; fuera de esa zona, se evalúa caso a
            caso.
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
          {verMapa ? (
            <iframe
              src={embed}
              title={`Zona de operación de ${site.legalName}: ${site.address.city} y el litoral`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <button
              type="button"
              className="map-holder"
              onClick={() => setVerMapa(true)}
            >
              <span className="map-zone">
                <Pin />
                {site.address.city} · {site.address.region}
              </span>
              <span className="map-load">Ver el mapa</span>
            </button>
          )}
          <div className="coverage-meta">
            <div className="meta-row">
              <Pin />
              <span>
                <b>Zona de atención</b>
                {site.zones}
              </span>
            </div>
            <a
              className="btn btn-outline btn-sm"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
