"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { COMPANY_ADDRESS } from "@/lib/company-info"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z.string().trim().min(3, { message: "Ingresa tu nombre completo." }).max(120),
  email: z.string().trim().email({ message: "Ingresa un correo válido." }).max(160),
  phone: z.string().trim().min(6, { message: "Incluye un número de contacto." }).max(40),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  product: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(12, { message: "Cuéntanos un poco más sobre tu necesidad." }).max(1200),
  contactMethod: z.enum(["email", "telefono", "whatsapp"]),
  preferredSchedule: z.enum(["sin_preferencia", "manana", "tarde", "noche"]),
})

type ContactFormValues = z.infer<typeof contactSchema>

const WHATSAPP_PHONE = "51957359298"

function buildProductMessage(productName?: string) {
  if (!productName) {
    return "Hola, me gustaría recibir asesoría sobre las soluciones disponibles y la mejor alternativa para mi centro médico."
  }
  return `Hola, estoy interesado en ${productName}. ¿Podrían enviarme ficha técnica, disponibilidad y condiciones comerciales?`
}

const messageTemplates = [
  {
    label: "Solicitar cotización",
    build: (productName?: string) =>
      productName
        ? `Hola equipo Apolo, necesito una cotización detallada de ${productName}. Incluyan tiempos de entrega, garantía y opciones de capacitación.`
        : "Hola equipo Apolo, necesito una cotización detallada de sus soluciones. Incluyan tiempos de entrega, garantía y opciones de capacitación.",
  },
  {
    label: "Agendar demostración",
    build: (productName?: string) =>
      productName
        ? `Buen día, me gustaría agendar una demostración técnica de ${productName} con mi equipo médico. ¿Qué fechas tienen disponibles?`
        : "Buen día, me gustaría agendar una demostración técnica de sus equipos para mi equipo médico. ¿Qué fechas tienen disponibles?",
  },
  {
    label: "Ser distribuidor",
    build: () =>
      "Hola, estoy interesado en convertirme en distribuidor autorizado de Apolo Medical. ¿Podrían compartir requisitos comerciales y soporte disponible?",
  },
]

