"use client"

export function PartnerCarousel() {
  const partners = [
    { name: "AESCULAP", logo: "/logos/aesculap-logo.jpg" },
    { name: "ENDAC", logo: "/logos/endac-logo.jpg" },
    { name: "PRODORTH", logo: "/logos/prodorth-logo.jpg" },
    { name: "BONEGRAFT", logo: "/logos/bonegraft-logo.jpg" },
    { name: "SCIENCEMEDIC", logo: "/logos/sciencemedic-logo.jpg" },
  ]

  // Duplicate for seamless loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <div className="relative overflow-hidden bg-muted/30 py-12">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-3">Socios Internacionales</h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Representamos las marcas más prestigiosas del sector médico mundial
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 w-48 h-32 flex flex-col items-center justify-center gap-3 bg-background rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
            >
              <div className="h-20 w-full flex items-center justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xs font-semibold text-muted-foreground tracking-wide">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
