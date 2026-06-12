import { waLink } from "@/site.config";

export default function FinalCTA() {
  return (
    <>
      <div className="hazard" aria-hidden="true" />
      <section className="final">
        <div className="wrap">
          <span className="kicker">Próximo paso</span>
          <h2>
            Agenda una visita técnica con un instalador eléctrico Clase A
          </h2>
          <p>
            Cuéntanos qué necesitas y coordinaremos una evaluación para tu
            proyecto eléctrico, mantención, empalme, red, sistema de fuerza o
            instalación fotovoltaica.
          </p>
          <div className="final-actions">
            <a className="btn btn-volt" href="#agendar">
              Agendar visita técnica
            </a>
            <a className="btn btn-wa" href={waLink()} target="_blank">
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
