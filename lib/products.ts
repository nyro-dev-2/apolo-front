export interface Product {
  id: string
  name: string
  category: "neurocirugia" | "columna" | "accesorios"
  shortDescription: string
  fullDescription: string
  features: string[]
  specifications?: { label: string; value: string }[]
  images: string[]
  videoUrl?: string
  pdfUrl?: string
}

export const products: Product[] = [
  {
    id: "craneotomo-midas-rex",
    name: "Craneótomo Midas Rex Legend",
    category: "neurocirugia",
    shortDescription: "Sistema microdebridador, taladro y sierra quirúrgica de alta precisión",
    fullDescription:
      "Sistema microdebridador, taladro y sierra quirúrgica para eliminar tejido duro y blando con máxima precisión. Incluye consola avanzada, bombas de irrigación, pedal de control y piezas de mano intercambiables.",
    features: [
      "Consola de control avanzada",
      "Bombas de irrigación integradas",
      "Pedal de control ergonómico",
      "Piezas de mano intercambiables",
      "Eliminación precisa de tejido duro y blando",
      "Sistema de seguridad integrado",
    ],
    specifications: [
      { label: "Tipo", value: "Sistema microdebridador" },
      { label: "Aplicación", value: "Neurocirugía craneal" },
      { label: "Componentes", value: "Consola, bombas, pedal, piezas de mano" },
    ],
    images: [
      "/products/craneotomo-midas-rex-1.jpg",
      "/products/craneotomo-midas-rex-2.jpg",
      "/products/craneotomo-midas-rex-3.jpg",
      "/products/craneotomo-midas-rex-4.jpg",
    ],
    videoUrl: "/videos/midas-rex-demo.mp4",
  },
  {
    id: "aspirador-ultrasonico-misonix",
    name: "Aspirador Ultrasónico Misonix Sonastar RF 1000",
    category: "neurocirugia",
    shortDescription: "Sistema multifuncional con pedal inalámbrico de 4 funciones",
    fullDescription:
      "Pedal inalámbrico de 4 funciones, sistema multifuncional y osteoscultor. Trabaja eficientemente en hueso, tumores calcificados y tejidos blandos con tecnología ultrasónica avanzada.",
    features: [
      "Pedal inalámbrico de 4 funciones",
      "Tecnología ultrasónica avanzada",
      "Osteoscultor integrado",
      "Trabajo en hueso y tejido blando",
      "Eliminación de tumores calcificados",
      "Control preciso de potencia",
    ],
    specifications: [
      { label: "Tipo", value: "Aspirador ultrasónico" },
      { label: "Aplicación", value: "Neurocirugía y cirugía espinal" },
      { label: "Control", value: "Pedal inalámbrico 4 funciones" },
    ],
    images: [
      "/products/aspirador-misonix-1.jpg",
      "/products/aspirador-misonix-2.jpg",
      "/products/aspirador-misonix-3.jpg",
    ],
    videoUrl: "/videos/misonix-demo.mp4",
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
