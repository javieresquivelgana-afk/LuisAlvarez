/**
 * ⚙️ CONFIGURACIÓN DEL SITIO — editar aquí, sin tocar componentes.
 *
 * ── CÓMO FUNCIONAN LOS DATOS PENDIENTES ──────────────────────
 * Los campos de contacto vacíos ("") se consideran PENDIENTES: el sitio
 * NO inventa un número ni un correo. En su lugar muestra el distintivo
 * "POR CONFIRMAR" y desactiva de forma elegante los botones de WhatsApp,
 * dejando el formulario como única vía de contacto. Al escribir el dato
 * real, todo se activa solo — no hay que tocar ningún componente.
 *
 * ── PENDIENTE DE CLIENTE (al 2026-08-10) ─────────────────────
 *  1. `phone`    — teléfono real.
 *  2. `email`    — correo real.
 *  3. `whatsapp` — número real, formato 569XXXXXXXX (sin "+").
 *  4. `zones`    — comunas / regiones donde efectivamente atiende.
 *  5. `claseA.licencia` — N° de licencia SEC de instalador Clase A.
 *
 * ── PENDIENTE DE DECISIÓN (Javier) ───────────────────────────
 *  6. `showClientNames` — ver nota extensa sobre `clients` más abajo.
 */

export const site = {
  brand: "Luis Álvarez",
  brandSuffix: "Ingeniería Eléctrica",
  tagline: "Instalador Eléctrico Clase A",

  // ── Contacto ──────────────────────────────────────────────
  // "" = pendiente. El sitio degrada con gracia (ver nota superior).
  phone: "", // PENDIENTE: teléfono real, ej. "+56 9 1234 5678"
  email: "", // PENDIENTE: correo real, ej. "contacto@dominio.cl"
  whatsapp: "", // PENDIENTE: número real, formato "56912345678"
  whatsappMessage:
    "Hola, vengo del sitio web. Quiero cotizar un servicio eléctrico.",

  // ── Zonas de atención ─────────────────────────────────────
  zones: "", // PENDIENTE: cobertura real (comunas o regiones)

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
   * formulación sobria por sectores (más abajo), que comunica el
   * mismo peso comercial sin exponer a Luis ni a Javier.
   *
   * Para activarlos: poner `showClientNames: true`. La sección los
   * renderiza sin logos ajenos — solo el nombre en texto.
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
} as const;

export type ServiceId = (typeof site.services)[number]["id"];

/** Texto que se muestra donde falta un dato que debe entregar el cliente. */
export const PENDIENTE = "POR CONFIRMAR";

export const hasWhatsapp = site.whatsapp.length > 0;
export const hasPhone = site.phone.length > 0;
export const hasEmail = site.email.length > 0;
export const hasZones = site.zones.length > 0;
export const hasLicencia = site.claseA.licencia.length > 0;

/**
 * Enlace de WhatsApp. Devuelve `null` mientras no haya número real:
 * los componentes usan ese `null` para no renderizar un botón muerto.
 */
export const waLink = (msg?: string): string | null =>
  hasWhatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        msg ?? site.whatsappMessage,
      )}`
    : null;
