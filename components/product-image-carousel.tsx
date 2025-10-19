"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductImageCarouselProps {
  images: string[]
  productName: string
}

export function ProductImageCarousel({ images, productName }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  if (images.length === 0) {
    return (
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-muted">
        <img src="/placeholder.svg?height=400&width=600" alt={productName} className="h-full w-full object-cover" />
      </div>
    )
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-muted group">
      {images.map((image, index) => (
        <img
          key={index}
          src={image || "/placeholder.svg"}
          alt={`${productName} ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
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
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
