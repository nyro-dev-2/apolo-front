# Informe completo de PageSpeed Insights  
**Sitio analizado:** https://www.apolomedical.com.pe/  
**Fecha del reporte:** 11 de noviembre de 2025 – 2:31:22 p. m. (GMT-5)  
**Dispositivo:** Móvil (emulación Moto G Power, Lighthouse 13.0.1, Slow 4G)

---

## 1. Resumen general del reporte

### 1.1 Resultados globales (móvil)

- **Performance (Rendimiento):** 66 / 100  
- **Accessibility (Accesibilidad):** 89 / 100  
- **Best Practices (Buenas prácticas):** 92 / 100  
- **SEO:** 100 / 100  

### 1.2 Datos de usuarios reales (Chrome UX Report)

- Sección **“Discover what your real users are experiencing”**:  
  - Muestra **“No Data”**.  
  - Esto significa que **no hay datos suficientes de usuarios reales** para esta página, por lo que las métricas mostradas son principalmente **de laboratorio (Lighthouse)**.

### 1.3 Entorno de prueba

- **Dispositivo emulado:** Moto G Power  
- **Herramienta:** Lighthouse 13.0.1  
- **Navegador:** HeadlessChromium 137.0.7151.119  
- **Condiciones de red:** **Slow 4G throttling**  
- **Tipo de sesión:**  
  - Single page session  
  - Initial page load  

### 1.4 Cobertura del análisis documental

- Se contrastó el reporte sin omitir apartados: métricas principales, oportunidades (imágenes, render blocking, JS heredado), diagnósticos, accesibilidad, buenas prácticas, SEO y listas de chequeos manuales.  
- Los datos duplicados en el reporte (p. ej., bloques repetidos de "Improve image delivery" o "Background and foreground colors do not have sufficient contrast") se documentaron una sola vez en este informe, indicando cuando corresponden al mismo recurso.  
- No se encontraron secciones adicionales en PageSpeed Insights que no estén recogidas en este documento, por lo que **el resumen queda completo respecto a la información proporcionada.**

---

## 2. Métricas principales de rendimiento

### 2.1 Métricas cuantitativas

- **First Contentful Paint (FCP):** **1.5 s**  
- **Largest Contentful Paint (LCP):** **16.6 s**  
- **Total Blocking Time (TBT):** **10 ms**  
- **Cumulative Layout Shift (CLS):** **0**  
- **Speed Index (SI):** **8.4 s**  

### 2.2 Contribución de métricas a la puntuación de Performance

El informe muestra el desglose de cómo cada métrica influye en el puntaje de 66:

- FCP: **+10**  
- LCP: **+0**  
- TBT: **+30**  
- CLS: **+25**  
- SI: **+2**  

> Interpretación: el LCP (16.6 s) es el principal problema de rendimiento; TBT y CLS en cambio están en muy buen estado.

---

## 3. Insights de rendimiento y oportunidades de mejora

### 3.1 Mejora en la entrega de imágenes  
**Sección:** *Improve image delivery* – Est. savings: **2,475 KiB**

El informe señala que la descarga de imágenes es el factor más pesado y propone optimizarlas para reducir los tiempos de carga y mejorar el LCP.

#### 3.1.1 Resumen global

- **Dominio:** apolomedical.com.pe (1st party)  
- **Tamaño total de recursos relacionados:** **2,532.2 KiB**  
- **Ahorro estimado posible:** **2,475.1 KiB**

#### 3.1.2 Recursos específicos

1. **Poster del video principal**
   - Selector: `div.grid > div.relative > div.aspect-video > video.w-full`  
   - HTML:  
     ```html
     <video class="w-full h-full object-cover" controls="" poster="/video-thumbnail.jpg" preload="metadata">
     ```
   - **URL del poster:** `/video-thumbnail.jpg`  
   - **Tamaño del recurso:** **2,450.5 KiB**  
   - **Ahorro estimado:** **2,435.0 KiB**  
   - Observación: el informe recomienda:
     - Usar formatos modernos (WebP, AVIF).
     - Aumentar la compresión de la imagen.

