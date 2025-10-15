import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Truck, Clock, GraduationCap, Users, MapPin } from "lucide-react"

export default function DistributionPage() {
  const benefits = [
    {
      icon: Award,
      title: "Servicio premium",
      description: "Atención personalizada y productos de la más alta calidad",
    },
    {
      icon: Users,
      title: "Oportunidades de distribución",
      description: "Conviértete en socio estratégico en tu región",
    },
    {
      icon: Truck,
      title: "Entrega rápida",
      description: "Red logística eficiente en todo el territorio nacional",
    },
    {
      icon: Clock,
      title: "+5 años de experiencia",
      description: "Trayectoria consolidada en el sector médico",
    },
    {
      icon: GraduationCap,
      title: "Capacitación técnica",
      description: "Formación continua sobre productos y procedimientos",
    },
    {
      icon: MapPin,
      title: "Cobertura nacional",
      description: "Presencia en las principales ciudades del Perú",
    },
  ]

  const logistics = [
    {
      name: "Cruz del Sur",
      description: "Transporte terrestre nacional",
      logo: "/logos/cruz-del-sur-logo.jpg",
    },
    {
      name: "Flores Cargo",
      description: "Envíos especializados",
      logo: "/logos/flores-cargo-logo.jpg",
    },
    {
      name: "DHL",
      description: "Envíos internacionales express",
      logo: "/logos/dhl-logo.jpg",
    },
    {
      name: "FedEx",
      description: "Logística internacional",
      logo: "/logos/fedex-logo.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-balance">
              Cobertura Nacional y Logística Eficiente
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Apolo Medical HT S.A.C. provee implantes de la más alta calidad en las mejores condiciones posibles
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">Red de Distribución Confiable</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-2xl">
                Operamos con una red de distribución confiable y rápida en todo el Perú, garantizando que los productos
                lleguen en perfectas condiciones y en el tiempo acordado.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-2 font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Partners */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">Socios Logísticos</h2>
              <p className="text-muted-foreground">Trabajamos con las mejores empresas de transporte y logística</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {logistics.map((partner, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-white p-4">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Distributor CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-balance">Conviértete en Distribuidor</h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Únete a nuestra red de distribuidores y ofrece productos médicos de la más alta calidad en tu región.
              Ofrecemos soporte técnico, capacitación y condiciones comerciales competitivas.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/contacto">Solicitar información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">Cobertura Nacional</h2>
              <p className="text-muted-foreground">Presencia en las principales ciudades del Perú</p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg bg-muted">
              <img
                src="/peru-map-distribution-network.jpg"
                alt="Mapa de cobertura en Perú"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-center">
              <div className="rounded-lg bg-muted/50 p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Ciudades cubiertas</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Hospitales atendidos</div>
              </div>
              <div className="rounded-lg bg-muted/50 p-6">
                <div className="text-3xl font-bold text-primary mb-2">24-48h</div>
                <div className="text-sm text-muted-foreground">Tiempo de entrega</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
