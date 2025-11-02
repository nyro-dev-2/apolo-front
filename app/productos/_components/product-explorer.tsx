"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { RefreshCcw, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type CategorySummary = {
  id: string | "all"
  label: string
  description?: string
  count: number
}

export interface Product {
  id: string
  name: string
  manufacturer: string
  category: string
  shortDescription: string
  fullDescription: string
  features: string[]
  specifications: { label: string; value: string }[]
  images: string[]
  keywords?: string[]
}

interface ProductExplorerProps {
  categories: CategorySummary[]
  manufacturers: string[]
  products: Product[]
}

function getDynamicCategoryLabel(id: string, categories: CategorySummary[]) {
  return categories.find((c) => c.id === id)?.label ?? id
}

export function ProductExplorer({ categories, manufacturers, products }: ProductExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategorySummary["id"]>("all")
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("all")
  const [query, setQuery] = useState("")

  const activeCategory = categories.find((category) => category.id === selectedCategory)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) return false
      if (selectedManufacturer !== "all" && product.manufacturer.toLowerCase() !== selectedManufacturer) return false

      if (!normalizedQuery) return true

      const tokens = [
        product.name,
        product.manufacturer,
        product.shortDescription,
        product.fullDescription,
        ...(product.features || []),
        ...(product.keywords || []),
      ]
        .join(" ")
        .toLowerCase()

      return tokens.includes(normalizedQuery)
    })
  }, [products, query, selectedCategory, selectedManufacturer])

  const prefersReducedMotion = useReducedMotion()
  const totalResults = filteredProducts.length
  const nothingFound = totalResults === 0

  const resetFilters = () => {
    setSelectedCategory("all")
    setSelectedManufacturer("all")
    setQuery("")
  }

  return (
    <div className="bg-background">
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative w-full lg:max-w-xl">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="search"
                  placeholder="Buscar por nombre, fabricante o característica"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="pl-9"
                />
              </div>

              {manufacturers.length > 1 && (
                <div className="flex w-full items-center gap-2 lg:w-auto">
                  <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                    <SelectTrigger aria-label="Filtrar por fabricante" className="w-full lg:w-64">
                      <SelectValue placeholder="Todos los fabricantes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los fabricantes</SelectItem>
                      {manufacturers.map((manufacturer) => (
                        <SelectItem key={manufacturer} value={manufacturer.toLowerCase()}>
                          {manufacturer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                type="button"
                variant="ghost"
                className="w-full gap-2 lg:w-auto"
                onClick={resetFilters}
                disabled={
                  selectedCategory === "all" && selectedManufacturer === "all" && query.length === 0
                }
              >
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Limpiar filtros
              </Button>
            </div>

            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filtrar por categoría">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id
                const disabled = category.id !== "all" && category.count === 0

                return (
                  <Button
                    key={category.id}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    size="lg"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category.id)}
                    disabled={disabled}
                    className={cn(
                      "transition-smooth",
                      isActive ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted",
                      disabled && "opacity-70"
                    )}
                  >
                    {category.label}
                    <Badge
                      variant="secondary"
                      className={cn("ml-2", isActive && "bg-white/20 text-white")}
                    >
                      {category.count}
                    </Badge>
                  </Button>
                )
              })}
            </div>

            <div
              role="status"
              aria-live="polite"
              className="flex flex-col gap-1 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
            >
              <span className="flex flex-wrap items-center gap-1">
                <span>
                  {totalResults} resultado{totalResults === 1 ? "" : "s"} para
                </span>
                <span className="font-medium text-foreground">
                  {activeCategory?.label ?? "Todos"}
                </span>
                {selectedManufacturer !== "all" && (
                  <span>
                    · Fabricante:{" "}
                    {manufacturers.find(
                      (item) => item.toLowerCase() === selectedManufacturer
                    ) ?? selectedManufacturer}
                  </span>
                )}
              </span>
              {activeCategory?.description && selectedCategory !== "all" && (
                <span>{activeCategory.description}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo-productos" className="py-16">
        <div className="container mx-auto px-4">
          {nothingFound ? (
            <div className="rounded-2xl border border-border bg-muted/40 p-10 text-center">
              <h2 className="text-lg font-semibold text-foreground">Sin coincidencias</h2>
              <p className="mt-2 text-muted-foreground">
                Ajusta los filtros o escríbenos a través del formulario de contacto para solicitar más información del catálogo.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contacto">Contactar al equipo</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                    }}
                  >
                    <Card className="group flex h-full flex-col border-border/50 transition hover:border-primary/50 hover:shadow-xl">
                      <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-muted">
                        <Image
                          fill
                          priority={index < 2 && selectedCategory === "all" && query.length === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          src={product.images?.[0] || "/placeholder.svg"}
                          alt={`Imagen destacada de ${product.name}`}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col gap-4 p-6">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {getDynamicCategoryLabel(product.category, categories)}
                            </Badge>
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {product.manufacturer}
                            </span>
                          </div>
                          <h3 className="line-clamp-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                            {product.name}
                          </h3>
                        </div>
                        <p className="line-clamp-3 text-sm text-muted-foreground">
                          {product.shortDescription}
                        </p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button asChild className="w-full">
                          <Link href={`/productos/${product.id}`}>Ver detalles</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