2. **Imagen principal “Equipo quirúrgico especializado realizando una cirugía en sala”**
   - Alt: `Equipo quirúrgico especializado realizando una cirugía en sala`  
   - HTML (simplificado):  
     ```html
     <img alt="Equipo quirúrgico especializado realizando una cirugía en sala"
          decoding="async" data-nimg="fill" class="object-cover"
          style="position: absolute; height: 100%; width: 100%; inset: 0px;"
          sizes="100vw"
          srcset="/_next/image?url=%2Fneurosurgery-medical-equipment-operating-room.jpg&w=64…"
          src="https://www.apolomedical.com.pe/_next/image?url=%2Fneurosurgery-medical-eq…">
     ```
   - **Tamaño original:** **4261 x 2390 px**  
   - **Tamaño mostrado:** **378 x 252 px**  
   - **Tamaño de recurso procesado:** **56.1 KiB**  
   - **Ahorro estimado:** **18.7 KiB**  
   - Observación:
     - La imagen es mucho más grande de lo necesario para el tamaño mostrado.
     - Se recomienda el uso de **imágenes responsivas** para reducir el peso.

3. **Logo SCIENCE MEDIC**
   - Alt: `Logo SCIENCE MEDIC`  
   - HTML (simplificado):  
     ```html
     <img alt="Logo SCIENCE MEDIC" loading="lazy" width="200" height="128"
          decoding="async" data-nimg="1"
          class="flex-shrink-0 h-32 w-auto object-contain"
          style="color:transparent"
          sizes="(max-width: 768px) 50vw, 200px"
          srcset="/_next/image?url=%2Flogos%2FScience_Medic.png&w=384&q=75 384w, …"
          src="https://www.apolomedical.com.pe/_next/image?url=%2Flogos%2FScience_Medic.p…">
     ```
   - **Tamaño natural:** **384 x 469 px**  
   - **Tamaño mostrado:** **105 x 128 px**  
   - **Tamaño de recurso:** **14.9 KiB**  
   - **Ahorro estimado:** **13.8 KiB**  
   - Observación:
     - El archivo es mayor de lo necesario para el tamaño mostrado.
     - Recomienda **imágenes responsivas** y posible mayor compresión.

4. **Logotipo de Apolo Medical**
   - Alt: `Logotipo de Apolo Medical`  
   - HTML (simplificado):  
     ```html
     <img alt="Logotipo de Apolo Medical" decoding="async" data-nimg="fill"
          class="object-contain transition-smooth group-hover:scale-105"
          style="position: absolute; height: 100%; width: 100%; inset: 0px;"
          sizes="56px"
          srcset="/_next/image?url=%2Flogos%2Fapolo-logo.png&w=16&q=75 16w, /_next/image?url…"
          src="https://www.apolomedical.com.pe/_next/image?url=%2Flogos%2Fapolo-logo.png&…">
     ```
   - **Tamaño de recurso:** **10.7 KiB**  
   - **Ahorro estimado:** **7.6 KiB**  
   - Observación:
     - El informe sugiere **aumentar la compresión** para disminuir el peso.

> Nota: La misma recomendación de “Improve image delivery” aparece repetida varias veces en el reporte con los mismos recursos.

---

### 3.2 Peticiones que bloquean el renderizado  
**Sección:** *Render blocking requests* – Est. savings: **140 ms**

Estas peticiones retrasan el render inicial, afectando el LCP.

#### 3.2.1 Recursos implicados

- **Dominio:** apolomedical.com.pe (1st party)  
- **Recurso principal (HTML):**
  - **Transfer Size:** **24.9 KiB**
  - **Duración:** **900 ms**

- **CSS 1:**  
  - URL: `…css/bc16e5d15799e848.css`  
  - **Tamaño:** **23.4 KiB**  
  - **Duración:** **450 ms**

