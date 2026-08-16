"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Nombre base del archivo en /public/video (sin extensión ni sufijo). */
  name: string;
  className?: string;
  /** Texto alternativo para lectores de pantalla (el video es decorativo). */
  label?: string;
};

/**
 * Video decorativo que solo se descarga y reproduce cuando entra en
 * pantalla. Mientras tanto muestra su póster, así una visita que nunca
 * baja no paga el peso de los clips de abajo.
 *
 * Respeta `prefers-reduced-motion`: si el visitante pidió menos
 * movimiento, se queda en el póster y nunca carga el video.
 */
export default function LazyVideo({ name, className, label }: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  /** Igual que en el hero: si el navegador no deja reproducir, se
   *  muestra el fotograma en vez del botón de play de Safari. */
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const suffix = window.matchMedia("(max-width: 760px)").matches ? "-sm" : "";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSrc(`/video/${name}${suffix}.mp4`);
          else el.pause();
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  /**
   * La carga se dispara acá y no dentro del observador: con
   * `preload="none"` el navegador ignora la fuente hasta que se le pide
   * cargar, y pedirlo antes de que React pintara el `src` no hacía
   * nada. Por eso los encabezados interiores se quedaban en el póster.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    el.load();
    el.play().catch(() => setBlocked(true));

    // Safari puede aceptar play() y dejar el video quieto igual.
    const check = window.setTimeout(() => {
      if (el.paused) setBlocked(true);
    }, 3000);

    return () => window.clearTimeout(check);
  }, [src]);

  if (blocked) {
    return (
      <img
        className={className}
        src={`/img/${name}.webp`}
        alt={label ?? ""}
        aria-hidden={label ? undefined : true}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={`/img/${name}.webp`}
      src={src ?? undefined}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
