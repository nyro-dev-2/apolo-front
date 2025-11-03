"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, Clock } from "lucide-react"

import { COMPANY_ADDRESS } from "@/lib/company-info"
import { useToast } from "@/hooks/use-toast"

export type ContactProductOption = {
  id: string
  name: string
  category?: string | null
}

const CATEGORY_LABELS: Record<string, string> = {
  neurocirugia: "Neurocirugía",
  columna: "Columna",
  accesorios: "Accesorios",
  traumatologia: "Traumatología",
  ortopedia: "Ortopedia",
}

const contactSchema = z.object({
  name: z.string().trim().min(3, { message: "Ingresa tu nombre completo." }).max(120),
  email: z.string().trim().email({ message: "Ingresa un correo válido." }).max(160),
  phone: z.string().trim().min(6, { message: "Incluye un número de contacto." }).max(40),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  role: z.string().trim().max(120).optional().or(z.literal("")),
  productId: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(12, { message: "Cuéntanos un poco más sobre tu necesidad." }).max(1200),
  contactMethod: z.enum(["email", "telefono", "whatsapp"]),
  preferredSchedule: z.enum(["sin_preferencia", "manana", "tarde", "noche"]),
})

export type ContactFormValues = z.infer<typeof contactSchema>

const scheduleCopy: Record<ContactFormValues["preferredSchedule"], string> = {
  sin_preferencia: "Sin preferencia",
  manana: "Mañana (08:00 - 11:00)",
  tarde: "Tarde (12:00 - 17:00)",
  noche: "Noche (17:00 - 20:00)",
}

const contactMethodCopy: Record<ContactFormValues["contactMethod"], string> = {
  email: "Correo electrónico",
  telefono: "Llamada telefónica",
  whatsapp: "WhatsApp",
}

const WHATSAPP_PHONE = "51957359298"

type FormFeedback = { status: "success" | "error"; message: string } | null

type ContactPageClientProps = {
  products: ContactProductOption[]
}

function buildProductMessage(productName?: string | null) {
  if (!productName) {
    return "Hola, me gustaría recibir asesoría sobre las soluciones disponibles y la mejor alternativa para mi centro médico."
  }
  return `Hola, estoy interesado en ${productName}. ¿Podrían enviarme ficha técnica, disponibilidad y condiciones comerciales?`
}

