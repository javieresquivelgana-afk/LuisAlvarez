import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
  themeColor: "#0b1118",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
