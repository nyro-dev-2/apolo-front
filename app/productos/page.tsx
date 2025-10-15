"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "Todos los Productos", count: products.length },
    { id: "neurocirugia", name: "Neurocirugía", count: products.filter((p) => p.category === "neurocirugia").length },
    { id: "columna", name: "Columna", count: products.filter((p) => p.category === "columna").length },
    { id: "accesorios", name: "Accesorios", count: products.filter((p) => p.category === "accesorios").length },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary py-24 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Catálogo Completo
            </Badge>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl text-balance font-serif">
              Línea de Productos Neuroquirúrgicos
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
              Dispositivos médicos de última generación para procedimientos complejos
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-smooth ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-muted hover:scale-105"
                }`}
              >
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${selectedCategory === category.id ? "bg-white/20 text-white" : ""}`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="flex flex-col h-full border-border/50 hover:border-primary/50 hover:shadow-xl transition-smooth group">
                    <div className="p-0 relative">
                      <div className="relative h-56 w-full overflow-hidden rounded-t-lg bg-muted">
                        <img
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                        {product.category === "neurocirugia"
                          ? "Neurocirugía"
                          : product.category === "columna"
                            ? "Columna"
                            : "Accesorios"}
                      </Badge>
                      <h3 className="mb-3 text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full transition-smooth hover:scale-105">
                        <Link href={`/productos/${product.id}`}>Ver detalles</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance font-serif">
            ¿Necesitas más información sobre nuestros productos?
          </h2>
          <p className="mb-8 text-muted-foreground mx-auto max-w-2xl text-lg">
            Nuestro equipo de especialistas está listo para asesorarte
          </p>
          <Button asChild size="lg" className="transition-smooth hover:scale-105 text-lg px-8 py-6">
            <Link href="/contacto">Solicitar cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
