import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Experience from "@/components/Experience";
import VideoBand from "@/components/VideoBand";
import { site } from "@/site.config";

const crumbs = [{ href: "/experiencia", label: "Experiencia" }];

export const metadata: Metadata = {
  title: `Experiencia y sectores — ${site.brand} ${site.brandSuffix}`,
  description:
    "Proyectos eléctricos para cadenas de alimentación, retail, empresas de servicios y plataformas de logística. Obras ejecutadas con la operación funcionando y respaldo de instalador Clase A.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperienciaPage() {
  return (
    <SitePage>
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Experiencia"
        title="Obras hechas donde parar la operación no es opción"
        lead="Locales con fecha de apertura, cadenas con estándar propio, empresas de servicios y centros de operación. Cada frente tiene sus tiempos, su exigencia de seguridad y su forma de recibir la obra."
        media="obra"
        crumbs={crumbs}
      />
      <Experience />
      <VideoBand />
    </SitePage>
  );
}
