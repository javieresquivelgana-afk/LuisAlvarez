import { site, waLink } from "@/site.config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-mark">
                <span>LA</span>
              </span>
              <span className="logo-text">
                <span className="logo-name">{site.brand}</span>
                <span className="logo-sub">{site.brandSuffix}</span>
              </span>
            </a>
            <p>
              Servicios profesionales de ingeniería eléctrica para empresas,
              locales comerciales, edificios y proyectos. Instalador eléctrico
              Clase A.
            </p>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#servicios">Ingeniería eléctrica</a>
              </li>
              <li>
                <a href="#servicios">Redes BT / MT</a>
              </li>
              <li>
                <a href="#servicios">Mantenimiento eléctrico</a>
              </li>
              <li>
                <a href="#servicios">Empalmes eléctricos</a>
              </li>
              <li>
                <a href="#servicios">Paneles fotovoltaicos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={waLink()} target="_blank">
                  WhatsApp directo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Atención</h4>
            <ul>
              <li>{site.zones}</li>
              <li>
                <a href="#agendar">Agendar visita técnica</a>
              </li>
              <li>
                <a href="#agendar">Solicitar cotización</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.brand} — {site.brandSuffix}
          </span>
          <span>Instalador eléctrico Clase A</span>
        </div>
      </div>
    </footer>
  );
}
