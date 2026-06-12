import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — ${site.brandSuffix} | Instalador Eléctrico Clase A`,
  description:
    "Servicios de ingeniería eléctrica para empresas, locales comerciales y edificios: redes de baja y media tensión, obras de fuerza, mantenimiento, empalmes y proyectos fotovoltaicos. Agenda una visita técnica.",
  keywords: [
    "ingeniería eléctrica",
    "instalador eléctrico clase A",
    "empalmes eléctricos",
    "mantenimiento eléctrico",
    "paneles fotovoltaicos",
    "proyectos eléctricos",
    "Chile",
  ],
  openGraph: {
    title: `${site.brand} — ${site.brandSuffix}`,
    description:
      "Ingeniería eléctrica profesional para empresas, locales comerciales y proyectos. Instalador eléctrico Clase A.",
    locale: "es_CL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#13304e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
