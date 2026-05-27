# Yazaki Failure Analysis — Editable Report

Web app que replica el formato F.A. de Yazaki Electronics Durango con campos de
texto editables y zonas de carga de fotos sobre el layout original del PDF.

Construida con **Next.js 14 (App Router) + React 18 + TypeScript**. Lista para
desplegar en Vercel con un solo click.

## Stack

- **Framework**: Next.js 14 (App Router, RSC + Client Components)
- **Lenguaje**: TypeScript (strict mode)
- **Estilos**: CSS global (sin dependencias externas)
- **Imágenes**: `next/image` con archivos estáticos en `/public/pages/`
- **State**: React `useState` (suficiente para una sesión)

## Estructura

```
yazaki-fa/
├── app/
│   ├── globals.css        # Estilos (overlay, dropzones, print)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Renderea <ReportEditor />
├── components/
│   ├── GhostField.tsx     # Input/textarea editable invisible
│   ├── Page.tsx           # Una página (fondo + overlays)
│   ├── PhotoZone.tsx      # Dropzone de imagen con preview
│   └── ReportEditor.tsx   # Componente raíz con state
├── data/
│   ├── photoSlots.ts      # 41 zonas de foto (coords + acción)
│   └── textFields.ts      # 80 campos de texto con valores default
├── lib/
│   └── types.ts           # Interfaces compartidas
├── public/
│   ├── pages/             # JPEGs de cada página del PDF (13)
│   └── defaults/          # 41 crops de las fotos originales del W2605-042
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Deploy en Vercel

### Opción 1 — Push a GitHub + import

1. Crea repo en GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yazaki F.A. editor"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/yazaki-fa.git
   git push -u origin main
   ```
2. Ve a https://vercel.com/new
3. Import del repo de GitHub
4. Framework preset: **Next.js** (auto-detectado)
5. Click **Deploy**

Vercel detecta `package.json` y `next.config.mjs` solo. No requiere variables
de entorno para esta versión.

### Opción 2 — CLI directo

```bash
npm install -g vercel
vercel
# Sigue el prompt, primer deploy genera la URL
vercel --prod
```

## Cómo usar la app

- **Inicio**: al cargar la página, un modal pregunta si quieres comenzar con
  las **fotos originales** del reporte W2605-042 o con todos los slots vacíos.
- **Editar texto**: click en cualquier celda o párrafo. Se ilumina amarillo al
  hover, rojo al focus. Se guarda al state automáticamente.
- **Agregar foto**: click en cualquier caja con borde rojo dasheado. Aparece un
  mini-menú con tres opciones:
  - **Use original photo** — usa la foto del reporte W2605-042 original
  - **Upload new** — abre file picker / cámara (móvil)
  - **Cancel**
- **Eliminar foto**: hover sobre la foto puesta → aparece botón `×` rojo.
- **Submit / Generate PDF**: loguea el payload completo a la consola del
  navegador. Distingue en el log entre fotos originales (referenciadas por
  path) y fotos subidas (base64 inline).
- **Reset**: restaura todos los valores del reporte original W2605-042 y
  reabre el modal inicial.

## Próximos pasos sugeridos

- **Persistir reportes**: agregar `/app/api/reports/route.ts` que haga POST al
  backend FastAPI (Railway) o directo a Supabase
- **Generate PDF real**: integrar `html2pdf.js` (cliente) o llamar a un endpoint
  que use WeasyPrint/xhtml2pdf en el backend
- **Templates por modelo**: parametrizar los valores default según el PRC
  (cada modelo de BEC tiene sus propios pasos de test)
- **Multi-tenant**: extender con `report_id` en URL (`/reports/[id]`) para
  cargar reportes guardados

## Notas técnicas

- Las coordenadas de fotos vienen de `PyMuPDF.get_image_info()` sobre el PDF
  original (W2605-042_Failure_Analysis.pdf), filtradas para descartar el logo
  Yazaki y duplicados internos del PDF.
- La página 2 oculta 3 fotos (marcadas naranja por el usuario) con dropzones
  `blank_dropzone` que tienen fondo blanco opaco.
- `aspect-ratio: 8.5/11` en `.page` mantiene proporción carta en cualquier
  ancho de viewport, así que los porcentajes funcionan responsive.
- Las imágenes de fondo se sirven desde `/public/pages/` y se optimizan
  automáticamente por Vercel Image Optimization.
