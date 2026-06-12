const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const items = [
  "Instalador eléctrico Clase A",
  "Experiencia en proyectos comerciales",
  "Baja y media tensión",
  "Empresas, edificios y locales",
  "Atención técnica profesional",
];

export default function TrustBar() {
  return (
    <div className="trust">
      <div className="wrap trust-in">
        {items.map((t) => (
          <span className="trust-item" key={t}>
            <Check />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
