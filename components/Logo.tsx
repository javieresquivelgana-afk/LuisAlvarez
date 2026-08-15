import { site } from "@/site.config";

/**
 * Logotipo A/Z — reconstrucción vectorial del isotipo de la tarjeta
 * de presentación: "A" en grafito, rayo, "Z" en plata.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "logo-mark"}
      viewBox="0 0 120 64"
      role="img"
      aria-label="A/Z"
      fill="none"
    >
      <path
        d="M2 60 L26 4 h14 l24 56 H50 L45.5 48 H20.5 L16 60 Z M25 36 h16 l-8-21 z"
        fill="currentColor"
      />
      <path
        d="M70 4 h48 v11 L88.5 49 H118 v11 H68 V49 L97.5 15 H70 Z"
        fill="var(--az-silver, #a9b4c0)"
      />
      <path
        d="M64 0 L50 30 h10 L54 64 L74 26 H62 L72 0 Z"
        fill="var(--az-volt, #2e7cb0)"
      />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="logo" aria-label={`${site.legalName} — inicio`}>
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">{site.legalName.replace(" Ltda.", "")}</span>
        <span className="logo-sub">
          {light ? site.credential : site.tagline}
        </span>
      </span>
    </a>
  );
}
