import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Faq from "@/components/Faq";
import { site } from "@/site.config";

const crumbs = [{ href: "/preguntas", label: "Preguntas frecuentes" }];

export const metadata: Metadata = {
  title: `Preguntas frecuentes — ${site.brand} ${site.brandSuffix}`,
  description:
    "Qué habilita la licencia Clase A, quién declara la instalación ante la SEC, cómo parte un proyecto y cómo se cotiza un trabajo eléctrico.",
  alternates: { canonical: "/preguntas" },
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

export default function PreguntasPage() {
  return (
    <SitePage path="/preguntas">
      <BreadcrumbLd items={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <PageHero
        kicker="Preguntas frecuentes"
        title="Lo que preguntan antes de contratar"
        lead="Licencia, declaración ante la SEC y cómo se cotiza. Si tu duda no está acá, se responde por WhatsApp."
        media="franja-subestacion"
        crumbs={crumbs}
      />
      <Faq full />
    </SitePage>
  );
}
