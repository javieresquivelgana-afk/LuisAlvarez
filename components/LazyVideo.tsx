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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const suffix = window.matchMedia("(max-width: 760px)").matches ? "-sm" : "";

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSrc(`/video/${name}${suffix}.mp4`);
            void el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return (
    <video
      ref={ref}
      className={className}
      poster={`/img/${name}.jpg`}
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
