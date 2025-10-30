import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Truck, Users, ArrowRight } from "lucide-react"
import { PartnerCarousel } from "@/components/partner-carousel"

export default function HomePage() {
  const heroValues = [
    "Soporte técnico en sala",
    "Distribución nacional inmediata",
    "Capacitación para equipos quirúrgicos",
  ]

  const specializations = [
    "Columna",
    "Neuroendoscopía",
    "Accesorios y conectores",
  ]

  const whatsappNumber = "51957359298"
  const whatsappMessage =
    "Hola, me gustaría hablar con un especialista de Apolo Medical HT sobre implantes espinales y neurocirugía."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const highlights = [
    {
      icon: Award,
      title: "Productos de Calidad",
      description: "Implantes espinales y dispositivos neuroquirúrgicos de última tecnología",
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
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/neurosurgery-medical-equipment-operating-room.jpg"
            alt="Equipo quirúrgico especializado realizando una cirugía en sala"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/92 via-white/86 to-white/70" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary shadow-sm backdrop-blur">
              Apolo Medical HT S.A.C.
            </div>
            <h1 className="mt-6 text-balance text-foreground">
              Tecnología y soporte para cirugías complejas de <span className="text-primary">columna y neuro</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-foreground/85">
              Portafolio completo de implantes espinales e instrumentos neuroquirúrgicos, con soporte técnico en sala,
              capacitación y distribución nacional para asegurar procedimientos previsibles y seguros.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3 sm:text-left">
              {heroValues.map((value) => (
                <li
                  key={value}
                  className="flex items-center justify-center gap-3 rounded-xl border border-border/70 bg-white/85 px-4 py-3 text-sm text-foreground/80 shadow-sm backdrop-blur-sm sm:justify-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-smooth hover:translate-y-[-2px] hover:shadow-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/70"
              >
                <Link href="/productos">
                  Ver catálogo <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border border-primary/40 px-8 text-base font-semibold text-primary transition-smooth hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/70"
              >
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
            </div>
            
          </div>
        </div>
      </section>

      <section id="ventajas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={index}
                  className="border border-border/70 bg-white/90 shadow-sm transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardContent className="flex h-full flex-col gap-4 p-7 text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section id="tecnologia" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/advanced-neurosurgery-equipment.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/80" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
                  Tecnología Médica de <span className="text-primary text-[1.15em]">Vanguardia</span>
                </h2>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
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
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster="/video-thumbnail.jpg"
                    preload="metadata"
                  >
                    <source src="/videos/presentation.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
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
      <section id="socios">
        <PartnerCarousel />
      </section>

      <section id="especialidades" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">Nuestras Especialidades</h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Soluciones integrales para neurocirugía y cirugía de columna
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-smooth group border-border/50 bg-card/50 backdrop-blur-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
                <Image
                  fill
                  src="/category-cranial-systems.jpg"
                  alt="Equipo neuroquirúrgico para sistemas craneales"
                  className="object-cover transition-smooth duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <CardContent className="p-6 md:p-7">
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
                <Image
                  fill
                  src="/category-spinal-implants.jpg"
                  alt="Implantes espinales de titanio"
                  className="object-cover transition-smooth duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 md:p-7">
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
                <Image
                  fill
                  src="/category-neuroendoscopy.png"
                  alt="Instrumental para neuroendoscopía"
                  className="object-cover transition-smooth duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6 md:p-7">
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

      <section id="cta-final" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/neurosurgery-medical-equipment-operating-room.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-white/80" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl text-balance max-w-3xl mx-auto text-foreground">
            ¿Listo para Mejorar tus Procedimientos Quirúrgicos?
          </h2>
          <p className="mb-12 text-base md:text-lg text-foreground/90 mx-auto max-w-2xl text-pretty leading-relaxed">
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
