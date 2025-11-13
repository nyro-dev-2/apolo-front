"use client"

import dynamic from "next/dynamic"
import type { PartnerCarouselProps } from "./partner-carousel"

const PartnerCarouselClient = dynamic(
  () => import("./partner-carousel").then((mod) => mod.PartnerCarousel),
  {
    ssr: false,
    loading: () => (
      <div
        className="container mx-auto px-4 py-20 text-center text-muted-foreground"
        aria-live="polite"
      >
        Cargando socios internacionales…
      </div>
    ),
  }
)

export function PartnerCarouselLazy(props: PartnerCarouselProps) {
  return <PartnerCarouselClient {...props} />
}
