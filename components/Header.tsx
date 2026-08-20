"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { site, waLink, telHref } from "@/site.config";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/experiencia", label: "Quiénes somos" },
  { href: "/clase-a", label: "Clase A" },
  { href: "/preguntas", label: "Preguntas frecuentes" },
];

const wa = waLink();

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /** Marca la sección donde está el visitante, fichas de servicio incluidas. */
  const isCurrent = (href: string) =>
    href === pathname || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`header ${solid ? "header-solid" : "header-top"}`}
        data-open={open}
      >
        <div className="wrap header-in">
          <Logo />

          <nav className="nav" aria-label="Navegación principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={isCurrent(l.href) ? "page" : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-cta">
            <a className="header-phone" href={telHref}>
              {site.phone}
            </a>
            <a className="btn btn-primary btn-sm" href="/contacto">
              Cotizar
            </a>
            <button
              className="menu-btn"
              type="button"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                {open ? (
                  <path
                    d="M2 2l16 10M18 2L2 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M0 1h20M0 7h20M0 13h20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={isCurrent(l.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={telHref} onClick={() => setOpen(false)}>
            Llamar {site.phone}
          </a>
          {wa ? (
            <a
              className="btn btn-wa"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          ) : null}
          <a
            className="btn btn-primary"
            href="/contacto"
            onClick={() => setOpen(false)}
          >
            Cuéntanos tu proyecto
          </a>
        </div>
      ) : null}
    </>
  );
}
