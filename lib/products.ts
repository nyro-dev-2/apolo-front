export interface Product {
  id: string
  name: string
  category: "neurocirugia" | "columna" | "accesorios"
  shortDescription: string
  fullDescription: string
  features: string[]
  specifications?: { label: string; value: string }[]
  images: string[]
  pdfUrl?: string
}

export const products: Product[] = [
  {
    id: "craneotomo-midas-rex",
    name: "Craneótomo Midas Rex™ Legend EHS",
    category: "neurocirugia",
    shortDescription:
      "Sistema quirúrgico de alta velocidad para neurocirugía. Combina microdebridador, taladro y sierra para cortes precisos en tejido óseo y blando.",
    fullDescription:
      "El Craneótomo Midas Rex™ Legend EHS de Medtronic es un sistema de alta precisión diseñado para la eliminación controlada de tejido duro y blando en procedimientos de neurocirugía craneal y de base de cráneo. Combina una consola de control avanzada, bombas de irrigación integradas, pedal ergonómico y piezas de mano intercambiables para ofrecer potencia, precisión y seguridad en cada intervención. Ideal para procedimientos neuroquirúrgicos, de columna y otorrinolaringología (ENT).",
    features: [
      "Consola de control avanzada con regulación digital de velocidad y torque",
      "Bombas de irrigación integradas para enfriamiento continuo",
      "Pedal ergonómico de doble función con control de velocidad variable",
      "Piezas de mano intercambiables: microdebridador, taladro y sierra quirúrgica",
      "Eliminación precisa de tejido duro y blando con mínimo trauma",
      "Sistema de seguridad integrado contra sobrecarga térmica y eléctrica",
      "Diseño modular y compatible con accesorios Medtronic Legend y Stylus",
    ],
    specifications: [
      { label: "Tipo", value: "Sistema microdebridador de alta velocidad" },
      { label: "Aplicación", value: "Neurocirugía craneal, columna y base de cráneo" },
      { label: "Velocidad máxima", value: "Hasta 75,000 rpm" },
      { label: "Fuente de energía", value: "Eléctrica (consola EC200 / Stylus EHS)" },
      { label: "Modo de control", value: "Pedal de pie variable o interfaz manual" },
      { label: "Torque", value: "Alto, ajustable según aplicación" },
      { label: "Sistema de irrigación", value: "Bomba peristáltica integrada" },
      { label: "Componentes incluidos", value: "Consola, bombas, pedal, piezas de mano, fresas y cables" },
    ],
    images: [
      "/products/craneotomo-midas-rex-1.jpg",
      "/products/craneotomo-midas-rex-2.jpg",
      "/products/craneotomo-midas-rex-3.jpg",
      "/products/craneotomo-midas-rex-4.jpg",
    ],
  },
  {
    id: "aspirador-ultrasonico-misonix",
    name: "Aspirador Ultrasónico Misonix® Sonastar RF 1000",
    category: "neurocirugia",
    shortDescription:
      "Sistema ultrasónico multifuncional con pedal inalámbrico de 4 funciones para resección precisa de hueso y tejidos blandos.",
    fullDescription:
      "El Misonix® Sonastar RF 1000 es un sistema quirúrgico ultrasónico que combina fragmentación, aspiración e irrigación en una sola plataforma. Diseñado para neurocirugía y cirugía espinal, permite la eliminación controlada de hueso, tumores calcificados y tejidos blandos con mínima afectación del tejido sano. Incluye pedal inalámbrico de 4 funciones y control electrónico con respuesta dinámica según el tejido. Soporta integración de coagulación monopolar (RF) de forma simultánea con la aspiración ultrasónica.",
    features: [
      "Pedal inalámbrico progresivo de 4 funciones",
      "Frecuencia ultrasónica de 23 kHz con generador piezoeléctrico",
      "Fragmentación, aspiración e irrigación simultáneas",
      "Respuesta dinámica: ajuste automático de potencia según el tejido",
      "Low Vac System (bajo vacío) para control delicado de aspiración",
      "Coagulación monopolar opcional integrada (módulo RF)",
      "Piezas de mano universales esterilizables y ergonómicas",
      "Interfaz intuitiva con control digital de parámetros",
    ],
    specifications: [
      { label: "Tipo", value: "Aspirador ultrasónico quirúrgico multifuncional" },
      { label: "Aplicación", value: "Neurocirugía y cirugía espinal; resección tumoral" },
      { label: "Frecuencia ultrasónica", value: "≈ 23 kHz" },
      { label: "Piezas de mano", value: "2 piezas universales de 23 kHz (esterilizables)" },
      { label: "Modo de control", value: "Pedal inalámbrico de 4 funciones y panel frontal" },
      { label: "Aspiración", value: "Low Vac System para bajo vacío controlado" },
      { label: "Coagulación", value: "Monopolar opcional (módulo RF), simultánea a la aspiración" },
      { label: "Fuente de energía", value: "Compatible con 110/220/230 V AC, 50/60 Hz" },
      { label: "Funciones integradas", value: "Fragmentación, aspiración e irrigación" },
      { label: "Registro/Regulaciones", value: "FDA (p. ej., K212060); cumplimiento de normativas internacionales" },
      { label: "Componentes (según configuración)", value: "Consola RF 1000, pedal inalámbrico, piezas de mano, cánulas, sistema de irrigación; módulos RF opcionales" }
    ],
    images: [
      "/products/aspirador-misonix-1.jpg",
      "/products/aspirador-misonix-2.jpg",
      "/products/aspirador-misonix-3.jpg",
    ],
  },
{
  id: "neuroendoscopio-aesculap",
  name: "Neuroendoscopio Aesculap® MINOP®",
  category: "neurocirugia",
  shortDescription:
    "Sistema modular de neuroendoscopia Full HD para procedimientos mínimamente invasivos en neurocirugía.",
  fullDescription:
    "El sistema Aesculap® MINOP® es un neuroendoscopio modular de alta precisión diseñado para procedimientos neuroquirúrgicos mínimamente invasivos. Compatible con ópticas Full HD y disponible en direcciones de visión de 0° y 30°, ofrece una calidad de imagen excepcional y una ergonomía superior. Su diseño modular permite combinar distintas ópticas, vainas de trabajo e instrumentos, optimizando la versatilidad y la seguridad intraoperatoria. Ideal para ventriculostomías, biopsias, resecciones tumorales y exploraciones endoscópicas cerebrales.",
  features: [
    "Compatibilidad con cámaras Full HD (Aesculap EinsteinVision® o similares)",
    "Ópticas de 0° y 30° de alta definición",
    "Sistema modular adaptable a múltiples procedimientos neuroendoscópicos",
    "Diseño ergonómico y balanceado para mayor precisión",
    "Instrumental intercambiable y de fácil esterilización",
    "Calidad óptica alemana con transmisión de luz superior",
    "Ideal para neurocirugía mínimamente invasiva (ventriculostomía, biopsia, resección tumoral)",
  ],
  specifications: [
    { label: "Tipo", value: "Sistema de neuroendoscopia modular" },
    { label: "Resolución", value: "Full HD (1920 x 1080 px)" },
    { label: "Ángulos de visión", value: "0° y 30°" },
    { label: "Compatibilidad", value: "Sistema de cámara EinsteinVision® o fuentes de luz estándar (Xenón/LED)" },
    { label: "Material del endoscopio", value: "Acero inoxidable médico con óptica multicapa de alta transmisión" },
    { label: "Diámetro de las ópticas", value: "2.7 mm a 4 mm según aplicación" },
    { label: "Aplicaciones principales", value: "Ventriculostomía, biopsia cerebral, resección tumoral y exploración endoscópica" },
    { label: "Fabricante", value: "Aesculap® (B. Braun Melsungen AG, Alemania)" },
    { label: "Certificaciones", value: "CE, ISO 13485, FDA" },
  ],
  images: [
    "/products/neuroendoscopio-aesculap-1.jpeg",
    "/products/neuroendoscopio-aesculap-2.jpeg",
    "/products/neuroendoscopio-aesculap-3.jpeg",
  ],
  },
  {
    id: "fijacion-craneal-craniofix",
    name: "Fijación Craneal Craniofix 2",
    category: "neurocirugia",
    shortDescription:
      "Sistema de fijación craneal en aleación de titanio Ti6Al4V, biocompatible, estable y compatible con resonancia magnética.",
    fullDescription:
      "El sistema CranioFix® 2 es un dispositivo de fijación craneal fabricado en titanio Ti6Al4V (aleación de alta pureza, grado médico) diseñado para el cierre seguro de colgajos óseos tras una craneotomía o para la fijación de fragmentos óseos del neurocráneo. Proporciona una fijación mecánicamente estable, con baja altura de perfil para resultados cosméticos óptimos y total compatibilidad con resonancia magnética (MRI 1.5 T y 3.0 T). El sistema ofrece una aplicación rápida (menos de 2 minutos por clamp) gracias a su mecanismo de sujeción reproducible con fuerza definida, reduciendo el tiempo quirúrgico y mejorando la seguridad del paciente. Es ampliamente utilizado a nivel mundial, con más de 3.5 millones de implantes colocados.",
    features: [
      "Material: Titanio Ti6Al4V (aleación de grado médico, alta pureza)",
      "Alta biocompatibilidad y resistencia a la corrosión",
      "Bajo perfil para un excelente resultado cosmético",
      "Alta estabilidad mecánica (~30 kg de seguridad en depresión / ~22 kg en tensión)",
      "Aplicación rápida: colocación del clamp en menos de 2 minutos",
      "Compatibilidad total con resonancia magnética (MRI 1.5 T y 3.0 T)",
      "Mecanismo de sujeción reproducible con fuerza definida (strain-relief)",
      "No absorbible: fijación permanente",
      "Aprobado y utilizado globalmente en neurocirugía (Aesculap / B. Braun)"
    ],
    specifications: [
      { label: "Material", value: "Titanio Ti6Al4V (aleación Ti-6Al-4V, ISO 5832-3)" },
      { label: "Aplicación", value: "Fijación de colgajos óseos tras craneotomía y fragmentos del neurocráneo" },
      { label: "Compatibilidad", value: "MRI 1.5 T y 3.0 T (MRI-conditional)" },
      { label: "Perfil", value: "Bajo perfil, resultado estético superior" },
      { label: "Tiempo de aplicación", value: "< 2 minutos por clamp" },
      { label: "Estabilidad", value: "Depresión ≈ 30 kg / Tensión ≈ 22 kg" },
      { label: "Tamaños disponibles", value: "11 mm, 16 mm y 20 mm (clamps intercambiables)" },
      { label: "Instrumental asociado", value: "Aplicador, pin-cutter, pinzas de extracción" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Made in Germany)" }
    ],
    images: [
      "/products/craniofix-1.jpeg",
      "/products/craniofix-2.jpeg",
    ],
  },
  {
    id: "clips-aneurisma-yasargil",
    name: "Clips de Aneurisma Yasargil",
    category: "neurocirugia",
    shortDescription:
      "Clips temporales y permanentes para clipaje de aneurismas cerebrales, en diversas configuraciones y tamaños.",
    fullDescription:
      "Los clips de aneurisma Yasargil son instrumentos neuroquirúrgicos de precisión utilizados para la oclusión segura y permanente o temporal de aneurismas intracraneales. Fabricados en aleación de titanio o acero inoxidable de grado médico, ofrecen una excelente biocompatibilidad, resistencia y elasticidad controlada. Disponibles en configuraciones rectas, curvas, anguladas, en forma de bayoneta y fenestradas, los clips Yasargil garantizan una presión constante en la zona de oclusión sin dañar las paredes del vaso. Se fabrican en versiones temporales y permanentes, con variantes MINI (3–7 mm, resorte pequeño) y STANDARD (3–25 mm, resorte grande), permitiendo una adaptación precisa al tipo y localización del aneurisma. Estos clips son el estándar de oro mundial en neurocirugía vascular, con más de 50 años de uso clínico comprobado.",
    features: [
      "Disponibles en versiones temporales y permanentes",
      "Alta precisión y fuerza de cierre constante",
      "Materiales biocompatibles: titanio o acero quirúrgico",
      "Diseño probado clínicamente (más de 50 años de experiencia)",
      "Variedad de formas: rectos, curvos, angulados, bayoneta y fenestrados",
      "Tamaños MINI (3–7 mm) y STANDARD (3–25 mm)",
      "Compatibles con estudios de resonancia magnética (MRI-safe)",
      "Fácil aplicación con instrumentos Yasargil originales",
      "Fabricación alemana con control de calidad B. Braun Aesculap"
    ],
    specifications: [
      { label: "Tipos de Clip", value: "Temporales y permanentes" },
      { label: "Tamaños", value: "Mini (3–7 mm) y estándar (3–25 mm)" },
      { label: "Material", value: "Titanio Ti6Al4V o acero inoxidable quirúrgico" },
      { label: "Configuraciones", value: "Rectos, curvos, angulados, bayoneta, fenestrado" },
      { label: "Aplicación", value: "Clipaje de aneurismas intracraneales" },
      { label: "Presión de cierre", value: "Constante y calibrada según tipo de clip (0.88–1.2 N típicamente)" },
      { label: "Compatibilidad MRI", value: "Seguros para resonancia magnética hasta 3.0 T" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Alemania)" }
    ],
    images: [
      "/products/clips-yasargil-1.jpeg",
      "/products/clips-yasargil-2.jpg",
    ],
  },
  {
    id: "neuro-patch",
    name: "Neuro-Patch®",
    category: "neurocirugia",
    shortDescription:
      "Sustituto sintético y duradero de duramadre para reparación dural en neurocirugía.",
    fullDescription:
      "Neuro-Patch® es un sustituto sintético de duramadre fabricado a partir de un vellón microporoso de poliésteruretano altamente purificado. Está diseñado para la reparación o sustitución de la duramadre en procedimientos neuroquirúrgicos. Su estructura microporosa permite la infiltración rápida de fibroblastos y la integración con el tejido conectivo circundante, garantizando una excelente biocompatibilidad. El material ofrece alta estanqueidad al líquido cefalorraquídeo (LCR), gran resistencia a la tracción y excelente suturabilidad, evitando fugas o desgarros en la línea de sutura. Su flexibilidad permite adaptarse fácilmente a las estructuras anatómicas, asegurando una reparación dural firme y duradera.",
    features: [
      "Sustituto sintético de duramadre (vellón microporoso de poliésteruretano)",
      "Alta estanqueidad: evita fugas de líquido cefalorraquídeo (LCR)",
      "Excelente tolerancia tisular y biocompatibilidad",
      "Alta resistencia a la tracción: evita la extracción de la sutura",
      "Buena suturabilidad y facilidad de manipulación",
      "Adaptable a diferentes estructuras anatómicas",
      "Apoya la infiltración celular y regeneración del tejido conectivo",
      "Uso validado en neurocirugía y cirugía de base de cráneo"
    ],
    specifications: [
      { label: "Tipo", value: "Sustituto dural sintético (vellón microporoso de poliésteruretano)" },
      { label: "Aplicación", value: "Reconstrucción o sustitución de la duramadre en neurocirugía" },
      { label: "Biocompatibilidad", value: "Alta, material tolerante a los tejidos" },
      { label: "Estanqueidad", value: "Evita fugas de LCR gracias a su estructura densa" },
      { label: "Resistencia a tracción", value: "Alta, evita desprendimiento de la sutura" },
      { label: "Suturabilidad", value: "Excelente, permite sutura directa o adhesiva" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Alemania)" },
      { label: "Presentaciones", value: "Diferentes medidas según área quirúrgica (p. ej. 2×2 cm, 5×5 cm, 10×10 cm)" }
    ],
    images: [
      "/products/neuro-patch-1.jpeg",
      "/products/neuro-patch-2.png",
    ],
  },
  {
    id: "sistema-drenaje-becker",
    name: "Sistema Becker EDMS",
    category: "neurocirugia",
    shortDescription:
      "Sistema de drenaje y monitoreo externo avanzado para drenaje ventricular y control de presión intracraneal.",
    fullDescription:
      "El Sistema Externo de Drenaje y Monitoreo Becker® (EDMS) de Medtronic está diseñado para el drenaje controlado de líquido cefalorraquídeo (LCR) y la medición precisa de la presión intracraneal. Su estructura cerrada y estéril permite un monitoreo continuo y seguro, reduciendo el riesgo de infección y facilitando el manejo en unidades de cuidados intensivos. El sistema incorpora puntos múltiples de muestreo sin aguja, escalas calibradas en mmHg y cmH₂O de fácil lectura, y cámaras de goteo con fondo cónico para un control óptimo del flujo. Incluye bolsas extraíbles y de gran volumen para drenaje prolongado, además de instrucciones impresas en el panel posterior para un uso seguro y rápido. Es compatible con diferentes configuraciones ventriculares, subaracnoideas o lumbares.",
    features: [
      "Sistema cerrado y estéril para drenaje seguro de LCR",
      "Escala doble con medidas en mmHg y cmH₂O para monitoreo preciso",
      "Dos tipos de sitios de inyección sin aguja para toma de muestras seguras",
      "Hasta tres puntos de muestreo en el sistema",
      "Fondo cónico en la cámara de goteo que evita la acumulación de residuos",
      "Bolsas de drenaje de gran capacidad y fácilmente extraíbles",
      "Indicadores de volumen y presión claramente visibles",
      "Instrucciones impresas en el panel posterior",
      "Compatible con procedimientos de drenaje ventricular, lumbar y subaracnoideo",
      "Fácil instalación y manipulación por personal clínico"
    ],
    specifications: [
      { label: "Tipo", value: "Sistema de drenaje y monitoreo externo cerrado" },
      { label: "Aplicación", value: "Drenaje ventricular y medición de presión intracraneal" },
      { label: "Escala de medición", value: "mmHg y cmH₂O (doble escala legible)" },
      { label: "Puntos de muestreo", value: "2 a 3 puntos de acceso sin aguja" },
      { label: "Cámara de goteo", value: "Fondo cónico para control de flujo" },
      { label: "Bolsas", value: "Gran volumen, extraíbles y calibradas" },
      { label: "Esterilidad", value: "Sistema cerrado estéril, de un solo uso" },
      { label: "Fabricante", value: "Medtronic / Becker®" }
    ],
    images: [
      "/products/becker-edms-1.png",
      "/products/becker-edms-2.jpg",
    ],
  },
  {
    id: "valvulas-hidrocefalia",
    name: "Válvulas para Hidrocefalia",
    category: "neurocirugia",
    shortDescription:
      "Válvulas de derivación para hidrocefalia en versiones adulto, pediátrica y neonatal, con diseño anatómico y materiales radiopacos.",
    fullDescription:
      "Las válvulas para hidrocefalia están diseñadas para el manejo controlado del líquido cefalorraquídeo (LCR) en pacientes con hidrocefalia. Disponibles en versiones para adulto, pediátrica y neonatal, cuentan con válvulas y catéteres radiopacos que permiten su visualización en estudios de imagen. Su forma contorneada imita la curvatura del cráneo, ofreciendo un bajo perfil que mejora la comodidad del paciente. Fabricadas con materiales no metálicos, son totalmente compatibles con estudios de tomografía y resonancia magnética. El domo del reservorio está hecho de elastómero de silicón inyectable, lo que facilita la obtención de muestras de LCR mediante punción, sin comprometer la integridad del sistema. Ofrecen alta confiabilidad, durabilidad y una amplia variedad de presiones de apertura para adaptarse a las necesidades clínicas de cada paciente.",
    features: [
      "Versiones disponibles: adulto, pediátrica y neonatal",
      "Válvulas y catéteres radiopacos (visibles en rayos X y tomografía)",
      "Diseño anatómico contorneado que imita la curvatura craneal",
      "Bajo perfil para mejor acomodamiento subcutáneo",
      "Compatibles con resonancia magnética (MRI-safe)",
      "Reservorio de elastómero de silicón inyectable",
      "Permite la punción y extracción de LCR para análisis de laboratorio",
      "Alta confiabilidad y precisión en el control de presión",
      "Materiales biocompatibles, no metálicos y duraderos"
    ],
    specifications: [
      { label: "Tipos", value: "Adulto, pediátrica, neonatal" },
      { label: "Material", value: "Radiopaco, elastómero de silicón inyectable, no metálico" },
      { label: "Compatibilidad MRI", value: "Seguras para resonancia magnética (MRI compatible)" },
      { label: "Perfil", value: "Bajo perfil anatómico, adaptable al cráneo" },
      { label: "Presiones disponibles", value: "Baja, media y alta (según modelo y paciente)" },
      { label: "Aplicación", value: "Tratamiento de hidrocefalia y manejo de LCR" },
      { label: "Fabricante", value: "Medtronic / Codman / Sophysa (según modelo y región)" }
    ],
    images: [
      "/products/valvulas-hidrocefalia-1.jpg",
      "/products/valvulas-hidrocefalia-2.jpg",
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}
