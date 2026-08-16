import { ImageResponse } from "next/og";
import { site } from "@/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.id }));
}

export const alt = `Servicio eléctrico — ${site.legalName}`;

/**
 * Imagen de previsualización por servicio. Sin esto, una ficha
 * compartida por WhatsApp llegaba como un enlace gris — y es
 * justamente el enlace que se manda a un cliente que pregunta.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = site.services.find((s) => s.id === slug);

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
              fontSize: 54,
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
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9fb0c0",
            }}
          >
            Servicio {service?.code ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {service?.name ?? site.brandSuffix}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#c3d0dd", maxWidth: 950 }}>
            {service?.desc ?? ""}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 23,
            color: "#9fb0c0",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: 24,
          }}
        >
          <span>{site.credential}</span>
          <span>{site.phone}</span>
        </div>
      </div>
    ),
    size,
  );
}
