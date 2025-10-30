"use client"

import { useCallback, useEffect, useState, type KeyboardEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductImageCarouselProps {
  images: string[]
  productName: string
  className?: string
}

export function ProductImageCarousel({ images, productName, className }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (images.length <= 1) return

    if (event.key === "ArrowRight") {
      event.preventDefault()
      goToNext()
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goToPrevious()
    }
  }

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext, images.length])

  if (images.length === 0) {
    return (
      <div className={cn("relative h-[400px] w-full overflow-hidden rounded-lg bg-muted", className)}>
        <Image
          fill
          src="/placeholder.svg"
          alt={`Imagen de referencia para ${productName}`}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    )
  }

  return (
    <div
      className={cn("group relative h-[400px] w-full overflow-hidden rounded-lg bg-muted", className)}
      role="region"
      aria-roledescription="Carrusel"
      aria-label={`Galería de imágenes de ${productName}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {images.map((image, index) => (
        <Image
          key={image ?? `placeholder-${index}`}
          fill
          priority={index === 0}
          src={image || "/placeholder.svg"}
          alt={`Imagen ${index + 1} de ${productName}`}
          className={`absolute inset-0 object-cover transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
