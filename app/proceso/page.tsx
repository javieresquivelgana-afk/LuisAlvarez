import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Process from "@/components/Process";
import { site } from "@/site.config";

const crumbs = [{ href: "/proceso", label: "Cómo trabajamos" }];

export const metadata: Metadata = {
  title: `Cómo trabajamos — ${site.brand} ${site.brandSuffix}`,
  description:
    "Del primer contacto a la entrega: visita técnica en terreno, cotización con alcance definido, ejecución por instalador Clase A y cierre con pruebas de funcionamiento.",
  alternates: { canonical: "/proceso" },
};

const preparar = [
  "El plano o la dirección exacta del lugar, aunque sea aproximado.",
  "Qué equipos o cargas hay que alimentar, si ya están definidos.",
  "La potencia contratada actual, si la tienes a mano (aparece en la boleta).",
  "Fotos del tablero y del empalme: adelantan buena parte del diagnóstico.",
  "La fecha en que necesitas el trabajo terminado.",
];

const cierre = [
  {
    t: "La instalación probada",
    d: "Pruebas de funcionamiento con carga real, no solo continuidad de cables. Si algo no responde como debe, se corrige antes de la entrega.",
  },
  {
    t: "El tablero identificado",
    d: "Circuitos rotulados y protecciones reconocibles. Quien opere el lugar después tiene que poder entender el tablero sin llamar a nadie.",
  },
  {
    t: "En condiciones de declararse",
    d: "El trabajo se ejecuta para que la instalación pueda ser declarada ante la SEC bajo la responsabilidad del instalador Clase A a cargo.",
  },
  {
    t: "Lo pendiente, por escrito",
    d: "Si en el camino aparece algo fuera del alcance contratado, se informa y se separa de lo entregado. No se disfraza de trabajo terminado.",
  },
];

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProcesoPage() {
  return (
    <SitePage>
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Cómo trabajamos"
        title="Primero se mira la instalación, después se cotiza"
        lead="El orden no es un detalle: es lo que evita que el precio cambie a mitad de obra. Cuatro pasos, con la responsabilidad técnica siempre en la misma mano."
        media="planos"
        crumbs={crumbs}
      />
      <Process />

      <section className="section">
        <div className="wrap split">
          <div>
            <span className="kicker">Antes de la visita</span>
            <h2 className="section-title">
              Con esto en la mano, la visita rinde el doble
            </h2>
            <p className="section-lead">
              Nada de esto es obligatorio — si no lo tienes, se levanta en
              terreno. Pero mientras más claro llegue el requerimiento, más
              preciso sale el alcance.
            </p>
            <ul className="bullets">
              {preparar.map((p) => (
                <li key={p}>
                  <Check />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="cred-card">
            <div className="cred-row">
              <span>Paso 1</span>
              <b>Contacto y requerimiento</b>
            </div>
            <div className="cred-row">
              <span>Paso 2</span>
              <b>Visita técnica en terreno</b>
            </div>
            <div className="cred-row">
              <span>Paso 3</span>
              <b>Cotización con alcance</b>
            </div>
            <div className="cred-row">
              <span>Paso 4</span>
              <b>Ejecución y cierre</b>
            </div>
            <a className="btn btn-primary" href="/contacto">
              Partir por el paso 1
            </a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <span className="kicker">Al cierre</span>
          <h2 className="section-title">Qué queda cuando el trabajo termina</h2>
          <p className="section-lead">
            Una obra eléctrica no se cierra cuando enciende: se cierra cuando
            queda operable, entendible y en regla.
          </p>
          <div className="steps">
            {cierre.map((c) => (
              <div className="step" key={c.t}>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SitePage>
  );
}
