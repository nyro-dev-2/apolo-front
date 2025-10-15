import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Truck, Users, ArrowRight, Play } from "lucide-react"
import { PartnerCarousel } from "@/components/partner-carousel"

export default function HomePage() {
  const highlights = [
    {
      icon: Award,
      title: "Certificación Internacional",
      description: "Cumplimos normas ASTM e ISO para garantizar la máxima calidad",
    },
    {
      icon: Truck,
      title: "Distribución Nacional",
      description: "Red logística eficiente en todo el Perú",
    },
    {
      icon: Users,
      title: "Respaldo Médico",
      description: "Fundada y asesorada por especialistas",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden min-h-[750px] flex items-center">
        <div className="absolute inset-0 bg-[url('/hero-dark-medical-technology.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-block animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full glass-effect px-5 py-2.5 text-sm font-semibold text-foreground border border-primary/30">
                <Award className="h-4 w-4 text-primary" />
                Certificación Internacional ISO & ASTM
              </span>
            </div>
            <h1 className="mb-8 text-5xl font-serif font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance animate-fade-in">
              Innovación y Confianza en <span className="text-primary text-[1.1em]">Soluciones Médicas</span> Avanzadas
            </h1>
            <p className="mb-12 text-xl text-foreground/90 md:text-2xl leading-relaxed text-pretty max-w-3xl mx-auto font-light animate-fade-in">
              Especialistas en implantes espinales, instrumentos neuroquirúrgicos y dispositivos médico-quirúrgicos de
              última generación
            </p>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-center animate-fade-in">
              <Button
                asChild
                size="lg"
                className="text-lg font-semibold h-14 px-8 shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-smooth"
              >
                <Link href="/productos">
                  Ver Productos <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 glass-effect text-foreground hover:bg-foreground/10 text-lg font-semibold h-14 px-8 transition-smooth bg-transparent"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/50 transition-smooth hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group"
                >
                  <CardContent className="flex flex-col items-center p-8 text-center">
                    <div className="mb-5 rounded-full bg-primary/10 p-5 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 font-bold text-lg text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/advanced-neurosurgery-equipment.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/80" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl text-balance">
                  Tecnología Médica de <span className="text-primary text-[1.15em]">Vanguardia</span>
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                  En Apolo Medical HT nos enfocamos en la innovación médica, la investigación continua y la calidad
                  clínica. Cada producto es fruto del conocimiento científico y la experiencia quirúrgica.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 glass-effect p-5 rounded-lg transition-smooth hover:bg-white/10">
                    <div className="rounded-full bg-primary/20 p-2 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Respaldo Científico</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Fundada y asesorada por médicos especialistas con amplia experiencia clínica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 glass-effect p-5 rounded-lg transition-smooth hover:bg-white/10">
                    <div className="rounded-full bg-primary/20 p-2 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Tecnología Avanzada</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Equipos de última generación para procedimientos neuroquirúrgicos complejos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 glass-effect p-5 rounded-lg transition-smooth hover:bg-white/10">
                    <div className="rounded-full bg-primary/20 p-2 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 text-lg">Soporte Integral</h4>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        Capacitación técnica y asesoría especializada para profesionales de la salud
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
                  <div className="relative w-full h-full bg-black/50 flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <Play className="h-20 w-20 text-primary group-hover:scale-110 transition-smooth" />
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Video demostrativo de equipos neuroquirúrgicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerCarousel />

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-5">Nuestras Especialidades</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Soluciones integrales para neurocirugía y cirugía de columna
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-smooth group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/category-cranial-systems.jpg"
                  alt="Sistemas Craneales"
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <CardContent className="p-7">
                <h3 className="font-bold text-xl mb-3 text-foreground">Sistemas Craneales</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Craneotomos, sistemas de fijación craneal y clips de aneurisma
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 text-base"
                >
                  <Link href="/productos">
                    Ver productos <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-smooth group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/category-spinal-implants.jpg"
                  alt="Implantes Espinales"
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <CardContent className="p-7">
                <h3 className="font-bold text-xl mb-3 text-foreground">Implantes Espinales</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Sistemas de fijación vertebral y cages intervertebrales
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 text-base"
                >
                  <Link href="/productos">
                    Ver productos <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-smooth group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="/category-neuroendoscopy.jpg"
                  alt="Neuroendoscopía"
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <CardContent className="p-7">
                <h3 className="font-bold text-xl mb-3 text-foreground">Neuroendoscopía</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Equipos de neuroendoscopía y aspiradores ultrasónicos
                </p>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 text-base"
                >
                  <Link href="/productos">
                    Ver productos <ArrowRight className="ml-1 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neurosurgery-medical-equipment-operating-room.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-black/90" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-balance max-w-3xl mx-auto text-foreground">
            ¿Listo para Mejorar tus Procedimientos Quirúrgicos?
          </h2>
          <p className="mb-12 text-lg text-foreground/90 mx-auto max-w-2xl text-pretty leading-relaxed">
            Descubre nuestra línea completa de productos neuroquirúrgicos y espinales respaldados por la mejor
            tecnología
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base font-semibold shadow-2xl hover:shadow-3xl transition-smooth"
          >
            <Link href="/contacto">
              Solicitar Información <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
