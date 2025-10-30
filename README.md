# Apolo Medical HT - Frontend

Sitio web corporativo para Apolo Medical HT S.A.C., una empresa peruana dedicada a la importación y distribución de dispositivos médico-quirúrgicos, implantes de columna y productos de neurocirugía.

## Resumen

- Framework: Next.js (app router)
- Lenguaje: TypeScript + React 19
- Estilos: Tailwind CSS (v4) + CSS global en `styles/globals.css`
- Otros: componentes UI personalizados y librerías Radix, Lucide, Framer Motion, Embla Carousel

Este repositorio contiene el frontend del sitio (UI, rutas, y datos estáticos de productos).

## Contenido principal

- `app/` - Rutas y páginas del sitio usando App Router (Next.js). Contiene `layout.tsx`, `page.tsx` y subrutas como `productos`, `contacto`, `nosotros`, `distribucion`, `noticias`.
- `components/` - Componentes React reutilizables: `navigation.tsx`, `footer.tsx`, `partner-carousel.tsx`, `product-image-carousel.tsx`, `scroll-to-top.tsx`, `theme-provider.tsx`, y carpeta `ui/` con muchos componentes UI (botones, cards, inputs, etc.).
- `lib/` - Datos y utilidades. `products.ts` define el tipo `Product` y una lista `products` usada por la app. También exporta `getProductById` y `getProductsByCategory`.
- `styles/` - Estilos globales (Tailwind + variables CSS, temas).
- `public/` - Imágenes, logos, assets (ej. `products/`, `logos/`, imágenes hero y videos referenciados).

## Stack y dependencias clave

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Radix UI primitives (varios paquetes)
- Lucide icons
- Embla Carousel, Framer Motion, Recharts, Sonner (toasts)

Revisa `package.json` para la lista completa de dependencias.

## Scripts (según package.json)

- `pnpm dev` o `npm run dev` — Inicia Next.js en modo desarrollo (`next dev`).
- `pnpm build` — Construye la app para producción (`next build`).
- `pnpm start` — Ejecuta la app construida (`next start`).
- `pnpm lint` — Ejecuta el linter (`next lint`).

> Nota: `pnpm` es recomendado por el lockfile (`pnpm-lock.yaml`) pero puedes usar `npm` o `yarn` si lo prefieres.

## Instalación (local)

1. Clona el repositorio y entra en la carpeta:

```powershell
cd "g:\Nyro\Apolo Medical\apolo-front"
```

2. Instala dependencias (ejemplo con pnpm):

```powershell
pnpm install
```

Si usas npm:

```powershell
npm install
```

3. Ejecuta en modo desarrollo:

```powershell
pnpm dev
```

La app quedará disponible típicamente en `http://localhost:3000`.

## Estructura de carpetas (resumen)

- app/
  - layout.tsx - Root layout (incluye fonts, Navigation, Footer, Analytics)
  - page.tsx - Página principal (home)
  - /productos - Rutas de productos (incluye pages dinámicas en `app/productos/[id]/page.tsx`)
  - /contacto, /nosotros, /distribucion, /noticias
- components/
  - navigation.tsx - Barra de navegación responsiva
  - footer.tsx - Footer con contactos, partners y certificaciones
  - partner-carousel.tsx - Carrusel de socios/partners
  - product-image-carousel.tsx - Carrusel de imágenes para producto
  - theme-provider.tsx - Proveedor de tema (next-themes u otro)
  - scroll-to-top.tsx - Componente para volver arriba
  - ui/ - Biblioteca interna de componentes reutilizables (botones, cards, inputs, etc.)
- lib/
  - products.ts - Definición de productos (tipo `Product`) y funciones utilitarias
- public/ - Imágenes, PDFs y videos referenciados
- styles/ - `globals.css` con variables CSS y Tailwind imports

## Datos de productos

Los productos están definidos en `lib/products.ts` como un array exportado `products: Product[]`.

Tipo `Product` (resumen):
- `id: string` (slug identificador, usado en rutas)
- `name: string`
- `category: 'neurocirugia' | 'columna' | 'accesorios'`
- `manufacturer: string`
- `shortDescription`, `fullDescription`
- `features: string[]`
- `specifications?: { label: string; value: string }[]`
- `images: string[]` (rutas en `public/products/`)
- `videoUrl?`, `pdfUrl?`
- `keywords?: string[]`

Funciones exportadas:
- `getProductById(id: string)` — devuelve un producto o `undefined`.
- `getProductsByCategory(category: ProductCategory)` — filtra por categoría.

Cómo añadir/editar productos:
1. Añade las imágenes (y videos/PDF) correspondientes en `public/products/`.
2. Edita `lib/products.ts` y agrega un nuevo objeto `Product` con `id` único (usado en rutas).
3. Asegúrate de usar rutas relativas correctas en `images`, `videoUrl` y `pdfUrl`.

## Componentes y patrones importantes

- App Router: el proyecto usa la carpeta `app/` de Next.js con `layout.tsx` y páginas anidadas.
- `RootLayout` importa fuentes de Google a través de `next/font/google` y envuelve la app con `Navigation`, `Footer` y `Analytics` de Vercel.
- UI: hay una carpeta `components/ui` con muchos componentes que parecen seguir un sistema de diseño (botones, card, input, etc.).
- `Navigation` es cliente (`"use client"`) y maneja el estado del menú móvil y el efecto de scroll.
- `Footer` es un componente estático con información de contacto y partners.

## Notas sobre configuración

- `next.config.mjs` desactiva optimizaciones de imágenes (`images.unoptimized = true`) y permite ignorar errores de ESLint/TypeScript durante el build (no recomendado para producción sin supervisión).
- `tsconfig.json` está configurado con `paths` que permiten `@/*` como alias a la raíz del proyecto.

## Despliegue

Sugerencias para desplegar (Vercel u otro proveedor compatible con Next.js):

1. Build:

```powershell
pnpm build
```

2. Start (si empleas un servidor de Nodejs para servir la build):

```powershell
pnpm start
```

3. En Vercel simplemente conecta el repositorio y usa la configuración por defecto de Next.js. El `next.config.mjs` ya tiene settings para evitar fallos de build por types/eslint.

## Contribuciones

- Sigue el estándar del repositorio para TypeScript y Tailwind.
- Si agregas dependencias, actualiza `pnpm-lock.yaml` (o el lockfile que uses).
- Para cambios en la lista de productos, edita `lib/products.ts` y añade los assets en `public/products/`.

## Tareas recomendadas / Próximos pasos

- Añadir tests unitarios simples para utilidades en `lib/` (por ejemplo para `getProductById`).
- Agregar validación de datos en tiempo de build o en el admin (si se añade CMS) para evitar IDs duplicados.
- Habilitar checks de TypeScript y ESLint en el CI (actualmente `next.config.mjs` los ignora durante build).

## Contacto

Repo preparado para Apolo Medical HT. Para dudas sobre el frontend o para coordinar despliegues, contacta al equipo de desarrollo responsable.
