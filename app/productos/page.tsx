import type { Metadata } from "next"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProductExplorer } from "./_components/product-explorer"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

const pageTitle = "Catálogo de productos neuroquirúrgicos | Apolo Medical HT"
const pageDescription =
  "Descubre nuestra línea de dispositivos neuroquirúrgicos, soluciones para columna y accesorios especializados disponibles en Perú."

type Product = {
  _id: string
  name: string
  manufacturer: string
  category: string
  categoryLabel?: string
  shortDescription?: string
  fullDescription?: string
  features?: string[]
  specifications?: { label: string; value: string }[]
  images?: { url: string }[]
  slug: string
}

const PRODUCTS_QUERY = `
*[_type == "product"]{
  _id,
  name,
  manufacturer,
  "category": coalesce(category->slug.current, category),
  "categoryLabel": coalesce(category->title, category),
  shortDescription,
  fullDescription,
  features,
  specifications,
  "images": images[]{
    "url": coalesce(asset->url, "")
  },
  "slug": slug.current
} | order(name asc)
`

const PRODUCT_CATEGORY_INFO: Array<{
  id: string
  label: string
  description?: string
}> = [
  { id: "neurocirugia", label: "Neurocirugía" },
  { id: "columna", label: "Columna" },
  { id: "accesorios", label: "Accesorios" },
]

type CategorySummary = {
  id: string | "all"
  label: string
  description?: string
  count: number
}

function buildCategorySummaries(list: Product[]): CategorySummary[] {
  const categoriesMap = new Map<string, CategorySummary>()

  PRODUCT_CATEGORY_INFO.forEach((category) => {
    categoriesMap.set(category.id, {
      id: category.id,
      label: category.label,
      description: category.description,
      count: 0,
    })
  })

  list.forEach((product) => {
    const categoryId = product.category ?? "sin-categoria"
    const staticInfo = PRODUCT_CATEGORY_INFO.find((cat) => cat.id === categoryId)
    const current = categoriesMap.get(categoryId)

    const resolvedLabel = staticInfo?.label ?? product.categoryLabel ?? categoryId
    const resolvedDescription = staticInfo?.description

    if (current) {
      current.count += 1
    } else {
      categoriesMap.set(categoryId, {
        id: categoryId,
        label: resolvedLabel,
        description: resolvedDescription,
        count: 1,
      })
    }
  })

  const summaries = Array.from(categoriesMap.values()).sort((a, b) =>
    a.label.localeCompare(b.label, "es", { sensitivity: "base" })
  )

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

export default async function ProductsPage() {
  const products: Product[] = await sanityClient.fetch(PRODUCTS_QUERY, {}, { next: { revalidate: 60 } })
  const categories = buildCategorySummaries(products)
  const manufacturers = Array.from(new Set(products.map((p) => p.manufacturer))).sort()
  const highlightedCategories = categories.filter((c) => c.id !== "all")

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-10" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 border-white/30 bg-white/20 text-white">
              Catálogo especializado
            </Badge>
            <h1 className="mb-6 font-serif text-5xl font-semibold md:text-6xl">
              Soluciones neuroquirúrgicas y de columna para equipos de alto rendimiento
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
              Equipos, implantes y accesorios diseñados para quirófanos modernamente equipados,
              con soporte local y documentación completa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlightedCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
                  {category.label}
                </p>
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
        manufacturers={manufacturers}
        products={products.map((p) => ({
          id: p.slug,
          name: p.name,
          manufacturer: p.manufacturer,
          category: p.category,
          shortDescription: p.shortDescription ?? "",
          fullDescription: p.fullDescription ?? "",
          features: Array.isArray(p.features)
            ? p.features.filter((feature): feature is string => typeof feature === "string")
            : [],
          specifications: p.specifications ?? [],
          images: Array.isArray(p.images)
            ? p.images
                .map((i) => i?.url)
                .filter((url) => typeof url === "string" && url.startsWith("http"))
            : [],
        }))}
      />

      <section className="bg-gradient-to-br from-muted to-muted/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            ¿Necesitas especificaciones adicionales o una demo clínica?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Nuestro equipo técnico puede ayudarte a comparar soluciones, coordinar demos y preparar
            la documentación para licitaciones hospitalarias.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
              <Link href="/contacto">Hablar con un asesor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
