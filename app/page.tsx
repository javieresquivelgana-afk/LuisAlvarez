import { site, fullAddress, instagramUrl } from "@/site.config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import VideoBand from "@/components/VideoBand";
import Explore from "@/components/Explore";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileBar from "@/components/MobileBar";

/**
 * Portada. Deliberadamente corta: qué se hace, con qué respaldo y cómo
 * seguir. El desarrollo de cada tema vive en su propia página —
 * /servicios, /clase-a, /experiencia, /preguntas
 * y /contacto — y se entra desde el bloque «Seguir mirando».
 *
 * Datos estructurados: solo datos reales, tomados de la tarjeta oficial
 * del cliente (ver site.config.ts).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: site.legalName,
  alternateName: `${site.brand} ${site.brandSuffix}`,
  founder: site.owner,
  description:
    "Ingeniería eléctrica y electrónica para empresas, edificios y locales comerciales: redes de baja y media tensión, obras de fuerza, mejoramiento de líneas, mantenimiento, empalmes BT/MT y generación fotovoltaica. Instalador eléctrico Clase A.",
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: "CL",
  },
  areaServed: site.zones.split(" y ").flatMap((z) => z.split(", ")),
  sameAs: [instagramUrl],
  hasCredential: site.credential,
  makesOffer: site.services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.name, description: s.desc },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <TrustBar />
        <Services />
        <VideoBand />
        <Explore />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBar />
      <span className="sr-only">{fullAddress}</span>
    </>
  );
}
