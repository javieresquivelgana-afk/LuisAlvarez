import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import AgendaForm from "@/components/AgendaForm";
import Coverage from "@/components/Coverage";
import { site, fullAddress } from "@/site.config";

const crumbs = [{ href: "/contacto", label: "Contacto" }];

export const metadata: Metadata = {
  title: `Contacto y visita técnica — ${site.brand} ${site.brandSuffix}`,
  description: `Agenda una visita técnica con ${site.legalName}. Teléfono y WhatsApp ${site.phone} · ${site.email} · ${fullAddress}.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <SitePage cta={false} path="/contacto">
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Contacto"
        title="Cuéntanos qué necesitas y vamos a verlo"
        lead="Toda cotización parte con una visita técnica. WhatsApp para lo urgente; el formulario para dejar el requerimiento completo."
        media="obra"
        crumbs={crumbs}
        cta={{ href: "#agendar", label: "Ir al formulario" }}
      />
      <AgendaForm />
      <Coverage />
    </SitePage>
  );
}