function ContactPageContent() {
  const { toast } = useToast()
  const hasPrefilledFromQuery = useRef(false)
  const [formFeedback, setFormFeedback] = useState<{ status: "success" | "error"; message: string } | null>(null)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      product: "",
      message: buildProductMessage(),
      contactMethod: "email",
      preferredSchedule: "sin_preferencia",
    },
  })

  const selectedProduct = form.watch("product")
  const messageValue = form.watch("message") ?? ""
  const whatsappMessage = selectedProduct
    ? `Hola, estoy interesado en ${selectedProduct}. ¿Podrían enviarme ficha técnica, disponibilidad y opciones de demo?`
    : "Hola, me gustaría coordinar una asesoría con el equipo de Apolo Medical HT."
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`

  useEffect(() => {
    const url = new URL(window.location.href)
    const productParam = url.searchParams.get("product")
    console.log("🟢 [CONTACT DEBUG] Param en URL:", productParam)
    if (!productParam || hasPrefilledFromQuery.current) return
    const decodedProduct = decodeURIComponent(productParam)
    hasPrefilledFromQuery.current = true
    form.setValue("product", decodedProduct, { shouldValidate: true })
    form.setValue("message", buildProductMessage(decodedProduct))
    console.log("✅ [CONTACT DEBUG] Producto precargado:", decodedProduct)
  }, [form])

  const onSubmit = async (values: ContactFormValues) => {
    setFormFeedback(null)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await response.json()
      if (!response.ok || !data.ok) throw new Error(data.error || "No se pudo enviar el mensaje.")
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto en menos de 24h hábiles." })
      setFormFeedback({
        status: "success",
        message: "¡Mensaje enviado! Nuestro equipo responderá pronto.",
      })
      form.reset({ ...values, message: buildProductMessage() })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Error inesperado. Intenta nuevamente."
      toast({ title: "Error al enviar", description: message, variant: "destructive" })
      setFormFeedback({ status: "error", message })
    }
  }

  const faqs = [
    { question: "¿Cuál es el tiempo de entrega?", answer: "24-48h para Lima, 3-5 días para provincias." },
    { question: "¿Ofrecen garantía en los productos?", answer: "Sí, todos los productos incluyen garantía oficial." },
    { question: "¿Brindan capacitación técnica?", answer: "Sí, ofrecemos capacitación continua y soporte técnico." },
    { question: "¿Cómo puedo ser distribuidor?", answer: "Selecciona 'Ser distribuidor' y completa el formulario." },
  ]

  const isSubmitting = form.formState.isSubmitting

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary to-primary/85 py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <Badge variant="secondary" className="mb-4 bg-primary/30 text-primary-foreground">
            Red de especialistas en neurocirugía y columna
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Conversemos sobre tu próximo caso</h1>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Conecta con consultores clínicos certificados y recibe propuestas personalizadas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contacto-form">Agenda una consultoría</a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Card id="contacto-form" className="border-border/60 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Agenda una conversación personalizada</CardTitle>
              <CardDescription>
                Responde el formulario y recibirás seguimiento en menos de un día hábil.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {formFeedback && (
                    <Alert variant={formFeedback.status === "success" ? "default" : "destructive"}>
                      <AlertTitle>
                        {formFeedback.status === "success" ? "Mensaje enviado" : "Error"}
                      </AlertTitle>
                      <AlertDescription>{formFeedback.message}</AlertDescription>
                    </Alert>
                  )}
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField name="name" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl><Input placeholder="Dra. María Díaz" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                    <FormField name="email" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl><Input type="email" placeholder="tu@centromedico.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                    <FormField name="phone" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono o WhatsApp</FormLabel>
                        <FormControl><Input placeholder="+51 999 999 999" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                    <FormField name="product" control={form.control} render={({ field }) => (
                      <FormItem>
                        <FormLabel>Producto de interés (opcional)</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value || "__general__"}
                            onValueChange={(value) => field.onChange(value === "__general__" ? "" : value)}
                          >
                            <SelectTrigger><SelectValue placeholder="Consulta general" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="__general__">Consulta general</SelectItem>
                              <SelectItem value="Válvulas para hidrocefalia">Válvulas para hidrocefalia</SelectItem>
                              <SelectItem value="Sistemas craneales">Sistemas craneales</SelectItem>
                              <SelectItem value="Instrumental neuroquirúrgico">Instrumental neuroquirúrgico</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}/>
                  </div>
                  <FormField name="message" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea rows={6} placeholder={buildProductMessage(field.value)} {...field} />
                      </FormControl>
                      <div className="text-right text-sm text-muted-foreground">{messageValue.length}/1200</div>
                      <div className="flex flex-wrap gap-2">
                        {messageTemplates.map((tpl) => (
                          <Button
                            key={tpl.label}
                            type="button"
                            size="sm"
                            variant="secondary"
                            onClick={() => form.setValue("message", tpl.build(selectedProduct))}
                          >
                            {tpl.label}
                          </Button>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}/>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-8 lg:sticky lg:top-24">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>Equipo de respuesta inmediata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold">Correo principal</p>
                    <a href="mailto:ventas@apolomedical.com.pe" className="hover:text-primary">
                      ventas@apolomedical.com.pe
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold">Teléfonos</p>
                    <a href="tel:+51957359298" className="block hover:text-primary">(+51) 957 359 298</a>
                    <a href="tel:+51958362601" className="block hover:text-primary">(+51) 958 362 601</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <div>
                    <p className="font-semibold">Showroom</p>
                    <p>{COMPANY_ADDRESS}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="icon" asChild>
                  <a href={whatsappUrl} target="_blank"><MessageSquare className="h-5 w-5" /></a>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle>Preguntas frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg border p-4 bg-muted/30">
                    <p className="font-semibold">{faq.question}</p>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center">Cargando...</div>}>
      <ContactPageContent />
    </Suspense>
  )
}
