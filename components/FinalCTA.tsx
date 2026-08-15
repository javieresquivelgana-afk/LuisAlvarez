import LazyVideo from "@/components/LazyVideo";
import { site, waLink, telHref } from "@/site.config";

export default function FinalCTA() {
  const wa = waLink(
    "Hola, necesito cotizar un trabajo eléctrico. ¿Podemos coordinar una visita técnica?",
  );

  return (
    <section className="final">
      <LazyVideo name="hero-lineas" />
      <div className="wrap final-in">
        <span className="kicker">{site.credential}</span>
        <h2>¿Tienes un proyecto eléctrico entre manos?</h2>
        <p>
          Cuéntanos qué necesitas y coordinamos la visita técnica. Cotización
          con alcance definido, ejecutada y declarada por instalador Clase A.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary btn-lg" href="/contacto">
            Agendar visita técnica
          </a>
          {wa ? (
            <a
              className="link-arrow"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {site.phone}
            </a>
          ) : (
            <a className="link-arrow" href={telHref}>
              Llamar {site.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
