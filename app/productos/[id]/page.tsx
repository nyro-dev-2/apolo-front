import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductById, products } from "@/lib/products"
import { CheckCircle2, Download, ArrowLeft } from "lucide-react"
import { ProductImageCarousel } from "@/components/product-image-carousel"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" size="sm" className="mb-2 transition-smooth hover:scale-105">
            <Link href="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a productos
            </Link>
          </Button>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            {/* Header Section - Título y Badge centrados */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 text-sm">
                {product.category === "neurocirugia"
                  ? "Neurocirugía"
                  : product.category === "columna"
                    ? "Columna"
                    : "Accesorios"}
              </Badge>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance font-serif">
                {product.name}
              </h1>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Images - Centrado completamente */}
              <div className="flex justify-center items-center">
                <div className="w-full max-w-lg animate-fade-in">
                  <ProductImageCarousel images={product.images} productName={product.name} />
                </div>
              </div>

              {/* Product Information */}
              <div className="animate-slide-in space-y-8">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground font-serif mb-4">
                    Descripción
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-semibold text-foreground font-serif mb-6">
                    Características principales
                  </h2>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 sm:flex-row pt-4">
                  <Button asChild size="lg" className="flex-1 transition-smooth hover:scale-105 text-base py-6">
                    <Link href="/contacto">Solicitar cotización</Link>
                  </Button>
                  {product.pdfUrl && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="flex-1 transition-smooth hover:scale-105 text-base py-6 bg-transparent"
                    >
                      <a href={product.pdfUrl} download>
                        <Download className="mr-2 h-5 w-5" />
                        Ficha técnica
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Specifications - Ancho completo debajo */}
            {product.specifications && (
              <Card className="mb-16 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground font-serif mb-8 text-center">
                    Especificaciones técnicas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex flex-col p-4 bg-muted/30 rounded-lg border border-border/50 h-full min-h-[80px] justify-between"
                      >
                        <dt className="font-semibold text-foreground text-sm mb-2 leading-tight">
                          {spec.label}
                        </dt>
                        <dd className="text-muted-foreground text-base font-medium break-words">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gradient-to-br from-muted to-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold text-foreground text-center font-serif">Productos relacionados</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="flex flex-col h-full border-border/50 hover:border-primary/50 hover:shadow-xl transition-smooth group"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="flex-1 p-6">
                    <h3 className="mb-3 text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.shortDescription}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full transition-smooth hover:scale-105" size="sm">
                      <Link href={`/productos/${relatedProduct.id}`}>Ver detalles</Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}