/**
 * ⚙️ CONFIGURACIÓN DEL SITIO — editar aquí, sin tocar componentes.
 *
 * TODO antes de publicar:
 *  1. Reemplazar `whatsapp` por el número real (formato internacional, sin "+").
 *  2. Reemplazar `phone` y `email` por los datos reales.
 *  3. Revisar la lista `clients`: dejar solo los que se pueden publicar.
 *  4. Confirmar `zones` (zonas de atención reales).
 */

export const site = {
  brand: "Luis Álvarez",
  brandSuffix: "Ingeniería Eléctrica",
  tagline: "Instalador Eléctrico Clase A",

  // ── Contacto ──────────────────────────────────────────────
  phone: "+56 9 0000 0000", // TODO: número real
  email: "contacto@ejemplo.cl", // TODO: correo real
  whatsapp: "56900000000", // TODO: número real, formato 569XXXXXXXX
  whatsappMessage:
    "Hola, vengo del sitio web. Quiero cotizar un servicio eléctrico.",

  // ── Zonas de atención ─────────────────────────────────────
  zones: "Región Metropolitana", // TODO: confirmar cobertura real

  // ── Clientes / proyectos publicables ──────────────────────
  // Quitar de esta lista cualquier cliente que no se pueda mencionar.
  clients: [
    "Dunkin' Donuts",
    "San Camilo",
    "Salfa Gestión",
    "Macsa",
    "Eros / PedidosYa",
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
      name: "Empalmes eléctricos",
      desc: "Empalmes de baja y media tensión, aumentos de potencia y gestiones asociadas.",
    },
    {
      id: "fotovoltaico",
      code: "07",
      name: "Paneles fotovoltaicos",
      desc: "Instalación de sistemas fotovoltaicos para reducir costos de energía en hogares y negocios.",
    },
    {
      id: "locales",
      code: "08",
      name: "Proyectos para locales comerciales",
      desc: "Habilitación eléctrica completa de locales: tableros, iluminación, fuerza y certificación.",
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

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    msg ?? site.whatsappMessage,
  )}`;
