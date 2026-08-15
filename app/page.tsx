import { site, fullAddress, instagramUrl } from "@/site.config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import VideoBand from "@/components/VideoBand";
import Experience from "@/components/Experience";
import ClaseA from "@/components/ClaseA";
import Fotovoltaico from "@/components/Fotovoltaico";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import Faq from "@/components/Faq";
import AgendaForm from "@/components/AgendaForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/**
 * Datos estructurados para buscadores. Solo se declaran datos reales,
 * tomados de la tarjeta oficial del cliente (ver site.config.ts).
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: site.faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <VideoBand />
        <Experience />
        <ClaseA />
        <Fotovoltaico />
        <Process />
        <Coverage />
        <Faq />
        <AgendaForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <span className="sr-only">{fullAddress}</span>
    </>
  );
}
