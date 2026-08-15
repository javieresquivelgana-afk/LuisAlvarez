import { ImageResponse } from "next/og";
import { site } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.legalName} — ${site.credential}`;

/** Imagen de previsualización para WhatsApp, LinkedIn y buscadores. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          background:
            "linear-gradient(135deg, #10151f 0%, #1a2434 55%, #24628b 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            <span>A</span>
            <span style={{ color: "#62c6f2", margin: "0 6px" }}>/</span>
            <span style={{ color: "#a9b4c0" }}>Z</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9fb0c0",
            }}
          >
            {site.brandSuffix}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 700, lineHeight: 1.05 }}>
            Ingeniería eléctrica para empresas y proyectos
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#c3d0dd" }}>
            {site.credential} · Baja y media tensión · Fotovoltaico
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9fb0c0",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 24,
          }}
        >
          <span>{site.phone}</span>
          <span>
            {site.address.city} · {site.address.region}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
