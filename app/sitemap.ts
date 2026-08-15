import type { MetadataRoute } from "next";
import { site } from "@/site.config";

const BASE = "https://luis-alvarez.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths = [
    "/",
    "/servicios",
    "/experiencia",
    "/clase-a",
    "/proceso",
    "/cobertura",
    "/preguntas",
    "/contacto",
    ...site.services.map((s) => `/servicios/${s.id}`),
  ];

  return paths.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.startsWith("/servicios/") ? 0.7 : 0.8,
  }));
}