- **CSS 2:**  
  - URL: `…css/2ef6ca6c1d6f9b20.css`  
  - **Tamaño:** **1.4 KiB**  
  - **Duración:** **450 ms**

> Recomendación del informe: **diferir o inyectar en línea** estos recursos críticos para sacarlos de la ruta de renderizado y mejorar el LCP.

---

### 3.3 Reflows forzados (Forced reflow)

Un *forced reflow* ocurre cuando el JavaScript consulta propiedades geométricas (como `offsetWidth`) después de cambios en el DOM que invalidan los estilos, pudiendo afectar el rendimiento.

#### 3.3.1 Detalle

- **Función principal:** `…chunks/470-2693e40ab9b19831.js:2:36614`  
  - **Tiempo total de reflow:** **32 ms**

- **Fuente adicional:** `…app/layout-f1a01617cd5aa6c0.js:1:7582`  
  - **Tiempo total de reflow:** **32 ms**

Aunque el tiempo es relativamente bajo, PageSpeed lo marca como punto a revisar.

---

### 3.4 Desglose del LCP (LCP breakdown)

El LCP está asociado a la imagen de la sala de cirugía:

- Elemento LCP:
  ```html
  <img alt="Equipo quirúrgico especializado realizando una cirugía en sala" ... >
    ```

#### 3.4.1 Componentes de LCP

* **Time to first byte (TTFB):** **0 ms**
* **Resource load delay:** **380 ms**
* **Resource load duration:** **770 ms**
* **Element render delay:** **1,380 ms**

> El informe señala que, idealmente, la mayor parte del tiempo de LCP debería invertirse en la carga del recurso y no en retrasos de renderizado.

---

### 3.5 Descubrimiento de la petición LCP

**Sección:** *LCP request discovery*

Recomendaciones para optimizar cómo se solicita la imagen LCP:

* **lazy load not applied**
* **`fetchpriority=high` debería aplicarse**
* **La petición es detectable en el documento inicial**

Es decir, la imagen LCP ya se descubre temprano, pero se recomienda:

* No aplicar lazy-loading a la imagen LCP.
* Asignarle `fetchpriority="high"` para priorizarla en la carga.

---

### 3.6 Árbol de dependencias de red

**Sección:** *Network dependency tree*

Objetivo: evitar cadenas críticas de peticiones que alargan el tiempo de carga.

* **Maximum critical path latency:** **764 ms**

#### 3.6.1 Cadena principal

* **Initial Navigation:** `https://www.apolomedical.com.pe`

  * **Latencia:** 391 ms
  * **Tamaño:** 12.51 KiB

* **CSS principal 1:** `…css/bc16e5d15799e848.css`

  * **Latencia:** 764 ms
  * **Tamaño:** 23.42 KiB

* **CSS principal 2:** `…css/2ef6ca6c1d6f9b20.css`

  * **Latencia:** 739 ms
  * **Tamaño:** 1.43 KiB

#### 3.6.2 Preconexiones

* **Preconnected origins:**

  * El informe indica que **no hubo orígenes preconectados**.

* **Preconnect candidates:**

  * “No additional origins are good candidates for preconnecting”.
  * Es decir, no se sugieren preconexiones adicionales.

---

### 3.7 JavaScript heredado (Legacy JavaScript)

**Est. savings:** **12 KiB**

Se identifican polyfills y transformaciones JS que probablemente no son necesarios para navegadores modernos.

* **Dominio:** apolomedical.com.pe (1st party)
* **Archivo:** `…chunks/470-2693e40ab9b19831.js`

  * **Bytes desperdiciados estimados:** **11.5 KiB**

#### 3.7.1 Funciones polyfilled señaladas

* `Array.prototype.at`
* `Array.prototype.flat`
* `Array.prototype.flatMap`
* `Object.fromEntries`
* `Object.hasOwn`
* `String.prototype.trimEnd`
* `String.prototype.trimStart`

