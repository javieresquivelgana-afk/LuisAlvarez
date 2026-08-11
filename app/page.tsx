import { site, hasPhone, hasEmail, hasZones } from "@/site.config";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import ClaseA from "@/components/ClaseA";
import Fotovoltaico from "@/components/Fotovoltaico";
import Process from "@/components/Process";
import AgendaForm from "@/components/AgendaForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

/**
 * Datos estructurados para buscadores. Solo se declaran datos reales:
 * teléfono, correo y zona de atención quedan fuera hasta que el cliente
 * los entregue (ver site.config.ts).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: `${site.brand} — ${site.brandSuffix}`,
  description:
    "Ingeniería eléctrica para empresas, edificios y locales comerciales: redes de baja y media tensión, obras de fuerza, mejoramiento de líneas, mantenimiento, empalmes BT/MT y generación fotovoltaica. Instalador eléctrico Clase A.",
  ...(hasPhone ? { telephone: site.phone } : {}),
  ...(hasEmail ? { email: site.email } : {}),
  ...(hasZones ? { areaServed: site.zones } : {}),
  hasCredential: "Instalador Eléctrico Clase A",
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
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Experience />
        <ClaseA />
        <Fotovoltaico />
        <Process />
        <AgendaForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
