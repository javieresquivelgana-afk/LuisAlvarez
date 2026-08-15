import { site } from "@/site.config";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M2 8.5L6 12.5L14 3.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const items = [
  site.credential,
  "Declaración de instalaciones ante la SEC",
  "Baja y media tensión",
  "Empresas, edificios, locales y faenas",
  "Un solo responsable técnico por obra",
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
