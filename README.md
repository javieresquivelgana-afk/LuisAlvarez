# Luis Álvarez — Ingeniería Eléctrica

Landing page profesional de servicios de electricidad e ingeniería eléctrica
(instalador eléctrico Clase A). Next.js App Router, lista para desplegar en
Vercel.

## ✏️ Editar contenidos

**Todo el contenido editable vive en [`site.config.ts`](./site.config.ts):**

| Qué editar | Campo |
| --- | --- |
| Teléfono | `phone` |
| Correo | `email` |
| WhatsApp (formato `569XXXXXXXX`, sin `+`) | `whatsapp` |
| Mensaje precargado de WhatsApp | `whatsappMessage` |
| Zonas de atención | `zones` |
| N° de licencia SEC | `claseA.licencia` |
| Mostrar nombres de clientes (decisión comercial) | `showClientNames` |
| Sectores atendidos (alternativa sobria a las marcas) | `sectors` |
| Servicios (nombre y descripción de cada tarjeta) | `services` |

### 🟡 Datos pendientes: el sitio no inventa nada

Los campos de contacto vacíos (`""`) se consideran **pendientes**. El sitio
**no** muestra un número o correo inventado: en su lugar despliega el
distintivo `POR CONFIRMAR` y **desactiva con elegancia** los botones de
WhatsApp (header, CTA final, botón flotante), dejando el formulario como
única vía de contacto.

Al escribir el dato real en `site.config.ts`, todo se activa solo — no hay
que tocar ningún componente.

**Pendientes al 2026-08-10:** `phone`, `email`, `whatsapp`, `zones` y
`claseA.licencia`.

### ⚖️ Sobre nombrar clientes (`showClientNames`)

Luis Álvarez indicó como clientes suyos a Dunkin' Donuts, San Camilo, Salfa
Gestión, Macsa y Eros/PedidosYa. Son reales, pero **haber trabajado para una
marca no equivale a tener permiso para usar su nombre** en material
promocional propio; las cadenas grandes suelen exigirlo por escrito.

Por eso el sitio arranca en `showClientNames: false` y muestra la
formulación sobria por sectores (`sectors`), que comunica el mismo peso
comercial sin exponer al cliente. Los nombres quedan escritos en
`clients` — para activarlos basta cambiar el flag a `true`, y se renderizan
como texto, nunca con logos ajenos.

## 🚀 Desarrollo local

```bash
npm install
npm run dev   # http://localhost:3000
```

## ☁️ Desplegar en Vercel

```bash
vercel        # preview
vercel --prod # producción
```

Luego conectar el dominio propio desde el dashboard de Vercel
(Settings → Domains).

## 📬 Formulario de visita técnica

El formulario envía a `app/api/agenda/route.ts`. Sin configuración adicional,
cada solicitud queda registrada en los **logs de Vercel**. Para recibirlas:

### Opción A — Correo (Resend)

1. Crear cuenta gratis en [resend.com](https://resend.com) y obtener API key.
2. En Vercel → Settings → Environment Variables agregar:
   - `RESEND_API_KEY` = la API key
   - `CONTACT_EMAIL` = correo donde recibir las solicitudes

### Opción B — Google Sheets / CRM (webhook)

1. Crear un Google Apps Script que reciba POST JSON y escriba en una hoja.
2. Agregar en Vercel: `CONTACT_WEBHOOK_URL` = URL del script.

Ambas opciones pueden activarse a la vez. El payload incluye: nombre,
teléfono, correo, empresa, comuna, dirección, servicio, fecha, horario,
descripción y nombres de fotos adjuntas.

## 🗂 Estructura

```
site.config.ts        ← contenido editable (contacto, clientes, servicios)
app/layout.tsx        ← fuentes y metadatos SEO
app/page.tsx          ← orden de las secciones
app/globals.css       ← sistema visual completo
app/api/agenda/       ← endpoint del formulario
components/           ← una sección por archivo
```