Se sugiere revisar el proceso de *build* para no transpilar características que ya son “Baseline” en navegadores actuales, salvo que se soporten navegadores muy antiguos.

---

## 4. Diagnósticos adicionales de rendimiento

### 4.1 Reducir JavaScript sin usar

**Sección:** *Reduce unused JavaScript* – Est. savings: **59 KiB**

* **Dominio:** apolomedical.com.pe (1st party)
* **Total de JS analizado:** **66.2 KiB**
* **Ahorro estimado:** **58.8 KiB**

#### 4.1.1 Archivos implicados

1. `…chunks/2433-d250cc2e68985241.js`

   * **Tamaño:** **39.1 KiB**
   * **Ahorro potencial:** **35.3 KiB**

2. `…chunks/2242-2f5fa0995c9dd7a7.js`

   * **Tamaño:** **27.0 KiB**
   * **Ahorro potencial:** **23.5 KiB**

---

### 4.2 Evitar payloads enormes de red

**Sección:** *Avoid enormous network payloads*
**Tamaño total de la página:** **3,262 KiB**

Los payloads grandes se correlacionan con tiempos de carga altos.

#### 4.2.1 Recursos principales

* **HTML/JS/CSS global (dominio):** `apolomedical.com.pe`

  * **Transfer Size:** **3,033.2 KiB**

* **Imagen poster del video:** `/video-thumbnail.jpg`

  * **Transfer Size:** **2,451.0 KiB**

* **Imagen neurocirugía principal:** `/neurosurgery-medical-equipment-operating-room.jpg`

  * **Transfer Size:** **162.2 KiB**

* **Imagen adicional:** `/advanced-neurosurgery-equipment.jpg`

  * **Transfer Size:** **123.7 KiB**

* **Imagen procesada:** `/_next/image?url=…`

  * **Transfer Size:** **56.7 KiB**

* **JS chunks:**

  * `…chunks/8135df50-3d2a57f036bc1095.js` → **53.9 KiB**
  * `…chunks/470-2693e40ab9b19831.js` → **45.5 KiB**
  * `…chunks/2433-d250cc2e68985241.js` → **39.8 KiB**
  * `…chunks/2242-2f5fa0995c9dd7a7.js` → **27.7 KiB**

* **Fuentes (webfonts woff2):**

  * `…media/e4af272ccee01ff0-s.p.woff2` → **47.9 KiB**
  * `…media/4c9affa5bc8f420e-s.p.woff2` → **24.6 KiB**

---

### 4.3 Tareas largas en el hilo principal

**Sección:** *Avoid long main-thread tasks* – 1 long task

Detalla las tareas más largas del hilo principal, que afectan la respuesta a la interacción (TBT).

* **Dominio:** apolomedical.com.pe (1st party)
* **Archivo:** `…chunks/8135df50-3d2a57f036bc1095.js`

  * **Start Time:** 14,551 ms
  * **Duration:** **60 ms**

Aunque TBT total es bajo (10 ms), se señala esta tarea específica como la más pesada.

---

### 4.4 Auditorías de rendimiento superadas (17)

El informe indica que se superan **17 auditorías** relevantes, entre ellas:

* Use efficient cache lifetimes
* Layout shift culprits
* Document request latency
* Optimize DOM size
* Duplicated JavaScript
* Font display
* INP breakdown
* 3rd parties
* Optimize viewport for mobile
* Minify CSS
* Minify JavaScript
* Reduce unused CSS
* User Timing marks and measures (se sugiere instrumentar la app para métricas reales)
* JavaScript execution time: **0.2 s**
* Minimizes main-thread work: **0.5 s**
* Avoid non-composited animations
* Image elements have explicit width and height

---

## 5. Accesibilidad (Score: 89)

### 5.1 Nombres y etiquetas (Names and labels)

**Problema:** botones sin nombre accesible.

* Cuando un botón no tiene nombre accesible, el lector de pantalla lo anuncia solo como “button”.

