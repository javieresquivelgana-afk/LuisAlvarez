import Image from "next/image";
import { site } from "@/site.config";

/**
 * Galería de obras propias. Se alimenta de `site.obras`; mientras esté
 * vacío no se renderiza nada, así el sitio nunca muestra un hueco
 * esperando fotos.
 *
 * Las imágenes pasan por next/image: se sirven en el tamaño que pide
 * cada pantalla y en formato moderno, sin trabajo extra al subirlas.
 */
export default function Obras() {
  if (site.obras.length === 0) return null;

  return (
    <section className="section section-soft" id="obras">
      <div className="wrap">
        <span className="kicker">Obras propias</span>
        <h2 className="section-title">Trabajos ejecutados por A/Z</h2>
        <p className="section-lead">
          Fotos de faenas reales: tableros armados en taller, montajes en
          altura y puestas a tierra en terreno.
        </p>

        <div className="obras-grid">
          {site.obras.map((o) => (
            <figure className="obra" key={o.archivo}>
              <div className="obra-media">
                <Image
                  src={`/img/obras/${o.archivo}`}
                  alt={o.alt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <figcaption>{o.pie}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
