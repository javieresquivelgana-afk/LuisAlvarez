import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SitePage, { BreadcrumbLd } from "@/components/SitePage";
import Experience from "@/components/Experience";
import Obras from "@/components/Obras";
import MisionVision from "@/components/MisionVision";
import { site } from "@/site.config";

const crumbs = [{ href: "/experiencia", label: "Quiénes somos" }];

export const metadata: Metadata = {
  title: `Quiénes somos — ${site.brand} ${site.brandSuffix}`,
  description:
    "Proyectos eléctricos para cadenas de alimentación, retail, empresas de servicios y plataformas de logística. Obras ejecutadas con la operación funcionando y respaldo de instalador Clase A.",
  alternates: { canonical: "/experiencia" },
};

export default function ExperienciaPage() {
  return (
    <SitePage path="/experiencia">
      <BreadcrumbLd items={crumbs} />
      <PageHero
        kicker="Quiénes somos"
        title="Obras hechas donde parar la operación no es opción"
        lead="Locales con fecha de apertura, cadenas con estándar propio y centros de operación que no pueden detenerse."
        media="obra"
        crumbs={crumbs}
      />
      <Obras />
      <Experience />
      <MisionVision />
    </SitePage>
  );
}