**Elemento fallando:**

* `nav.z-50 > div.container > div.flex > button.inline-flex`

  ```html
  <button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md…">
  ```

Se repite varias veces en el informe el mismo problema.

---

### 5.2 Contraste de color (Contrast)

**Problema:** Colores de fondo y texto sin suficiente contraste.

Elementos señalados:

* Botones de llamada a la acción:

  * **“Solicitar cotización”**

    ```html
    <a data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap transition…" href="/contacto">
    ```
  * **“Ver productos”** (varias instancias)

    ```html
    <a data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md…" href="/productos">
    ```

* Tarjetas de productos y especialidades:

  * Tarjeta **“Sistemas Craneales – Craneotomos, sistemas de fijación craneal y clips de aneurisma…”**

    ```html
    <div data-slot="card" class="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm …">
    ```
  * Tarjeta **“Implantes Espinales – Sistemas de fijación vertebral y cages intervertebrales…”**
  * Tarjeta **“Neuroendoscopía – Equipos de neuroendoscopía y aspiradores ultrasónicos…”**

* Sección de especialidades:

  ```html
  <section id="especialidades" class="py-24 bg-secondary/30">
  ```

* Textos generales con clase `body.__variable_f367f3 … font-body antialiased`.

* Footer y firma:

  * **“Apolo Medical HT – Innovación y confianza en soluciones médicas avanzadas para cirugía neurológica…”**
  * Texto **“Made with 🤖 by Nyro”**

    ```html
    <p class="text-xs text-muted-foreground/70">
    ```
  * Texto **“Nyro”** (como marca en el footer)

    ```html
    <span class="font-medium">
    ```

El informe repite varias veces este mismo grupo de elementos como ejemplos de contraste insuficiente.

---

### 5.3 Jerarquía de encabezados (Navigation – Heading elements)

**Problema:** encabezados no están en orden secuencial descendente.

Elementos señalados:

* `Productos de Calidad`

  ```html
  <h3 class="text-lg font-semibold text-foreground">
  ```
* `Respaldo Científico`

  ```html
  <h4 class="font-bold text-foreground mb-2 text-lg">
  ```

El uso de `h3` seguido de `h4` es válido, pero el informe destaca la importancia de mantener un orden y estructura semántica clara sin saltos o inconsistencias a nivel global.

---

### 5.4 Audio y video

El informe indica:

* `<video> elements contain a <track> element with [kind="captions"]`.

Esto se presenta como parte de las oportunidades de ofrecer alternativas para audio y video, pero también refleja que **hay soporte de subtítulos** en los videos, lo cual es positivo para accesibilidad.

---

### 5.5 Ítems para revisión manual (10)

El informe señala **10 elementos adicionales** bajo “Additional items to manually check”, sin detallarlos uno por uno. Indica que:

* Son aspectos que las herramientas automáticas **no pueden cubrir completamente**, y recomienda una **revisión manual de accesibilidad**.

---

### 5.6 Auditorías de accesibilidad superadas y no aplicables

* **Passed audits:** 22
* **Not applicable:** 34

Indica que una buena cantidad de criterios de accesibilidad se cumplen, aunque con los problemas puntuales ya descritos.

---

## 6. Buenas prácticas (Best Practices – Score: 92)

### 6.1 Experiencia de usuario – Imágenes de baja resolución

**Sección:** *Serves images with low resolution*

Elemento señalado:

* Icono de **WhatsApp**:

  ```html
  <img src="/whatsappicon.png" alt="WhatsApp" class="h-9 w-9">
  ```

  * **Tamaño mostrado:** 36 x 36
  * **Tamaño natural:** 50 x 50
  * **Tamaño esperado:** 54 x 54

El informe sugiere que las dimensiones naturales deberían ser proporcionales al tamaño mostrado y a la densidad de píxeles para mayor claridad (imágenes responsivas).

---

