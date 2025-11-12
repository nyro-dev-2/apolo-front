"use client"

import Image from "next/image"

export type PartnerCarouselProps = {
  backgroundColor?: string
}

export function PartnerCarousel({ backgroundColor = "bg-secondary/30" }: PartnerCarouselProps) {
  const partners = [
    { name: "ENDAC", logo: "/logos/endac-logo.webp" },
    { name: "PRODORTH", logo: "/logos/prodorth-logo.webp" },
    { name: "HC BIOLOGICS", logo: "/logos/hcbiologics_logo.webp" },
    { name: "SCIENCE MEDIC", logo: "/logos/Science_Medic.webp" },
    { name: "GESCO", logo: "/logos/gesco_logo.webp" },
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="mb-3 text-center font-serif text-3xl font-bold text-foreground">Socios Internacionales</h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-foreground/90">
          Representamos las marcas más prestigiosas del sector médico mundial
        </p>
      </div>

      <div className="container mx-auto relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>
        
        <div className="overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee motion-reduce:animate-none">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "partners-duplicate" : "partners"}
                className="flex items-center gap-16"
                aria-hidden={isDuplicate}
                role={isDuplicate ? "presentation" : undefined}
              >
                {partners.map((partner) => (
                  <Image
                    key={`${partner.name}-${isDuplicate ? "duplicate" : "original"}`}
                    src={partner.logo || "/placeholder.svg"}
                    alt={isDuplicate ? "" : `Logo ${partner.name}`}
                    width={180}
                    height={110}
                    className="flex-shrink-0 h-28 w-auto object-contain"
                    sizes="(max-width: 768px) 45vw, 180px"
                    priority={!isDuplicate && partner.name === partners[0].name}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}