import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FinalCTA from "@/components/FinalCTA";
import PageNav from "@/components/PageNav";

/**
 * Envoltorio de las páginas interiores: mismo header, mismo cierre y
 * mismo pie que la portada, para que ninguna página se sienta de otro
 * sitio. `cta={false}` omite el bloque final (la página ya cierra con
 * su propio formulario, por ejemplo).
 */
export default function SitePage({
  children,
  cta = true,
  path,
}: {
  children: React.ReactNode;
  cta?: boolean;
  /** Ruta de la página: activa el pie de anterior/siguiente. */
  path?: string;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
        {path ? <PageNav current={path} /> : null}
        {cta ? <FinalCTA /> : null}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

/** Datos estructurados de miga de pan, para el resultado en buscadores. */
export function BreadcrumbLd({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const base = "https://luis-alvarez.vercel.app";
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ href: "/", label: "Inicio" }, ...items].map(
      (item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        item: `${base}${item.href}`,
      }),
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
