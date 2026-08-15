"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site, waLink } from "@/site.config";

/**
 * Hero a pantalla completa con secuencia de video.
 *
 * Cada clip corresponde a un frente real del servicio: trabajo sobre
 * tableros, redes de media tensión y generación fotovoltaica. Los clips
 * se cruzan por opacidad; el navegador solo mantiene 3 videos mudos,
 * en loop y sin controles, con póster para la primera pintura.
 *
 * Se sirve una versión liviana (-sm, 640px) a pantallas chicas: la
 * resolución se decide en el cliente con matchMedia — el atributo
 * `media` de <source> no es confiable dentro de <video>.
 */
const clips = [
  {
    src: "hero-tablero",
    alt: "Especialistas revisando tableros eléctricos en sala técnica",
    tag: "Tableros y salas eléctricas",
  },
  {
    src: "hero-lineas",
    alt: "Líneas y torres de media tensión al atardecer",
    tag: "Redes de baja y media tensión",
  },
  {
    src: "hero-solar",
    alt: "Instalación de paneles fotovoltaicos",
    tag: "Generación fotovoltaica",
  },
];

const CLIP_MS = 8000;

const wa = waLink();

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [suffix, setSuffix] = useState<string | null>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setSuffix(window.matchMedia("(max-width: 760px)").matches ? "-sm" : "");
  }, []);

  const show = useCallback((i: number) => {
    setIndex(i);
    const v = videos.current[i];
    if (v) {
      v.currentTime = 0;
      void v.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const id = window.setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % clips.length;
        const v = videos.current[next];
        if (v) {
          v.currentTime = 0;
          void v.play().catch(() => {});
        }
        return next;
      });
    }, CLIP_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-video-layer" aria-hidden="true">
        {clips.map((c, i) => (
          <video
            key={c.src}
            ref={(el) => {
              videos.current[i] = el;
            }}
            className={i === index ? "is-active" : ""}
            poster={`/img/${c.src}.jpg`}
            src={suffix === null ? undefined : `/video/${c.src}${suffix}.mp4`}
            autoPlay={i === 0}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
          />
        ))}
      </div>

      <div className="wrap hero-in">
        <span className="hero-badge">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor">
            <path d="M7.6 0L0 8.6h4.3L3.4 15 13 5.8H7.1L7.6 0z" />
          </svg>
          {site.credential} · SEC
        </span>

        <h1>
          Ingeniería eléctrica <em>de obra grande</em> para empresas y
          proyectos
        </h1>

        <p className="hero-sub">
          {site.legalName} Proyectos, redes de baja y media tensión, obras de
          fuerza, empalmes, mantenimiento y generación fotovoltaica —
          ejecutados y declarados por instalador eléctrico Clase A.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="/contacto">
            Agenda tu visita técnica
          </a>
          {wa ? (
            <a
              className="btn btn-ghost btn-lg"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a9.9 9.9 0 00-8.6 14.9L2 22l5.3-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.4-3c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a3 3 0 00-1 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3z" />
              </svg>
              Escribir por WhatsApp
            </a>
          ) : null}
        </div>

        <div className="hero-strip">
          <span>
            <b>Clase A</b> sin límite de potencia
          </span>
          <span>
            <b>BT y MT</b> redes, empalmes y fuerza
          </span>
          <span>
            <b>{site.address.city}</b> {site.address.region}
          </span>
        </div>
      </div>

      <div className="hero-dots">
        {clips.map((c, i) => (
          <button
            key={c.src}
            type="button"
            aria-current={i === index}
            aria-label={c.tag}
            onClick={() => show(i)}
          />
        ))}
      </div>
    </section>
  );
}
