import { site } from "@/site.config";

export default function Faq({ full = false }: { full?: boolean }) {
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

        <div className="hero-actions" style={{ margin: "34px 0 0" }}>
          {full ? null : (
            <a className="link-arrow" href="/preguntas">
              Ver todas las preguntas
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          )}
          <a className="btn btn-primary" href="/contacto">
            Hacer mi consulta
          </a>
        </div>
      </div>
    </section>
  );
}
