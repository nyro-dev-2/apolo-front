import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Contribuir al éxito de las operaciones quirúrgicas ofreciendo productos innovadores, seguros y de excelente calidad, asesorados por especialistas y orientados a mejorar la recuperación del paciente.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser reconocidos como uno de los principales proveedores peruanos de implantes e instrumentos espinales y neuroquirúrgicos, ampliando constantemente nuestra línea de productos para satisfacer las necesidades del sector médico nacional.",
    },
  ]

  const qualityPoints = [
    "Comunicación directa con cirujanos",
    "Mejoras continuas basadas en retroalimentación",
    "Investigación y desarrollo constante",
  ]

  const customerBenefits = [
    "Soluciones médicas asequibles",
    "Soporte postventa especializado",
    "Capacitación técnica continua",
    "Relaciones a largo plazo",
  ]

  const partners = ["AESCULAP", "ENDAC", "PRODORTH", "BONEGRAFT", "SCIENCEMEDIC CO. LTD."]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-balance">Nosotros</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Conoce nuestra historia, valores y compromiso con la excelencia médica
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl text-center text-balance">
              ¿Quiénes somos?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos una compañía arequipeña especializada en la comercialización e importación de dispositivos
                médico-quirúrgicos de categorías I, II, III y IV, así como equipos de alta tecnología.
              </p>
              <p>
                Fundada y respaldada por médicos especialistas y proveedores internacionales, Apolo Medical HT S.A.C.
                combina ciencia, ingeniería y experiencia clínica para ofrecer soluciones médicas de alto nivel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-8">
                      <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div className="relative h-[400px] overflow-hidden rounded-lg order-2 md:order-1">
                <img
                  src="/quality-control-medical-devices-laboratory.jpg"
                  alt="Control de calidad"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 p-3">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="mb-6 text-3xl font-bold text-foreground text-balance">Gestión de la calidad</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  El enfoque principal de Apolo Medical HT S.A.C. es mantener y distribuir productos de alta calidad.
                  Nuestra prioridad es la investigación y desarrollo de soluciones innovadoras.
                </p>
                <ul className="space-y-3">
                  {qualityPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 p-3">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="mb-6 text-3xl font-bold text-foreground text-balance">Satisfacción del cliente</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  La satisfacción del cliente no es solo un lema, sino nuestro compromiso. Brindamos soluciones médicas
                  asequibles, soporte postventa, capacitación técnica y relaciones a largo plazo.
                </p>
                <ul className="space-y-3">
                  {customerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <img
                  src="/medical-team-consultation-hospital.jpg"
                  alt="Equipo médico"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">Socios Internacionales</h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Colaboramos con las marcas más prestigiosas del sector médico mundial
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="flex h-20 w-40 items-center justify-center rounded-lg bg-muted/50 px-4 text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
