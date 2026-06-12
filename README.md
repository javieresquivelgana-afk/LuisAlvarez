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
| Clientes publicables (quitar los no confirmados) | `clients` |
| Servicios (nombre y descripción de cada tarjeta) | `services` |

> ⚠️ Antes de publicar: reemplazar los valores marcados con `TODO` en
> `site.config.ts` (número de WhatsApp, teléfono y correo son placeholders).

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
