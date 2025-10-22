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
    name: "Neuroendoscopio Aesculap MINOP®",
    category: "neurocirugia",
    shortDescription: "Sistema modular compatible con Full HD",
    fullDescription:
      "Sistema modular de neuroendoscopia compatible con Full HD. Direcciones de visión 0° y 30°, alta precisión y control quirúrgico excepcional para procedimientos mínimamente invasivos.",
    features: [
      "Compatible con Full HD",
      "Visión 0° y 30°",
      "Sistema modular flexible",
      "Alta precisión quirúrgica",
      "Procedimientos mínimamente invasivos",
      "Óptica de alta calidad",
    ],
    specifications: [
      { label: "Tipo", value: "Neuroendoscopio" },
      { label: "Resolución", value: "Full HD" },
      { label: "Ángulos de visión", value: "0° y 30°" },
    ],
    images: ["/products/neuroendoscopio-aesculap-1.jpg", "/products/neuroendoscopio-aesculap-2.jpg"],
  },
  {
    id: "fijacion-craneal-craniofix",
    name: "Fijación Craneal Craniofix 2",
    category: "neurocirugia",
    shortDescription: "Sistema de fijación en titanio Ti6Al4V de alta biocompatibilidad",
    fullDescription:
      "Sistema de fijación craneal en titanio Ti6Al4V con alta biocompatibilidad, estabilidad excepcional, compatibilidad con resonancia magnética y excelente resultado cosmético.",
    features: [
      "Material: Titanio Ti6Al4V",
      "Alta biocompatibilidad",
      "Estabilidad excepcional",
      "Compatible con resonancia magnética",
      "Excelente resultado cosmético",
      "Bajo perfil",
    ],
    specifications: [
      { label: "Material", value: "Titanio Ti6Al4V" },
      { label: "Aplicación", value: "Fijación craneal" },
      { label: "Compatibilidad", value: "Resonancia magnética" },
    ],
    images: ["/products/craniofix-1.jpg", "/products/craniofix-2.jpg"],
  },
  {
    id: "clips-aneurisma-yasargil",
    name: "Clips de Aneurisma Yasargil",
    category: "neurocirugia",
    shortDescription: "Clips temporales y permanentes en múltiples configuraciones",
    fullDescription:
      "Clips de aneurisma Yasargil en múltiples configuraciones: rectos, curvos, angulados, bayoneta y fenestrados. Disponibles en versiones temporales, permanentes, mini y estándar.",
    features: [
      "Múltiples configuraciones disponibles",
      "Clips temporales y permanentes",
      "Tamaños mini y estándar",
      "Alta precisión de cierre",
      "Material biocompatible",
      "Fácil aplicación",
    ],
    specifications: [
      { label: "Tipos", value: "Rectos, curvos, angulados, bayoneta, fenestrado" },
      { label: "Aplicación", value: "Clipaje de aneurismas" },
      { label: "Tamaños", value: "Mini y estándar" },
    ],
    images: ["/products/clips-yasargil-1.jpg", "/products/clips-yasargil-2.jpg"],
  },
  {
    id: "neuro-patch",
    name: "Neuro-Patch®",
    category: "neurocirugia",
    shortDescription: "Sustituto sintético y duradero de duramadre",
    fullDescription:
      "Sustituto sintético y duradero de duramadre. Material microporoso, altamente adaptable, resistente y tolerante a los tejidos. Ideal para reconstrucción dural.",
    features: [
      "Sustituto sintético de duramadre",
      "Material microporoso",
      "Altamente adaptable",
      "Resistente y duradero",
      "Excelente tolerancia tisular",
      "Fácil manipulación",
    ],
    specifications: [
      { label: "Tipo", value: "Sustituto dural sintético" },
      { label: "Características", value: "Microporoso, adaptable" },
      { label: "Aplicación", value: "Reconstrucción dural" },
    ],
    images: ["/products/neuro-patch-1.jpg", "/products/neuro-patch-2.jpg"],
  },
  {
    id: "sistema-drenaje-becker",
    name: "Sistema Becker EDMS",
    category: "neurocirugia",
    shortDescription: "Sistema de drenaje y monitoreo externo avanzado",
    fullDescription:
      "Sistema de drenaje y monitoreo externo con múltiples puntos de muestreo, escala legible y bolsas extraíbles. Control preciso del drenaje ventricular.",
    features: [
      "Múltiples puntos de muestreo",
      "Escala de medición legible",
      "Bolsas extraíbles",
      "Control preciso de drenaje",
      "Sistema cerrado estéril",
      "Fácil instalación",
    ],
    specifications: [
      { label: "Tipo", value: "Sistema de drenaje externo" },
      { label: "Aplicación", value: "Drenaje ventricular" },
      { label: "Características", value: "Múltiples puntos de muestreo" },
    ],
    images: ["/products/becker-edms-1.jpg", "/products/becker-edms-2.jpg"],
  },
  {
    id: "valvulas-hidrocefalia",
    name: "Válvulas para Hidrocefalia",
    category: "neurocirugia",
    shortDescription: "Válvulas para adulto, pediátrica y neonatal",
    fullDescription:
      "Válvulas para hidrocefalia en versiones adulto, pediátrica y neonatal. Material radiopaco, diseño anatómico, bajo perfil. Permite punción de LCR para estudios de laboratorio.",
    features: [
      "Versiones: adulto, pediátrica, neonatal",
      "Material radiopaco",
      "Diseño anatómico",
      "Bajo perfil",
      "Permite punción de LCR",
      "Alta confiabilidad",
    ],
    specifications: [
      { label: "Tipos", value: "Adulto, pediátrica, neonatal" },
      { label: "Material", value: "Radiopaco" },
      { label: "Aplicación", value: "Tratamiento de hidrocefalia" },
    ],
    images: ["/products/valvulas-hidrocefalia-1.jpg", "/products/valvulas-hidrocefalia-2.jpg"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}
