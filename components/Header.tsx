import { site, waLink } from "@/site.config";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-in">
        <a href="#" className="logo" aria-label="Inicio">
          <span className="logo-mark">LA</span>
          <span className="logo-text">
            <span className="logo-name">{site.brand}</span>
            <span className="logo-sub">{site.brandSuffix}</span>
          </span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proceso">Cómo trabajamos</a>
          <a href="#agendar">Agendar visita</a>
        </nav>

        <div className="header-cta">
          <a className="btn btn-ghost btn-sm" href={waLink()} target="_blank">
            WhatsApp
          </a>
          <a className="btn btn-volt btn-sm" href="#agendar">
            Agendar visita técnica
          </a>
        </div>
      </div>
    </header>
  );
}
