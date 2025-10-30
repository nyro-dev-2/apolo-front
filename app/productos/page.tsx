import type { Metadata } from "next"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  PRODUCT_CATEGORY_INFO,
  getCategoryLabel,
  products,
  type Product,
  type ProductCategory,
} from "@/lib/products"

import { ProductExplorer } from "./_components/product-explorer"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

const pageTitle = "Catálogo de productos neuroquirúrgicos | Apolo Medical HT"
const pageDescription =
  "Descubre nuestra línea de dispositivos neuroquirúrgicos, soluciones para columna y accesorios especializados disponibles en Perú."

type CategorySummary = {
  id: ProductCategory | "all"
  label: string
  description?: string
  count: number
}

function buildCategorySummaries(list: Product[]): CategorySummary[] {
  const summaries = PRODUCT_CATEGORY_INFO.map((category) => ({
    ...category,
    count: list.filter((product) => product.category === category.id).length,
  }))

  return [
    {
      id: "all",
      label: "Todos",
      description: "Catálogo completo de soluciones Apolo Medical HT",
      count: list.length,
    },
    ...summaries,
  ]
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/productos`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/productos`,
    siteName: "Apolo Medical HT",
    type: "website",
  },
}

export default function ProductsPage() {
  const categories = buildCategorySummaries(products)
  const manufacturerOptions = Array.from(new Set(products.map((product) => product.manufacturer))).sort((a, b) =>
    a.localeCompare(b, "es"),
  )

  const highlightedCategories = categories.filter((category) => category.id !== "all")

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-10" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 border-white/30 bg-white/20 text-white">
              Catálogo especializado
            </Badge>
            <h1 className="mb-6 text-balance font-serif text-5xl font-semibold md:text-6xl">
              Soluciones neuroquirúrgicas y de columna para equipos de alto rendimiento
            </h1>
            <p className="mx-auto text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Equipos, implantes y accesorios diseñados para quirófanos modernamente equipados, con soporte local y documentación completa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {highlightedCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">{category.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{category.count}</p>
                <p className="mt-2 text-sm text-white/80">
                  {category.description ?? `Explora nuestra oferta en ${category.label.toLowerCase()}.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductExplorer
        categories={categories}
        manufacturers={manufacturerOptions}
        products={products}
      />

      <section className="bg-gradient-to-br from-muted to-muted/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            ¿Necesitas especificaciones adicionales o una demo clínica?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Nuestro equipo técnico puede ayudarte a comparar soluciones, coordinar demos y preparar la documentación para licitaciones hospitalarias.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="transition-smooth hover:scale-105 text-lg px-8 py-6">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-smooth hover:scale-105 text-lg px-8 py-6">
              <Link href="/distribucion">Conocer soporte regional</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
