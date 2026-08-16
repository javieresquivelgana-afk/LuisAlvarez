import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { site, mailHref, fullAddress } from "@/site.config";

export const metadata: Metadata = {
  title: `Tratamiento de datos — ${site.brand} ${site.brandSuffix}`,
  description:
    "Qué datos pide el formulario de visita técnica, para qué se usan, quién los recibe y cómo pedir que se eliminen.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

/**
 * Página legal breve. Está redactada sobre lo que el sitio realmente
 * hace hoy: si mañana se conecta un CRM o se guardan archivos, hay que
 * actualizarla — una política que no describe la realidad es peor que
 * no tenerla.
 */
const bloques = [
  {
    t: "Qué datos se piden",
    d: "El formulario de visita técnica pide nombre, teléfono, comuna y tipo de servicio, que son obligatorios, y de forma opcional correo, empresa, dirección del servicio, fecha y horario preferido, y una descripción del requerimiento. No se piden datos financieros ni documentos de identidad.",
  },
  {
    t: "Para qué se usan",
    d: "Únicamente para responder la solicitud: contactarte, coordinar la visita técnica y preparar la cotización. No se usan para publicidad ni se envían boletines.",
  },
  {
    t: "Quién los recibe",
    d: `Los recibe ${site.owner}, responsable de ${site.legalName}. No se venden, ceden ni comparten con terceros con fines comerciales. Los servicios que hacen funcionar el sitio —el alojamiento y el envío del correo de aviso— procesan los datos solo para entregarlos.`,
  },
  {
    t: "Cuánto se guardan",
    d: "Las solicitudes se conservan mientras dure la relación comercial y hasta dos años después, para poder retomar un proyecto o responder por un trabajo ejecutado. Después se eliminan.",
  },
  {
    t: "Cómo pedir acceso o borrado",
    d: `Escribiendo a ${site.email}. La ley 19.628 sobre protección de la vida privada te da derecho a saber qué datos tuyos tenemos, a corregirlos si están errados y a pedir que se eliminen. Se responde dentro de los plazos que la ley establece.`,
  },
  {
    t: "Cookies y medición",
    d: "El sitio no usa cookies de publicidad ni de seguimiento entre sitios. Sí se miden visitas de forma agregada y anónima para saber qué páginas se leen; esa medición no identifica personas.",
  },
];

export default function PrivacidadPage() {
  return (
    <SitePage cta={false}>
      <section className="section" style={{ paddingTop: 170 }}>
        <div className="wrap">
          <span className="kicker">Legal</span>
          <h1 className="section-title">Cómo tratamos tus datos</h1>
          <p className="section-lead">
            En simple y sin letra chica: qué se pide en el formulario, para qué
            se usa y cómo pedir que se borre.
          </p>

          <div className="sectors" style={{ marginTop: 44 }}>
            {bloques.map((b) => (
              <article className="sector" key={b.t}>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </article>
            ))}
          </div>

          <p className="form-legal" style={{ marginTop: 34 }}>
            Responsable: {site.legalName} — {site.owner}. {fullAddress}.{" "}
            <a href={mailHref}>{site.email}</a>. Última actualización: agosto de
            2026.
          </p>
        </div>
      </section>
    </SitePage>
  );
}
