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

  /* ── Servicios ─────────────────────────────────────────────
   * Cada servicio tiene su propia página en /servicios/<id>.
   *  - `media`  : nombre base del clip en /public/video (y su póster).
   *  - `intro`  : párrafo de apertura de la ficha.
   *  - `incluye`: alcance típico del trabajo. Descripción de oficio,
   *               NO promesa de plazo ni de precio.
   *  - `cuando` : señales concretas de que el servicio hace falta.
   */
  services: [
    {
      id: "ingenieria",
      code: "01",
      name: "Ingeniería eléctrica",
      desc: "Diseño, cálculo y desarrollo de proyectos eléctricos con respaldo técnico profesional.",
      media: "planos",
      intro:
        "Antes del primer metro de canalización hay un proyecto: cargas calculadas, conductores dimensionados y protecciones coordinadas. Es la etapa que decide si la instalación va a funcionar bajo carga real o solo en el papel.",
      incluye: [
        "Levantamiento de la instalación existente y de la carga proyectada.",
        "Cálculo de potencia, dimensionamiento de conductores y protecciones.",
        "Diagramas unilineales, planos de canalización y memoria de cálculo.",
        "Coordinación de protecciones y criterios de seguridad de la instalación.",
        "Documentación técnica para presentar ante mandante, ITO o distribuidora.",
      ],
      cuando: [
        "Vas a construir, ampliar o cambiar el uso de un recinto.",
        "Te exigen proyecto eléctrico firmado por un instalador autorizado.",
        "La instalación actual no da abasto y hay que dimensionar de nuevo.",
      ],
    },
    {
      id: "redes-bt-mt",
      code: "02",
      name: "Redes de baja y media tensión",
      desc: "Ejecución y mejoramiento de redes BT y MT para empresas, edificios e instalaciones comerciales.",
      media: "hero-lineas",
      intro:
        "La red es la columna vertebral de la instalación: lo que lleva la energía desde el empalme hasta cada tablero. En media tensión el margen de error es cero, y por eso la ejecuta y firma un instalador Clase A.",
      incluye: [
        "Canalizaciones, alimentadores y tendido de conductores BT y MT.",
        "Montaje y conexionado de tableros de distribución.",
        "Mallas y sistemas de puesta a tierra.",
        "Pruebas de continuidad, aislación y puesta en servicio.",
        "Trabajo coordinado con la operación para minimizar cortes.",
      ],
      cuando: [
        "Necesitas llevar energía a una nave, pabellón o edificio nuevo.",
        "La red actual está al límite o fue creciendo sin proyecto.",
        "Hay que intervenir en media tensión y se requiere licencia Clase A.",
      ],
    },
    {
      id: "fuerza",
      code: "03",
      name: "Obras de fuerza",
      desc: "Instalaciones de fuerza para equipamiento, maquinaria y cargas industriales o comerciales.",
      media: "hero-tablero",
      intro:
        "Hornos, cámaras de frío, compresores, bombas, líneas de producción: cargas que no se cuelgan de un enchufe. Cada equipo necesita su alimentación, su protección y su punto de maniobra.",
      incluye: [
        "Alimentadores dedicados por equipo, dimensionados a su curva de partida.",
        "Tableros de fuerza, partidores y protecciones diferenciadas.",
        "Tomas industriales, canalización rígida y montaje en terreno.",
        "Conexionado y pruebas de funcionamiento con el equipo en marcha.",
      ],
      cuando: [
        "Llega maquinaria nueva y no hay alimentación para ella.",
        "Los equipos hacen saltar protecciones o caen las tensiones al partir.",
        "Necesitas dejar puntos de fuerza listos antes de que entre el equipo.",
      ],
    },
    {
      id: "mantenimiento",
      code: "04",
      name: "Mantenimiento eléctrico",
      desc: "Mantención preventiva y correctiva de instalaciones, tableros y sistemas eléctricos.",
      media: "hero-tablero",
      intro:
        "La mayoría de las fallas eléctricas avisan antes: conexiones flojas que se calientan, aislaciones que se degradan, protecciones que ya no corresponden a la carga. La mantención existe para encontrarlas antes de que paren la operación.",
      incluye: [
        "Revisión y apriete de conexiones, limpieza y ordenamiento de tableros.",
        "Medición de aislación, continuidad y equilibrio de cargas.",
        "Verificación de protecciones y puesta a tierra.",
        "Reparación de fallas y reposición de componentes dañados.",
        "Informe del estado de la instalación con lo urgente separado de lo programable.",
      ],
      cuando: [
        "Saltan protecciones sin causa clara o hay olor a recalentamiento.",
        "La instalación lleva años sin que nadie la revise a fondo.",
        "Necesitas una rutina programada para no depender de la emergencia.",
      ],
    },
    {
      id: "lineas",
      code: "05",
      name: "Mejoramiento de líneas",
      desc: "Normalización y mejora de líneas eléctricas existentes para mayor seguridad y capacidad.",
      media: "hero-lineas",
      intro:
        "Instalaciones que crecieron por parche: empalmes improvisados, conductores subdimensionados, canalizaciones a la vista. Normalizar es dejar esa línea con la capacidad y la seguridad que la operación de hoy necesita.",
      incluye: [
        "Diagnóstico de la línea existente y de su capacidad real.",
        "Recambio de conductores y canalizaciones que quedaron cortos.",
        "Eliminación de empalmes provisorios y ordenamiento del trazado.",
        "Refuerzo de protecciones y puesta a tierra.",
      ],
      cuando: [
        "La instalación fue creciendo sin proyecto y hoy nadie sabe qué alimenta qué.",
        "Hay caídas de tensión, calentamiento o cortes intermitentes.",
        "Una inspección, un seguro o un mandante te exige normalizar.",
      ],
    },
    {
      id: "empalmes",
      code: "06",
      name: "Empalmes de baja y media tensión",
      desc: "Empalmes BT y MT, aumentos de potencia y gestión del trámite con la distribuidora.",
      media: "franja-subestacion",
      intro:
        "El empalme es la puerta de entrada de la energía y el punto donde se cruzan la obra y la distribuidora. Además de ejecutarlo, hay que dejar la instalación en condiciones de ser declarada para que la conexión avance.",
      incluye: [
        "Evaluación de la potencia requerida y del empalme existente.",
        "Ejecución de empalmes BT y MT y aumentos de potencia.",
        "Preparación de la instalación para su declaración ante la SEC.",
        "Gestión y seguimiento del trámite con la distribuidora.",
      ],
      cuando: [
        "Abres un local o una faena y necesitas energía formal desde cero.",
        "La potencia contratada te quedó chica para la operación actual.",
        "Te rechazaron o dejaron detenido un trámite de conexión.",
      ],
    },
    {
      id: "fotovoltaico",
      code: "07",
      name: "Generación fotovoltaica",
      desc: "Instalación de paneles solares para autoconsumo en empresas, locales y viviendas.",
      media: "solar-campo",
      intro:
        "Un sistema solar se conecta a un tablero, un empalme y una instalación que ya existen. Cuando el mismo instalador Clase A ve los dos lados, el sistema se dimensiona con la realidad eléctrica del lugar y no con una planilla genérica.",
      incluye: [
        "Evaluación de consumo, techumbre o terreno y capacidad del empalme.",
        "Dimensionamiento del sistema y selección de paneles e inversor.",
        "Montaje de estructura, paneles, inversor y protecciones DC/AC.",
        "Conexión al tablero e instalación dejada en condiciones de declararse.",
      ],
      cuando: [
        "La cuenta de luz ya pesa en el costo de operación.",
        "Tienes techumbre o terreno disponible sin uso.",
        "Quieres evaluar autoconsumo con números de tu instalación, no de un folleto.",
      ],
    },
    {
      id: "locales",
      code: "08",
      name: "Proyectos para locales comerciales",
      desc: "Habilitación eléctrica completa de locales: tableros, iluminación, fuerza y declaración.",
      media: "obra",
      intro:
        "Un local tiene fecha de apertura, y la eléctrica suele ser el cuello de botella: sin tablero, sin puntos de fuerza y sin declaración no hay recepción ni entrega. La habilitación se planifica con esa fecha a la vista.",
      incluye: [
        "Tablero general del local, alimentadores y protecciones.",
        "Iluminación general, de trabajo y de emergencia.",
        "Puntos de fuerza para equipamiento de cocina, frío y climatización.",
        "Instalación dejada en condiciones de ser declarada ante la SEC.",
        "Coordinación con la administración del centro comercial o del arriendo.",
      ],
      cuando: [
        "Tomas un local en obra gruesa o recibido a medias.",
        "Cambias el rubro del local y la instalación no da para el nuevo uso.",
        "El mall o el mandante te exige la eléctrica declarada para abrir.",
      ],
    },
    {
      id: "edificios",
      code: "09",
      name: "Proyectos para edificios y empresas",
      desc: "Proyectos eléctricos integrales para edificios, oficinas y operaciones de empresas.",
      media: "franja-subestacion",
      intro:
        "En un edificio o una operación de empresa la instalación es un sistema completo: sala eléctrica, alimentadores verticales, servicios generales y consumos por unidad. Cada intervención tiene que entrar sin dejar a nadie sin energía.",
      incluye: [
        "Proyecto y ejecución de tableros generales y de piso.",
        "Alimentadores, canalizaciones y servicios generales.",
        "Iluminación de áreas comunes y circuitos de emergencia.",
        "Trabajos programados por etapas, coordinados con administración.",
      ],
      cuando: [
        "El edificio u oficina necesita normalizar o ampliar su instalación.",
        "Hay que ejecutar sin cortar la energía de toda la operación.",
        "Se requiere un responsable técnico único frente al mandante.",
      ],
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
    {
      q: "¿Cuál es la diferencia entre baja y media tensión?",
      a: "La baja tensión es la que llega a la mayoría de los consumos —enchufes, iluminación, equipos— y la media tensión es la que alimenta instalaciones grandes desde la red de distribución, normalmente a través de una subestación propia. Intervenir en media tensión exige categoría de instalador que lo habilite y procedimientos de trabajo distintos: no es lo mismo ni lo puede hacer cualquiera.",
    },
    {
      q: "¿Qué es un empalme y cuándo hay que aumentar la potencia?",
      a: "El empalme es el punto donde la instalación se conecta a la red de la distribuidora, y define la potencia máxima disponible. Cuando la operación crece —maquinaria nueva, más carga, un cambio de rubro— la potencia contratada se queda corta y se manifiesta en protecciones que saltan o caídas de tensión. Ahí corresponde evaluar un aumento de potencia y gestionarlo con la distribuidora.",
    },
    {
      q: "¿Se puede declarar una instalación antigua?",
      a: "Depende de su estado. Primero hay que revisarla y normalizar lo que no cumple: conductores subdimensionados, empalmes provisorios, falta de protecciones o de puesta a tierra. Una vez que la instalación está en condiciones, puede ser declarada por el instalador autorizado que se hace responsable de ella.",
    },
    {
      q: "¿Necesito un proyecto eléctrico para mi local?",
      a: "Cuando hay potencia relevante, público circulando o exigencias del mandante, del mall o de la distribuidora, sí. El proyecto es lo que permite dimensionar con criterio en vez de a ojo, y es lo que suele pedirse para recepcionar o para tramitar la conexión. En la visita técnica se define si el caso lo requiere.",
    },
    {
      q: "¿Trabajan con la operación funcionando?",
      a: "Es lo habitual en locales y empresas. Los trabajos se programan por etapas y con cortes acotados, coordinados con la administración o la jefatura del lugar. Lo que sí se dice de frente es cuándo un trabajo obliga a cortar: no se promete continuidad donde técnicamente no la hay.",
    },
  ],

  /* ── Qué se necesita para cotizar ──────────────────────────
   * Vale para cualquier servicio: se muestra en cada ficha.
   * Nada de esto es obligatorio — si no está, se levanta en terreno.
   */
  paraCotizar: [
    "La dirección del lugar y el tipo de recinto (local, oficina, faena, vivienda).",
    "Qué equipos o cargas hay que alimentar, si ya están definidos.",
    "La potencia contratada actual, que aparece en la boleta de electricidad.",
    "Fotos del tablero y del empalme: adelantan buena parte del diagnóstico.",
    "La fecha en que necesitas el trabajo terminado.",
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
