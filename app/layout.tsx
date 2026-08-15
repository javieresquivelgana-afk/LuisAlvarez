import type { Metadata, Viewport } from "next";
import { Inter_Tight, IBM_Plex_Sans, Public_Sans } from "next/font/google";
import { site, fullAddress } from "@/site.config";
import "./globals.css";

/**
 * Tres tipografías con un rol cada una:
 *
 *  - Titulares  → Inter Tight. Grotesca de caja alta y ajuste cerrado:
 *    dice lo suyo sin adornos y aguanta tamaños grandes sobre video.
 *  - Subtítulos → IBM Plex Sans. Nace en un contexto de ingeniería y
 *    lo transmite; se usa en antetítulos, subtítulos, botones,
 *    navegación y etiquetas de formulario.
 *  - Cuerpo     → Public Sans. Hecha para el sistema de diseño del
 *    gobierno de EE.UU., con criterios de legibilidad y accesibilidad;
 *    letras abiertas que se leen sin esfuerzo en párrafo largo.
 */
const titleFont = Inter_Tight({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-title",
  display: "swap",
});

const subFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sub",
  display: "swap",
});

const bodyFont = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const title = `${site.brand} ${site.brandSuffix} — ${site.credential} en ${site.address.city}`;
const description = `${site.legalName}: ingeniería eléctrica y electrónica para empresas, locales comerciales, edificios y faenas. Redes de baja y media tensión, obras de fuerza, empalmes, mantenimiento y generación fotovoltaica. ${site.credential}. ${fullAddress}.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://luis-alvarez.vercel.app"),
  title,
  description,
  applicationName: site.legalName,
  authors: [{ name: site.owner }],
  keywords: [
    "ingeniería eléctrica",
    "instalador eléctrico clase A",
    "electricista San Antonio",
    "empalmes eléctricos",
    "media tensión",
    "mantenimiento eléctrico",
    "paneles fotovoltaicos",
    "declaración SEC TE1",
    "Región de Valparaíso",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.legalName,
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10151f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${titleFont.variable} ${subFont.variable} ${bodyFont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
