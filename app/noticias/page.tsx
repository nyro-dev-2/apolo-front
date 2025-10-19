import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Nuevo Sistema de Neuroendoscopia Aesculap MINOP®",
      category: "Lanzamiento",
      date: "15 de Marzo, 2024",
      excerpt:
        "Presentamos el sistema modular de neuroendoscopia compatible con Full HD, que ofrece precisión excepcional en procedimientos mínimamente invasivos.",
      image: "/news/neuroendoscopy-launch.jpg",
    },
    {
      id: 2,
      title: "Participación en Congreso Peruano de Neurocirugía 2024",
      category: "Eventos",
      date: "8 de Marzo, 2024",
      excerpt:
        "Apolo Medical HT estuvo presente en el congreso más importante de neurocirugía del país, presentando las últimas innovaciones en implantes espinales.",
      image: "/news/congress-participation.jpg",
    },
    {
      id: 3,
      title: "Alianza Estratégica con SCIENCEMEDIC CO. LTD.",
      category: "Alianzas",
      date: "1 de Marzo, 2024",
      excerpt:
        "Formalizamos nuestra alianza con SCIENCEMEDIC para la distribución exclusiva de sus productos de neurocirugía en Perú.",
      image: "/news/partnership-announcement.jpg",
    },
    {
      id: 4,
      title: "Avances en Tecnología de Fijación Craneal",
      category: "Tecnología",
      date: "22 de Febrero, 2024",
      excerpt:
        "Descubre las últimas innovaciones en sistemas de fijación craneal con titanio Ti6Al4V y su impacto en la recuperación del paciente.",
      image: "/news/cranial-fixation-tech.jpg",
    },
    {
      id: 5,
      title: "Capacitación Técnica para Cirujanos en Arequipa",
      category: "Capacitación",
      date: "15 de Febrero, 2024",
      excerpt:
        "Realizamos un taller especializado sobre el uso de sistemas de drenaje ventricular y válvulas para hidrocefalia.",
      image: "/news/training-workshop.jpg",
    },
    {
      id: 6,
      title: "Expansión de Red de Distribución Nacional",
      category: "Expansión",
      date: "5 de Febrero, 2024",
      excerpt:
        "Ampliamos nuestra cobertura a 5 nuevas ciudades del Perú, mejorando los tiempos de entrega y el servicio al cliente.",
      image: "/news/distribution-expansion.jpg",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Demostración del Craneótomo Midas Rex Legend",
      thumbnail: "/videos/midas-rex-demo-thumb.jpg",
      duration: "8:45",
    },
    {
      id: 2,
      title: "Técnicas Avanzadas con Aspirador Ultrasónico Misonix",
      thumbnail: "/videos/misonix-techniques-thumb.jpg",
      duration: "12:30",
    },
    {
      id: 3,
      title: "Instalación de Válvulas para Hidrocefalia",
      thumbnail: "/videos/hydrocephalus-valves-thumb.jpg",
      duration: "6:15",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-balance">Noticias y Actualizaciones</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Mantente informado sobre las últimas novedades, eventos y avances en tecnología médica
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Últimas Noticias</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.map((article) => (
                <Card
                  key={article.id}
                  className="flex flex-col border-border/50 hover:border-primary/50 transition-all"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-muted">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-foreground line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="ghost" className="w-full justify-between group">
                      Leer más
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Videos Destacados</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="border-border/50 hover:border-primary/50 transition-all overflow-hidden"
                >
                  <div className="relative h-48 w-full bg-muted group cursor-pointer">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="rounded-full bg-primary p-4">
                        <svg className="h-8 w-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 rounded bg-white/80 px-2 py-1 text-xs text-foreground">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground line-clamp-2">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-3xl border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground text-balance">
                Mantente informado sobre nuestras novedades
              </h2>
              <p className="mb-6 text-muted-foreground">
                Recibe actualizaciones sobre nuevos productos, eventos y avances tecnológicos
              </p>
              <Button asChild size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
