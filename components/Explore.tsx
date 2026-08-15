import { site } from "@/site.config";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M2 6h8M7 3l3 3-3 3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Puerta de entrada al resto del sitio. La portada muestra lo esencial;
 * cada tema completo vive en su propia página y se entra desde acá.
 */
const destinos = [
  {
    href: "/servicios",
    label: "Servicios",
    desc: "Las nueve líneas de trabajo, cada una con su ficha: alcance, qué incluye y cuándo se necesita.",
  },
  {
    href: "/clase-a",
    label: "Clase A",
    desc: "Qué habilita la licencia, qué es declarar una instalación y por qué te la exigen.",
  },
  {
    href: "/experiencia",
    label: "Experiencia",
    desc: "Los sectores donde se ha trabajado y cómo se ejecuta con la operación funcionando.",
  },
  {
    href: "/proceso",
    label: "Cómo trabajamos",
    desc: "Del primer contacto a la entrega: visita técnica, cotización con alcance y ejecución.",
  },
  {
    href: "/cobertura",
    label: "Cobertura",
    desc: `Base en ${site.address.city} y zona de atención declarada, con la dirección en el mapa.`,
  },
  {
    href: "/preguntas",
    label: "Preguntas frecuentes",
    desc: "Licencia, declaración ante la SEC, cómo parte un proyecto y qué se necesita para cotizar.",
  },
];

export default function Explore() {
  return (
    <section className="section" id="explorar">
      <div className="wrap">
        <span className="kicker">Seguir mirando</span>
        <h2 className="section-title">Lo demás, con el detalle completo</h2>
        <p className="section-lead">
          Esta portada muestra lo esencial. Cada tema tiene su propia página,
          sin resúmenes a medias.
        </p>

        <div className="explore-grid">
          {destinos.map((d) => (
            <a className="explore-card" key={d.href} href={d.href}>
              <span className="explore-label">
                {d.label}
                <Arrow />
              </span>
              <p>{d.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
