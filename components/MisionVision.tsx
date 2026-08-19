import { site } from "@/site.config";

const items = [
  { t: "Misión", d: site.mision },
  { t: "Visión", d: site.vision },
  { t: "Propósito", d: site.proposito },
];

export default function MisionVision() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="kicker">Quiénes somos</span>
        <h2 className="section-title">Lo que nos guía en cada obra</h2>
        <div className="sectors sectors-3">
          {items.map((i) => (
            <article className="sector" key={i.t}>
              <span className="sector-num" />
              <h3>{i.t}</h3>
              <p>{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
