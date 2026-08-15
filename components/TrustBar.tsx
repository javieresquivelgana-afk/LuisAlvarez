import { site } from "@/site.config";

const items = [
  site.credential,
  "Baja y media tensión",
  "Un solo responsable por obra",
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