const messageTemplates = [
  {
    label: "Solicitar cotización",
    build: (productName?: string | null) =>
      productName
        ? `Hola equipo Apolo, necesito una cotización detallada de ${productName}. Incluyan tiempos de entrega, garantía y opciones de capacitación.`
        : "Hola equipo Apolo, necesito una cotización detallada de sus soluciones. Incluyan tiempos de entrega, garantía y opciones de capacitación.",
  },
  {
    label: "Agendar demostración",
    build: (productName?: string | null) =>
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

const faqs = [
  { question: "¿Cuál es el tiempo de entrega?", answer: "24-48h para Lima, 3-5 días para provincias." },
  { question: "¿Ofrecen garantía en los productos?", answer: "Sí, todos los productos incluyen garantía oficial." },
  { question: "¿Brindan capacitación técnica?", answer: "Sí, ofrecemos capacitación continua y soporte técnico." },
  {
    question: "¿Cómo puedo convertirme en distribuidor?",
    answer:
      "Completa el formulario seleccionando 'Ser distribuidor' como motivo e indícanos tu empresa para agendar una reunión de evaluación.",
  },
]

function formatCategoryLabel(category?: string | null) {
  if (!category) return "Otros"
  const key = category.toLowerCase().trim()
  return CATEGORY_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1)
}

export function ContactPageClient({ products }: ContactPageClientProps) {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const hasPrefilledFromQuery = useRef(false)
  const [formFeedback, setFormFeedback] = useState<FormFeedback>(null)

  const productMap = useMemo(() => {
    const entries = new Map<string, ContactProductOption>()
    products.forEach((product) => {
      if (product.id) {
        entries.set(product.id, product)
      }
    })
    return entries
  }, [products])

  const groupedProducts = useMemo(() => {
    const groups: Record<string, ContactProductOption[]> = {}
    products.forEach((product) => {
      const key = product.category?.toLowerCase().trim() || "otros"
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(product)
    })

    Object.values(groups).forEach((list) => {
      list.sort((a, b) => a.name.localeCompare(b.name, "es"))
    })

    const orderedKeys = Object.keys(groups).sort((a, b) => a.localeCompare(b, "es"))
    return orderedKeys.map((key) => ({ key, label: formatCategoryLabel(key), items: groups[key] }))
  }, [products])

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      role: "",
      productId: "",
      message: buildProductMessage(),
      contactMethod: "email",
      preferredSchedule: "sin_preferencia",
    },
  })

  const selectedProductId = form.watch("productId")
  const selectedProduct = selectedProductId ? productMap.get(selectedProductId) : undefined
  const messageValue = form.watch("message") ?? ""

  const whatsappMessage = selectedProduct?.name
    ? `Hola, estoy interesado en ${selectedProduct.name}. ¿Podrían enviarme ficha técnica, disponibilidad y opciones de demo?`
    : "Hola, me gustaría coordinar una asesoría con el equipo de Apolo Medical HT."

  const whatsappUrl = useMemo(
    () => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMessage)}`,
    [whatsappMessage],
  )

  useEffect(() => {
    if (hasPrefilledFromQuery.current) return

    const productParam = searchParams.get("product")
    if (productParam) {
      const decodedParam = decodeURIComponent(productParam).trim().toLowerCase()
      const match = products.find((product) => (
        product.name?.toLowerCase() === decodedParam || product.id?.toLowerCase() === decodedParam
      ))
      if (match) {
        form.setValue("productId", match.id, { shouldValidate: true })
        const currentMessage = form.getValues("message")
        if (!currentMessage || currentMessage === buildProductMessage()) {
          form.setValue("message", buildProductMessage(match.name), { shouldDirty: false })
        }
      }
    }

    hasPrefilledFromQuery.current = true
  }, [form, products, searchParams])

  const onSubmit = async (values: ContactFormValues) => {
    setFormFeedback(null)

    const { productId, ...rest } = values
    const matchedProduct = productId ? productMap.get(productId) : undefined

    const payload = {
      ...rest,
      organization: rest.organization?.trim() ? rest.organization.trim() : undefined,
      role: rest.role?.trim() ? rest.role.trim() : undefined,
      message: rest.message.trim(),
      product: matchedProduct?.name?.trim() ? matchedProduct.name : undefined,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.")
      }

      toast({
        title: "Mensaje enviado",
        description: "Nuestro equipo se pondrá en contacto en menos de 24 horas hábiles.",
      })

      setFormFeedback({
        status: "success",
        message: "¡Mensaje enviado! Nos pondremos en contacto en menos de 24 horas hábiles.",
      })

      form.reset({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        productId: matchedProduct?.id ?? "",
        message: buildProductMessage(matchedProduct?.name),
        contactMethod: rest.contactMethod,
        preferredSchedule: rest.preferredSchedule,
      })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Ocurrió un error inesperado. Intenta nuevamente en unos minutos."

      toast({
        title: "No se pudo enviar",
        description: message,
        variant: "destructive",
      })

      setFormFeedback({ status: "error", message })
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary to-primary/85 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/30 text-primary-foreground">
                Red de especialistas en neurocirugía y columna
              </Badge>
              <h1 className="text-balance text-4xl font-bold md:text-5xl">Conversemos sobre tu próximo caso</h1>
              <p className="mt-4 text-lg text-primary-foreground/90">
                Conecta con consultores clínicos certificados, recibe propuestas personalizadas y coordina demos
                prioritarias para tu equipo médico.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-8 py-6 text-base" asChild>
                <a href="#contacto-form">Agenda una consultoría</a>
              </Button>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Card id="contacto-form" className="border-border/60 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Agenda una conversación personalizada</CardTitle>
              <CardDescription>
                Responde el formulario y recibirás seguimiento en menos de un día hábil. Si vienes desde un producto,
                lo preseleccionamos para acelerar la asesoría.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                  {formFeedback && (
                    <Alert variant={formFeedback.status === "success" ? "default" : "destructive"}>
                      <AlertTitle>
                        {formFeedback.status === "success" ? "Mensaje enviado" : "Hubo un problema"}
                      </AlertTitle>
                      <AlertDescription>{formFeedback.message}</AlertDescription>
                    </Alert>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo</FormLabel>
                          <FormControl>
                            <Input placeholder="Dra. María Díaz" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo electrónico</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@centromedico.com" type="email" autoComplete="email" {...field} />
                          </FormControl>
                          <FormDescription>Usaremos este correo para enviarte fichas técnicas y seguimiento.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono directo o WhatsApp</FormLabel>
                          <FormControl>
                            <Input placeholder="+51 999 999 999" type="tel" autoComplete="tel" {...field} />
                          </FormControl>
                          <FormDescription>Coordinaremos la llamada o demostración por este medio.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Centro médico / Clínica (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Clínica Regional del Sur" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cargo (opcional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Jefe de Neurocirugía" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="productId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Producto de interés</FormLabel>
                          <FormControl>
                            <Select
                              value={field.value || "__general__"}
                              onValueChange={(value) => {
                                if (value === "__general__") {
                                  field.onChange("")
                                  form.setValue("message", buildProductMessage(), {
                                    shouldDirty: true,
                                    shouldValidate: false,
                                  })
                                  return
                                }

                                field.onChange(value)
                                const targetProduct = productMap.get(value)
                                form.setValue("message", buildProductMessage(targetProduct?.name), {
                                  shouldDirty: true,
                                  shouldValidate: false,
                                })
                              }}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona un producto" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="__general__">Consulta general</SelectItem>
                                {groupedProducts.length > 0 && <SelectSeparator />}
                                {groupedProducts.map(({ key, label, items }, index) => (
                                  <SelectGroup key={key}>
                                    <SelectLabel>{label}</SelectLabel>
                                    {items.map((product) => (
                                      <SelectItem key={product.id} value={product.id}>
                                        {product.name}
                                      </SelectItem>
                                    ))}
                                    {index < groupedProducts.length - 1 && <SelectSeparator />}
                                  </SelectGroup>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormDescription>
                            {selectedProduct?.name
                              ? `Se enviará información específica sobre ${selectedProduct.name}.`
                              : "Selecciona un producto para personalizar la asesoría o mantén la consulta general."}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Separator className="my-2" />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="contactMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Cómo prefieres que te contactemos?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              className="grid gap-3"
                              value={field.value}
                              onValueChange={(value) => field.onChange(value as ContactFormValues["contactMethod"])}
                            >
                              {Object.entries(contactMethodCopy).map(([value, label]) => (
                                <div key={value} className="flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3">
                                  <RadioGroupItem value={value} id={`contact-${value}`} />
                                  <Label htmlFor={`contact-${value}`} className="cursor-pointer text-sm font-medium">
                                    {label}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredSchedule"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Horario preferido</FormLabel>
                          <FormControl>
                            <Select
                              value={field.value}
                              onValueChange={(value) =>
                                field.onChange(value as ContactFormValues["preferredSchedule"])
                              }
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecciona un horario" />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(scheduleCopy).map(([value, label]) => (
                                  <SelectItem key={value} value={value}>
                                    {label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormDescription>Ajustamos nuestra llamada a la agenda de tu equipo clínico.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={buildProductMessage(selectedProduct?.name)}
                            rows={6}
                            maxLength={1200}
                            {...field}
                          />
                        </FormControl>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <FormDescription>
                            Cuéntanos el contexto clínico, urgencia y si necesitas capacitación.
                          </FormDescription>
                          <span className="text-sm text-muted-foreground">{messageValue.length}/1200</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {messageTemplates.map((template) => (
                            <Button
                              key={template.label}
                              type="button"
                              variant="secondary"
                              size="sm"
                              className="border-dashed"
                              onClick={() =>
                                form.setValue("message", template.build(selectedProduct?.name), {
                                  shouldDirty: true,
                                  shouldValidate: true,
                                })
                              }
                            >
                              {template.label}
                            </Button>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Tiempo de respuesta promedio: &lt; 12 h hábiles. Nunca compartiremos tus datos con terceros.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8 lg:sticky lg:top-24">
            <Card className="border-border/60">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Equipo de respuesta inmediata</CardTitle>
                <CardDescription>
                  Nuestro equipo clínico y comercial está disponible para coordinar demos, cotizaciones y soporte post
                  venta en todo el país.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Correo principal</p>
                    <a href="mailto:ventas@apolomedical.com.pe" className="text-muted-foreground transition-colors hover:text-primary">
                      ventas@apolomedical.com.pe
                    </a>
                    <p className="text-xs text-muted-foreground/80">Respuesta en menos de 24 horas hábiles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Línea directa</p>
                    <div className="space-y-1 text-muted-foreground">
                      <a href="tel:+51957359298" className="block transition-colors hover:text-primary">
                        (+51) 957 359 298
                      </a>
                      <a href="tel:+51958362601" className="block transition-colors hover:text-primary">
                        (+51) 958 362 601
                      </a>
                    </div>
                    <p className="text-xs text-muted-foreground/80">Atención emergencias quirúrgicas 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Showroom</p>
                    <p className="text-muted-foreground">{COMPANY_ADDRESS}</p>
                    <p className="text-xs text-muted-foreground/80">Demostraciones presenciales con cita previa.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Horario</p>
                    <p className="text-muted-foreground">Lunes a viernes: 09:00 - 18:00</p>
                    <p className="text-muted-foreground">Sábados: 09:00 - 13:00</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-center justify-between">
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/company/apolo-medical" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.instagram.com/apolo.medical" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Tiempo medio de respuesta &lt; 12h
                  </Badge>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Preguntas frecuentes</CardTitle>
                <CardDescription>
                  Respuestas rápidas a las consultas más comunes. Si no encuentras la tuya, completa el formulario.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg border border-border/60 bg-muted/30 p-4">
                    <p className="font-semibold text-foreground">{faq.question}</p>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold text-foreground">Visítanos en nuestra sede principal</h2>
            <p className="mt-4 text-muted-foreground">
              Coordinamos demostraciones presenciales y asesoría integral para equipos de neurocirugía, columna y trauma.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-border/50 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2!2d-71.537!3d-16.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzMyLjQiUyA3McKwMzInMTMuMiJX!5e0!3m2!1ses!2spe!4v1234567890"
              width="100%"
              height="420"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Apolo Medical HT"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export function ContactPageFallback() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-primary to-primary/85 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl animate-pulse rounded-3xl bg-white/10 p-12" />
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto h-[720px] max-w-6xl animate-pulse rounded-3xl border border-border/40 bg-muted/30" />
        </div>
      </section>
    </div>
  )
}