### 6.2 Errores de navegador en consola

**Sección:** *Browser errors were logged to the console*

Error detallado:

* **Origen:** apolomedical.com.pe (1st party)
* **Recurso:** `/videos/presentation.mp4`
* **Descripción:** `Failed to load resource: net::ERR_CONNECTION_FAILED`

Indica que hay un video que no está cargando correctamente desde la ruta especificada.

---

### 6.3 Seguridad y confianza (Trust and Safety)

El informe menciona varios aspectos relacionados con políticas de seguridad (sin aclarar en el fragmento si se cumplen o se recomiendan):

* **Ensure CSP is effective against XSS attacks**
* **Use a strong HSTS policy**
* **Ensure proper origin isolation with COOP**
* **Mitigate clickjacking with XFO or CSP**
* **Mitigate DOM-based XSS with Trusted Types**

Estos puntos aparecen como checklist de seguridad avanzada relacionados con:

* Content Security Policy (CSP)
* HTTP Strict Transport Security (HSTS)
* Cross-Origin-Opener-Policy (COOP)
* Protecciones contra clickjacking
* Trusted Types para XSS basado en DOM

---

### 6.4 Auditorías de buenas prácticas superadas y no aplicables

* **Passed audits:** 11
* **Not applicable:** 2

Refuerza que, en general, el sitio cumple con la mayoría de recomendaciones de buenas prácticas modernas.

---

## 7. SEO (Score: 100)

### 7.1 Cumplimiento general

El informe indica que la página cumple con las **buenas prácticas básicas de SEO técnico** evaluadas por Lighthouse:

* Puntuación: **100 / 100**

### 7.2 Datos estructurados

* Sección: *Additional items to manually check*

  * Señala que los **datos estructurados son válidos**.
  * Invita a usar validadores adicionales externos para chequeos más profundos.

### 7.3 Auditorías de SEO superadas y no aplicables

* **Passed audits:** 8
* **Not applicable:** 2

Esto sugiere que:

* Hay una correcta configuración de meta tags clave.
* Hay un buen manejo de metas de viewport, títulos, descripciones, etc.
* No hay problemas técnicos básicos que impidan el indexado.

---

## 8. Conclusiones generales del análisis

1. **Rendimiento (66/100):**

   * El principal cuello de botella es el **Largest Contentful Paint (16.6 s)**, muy afectado por:

     * El **poster del video** extremadamente pesado (`/video-thumbnail.jpg` ~2.4 MB).
     * Imágenes grandes no adaptadas a su tamaño real en pantalla.
   * A pesar de esto, el **TBT (10 ms)** y el **CLS (0)** son muy buenos, lo que indica:

     * Poco bloqueo por JavaScript.
     * Estabilidad visual adecuada (sin saltos de layout).

2. **Peso de la página:**

   * El payload total es de **3,262 KiB**, muy alto para móvil en 4G.
   * La mayor parte del peso viene de **imágenes y video**, seguido por algunos chunks de JS y fuentes.

3. **JavaScript y CSS:**

   * Hay oportunidad de:

     * Reducir **JS sin usar** (hasta ~59 KiB).
     * Aligerar polyfills legacy (~12 KiB).
     * Optimizar peticiones CSS que bloquean el renderizado.

4. **Accesibilidad (89/100):**

   * Globalmente buena, pero con tres frentes claros de mejora:

     * Botones sin **nombre accesible** (especialmente el botón del nav).
     * **Contraste** insuficiente en CTAs, tarjetas y textos en secciones y footer.
     * Orden de **encabezados** no completamente secuencial en algunos bloques.

5. **Buenas prácticas (92/100):**

   * Pequeños detalles:

     * Icono de WhatsApp con resolución mejorable.
     * Error de carga en el recurso `/videos/presentation.mp4`.
   * Se mencionan puntos de seguridad avanzada (CSP, HSTS, COOP, etc.) como checklist.

