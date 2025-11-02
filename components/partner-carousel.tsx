"use client"

import Image from "next/image"

export function PartnerCarousel() {
  const partners = [
    { name: "ENDAC", logo: "/logos/endac-logo.png" },
    { name: "PRODORTH", logo: "/logos/prodorth-logo.png" },
    { name: "HC BIOLOGICS", logo: "/logos/hcbiologics_logo.png" },
    { name: "SCIENCE MEDIC", logo: "/logos/Science_Medic.png" },
    { name: "GESCO", logo: "/logos/gesco_logo.png" },
  ]

  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, 
                             ...partners, ...partners, ...partners, ...partners]

  return (
    <div className="relative overflow-hidden bg-secondary/30 py-12">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-3">Socios Internacionales</h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
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