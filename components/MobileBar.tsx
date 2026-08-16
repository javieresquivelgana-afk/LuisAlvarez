"use client";

import { site, waLink, telHref } from "@/site.config";

const wa = waLink();

/**
 * Barra fija de contacto en móvil. Reemplaza al botón flotante de
 * WhatsApp: en un oficio donde muchas consultas son urgentes, llamar y
 * escribir tienen que estar siempre a un toque, sin depender de dónde
 * quedó el scroll.
 */
export default function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="mobile-bar-call" href={telHref}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
          <path d="M4 5c0-.6.4-1 1-1h3l1.6 4-2 1.4a13 13 0 006 6l1.4-2 4 1.6v3c0 .6-.4 1-1 1A15.5 15.5 0 014 5z" />
        </svg>
        Llamar
      </a>

      {wa ? (
        <a
          className="mobile-bar-wa"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a9.9 9.9 0 00-8.6 14.9L2 22l5.3-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 00-1 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
          </svg>
          WhatsApp
        </a>
      ) : (
        <a className="mobile-bar-wa" href={`mailto:${site.email}`}>
          Escribir
        </a>
      )}
    </div>
  );
}
