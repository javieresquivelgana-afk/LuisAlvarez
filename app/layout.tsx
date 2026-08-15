import type { Metadata, Viewport } from "next";
import { Archivo, Source_Sans_3 } from "next/font/google";
import { site, fullAddress } from "@/site.config";
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
    <html lang="es-CL" className={`${archivo.variable} ${sourceSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
