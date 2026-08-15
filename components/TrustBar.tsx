import { site } from "@/site.config";

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
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
