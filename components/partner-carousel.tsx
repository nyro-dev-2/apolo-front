"use client"

export function PartnerCarousel() {
  const partners = [
    { name: "ENDAC", logo: "/logos/endac-logo.png" },
    { name: "PRODORTH", logo: "/logos/prodorth-logo.png" },
    { name: "SCIENCEMEDIC", logo: "/logos/sciencemedic-logo.jpg" },
    { name: "HC BIOLOGICS", logo: "/logos/hcbiologics_logo.jpg" },
    { name: "BONETECH", logo: "/logos/bonetech-logo.png" },
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

      <div className="container mx-auto relative">
        {/* Gradientes para desvanecimiento en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>
        
        {/* Contenedor del carrusel con overflow para mostrar solo el área deseada */}
        <div className="overflow-hidden">
          <div className="flex w-max gap-16 animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-background rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`Logo ${partner.name}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}