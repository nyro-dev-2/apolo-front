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

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, 
                             ...partners, ...partners, ...partners, ...partners]

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
          <div className="flex w-max gap-16 animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <Image
                key={`${partner.name}-${index}`}
                src={partner.logo || "/placeholder.svg"}
                alt={`Logo ${partner.name}`}
                width={200}
                height={128}
                className="flex-shrink-0 h-32 w-auto object-contain"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}