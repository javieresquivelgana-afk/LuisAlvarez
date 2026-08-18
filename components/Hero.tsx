"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site, waLink } from "@/site.config";

/**
 * Hero a pantalla completa: dos clips en loop continuo — torres y
 * líneas de media tensión, y campo de paneles fotovoltaicos. Se cruzan
 * por opacidad cada 15 s, que es lo que dura cada clip, así el corte
 * cae en el punto en que el video vuelve a empezar y no se nota.
 *
 * Ambos van mudos, sin controles y con póster para la primera pintura.
 * A pantallas chicas se les sirve la versión liviana (-sm): la
 * resolución se decide en el cliente con matchMedia — el atributo
 * `media` de <source> no es confiable dentro de <video>.
 */
const clips = [
  {
    src: "hero-lineas",
    tag: "Redes de baja y media tensión",
  },
  {
    src: "hero-solar",
    tag: "Generación fotovoltaica",
  },
];

const CLIP_MS = 15000;

const wa = waLink();

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [suffix, setSuffix] = useState<string | null>(null);
  /**
   * En móvil el segundo clip no se descarga de entrada: son casi dos
   * megas de datos para alguien que quizá solo quería el teléfono. Se
   * trae a los ocho segundos, cuando la visita ya demostró interés y
   * antes de que le toque aparecer.
   */
  const [segundoClip, setSegundoClip] = useState(true);
  /**
   * Safari en modo de bajo consumo bloquea la reproducción automática y
   * dibuja su propio botón de play encima del video. En vez de dejar
   * ese botón (que promete algo que el hero no es), se cambia el video
   * por su fotograma: el hero se ve como una foto y nada más.
   */
  const [blocked, setBlocked] = useState(false);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const movil = window.matchMedia("(max-width: 760px)").matches;
    setSuffix(movil ? "-sm" : "");
    if (!movil) return;

    setSegundoClip(false);
    const id = window.setTimeout(() => setSegundoClip(true), 8000);
    return () => window.clearTimeout(id);
  }, []);

  /**
   * Los dos clips corren siempre; el cambio es solo de opacidad.
   *
   * Antes se rebobinaba el clip entrante (`currentTime = 0`) y se le
   * pedía reproducir en ese instante: con el video recién cargándose,
   * el navegador mostraba el póster congelado hasta tener buffer. Se
   * veía trabado justo en el cruce. Ahora ambos arrancan al montar y
   * nunca se detienen, así el fundido siempre encuentra imagen viva.
   */
  useEffect(() => {
    if (suffix === null) return;

    const play = (v: HTMLVideoElement | null) => {
      if (!v || !v.src) return;
      v.play().catch(() => setBlocked(true));
    };

    videos.current.forEach(play);

    // Reintento tras la carga: iOS ignora play() antes de tener datos.
    const retry = window.setTimeout(() => videos.current.forEach(play), 1200);

    /* No basta con escuchar el rechazo de play(): en modo de bajo
       consumo Safari puede resolver la promesa y dejar el video igual
       de quieto. Se comprueba el resultado, que es lo que se ve. */
    const verify = window.setTimeout(() => {
      const primero = videos.current[0];
      if (primero && primero.paused) setBlocked(true);
    }, 3000);

    return () => {
      window.clearTimeout(retry);
      window.clearTimeout(verify);
    };
  }, [suffix, segundoClip]);

  const show = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % clips.length),
      CLIP_MS,
    );

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-video-layer" aria-hidden="true">
        {blocked
          ? clips.map((c, i) => (
              <img
                key={c.src}
                className={i === index ? "is-active" : ""}
                src={`/img/${c.src}.webp`}
                alt=""
              />
            ))
          : null}

        {clips.map((c, i) => (
          <video
            key={c.src}
            ref={(el) => {
              videos.current[i] = el;
            }}
            className={i === index ? "is-active" : ""}
            poster={`/img/${c.src}.webp`}
            src={
              suffix === null || (i > 0 && !segundoClip)
                ? undefined
                : `/video/${c.src}${suffix}.mp4`
            }
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            hidden={blocked}
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

        <h1>Ingeniería eléctrica para empresas y proyectos</h1>

        <p className="hero-sub">
          {site.legalName} — proyectos, redes, empalmes, mantenimiento y
          generación fotovoltaica, ejecutados y declarados por instalador
          eléctrico Clase A.
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
