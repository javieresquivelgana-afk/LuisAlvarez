# A/Z Electricidad & Construcción Ltda. — sitio web

Sitio comercial de **A/Z Electricidad & Construcción Ltda.** (Luis Ricardo
Álvarez Chávez), instalador eléctrico Clase A en San Antonio, Región de
Valparaíso.

- Producción: https://luis-alvarez.vercel.app
- Stack: Next.js 15 (App Router) + React 19 + TypeScript, sin dependencias de UI.

## Estructura

```
app/
  page.tsx             Composición de la landing + JSON-LD (Electrician + FAQPage)
  layout.tsx           Metadata, fuentes (Archivo / Source Sans 3)
  globals.css          Sistema visual completo (grafito + azul acero de la tarjeta)
  opengraph-image.tsx  Imagen de previsualización generada con next/og
  sitemap.ts robots.ts SEO técnico
  api/agenda/route.ts  Recepción del formulario de visita técnica
components/            Una sección por archivo
site.config.ts         ÚNICA fuente de datos del negocio
public/video/          Clips del hero y de las secciones (mp4, 720p + variante -sm)
public/img/            Pósters de cada clip + fotos
```

## Editar contenido

Casi todo se edita en **`site.config.ts`**: contacto, dirección, zonas,
servicios, sectores y preguntas frecuentes. Los componentes no llevan datos
del negocio escritos a mano.

Pendientes marcados en ese archivo:

1. `claseA.licencia` — N° de licencia SEC (hoy se muestra "POR CONFIRMAR").
2. `zones` — cobertura declarada; hoy está redactada desde la casa matriz.
3. `showClientNames` — pasa a `true` solo si el cliente autoriza publicar
   nombres de terceros (Dunkin' Donuts, San Camilo, etc.).

## Video

El hero es una secuencia de tres clips a pantalla completa (tableros → líneas
MT → fotovoltaico) que se cruzan por opacidad cada 8 s. Las secciones usan
`components/LazyVideo.tsx`: el clip solo se descarga cuando entra en pantalla
y nunca se carga si el visitante pidió `prefers-reduced-motion`.

Cada clip existe en dos tamaños: `nombre.mp4` (1280×720) y `nombre-sm.mp4`
(640×360, para móvil). La resolución se elige en el cliente con `matchMedia`.

Metraje de stock de [Mixkit](https://mixkit.co) (licencia gratuita, uso
comercial sin atribución), recortado y recodificado con ffmpeg.

## Formulario

`POST /api/agenda` acepta el formulario y, si están definidas las variables de
entorno, lo reenvía:

- `CONTACT_WEBHOOK_URL` — webhook (Google Apps Script / CRM).
- `RESEND_API_KEY` + `CONTACT_EMAIL` — correo vía Resend.

Sin variables configuradas, la solicitud queda en los logs de Vercel y el
visitante recibe confirmación con alternativa de WhatsApp.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # verificación de tipos + build de producción
```