6. **SEO (100/100):**

   * Excelente estado según las pruebas de Lighthouse:

     * Sin problemas técnicos básicos de indexación.
     * Datos estructurados válidos.

En conjunto, el sitio **es sólido en accesibilidad, buenas prácticas y SEO**, pero el **rendimiento móvil** se ve fuertemente limitado por:

* Tamaño excesivo de imágenes y del poster del video.
* Cadenas de recursos críticos (HTML + CSS) que podrían optimizarse.
* Oportunidades claras de reducción de JS y payload total.

Todo esto ofrece un mapa muy concreto de mejoras para optimizar la experiencia móvil, especialmente pensando en usuarios con conexiones 4G y dispositivos de gama media.

---

## 9. Correspondencia de hallazgos con el código fuente

- **Poster de video y error de carga:** `app/page.tsx` (sección "Tecnología Médica de Vanguardia") referencia el `<video>` con `poster="/video-thumbnail.jpg"` y `src="/videos/presentation.mp4"`; los activos están en `public/video-thumbnail.jpg` y `public/videos/presentation.mp4`.  
- **Imagen LCP y héroe:** `app/page.tsx` establece la `Image` de Next con `src="/neurosurgery-medical-equipment-operating-room.jpg"` dentro de la sección `#hero`; el archivo fuente reside en `public/neurosurgery-medical-equipment-operating-room.jpg`.  
- **Imagen de tecnología de fondo:** la utilidad `bg-[url('/advanced-neurosurgery-equipment.jpg')]` en `app/page.tsx` (sección `#tecnologia`) usa la imagen grande `public/advanced-neurosurgery-equipment.jpg`.  
- **Logo SCIENCE MEDIC:** aunque se retiró del footer, la imagen pesada sigue en `public/logos/Science_Medic.png` y puede cargarse en otras páginas históricas o en caché.  
- **Logotipo de cabecera:** `components/navigation.tsx` usa `<Image src="/logos/apolo-logo.png" ...>`; el activo está en `public/logos/apolo-logo.png`.  
- **Icono de WhatsApp:** `components/whatsapp-button.tsx` ahora usa el ícono vectorial de `lucide-react` en lugar de `/whatsappicon.png`; revisar si el asset antiguo sigue siendo necesario en `public/`.  
- **Botón sin nombre accesible:** el botón hamburguesa del menú móvil en `components/navigation.tsx` ya cuenta con `aria-label`, `aria-expanded` y `aria-controls` para describir el menú.  
- **Contrastes insuficientes y jerarquía de encabezados:** los estilos de CTA y tarjetas provienen de `app/page.tsx` (secciones `#hero`, `#especialidades`, tarjetas con `Card`). Las clases Tailwind se definen en `app/globals.css` y en componentes `ui/button.tsx`, `ui/card.tsx`.  
- **Carga de CSS crítico:** el layout principal (`app/layout.tsx`) importa `globals.css` y hace que Next genere los bundles `bc16e5d15799e848.css` y `2ef6ca6c1d6f9b20.css`; revisar estilos globales y dependencias de componentes ayuda a reducir el CSS bloqueante.  
- **Bundles de JavaScript con código no utilizado/legacy:** los imports en `app/page.tsx`, `components/partner-carousel.tsx`, `components/product-image-carousel.tsx` y utilidades en `lib/utils.ts` alimentan los chunks `2433`, `2242` y `470`; la configuración de build está en `next.config.mjs` y `tsconfig.json`.

---

## 10. Estrategia óptima de remediación

1. **Optimización agresiva de medios:**  
  - Convertir las imágenes críticas (`video-thumbnail.jpg`, `neurosurgery-medical-equipment-operating-room.jpg`, `advanced-neurosurgery-equipment.jpg`, logotipos) a WebP/AVIF y servir variantes responsivas con `next/image` (`sizes`, `fill`, `priority`, `fetchPriority="high"`).  
  - Sustituir el póster del video por una miniatura comprimida (<150 KiB) o utilizar un `blurDataURL`.  
  - Habilitar `loading="lazy"` solo en imágenes no LCP y revisar `PartnerCarousel` y otras galerías.

