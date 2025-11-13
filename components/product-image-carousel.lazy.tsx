"use client"

import dynamic from "next/dynamic"

import { cn } from "@/lib/utils"
import type { ProductImageCarouselProps } from "./product-image-carousel"

const ProductImageCarouselClient = dynamic(
  () => import("./product-image-carousel").then((mod) => mod.ProductImageCarousel),
  {
    ssr: false,
    loading: (loadingProps) => {
      const className =
        typeof loadingProps === "object" && loadingProps && "className" in loadingProps
          ? (loadingProps as { className?: string }).className
          : undefined

      return (
        <div
          className={cn(
            "flex h-[360px] w-full items-center justify-center rounded-3xl border border-border/40 bg-muted/30 text-sm text-muted-foreground md:h-[420px]",
            className
          )}
          aria-busy="true"
          aria-live="polite"
        >
          Cargando galería…
        </div>
      )
    },
  }
)

export function ProductImageCarouselLazy(props: ProductImageCarouselProps) {
  return <ProductImageCarouselClient {...props} />
}
