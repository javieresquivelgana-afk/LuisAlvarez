/**
 * ⚙️ CONFIGURACIÓN DEL SITIO — editar aquí, sin tocar componentes.
 *
 * ── ORIGEN DE LOS DATOS ──────────────────────────────────────
 * Contacto, razón social y dirección provienen de la tarjeta de
 * presentación entregada por el cliente (agosto 2026). Son datos
 * reales, no supuestos.
 *
 * ── PENDIENTE DE CLIENTE ─────────────────────────────────────
 *  1. `claseA.licencia` — N° de licencia SEC de instalador Clase A.
 *  2. `zones`           — cobertura declarada. Hoy está redactada a
 *     partir de la casa matriz (San Antonio, Región de Valparaíso) y
 *     de que atiende proyectos en RM. CONFIRMAR con Luis antes de
 *     tratarlo como promesa comercial.
 *  3. `showClientNames` — ver nota extensa sobre `clients`.
 */

export const site = {
  /** Marca corta (el logotipo A/Z de la tarjeta). */
  brand: "A/Z",
  brandSuffix: "Electricidad & Construcción",
  legalName: "A/Z Electricidad & Construcción Ltda.",
  owner: "Luis Ricardo Álvarez Chávez",
  tagline: "Ingeniería Eléctrica y Electrónica",
  credential: "Instalador Eléctrico Clase A",

  // ── Contacto (tarjeta oficial) ────────────────────────────
  phone: "+56 9 6508 5769",
  email: "electricidadmasconstruccion@gmail.com",
  whatsapp: "56965085769",
  instagram: "electrico_instalador_sec",
  whatsappMessage:
    "Hola, vengo del sitio web de A/Z. Quiero cotizar un servicio eléctrico.",

  // ── Ubicación ─────────────────────────────────────────────
  address: {
    street: "Costanera del Mar 345",
    city: "San Antonio",
    region: "Región de Valparaíso",
    country: "Chile",
  },

  // ── Zonas de atención ─────────────────────────────────────
  // Redacción sobria basada en la casa matriz. Confirmar alcance real.
  zones: "San Antonio, Región de Valparaíso y Región Metropolitana",

  // ── Credencial Clase A ────────────────────────────────────
  claseA: {
    // PENDIENTE: número de licencia SEC. Al completarlo, se muestra
    // en la sección de respaldo técnico como dato verificable.
    licencia: "",
  },

  /* ── Clientes / proyectos ──────────────────────────────────
   * Estos nombres los entregó el propio Luis Álvarez como clientes
   * suyos: son reales, NO inventados.
   *
   * ⚠️ PERO: nombrar marcas de terceros en un sitio comercial es una
   * decisión distinta a haberles trabajado. El cliente confirmó que
   * son clientes suyos; no confirmó que autorice publicarlos, y las
   * cadenas grandes suelen exigir permiso escrito para el uso de su
   * nombre o marca en material promocional de un proveedor.
   *
   * Por eso el sitio arranca con `showClientNames: false` y usa la
   * formulación sobria por sectores (más abajo).
   */
  showClientNames: false,
  clients: [
    "Dunkin' Donuts",
    "San Camilo",
    "Salfa Gestión",
    "Macsa",
    "Eros / PedidosYa",
  ],

  // Formulación sobria — la que se muestra mientras `showClientNames`
  // esté en false. Describe el tipo de proyecto, no la marca.
  sectors: [
    {
      name: "Cadenas de alimentación",
      desc: "Habilitación eléctrica de locales para cadenas de comida y pastelería, con plazos de obra acotados.",
    },
    {
      name: "Retail y locales comerciales",
      desc: "Proyectos de tableros, iluminación y fuerza para locales en centros comerciales y calle.",
    },
    {
      name: "Gestión y operaciones de empresa",
      desc: "Instalaciones y mantención eléctrica para empresas de servicios y gestión de activos.",
    },
    {
      name: "Plataformas de delivery y logística",
      desc: "Adecuación eléctrica de centros de operación y puntos de despacho.",
    },
  ],

  // ── Servicios ─────────────────────────────────────────────
  services: [
    {
      id: "ingenieria",
      code: "01",
      name: "Ingeniería eléctrica",
      desc: "Diseño, cálculo y desarrollo de proyectos eléctricos con respaldo técnico profesional.",
    },
    {
      id: "redes-bt-mt",
      code: "02",
      name: "Redes de baja y media tensión",
      desc: "Ejecución y mejoramiento de redes BT y MT para empresas, edificios e instalaciones comerciales.",
    },
    {
      id: "fuerza",
      code: "03",
      name: "Obras de fuerza",
      desc: "Instalaciones de fuerza para equipamiento, maquinaria y cargas industriales o comerciales.",
    },
    {
      id: "mantenimiento",
      code: "04",
      name: "Mantenimiento eléctrico",
      desc: "Mantención preventiva y correctiva de instalaciones, tableros y sistemas eléctricos.",
    },
    {
      id: "lineas",
      code: "05",
      name: "Mejoramiento de líneas",
      desc: "Normalización y mejora de líneas eléctricas existentes para mayor seguridad y capacidad.",
    },
    {
      id: "empalmes",
      code: "06",
      name: "Empalmes de baja y media tensión",
      desc: "Empalmes BT y MT, aumentos de potencia y gestión del trámite con la distribuidora.",
    },
    {
      id: "fotovoltaico",
      code: "07",
      name: "Generación fotovoltaica",
      desc: "Instalación de paneles solares para autoconsumo en empresas, locales y viviendas.",
    },
    {
      id: "locales",
      code: "08",
      name: "Proyectos para locales comerciales",
      desc: "Habilitación eléctrica completa de locales: tableros, iluminación, fuerza y declaración.",
    },
    {
      id: "edificios",
      code: "09",
      name: "Proyectos para edificios y empresas",
      desc: "Proyectos eléctricos integrales para edificios, oficinas y operaciones de empresas.",
    },
  ],

  // ── Preguntas frecuentes ──────────────────────────────────
  // Redactadas solo sobre lo que el cliente hace y sobre normativa
  // pública (SEC). No prometen plazos ni precios.
  faq: [
    {
      q: "¿Qué significa ser instalador eléctrico Clase A?",
      a: "Es la máxima categoría de la Superintendencia de Electricidad y Combustibles (SEC): habilita para proyectar, ejecutar y declarar instalaciones eléctricas sin límite de potencia, tanto en baja como en media tensión. En la práctica, permite hacerse cargo de proyectos industriales, comerciales y de edificios completos.",
    },
    {
      q: "¿Ustedes hacen la declaración eléctrica ante la SEC?",
      a: "Sí. Los trabajos que lo requieren se ejecutan para quedar en condiciones de ser declarados, y la declaración TE1 la realiza el instalador Clase A a cargo del proyecto.",
    },
    {
      q: "¿Trabajan con empresas o también con particulares?",
      a: "El foco es empresas, locales comerciales, edificios y obras. También se atienden requerimientos residenciales cuando el alcance lo justifica —empalmes, aumentos de potencia, normalizaciones o instalación fotovoltaica.",
    },
    {
      q: "¿Cómo parte un proyecto?",
      a: "Con una visita técnica en terreno. Ahí se levanta el requerimiento real —estado de la instalación, potencia disponible, condiciones del lugar— y sobre eso se cotiza con alcance y plazos definidos, sin estimaciones a ciegas.",
    },
    {
      q: "¿Hacen mantención periódica?",
      a: "Sí: mantención preventiva y correctiva de instalaciones, tableros y sistemas eléctricos, programada según la operación del cliente.",
    },
  ],
} as const;

export type ServiceId = (typeof site.services)[number]["id"];

/** Texto que se muestra donde falta un dato que debe entregar el cliente. */
export const PENDIENTE = "POR CONFIRMAR";

export const hasWhatsapp = site.whatsapp.length > 0;
export const hasPhone = site.phone.length > 0;
export const hasEmail = site.email.length > 0;
export const hasZones = site.zones.length > 0;
export const hasLicencia = site.claseA.licencia.length > 0;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region}, ${site.address.country}`;

export const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const mailHref = `mailto:${site.email}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`;

/**
 * Enlace de WhatsApp. Devuelve `null` si algún día se vacía el número:
 * los componentes usan ese `null` para no renderizar un botón muerto.
 */
export const waLink = (msg?: string): string | null =>
  hasWhatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        msg ?? site.whatsappMessage,
      )}`
    : null;
