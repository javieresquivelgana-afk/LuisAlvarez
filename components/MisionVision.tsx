import { site } from "@/site.config";

const items = [
  { t: "Misión", d: site.mision },
  { t: "Visión", d: site.vision },
  { t: "Valores", d: site.proposito },
];

export default function MisionVision() {
  return (
    <section className="section" id="mision-vision-valores">
      <div className="wrap">
        <span className="kicker">Quiénes somos</span>
        <h2 className="section-title">Misión, Visión y Valores</h2>
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
