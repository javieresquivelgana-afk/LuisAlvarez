/** Recorrido del sitio: define el orden de anterior/siguiente. */
export const ORDER = [
  { href: "/servicios", label: "Servicios" },
  { href: "/clase-a", label: "Clase A" },
  { href: "/experiencia", label: "Quiénes somos" },
  { href: "/cobertura", label: "Cobertura" },
  { href: "/preguntas", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

const Chevron = ({ back = false }: { back?: boolean }) => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d={back ? "M10 6H2M5 3L2 6l3 3" : "M2 6h8M7 3l3 3-3 3"}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Pie de navegación: deja la página anterior y la siguiente a un clic,
 * para que se pueda recorrer el sitio sin volver al menú cada vez.
 */
export default function PageNav({ current }: { current: string }) {
  const i = ORDER.findIndex((p) => p.href === current);
  if (i === -1) return null;

  const prev = ORDER[i - 1];
  const next = ORDER[i + 1];

  return (
    <nav className="pagenav" aria-label="Páginas del sitio">
      <div className="wrap pagenav-in">
        {prev ? (
          <a className="pagenav-link" href={prev.href}>
            <span>Anterior</span>
            <b>
              <Chevron back />
              {prev.label}
            </b>
          </a>
        ) : (
          <span />
        )}

        {next ? (
          <a className="pagenav-link pagenav-next" href={next.href}>
            <span>Siguiente</span>
            <b>
              {next.label}
              <Chevron />
            </b>
          </a>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}