2. **Video remoto o diferido:**  
  - Asegurar que `/videos/presentation.mp4` exista y esté optimizado (bitrate reducido) o cargarlo vía CDN/streaming.  
  - Considerar diferir la carga del `source` hasta la interacción (componente dinámico) para reducir payload inicial.

3. **CSS crítico y Tailwind:**  
  - Auditar `globals.css` y componentes UI para eliminar clases no utilizadas.  
  - Evaluar `next/font` para inyectar estilos esenciales inline y revisar si se puede habilitar `optimizeCss` (Next 14+) o usar `@next/bundle-analyzer` para identificar hojas pesadas.

4. **Depuración de JavaScript:**  
  - Aplicar `dynamic(() => import(...), { ssr: false, loading: ... })` a widgets secundarios (carruseles).  
  - Revisar dependencias de `partner-carousel` y `product-image-carousel` para extraer código compartido y eliminar polyfills no necesarios mediante `next.config.mjs` (`modularizeImports`, `experimental: { forceSwcTransforms: true }`).

5. **Accesibilidad y UX:**  
  - Añadir `aria-label` al botón del menú móvil y revisar otros botones generados por `Button`.  
  - Ajustar tokens de color en `tailwind.config` o `globals.css` para alcanzar ratios de contraste AA (3:1 en UI, 4.5:1 en texto).  
  - Reestructurar encabezados en secciones de tarjetas (ej. usar `h2` para el título de sección, `h3` para tarjetas, evitar saltos).  
  - Mejorar resolución del icono de WhatsApp (SVG o PNG 72x72 común).

6. **Hardening de seguridad y mejores prácticas:**  
  - Configurar cabeceras en `next.config.mjs` (`headers()`): CSP, HSTS, COOP, X-Frame-Options y Trusted Types según recomendaciones.  
  - Verificar el manejo de fuentes (`display=swap`) y revisar el service worker o integraciones externas.

7. **Monitoreo y pruebas continuas:**  
  - Implementar mediciones en tiempo real con `web-vitals` (INP, LCP, CLS) y centralizar en Analytics o APM.  
  - Establecer pruebas automatizadas de Lighthouse (CI) para validar regresiones.

---

## 11. Checklist para completar la refactorización

- [x] Optimizar y reemplazar `video-thumbnail.jpg`, `neurosurgery-medical-equipment-operating-room.jpg`, `advanced-neurosurgery-equipment.jpg` y logotipos por versiones WebP/AVIF responsivas.  
- [ ] Resolver el error 404/ERR_CONNECTION_FAILED de `/videos/presentation.mp4` o sustituir por streaming externo.  
- [x] Declarar `fetchPriority="high"` y eliminar `loading="lazy"` en la imagen LCP del héroe.  
- [x] Reducir el CSS crítico auditando `globals.css` y componentes compartidos; validar tamaño de los bundles generados.
- [x] Identificar y dividir imports pesados (`partner-carousel`, `product-image-carousel`, librerías) usando carga dinámica o tree-shaking.  
- [x] Actualizar el botón hamburguesa en `components/navigation.tsx` con un `aria-label` descriptivo.  
- [x] Ajustar tokens de color y estilos de botones/tarjetas para cumplir contrastes AA.  
- [x] Revisar jerarquía de encabezados en `app/page.tsx` y otras vistas para evitar saltos (`h2` → `h3`).  
- [x] Sustituir `/whatsappicon.png` por SVG o PNG de mayor densidad y actualizar referencia en el componente correspondiente.  
- [ ] Configurar cabeceras de seguridad (CSP, HSTS, COOP, XFO, Trusted Types) en `next.config.mjs` o infraestructura.  
- [ ] Habilitar recolección de métricas reales (web-vitals) y programar pruebas Lighthouse periódicas.
