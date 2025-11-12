import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, CheckCircle2, Factory } from "lucide-react"

import { sanityClient } from "@/lib/sanity"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductImageCarouselLazy } from "@/components/product-image-carousel.lazy"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

export async function generateStaticParams() {
  const slugs: { slug: { current: string } }[] = await sanityClient.fetch(`
    *[_type == "product" && defined(slug.current)]{ slug }
  `)
  return slugs.map((p) => ({ slug: p.slug.current }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (!slug) {
    return {
      title: "Apolo Medical HT",
      description: "Catálogo de productos médicos de alta tecnología.",
    }
  }

  const product = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      shortDescription,
      fullDescription,
      "images": images[]{ "url": asset->url }
    }`,
    { slug }
  )

  if (!product) {
    return {
      title: "Producto no encontrado | Apolo Medical HT",
      description: "El producto solicitado no está disponible en nuestro catálogo.",
    }
  }

  const title = `${product.name} | Apolo Medical HT`
  const description =
    product.shortDescription ||
    (product.fullDescription ? product.fullDescription.slice(0, 155) : "")
  const url = `${SITE_URL}/productos/${slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Apolo Medical HT",
      type: "website",
      images: product.images?.length
        ? [
            {
              url: product.images[0].url,
              alt: `Imagen del producto ${product.name}`,
            },
          ]
        : [],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      manufacturer,
      category,
      shortDescription,
      fullDescription,
      features,
      "images": images[]{ "url": asset->url }
    }`,
    { slug }
  )

  if (!product) notFound()

  const relatedProducts = await sanityClient.fetch(
    `*[_type == "product" && category == $category && slug.current != $slug][0...3]{
      _id,
      name,
      shortDescription,
      category,
      "slug": slug.current,
      "images": images[]{ "url": asset->url }
    }`,
    { category: product.category, slug }
  )

  const normalizeText = (value: any): string => {
    if (!value) return "—"
    if (typeof value === "string") return value.trim()
    if (typeof value === "number") return String(value)
    if (Array.isArray(value)) return value.map((v) => normalizeText(v)).join(" ")
    if (typeof value === "object") {
      if (value.value) return normalizeText(value.value)
      if (value.children)
        return value.children.map((c: any) => c.text ?? "").join(" ")
      return JSON.stringify(value)
    }
    return String(value)
  }

  return (
    <div className="flex flex-col">
      <section className="border-b border-border/60 bg-muted/20 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <nav aria-label="Ruta de navegación">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/productos" className="transition-colors hover:text-primary">
                  Productos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{normalizeText(product.name)}</li>
            </ol>
          </nav>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="mt-3 border-primary/30 text-primary hover:bg-primary/10 transition-smooth hover:scale-105"
          >
            <Link href="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Volver al catálogo
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-4 text-sm capitalize">
                {normalizeText(product.category)}
              </Badge>
              <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
                {normalizeText(product.name)}
              </h1>
              {product.manufacturer && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Factory className="h-4 w-4" aria-hidden="true" />
                  <span className="font-medium">{normalizeText(product.manufacturer)}</span>
                </div>
              )}
            </div>

            <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-start">
              <div className="order-2 rounded-3xl border border-border/40 bg-muted/20 p-4 shadow-sm lg:order-1">
                <ProductImageCarouselLazy
                  images={product.images?.map((img: any) => img.url) || []}
                  productName={normalizeText(product.name)}
                  className="h-[360px] md:h-[420px]"
                />
              </div>

              <div className="order-1 space-y-8 lg:order-2 lg:ml-auto lg:max-w-xl">
                <section aria-labelledby="descripcion">
                  <h2 id="descripcion" className="mb-5 font-serif text-3xl font-semibold text-foreground">
                    Descripción
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                    {normalizeText(product.fullDescription)}
                  </p>
                </section>

                {product.features?.length > 0 && (
                  <section aria-labelledby="caracteristicas">
                    <h2 id="caracteristicas" className="mb-5 font-serif text-2xl font-semibold text-foreground">
                      Características principales
                    </h2>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {product.features.map((f: any, i: number) => (
                        <li key={`${i}-${normalizeText(f)}`} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {normalizeText(f)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <div className="pt-4">
                  <Button asChild size="lg" className="w-full justify-center text-base">
                    <Link href={`/contacto?product=${encodeURIComponent(product.name)}`}>
                      Solicitar cotización
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-gradient-to-br from-muted to-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground">
              Productos relacionados
            </h2>
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p: any) => (
                <Card
                  key={p._id}
                  className="group flex h-full flex-col border-border/50 transition-shadow hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-muted">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      src={p.images?.[0]?.url || "/placeholder.svg"}
                      alt={normalizeText(p.name)}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-3 p-6">
                    <Badge variant="outline" className="mb-2 border-primary/30 text-primary capitalize">
                      {normalizeText(p.category)}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {normalizeText(p.name)}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {normalizeText(p.shortDescription)}
                    </p>
                    <div className="mt-auto">
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/productos/${p.slug}`}>Ver detalles</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
