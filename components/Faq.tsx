import { site } from "@/site.config";

export default function Faq() {
  return (
    <section className="section section-soft" id="preguntas">
      <div className="wrap">
        <span className="kicker">Preguntas frecuentes</span>
        <h2 className="section-title">Lo que preguntan antes de contratar</h2>

        <div className="faq">
          {site.faq.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
