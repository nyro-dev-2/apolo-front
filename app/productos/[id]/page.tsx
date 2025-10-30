import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ArrowLeft, CheckCircle2, Download, Factory } from "lucide-react"

import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getCategoryLabel, getProductById, products } from "@/lib/products"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

type ProductDetailPageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    return {
      title: "Producto no encontrado | Apolo Medical HT",
      description: "El producto solicitado no está disponible en nuestro catálogo.",
    }
  }

  const title = `${product.name} | Apolo Medical HT`
  const description = product.shortDescription || product.fullDescription.slice(0, 155)
  const url = `${SITE_URL}/productos/${product.id}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Apolo Medical HT",
      type: "website",
      images: product.images.slice(0, 1).map((image) => ({
        url: `${SITE_URL}${image}`,
        alt: `Imagen del producto ${product.name}`,
      })),
    },
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-muted/30 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <nav aria-label="Ruta de navegación">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/productos" className="transition-colors hover:text-foreground">
                  Productos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{product.name}</li>
            </ol>
          </nav>
          <Button asChild variant="ghost" size="sm" className="mt-3 transition-smooth hover:scale-105">
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
              <Badge variant="secondary" className="mb-4 text-sm">
                {getCategoryLabel(product.category)}
              </Badge>
              <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Factory className="h-4 w-4" aria-hidden="true" />
                <span className="font-medium">{product.manufacturer}</span>
              </div>
            </div>

            <div className="mb-16 grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:items-start">
              <div className="order-2 rounded-3xl border border-border/40 bg-muted/20 p-4 shadow-sm lg:order-1">
                <ProductImageCarousel
                  images={product.images}
                  productName={product.name}
                  className="h-[360px] md:h-[420px]"
                />
              </div>

              <div className="order-1 space-y-8 lg:order-2 lg:ml-auto lg:max-w-xl">
                <section aria-labelledby="descripcion">
                  <h2 id="descripcion" className="mb-5 font-serif text-3xl font-semibold text-foreground">
                    Descripción
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                    {product.fullDescription}
                  </p>
                </section>

                <section aria-labelledby="caracteristicas">
                  <h2 id="caracteristicas" className="mb-5 font-serif text-2xl font-semibold text-foreground">
                    Características principales
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {product.videoUrl && (
                  <section aria-labelledby="video" className="space-y-4">
                    <h2 id="video" className="font-serif text-2xl font-semibold text-foreground">
                      Video demostrativo
                    </h2>
                    <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-sm">
                      <iframe
                        src={product.videoUrl}
                        title={`Video demostrativo de ${product.name}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  </section>
                )}

                <div className="grid gap-3 pt-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <Button asChild size="lg" className="h-full justify-center text-base">
                    <Link href="/contacto">Solicitar cotización</Link>
                  </Button>
                  {product.pdfUrl ? (
                    <Button asChild size="lg" variant="outline" className="h-full justify-center text-base">
                      <a href={product.pdfUrl} download aria-label={`Descargar la ficha técnica de ${product.name}`}>
                        <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                        Ficha técnica (PDF)
                      </a>
                    </Button>
                  ) : (
                    <div
                      className="flex h-full items-center justify-center rounded-xl border border-dashed border-border/60 bg-background/70 px-4 py-5 text-center text-sm text-muted-foreground"
                      aria-live="polite"
                    >
                      Solicita la hoja técnica a nuestro equipo comercial.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {product.specifications?.length ? (
              <section className="mb-16 overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-background via-muted/20 to-muted/40 shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="relative border-b border-border/30 bg-background/60 lg:w-[45%] lg:border-b-0 lg:border-r">
                    <ProductImageCarousel
                      images={product.images}
                      productName={product.name}
                      className="h-[320px] lg:h-full lg:min-h-[420px] rounded-none"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-6 p-8 sm:p-10">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        <Factory className="h-3.5 w-3.5" aria-hidden="true" />
                        Especificaciones técnicas
                      </span>
                      <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground">
                        Detalles que respaldan el alto desempeño
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                        Consulta en un vistazo los parámetros clave del dispositivo y verifica que cumpla con los
                        requisitos de tu equipo quirúrgico.
                      </p>
                    </div>
                    <dl className="grid gap-4 sm:grid-cols-2">
                      {product.specifications.map((spec) => (
                        <div
                          key={`${spec.label}-${spec.value}`}
                          className="rounded-2xl border border-border/40 bg-background/80 p-5 shadow-sm transition-shadow hover:shadow-md"
                        >
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            {spec.label}
                          </dt>
                          <dd className="mt-2 text-base font-medium text-foreground leading-relaxed">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </section>
            ) : null}
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
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group flex h-full flex-col border-border/50 transition-shadow hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-muted">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={`Imagen representativa de ${relatedProduct.name}`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-3 p-6">
                    <div>
                      <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                        {getCategoryLabel(relatedProduct.category)}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {relatedProduct.name}
                      </h3>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{relatedProduct.shortDescription}</p>
                    <div className="mt-auto">
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/productos/${relatedProduct.id}`}>Ver detalles</Link>
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