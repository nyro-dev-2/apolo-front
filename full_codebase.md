# Project Structure

```
apolo-front/
├── .env.local
├── .eslintrc.json
├── .gitignore
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   ├── contacto
│   │   └── page.tsx
│   ├── distribucion
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── nosotros
│   │   └── page.tsx
│   ├── noticias
│   │   └── page.tsx
│   ├── page.tsx
│   └── productos
│       ├── [id]
│       │   └── page.tsx
│       ├── _components
│       │   └── product-explorer.tsx
│       └── page.tsx
├── components
│   ├── footer.tsx
│   ├── navigation.tsx
│   ├── partner-carousel.tsx
│   ├── product-image-carousel.tsx
│   ├── scroll-to-top.tsx
│   ├── theme-provider.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button-group.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── empty.tsx
│       ├── field.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-group.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── item.tsx
│       ├── kbd.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── spinner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       ├── use-mobile.tsx
│       └── use-toast.ts
├── components.json
├── eslint.config.mjs
├── export-codebase.py
├── hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib
│   ├── products.ts
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│   ├── advanced-neurosurgery-equipment.jpg
│   ├── category-cranial-systems.jpg
│   ├── category-neuroendoscopy.png
│   ├── category-spinal-implants.jpg
│   ├── dark-medical-background.jpg
│   ├── hero-dark-medical-technology.jpg
│   ├── hero-neurosurgery-background.jpg
│   ├── logos
│   │   ├── aesculap-logo.jpg
│   │   ├── bonegraft-logo.jpg
│   │   ├── bonetech-logo.png
│   │   ├── cruz-del-sur-logo.jpg
│   │   ├── dhl-logo.jpg
│   │   ├── endac-logo.png
│   │   ├── fedex-logo.jpg
│   │   ├── flores-cargo-logo.jpg
│   │   ├── hcbiologics_logo.jpg
│   │   ├── prodorth-logo.png
│   │   └── sciencemedic-logo.jpg
│   ├── medical-team-consultation-hospital.jpg
│   ├── medical-technology-abstract-pattern.jpg
│   ├── neurosurgery-medical-equipment-operating-room.jpg
│   ├── neurosurgery-operating-room-dark.jpg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   ├── placeholder.svg
│   ├── products
│   │   ├── aspirador-misonix-1.jpg
│   │   ├── aspirador-misonix-2.jpg
│   │   ├── aspirador-misonix-3.jpg
│   │   ├── becker-edms-1.png
│   │   ├── becker-edms-2.jpg
│   │   ├── clips-yasargil-1.jpeg
│   │   ├── clips-yasargil-2.jpg
│   │   ├── craneotomo-midas-rex-1.jpg
│   │   ├── craneotomo-midas-rex-2.jpg
│   │   ├── craneotomo-midas-rex-3.jpg
│   │   ├── craneotomo-midas-rex-4.jpg
│   │   ├── craniofix-1.jpeg
│   │   ├── craniofix-2.jpeg
│   │   ├── neuro-patch-1.jpeg
│   │   ├── neuro-patch-2.png
│   │   ├── neuroendoscopio-aesculap-1.jpeg
│   │   ├── neuroendoscopio-aesculap-2.jpeg
│   │   ├── neuroendoscopio-aesculap-3.jpeg
│   │   ├── valvulas-hidrocefalia-1.jpg
│   │   └── valvulas-hidrocefalia-2.jpg
│   ├── quality-control-medical-devices-laboratory.jpg
│   ├── video-thumbnail.jpg
│   └── videos
│       └── presentation.mp4
└── tsconfig.json
```

# Full Codebase

## File: `next.config.mjs`
```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

```

## File: `package.json`
```json
{
  "name": "my-v0-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "build": "next build",
    "dev": "next dev",
    "lint": "next lint",
    "start": "next start"
  },
  "dependencies": {
    "@emotion/is-prop-valid": "latest",
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "1.2.2",
    "@radix-ui/react-alert-dialog": "1.1.4",
    "@radix-ui/react-aspect-ratio": "1.1.1",
    "@radix-ui/react-avatar": "1.1.2",
    "@radix-ui/react-checkbox": "1.1.3",
    "@radix-ui/react-collapsible": "1.1.2",
    "@radix-ui/react-context-menu": "2.2.4",
    "@radix-ui/react-dialog": "1.1.4",
    "@radix-ui/react-dropdown-menu": "2.1.4",
    "@radix-ui/react-hover-card": "1.1.4",
    "@radix-ui/react-label": "2.1.1",
    "@radix-ui/react-menubar": "1.1.4",
    "@radix-ui/react-navigation-menu": "1.2.3",
    "@radix-ui/react-popover": "1.1.4",
    "@radix-ui/react-progress": "1.1.1",
    "@radix-ui/react-radio-group": "1.2.2",
    "@radix-ui/react-scroll-area": "1.2.2",
    "@radix-ui/react-select": "2.1.4",
    "@radix-ui/react-separator": "1.1.1",
    "@radix-ui/react-slider": "1.2.2",
    "@radix-ui/react-slot": "1.1.1",
    "@radix-ui/react-switch": "1.1.2",
    "@radix-ui/react-tabs": "1.1.2",
    "@radix-ui/react-toast": "1.2.4",
    "@radix-ui/react-toggle": "1.1.1",
    "@radix-ui/react-toggle-group": "1.1.1",
    "@radix-ui/react-tooltip": "1.1.6",
    "@vercel/analytics": "latest",
    "autoprefixer": "^10.4.20",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "1.0.4",
    "date-fns": "4.1.0",
    "embla-carousel-react": "8.5.1",
    "framer-motion": "latest",
    "geist": "^1.3.1",
    "input-otp": "1.4.1",
    "lucide-react": "^0.454.0",
    "next": "15.2.4",
    "next-themes": "^0.4.6",
    "nodemailer": "^7.0.10",
    "react": "^19",
    "react-day-picker": "9.8.0",
    "react-dom": "^19",
    "react-hook-form": "^7.60.0",
    "react-resizable-panels": "^2.1.7",
    "recharts": "2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.9",
    "@types/node": "^22",
    "@types/nodemailer": "^7.0.3",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint-config-next": "16.0.1",
    "postcss": "^8.5",
    "tailwindcss": "^4.1.9",
    "tw-animate-css": "1.3.3",
    "typescript": "^5"
  }
}

```

## File: `tsconfig.json`
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES6",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

## File: `.env.local`
```local
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=465
SMTP_SECURE=true
ZOHO_USER=ventas@apolomedical.com.pe
ZOHO_PASS=uUpkw?z1
CONTACT_TO=ventas@apolomedical.com.pe
```

## File: `.gitignore`
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules

# next.js
/.next/
/out/

# production
/build

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## File: `app\api\contact\route.ts`
```ts
import nodemailer from "nodemailer"


export const runtime = "nodejs"

type ContactPayload = {
  name: string
  email: string
  phone: string
  organization?: string
  role?: string
  product?: string
  preferredSchedule?: string
  contactMethod?: string
  subscribeEvent?: boolean
  message: string
}

const requiredFields: Array<keyof ContactPayload> = ["name", "email", "phone", "message"]

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<ContactPayload>

    for (const field of requiredFields) {
      if (!payload[field] || String(payload[field]).trim() === "") {
        return new Response(
          JSON.stringify({ ok: false, error: `El campo ${String(field)} es obligatorio.` }),
          { status: 400 },
        )
      }
    }

    if (!process.env.ZOHO_USER || !process.env.ZOHO_PASS || !process.env.SMTP_HOST) {
      return new Response(
        JSON.stringify({ ok: false, error: "Configuración SMTP incompleta." }),
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    })

    const productName = payload.product
      ? products.find((product) => product.id === payload.product)?.name || payload.product
      : undefined

    const productSummary = productName ? `Producto de interés: ${productName}` : "Consulta general"

    const scheduleLabels: Record<string, string> = {
      sin_preferencia: "Sin preferencia",
      manana: "Mañana (08:00 - 11:00)",
      tarde: "Tarde (12:00 - 17:00)",
      noche: "Noche (17:00 - 20:00)",
    }

    const contactMethodLabels: Record<string, string> = {
      email: "Correo electrónico",
      telefono: "Llamada telefónica",
      whatsapp: "WhatsApp",
    }

    const scheduleSummary = payload.preferredSchedule
      ? `\nHorario preferido: ${scheduleLabels[payload.preferredSchedule] ?? payload.preferredSchedule}`
      : ""
    const methodSummary = payload.contactMethod
      ? `\nPreferencia de contacto: ${contactMethodLabels[payload.contactMethod] ?? payload.contactMethod}`
      : ""
    const organizationSummary = payload.organization ? `\nOrganización: ${payload.organization}` : ""
    const roleSummary = payload.role ? `\nCargo: ${payload.role}` : ""
    const eventSummary = payload.subscribeEvent ? "\nDesea recibir información del próximo evento." : ""

    const subject = `Contacto — ${payload.name} (${productName || "Consulta"})`

    const textBody = `Nuevo mensaje desde el formulario de contacto
Nombre: ${payload.name}
Email: ${payload.email}
Teléfono: ${payload.phone}${organizationSummary}${roleSummary}
${productSummary}${scheduleSummary}${methodSummary}${eventSummary}

Mensaje:
${payload.message}`

    const htmlBody = `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Teléfono:</strong> ${payload.phone}</p>
      ${payload.organization ? `<p><strong>Organización:</strong> ${payload.organization}</p>` : ""}
      ${payload.role ? `<p><strong>Cargo:</strong> ${payload.role}</p>` : ""}
      <p><strong>${productName ? "Producto de interés" : "Motivo"}:</strong> ${
        productName || "Consulta general"
      }</p>
      ${payload.contactMethod ? `<p><strong>Preferencia de contacto:</strong> ${
          contactMethodLabels[payload.contactMethod] ?? payload.contactMethod
        }</p>` : ""}
      ${payload.preferredSchedule ? `<p><strong>Horario preferido:</strong> ${
          scheduleLabels[payload.preferredSchedule] ?? payload.preferredSchedule
        }</p>` : ""}
      ${payload.subscribeEvent ? `<p><strong>Evento:</strong> Desea información sobre el próximo evento.</p>` : ""}
      <p><strong>Mensaje:</strong></p>
      <p>${(payload.message ?? "").replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
      from: `Apolo Medical HT <${process.env.ZOHO_USER}>`,
      to: process.env.CONTACT_TO || process.env.ZOHO_USER,
      replyTo: payload.email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (error) {
    console.error("Error enviando contacto:", error)
    return new Response(
      JSON.stringify({ ok: false, error: "No se pudo enviar el mensaje en este momento." }),
      { status: 500 },
    )
  }
}

```

## File: `app\contacto\page.tsx`
```tsx
"use client"

import { Suspense, useEffect, useMemo, useRef } from "react"
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, CalendarClock, Megaphone, Clock } from "lucide-react"
import { products } from "@/lib/products"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Ingresa tu nombre completo." })
    .max(120, { message: "El nombre es demasiado largo." }),
  email: z
    .string()
    .trim()
    .email({ message: "Ingresa un correo válido." })
    .max(160, { message: "El correo es demasiado largo." }),
  phone: z
    .string()
    .trim()
    .min(6, { message: "Incluye un número de contacto." })
    .max(40, { message: "El número parece inválido." }),
  organization: z
    .string()
    .trim()
    .max(160, { message: "Máximo 160 caracteres." })
    .optional()
    .or(z.literal("")),
  role: z
    .string()
    .trim()
    .max(120, { message: "Máximo 120 caracteres." })
    .optional()
    .or(z.literal("")),
  product: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(12, { message: "Cuéntanos un poco más sobre tu necesidad." })
    .max(1200, { message: "Máximo 1200 caracteres." }),
  contactMethod: z.enum(["email", "telefono", "whatsapp"]),
  preferredSchedule: z.enum(["sin_preferencia", "manana", "tarde", "noche"]),
  subscribeEvent: z.boolean().default(false),
})

type ContactFormValues = z.infer<typeof contactSchema>

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

const upcomingEvent = {
  name: "Neuro Innovation Summit 2025",
  date: "15 - 17 noviembre 2025",
  location: "Lima, Perú",
  description:
    "Presentaremos soluciones innovadoras en neurocirugía y rehabilitación. Reserva tu lugar y recibe la agenda completa en tu correo.",
  registrationUrl: "https://forms.gle/n-evento-apolo",
}

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
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const hasPrefilledFromQuery = useRef(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
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
      subscribeEvent: false,
    },
    mode: "onBlur",
  })

  const selectedProductId = form.watch("product")
  const selectedProduct = useMemo(
    () => products.find((product) => product.id === selectedProductId),
    [selectedProductId],
  )
  const messageValue = form.watch("message") ?? ""

  useEffect(() => {
    const productParam = searchParams.get("product")
    if (!productParam || hasPrefilledFromQuery.current) {
      return
    }

    const productMatch = products.find((product) => product.id === productParam)
    if (productMatch) {
      hasPrefilledFromQuery.current = true
      form.setValue("product", productMatch.id, { shouldValidate: true })
      if (!form.getValues("message") || form.getValues("message") === buildProductMessage()) {
        form.setValue("message", buildProductMessage(productMatch.name), { shouldDirty: false })
      }
    }
  }, [form, searchParams])

  const groupedProducts = useMemo(() => {
    const categories: Record<string, typeof products> = {}
    products.forEach((product) => {
      if (!categories[product.category]) {
        categories[product.category] = []
      }
      categories[product.category].push(product)
    })
    return categories
  }, [])

  const onSubmit = async (values: ContactFormValues) => {
    const payload = {
      ...values,
      organization: values.organization?.trim() ? values.organization.trim() : undefined,
      role: values.role?.trim() ? values.role.trim() : undefined,
      product: values.product?.trim() ? values.product : undefined,
      message: values.message.trim(),
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

      form.reset({
        name: "",
        email: "",
        phone: "",
        organization: "",
        role: "",
        product: selectedProduct?.id ?? "",
        message: selectedProduct ? buildProductMessage(selectedProduct.name) : buildProductMessage(),
        contactMethod: values.contactMethod,
        preferredSchedule: values.preferredSchedule,
        subscribeEvent: values.subscribeEvent,
      })
    } catch (error) {
      toast({
        title: "No se pudo enviar",
        description:
          error instanceof Error
            ? error.message
            : "Ocurrió un error inesperado. Intenta nuevamente en unos minutos.",
        variant: "destructive",
      })
    }
  }

  const faqs = [
    {
      question: "¿Cuál es el tiempo de entrega?",
      answer: "El tiempo de entrega estándar es de 24-48 horas para Lima y 3-5 días para provincias.",
    },
    {
      question: "¿Ofrecen garantía en los productos?",
      answer: "Sí, todos nuestros productos cuentan con garantía del fabricante y soporte técnico especializado.",
    },
    {
      question: "¿Brindan capacitación técnica?",
      answer:
        "Ofrecemos capacitación técnica continua sobre el uso correcto de nuestros productos y procedimientos quirúrgicos.",
    },
    {
      question: "¿Cómo puedo convertirme en distribuidor?",
      answer:
        "Completa el formulario seleccionando 'Ser distribuidor' como motivo e indícanos tu empresa para agendar una reunión de evaluación.",
    },
  ]

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
            <Card className="border-white/30 bg-white/10 text-left backdrop-blur">
              <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-lg text-primary-foreground">{upcomingEvent.name}</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    {upcomingEvent.description}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-white text-primary">
                  Reservas abiertas
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 text-primary-foreground/90 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5" />
                  <div>
                    <p className="font-semibold">{upcomingEvent.date}</p>
                    <p className="text-sm opacity-90">{upcomingEvent.location}</p>
                  </div>
                </div>
                <Button asChild variant="secondary" size="sm" className="bg-white text-primary">
                  <a href={upcomingEvent.registrationUrl} target="_blank" rel="noopener noreferrer">
                    Ver agenda preliminar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
            <Card className="border-border/60 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Agenda una conversación personalizada</CardTitle>
                <CardDescription>
                  Responde el formulario y recibirá seguimiento en menos de un día hábil. Si vienes desde un producto,
                  lo preseleccionamos para acelerar la asesoría.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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
                        name="product"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Producto de interés</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={(value) => {
                                  field.onChange(value)
                                  const matchedProduct = products.find((product) => product.id === value)
                                  if (matchedProduct) {
                                    form.setValue("message", buildProductMessage(matchedProduct.name), {
                                      shouldDirty: true,
                                      shouldValidate: false,
                                    })
                                  }
                                }}
                                value={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Selecciona un producto" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="">
                                    <span>Consulta general</span>
                                  </SelectItem>
                                  <SelectSeparator />
                                  {Object.entries(groupedProducts).map(([category, items]) => (
                                    <SelectGroup key={category}>
                                      <SelectLabel>
                                        {category === "neurocirugia"
                                          ? "Neurocirugía"
                                          : category === "columna"
                                            ? "Columna"
                                            : "Accesorios"}
                                      </SelectLabel>
                                      {items.map((product) => (
                                        <SelectItem key={product.id} value={product.id}>
                                          {product.name}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormDescription>
                              {selectedProduct
                                ? `Se enviará información específica sobre ${selectedProduct.name}.`
                                : "Elige un producto para personalizar la asesoría."}
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
                                  <div
                                    key={value}
                                    className="flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3"
                                  >
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
                            <FormDescription>
                              Ajustamos nuestra llamada a la agenda de tu equipo clínico.
                            </FormDescription>
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
                            <span className="text-sm text-muted-foreground">
                              {messageValue.length}/1200
                            </span>
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

                    <FormField
                      control={form.control}
                      name="subscribeEvent"
                      render={({ field }) => (
                        <FormItem className="flex flex-col gap-3">
                          <div className="flex items-start gap-3 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-4">
                            <Checkbox
                              id="subscribeEvent"
                              checked={field.value}
                              onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                            />
                            <div>
                              <FormLabel htmlFor="subscribeEvent" className="inline-flex items-center gap-2 text-base">
                                <Megaphone className="h-4 w-4" />
                                Quiero recibir invitaciones prioritarias al evento {upcomingEvent.name}
                              </FormLabel>
                              <FormDescription>
                                Te enviaremos agenda, speakers confirmados y acceso anticipado a demos en vivo.
                              </FormDescription>
                            </div>
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
                      <a
                        href="mailto:ventas@apolomedical.com.pe"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
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
                        <a href="tel:+51957359298" className="hover:text-primary">
                          (+51) 957 359 298
                        </a>
                        <a href="tel:+51958362601" className="hover:text-primary">
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
                      <p className="text-muted-foreground">
                        URB. Pablo VI – II Etapa Mz N Lote 1, Arequipa – Perú
                      </p>
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
                        <a href="https://wa.me/51957359298" target="_blank" rel="noopener noreferrer">
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
                  {faqs.map((faq, index) => (
                    <div key={faq.question} className="rounded-lg border border-border/60 bg-muted/30 p-4">
                      <p className="font-semibold text-foreground">{faq.question}</p>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
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

function ContactPageFallback() {
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

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactPageFallback />}>
      <ContactPageContent />
    </Suspense>
  )
}

```

## File: `app/distribucion/page.tsx`
```tsx
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

```

## File: `app/globals.css`
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  /* Updated to elegant white and light blue color palette */
  --background: oklch(0.98 0.01 240);
  --foreground: oklch(0.15 0.02 240);
  --card: oklch(0.99 0.01 240);
  --card-foreground: oklch(0.15 0.02 240);
  --popover: oklch(0.98 0.01 240);
  --popover-foreground: oklch(0.15 0.02 240);
  --primary: oklch(0.55 0.15 240);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.92 0.02 240);
  --secondary-foreground: oklch(0.15 0.02 240);
  --muted: oklch(0.85 0.01 240);
  --muted-foreground: oklch(0.45 0.02 240);
  --accent: oklch(0.5 0.18 240);
  --accent-foreground: oklch(0.99 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.9 0.01 240);
  --input: oklch(0.96 0.01 240);
  --ring: oklch(0.55 0.15 240);
  --chart-1: oklch(0.55 0.15 240);
  --chart-2: oklch(0.7 0.08 240);
  --chart-3: oklch(0.65 0.12 240);
  --chart-4: oklch(0.6 0.1 240);
  --chart-5: oklch(0.5 0.14 240);
  --radius: 0.75rem;
  --sidebar: oklch(0.98 0.01 240);
  --sidebar-foreground: oklch(0.15 0.02 240);
  --sidebar-primary: oklch(0.55 0.15 240);
  --sidebar-primary-foreground: oklch(0.99 0 0);
  --sidebar-accent: oklch(0.92 0.02 240);
  --sidebar-accent-foreground: oklch(0.15 0.02 240);
  --sidebar-border: oklch(0.9 0.01 240);
  --sidebar-ring: oklch(0.55 0.15 240);
}

.dark {
  /* Dark mode also uses elegant white and light blue palette */
  --background: oklch(0.98 0.01 240);
  --foreground: oklch(0.15 0.02 240);
  --card: oklch(0.99 0.01 240);
  --card-foreground: oklch(0.15 0.02 240);
  --popover: oklch(0.98 0.01 240);
  --popover-foreground: oklch(0.15 0.02 240);
  --primary: oklch(0.55 0.15 240);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.92 0.02 240);
  --secondary-foreground: oklch(0.15 0.02 240);
  --muted: oklch(0.85 0.01 240);
  --muted-foreground: oklch(0.45 0.02 240);
  --accent: oklch(0.5 0.18 240);
  --accent-foreground: oklch(0.99 0 0);
  --destructive: oklch(0.5 0.2 27);
  --destructive-foreground: oklch(0.98 0 0);
  --border: oklch(0.9 0.01 240);
  --input: oklch(0.96 0.01 240);
  --ring: oklch(0.55 0.15 240);
  --sidebar: oklch(0.98 0.01 240);
  --sidebar-foreground: oklch(0.15 0.02 240);
  --sidebar-primary: oklch(0.55 0.15 240);
  --sidebar-primary-foreground: oklch(0.99 0 0);
  --sidebar-accent: oklch(0.92 0.02 240);
  --sidebar-accent-foreground: oklch(0.15 0.02 240);
  --sidebar-border: oklch(0.9 0.01 240);
  --sidebar-ring: oklch(0.55 0.15 240);
}

@theme inline {
  --font-header: var(--font-inter);
  --font-heading: var(--font-cormorant);
  --font-body: var(--font-source-sans);
  --font-sans: var(--font-source-sans);
  --font-serif: var(--font-cormorant);
  --font-mono: var(--font-geist-mono);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }

  html {
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.3;
  }

  p,
  li,
  span {
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    line-height: 1.7;
    letter-spacing: 0.01em;
  }

  nav,
  header {
    font-family: var(--font-header);
  }
}

@layer utilities {
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Added shimmer effect for premium feel */
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 60s linear infinite;
    will-change: transform;
  }


  .animate-scroll {
    animation: scroll 45s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
  }

  .transition-smooth {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Added glass morphism effect */
  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Added shimmer effect class */
  .shimmer {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: shimmer 3s infinite;
  }
}

```

## File: `app/layout.tsx`
```tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apolo Medical HT S.A.C. - Innovación en Soluciones Médicas",
  description:
    "Importación y distribución de dispositivos médico-quirúrgicos, implantes de columna y productos de neurocirugía en Perú",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} ${sourceSans.variable} font-body antialiased`}>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

```

## File: `app/nosotros/page.tsx`
```tsx
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

```

## File: `app/noticias/page.tsx`
```tsx
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

```

## File: `app/page.tsx`
```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Truck, Users, ArrowRight, Play } from "lucide-react"
import { PartnerCarousel } from "@/components/partner-carousel"

export default function HomePage() {
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
      <section className="relative overflow-hidden min-h-[750px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300" />
        <div className="absolute inset-0 bg-[url('/hero-dark-medical-technology.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/50 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
          
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/85 to-white/80" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10" />
                <img
                  src="/category-neuroendoscopy.png"
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-white/80" />
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

```

## File: `app/productos/[id]/page.tsx`
```tsx
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { ArrowLeft, CheckCircle2, Download, Factory } from "lucide-react"

import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getCategoryLabel, getProductById, products } from "@/lib/products"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

type ProductDetailPageParams = {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: ProductDetailPageParams): Metadata {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Producto no encontrado | Apolo Medical HT",
      description: "El producto solicitado no está disponible en nuestro catálogo.",
    }
  }

  const title = `${product.name} | Apolo Medical HT`
  const description = product.shortDescription || product.fullDescription.slice(0, 155)
  const url = `${SITE_URL}/productos/${product.id}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Apolo Medical HT",
      type: "website",
      images: product.images.slice(0, 1).map((image) => ({
        url: `${SITE_URL}${image}`,
        alt: `Imagen del producto ${product.name}`,
      })),
    },
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageParams) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      <section className="border-b border-border bg-muted/30 py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <nav aria-label="Ruta de navegación">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/productos" className="transition-colors hover:text-foreground">
                  Productos
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{product.name}</li>
            </ol>
          </nav>
          <Button asChild variant="ghost" size="sm" className="mt-3 transition-smooth hover:scale-105">
            <Link href="/productos">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Volver al catálogo
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <Badge variant="secondary" className="mb-4 text-sm">
                {getCategoryLabel(product.category)}
              </Badge>
              <h1 className="text-balance font-serif text-4xl font-bold text-foreground md:text-5xl">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Factory className="h-4 w-4" aria-hidden="true" />
                <span className="font-medium">{product.manufacturer}</span>
              </div>
            </div>

            <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="flex items-center justify-center">
                <div className="w-full max-w-xl">
                  <ProductImageCarousel images={product.images} productName={product.name} />
                </div>
              </div>

              <div className="space-y-10">
                <section aria-labelledby="descripcion">
                  <h2 id="descripcion" className="mb-4 font-serif text-2xl font-semibold text-foreground">
                    Descripción
                  </h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">{product.fullDescription}</p>
                </section>

                <section aria-labelledby="caracteristicas">
                  <h2 id="caracteristicas" className="mb-6 font-serif text-2xl font-semibold text-foreground">
                    Características principales
                  </h2>
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={feature} className="flex gap-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-base text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {product.videoUrl && (
                  <section aria-labelledby="video" className="space-y-4">
                    <h2 id="video" className="font-serif text-2xl font-semibold text-foreground">
                      Video demostrativo
                    </h2>
                    <div className="aspect-video overflow-hidden rounded-xl border border-border shadow-sm">
                      <iframe
                        src={product.videoUrl}
                        title={`Video demostrativo de ${product.name}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  </section>
                )}

                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                  <Button asChild size="lg" className="flex-1 text-base">
                    <Link href="/contacto">Solicitar cotización</Link>
                  </Button>
                  {product.pdfUrl ? (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="flex-1 text-base"
                    >
                      <a href={product.pdfUrl} download aria-label={`Descargar la ficha técnica de ${product.name}`}>
                        <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                        Ficha técnica (PDF)
                      </a>
                    </Button>
                  ) : (
                    <p className="flex-1 self-center text-sm text-muted-foreground" aria-live="polite">
                      Solicita la hoja técnica a nuestro equipo comercial.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {product.specifications && (
              <Card className="mb-16 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="mb-8 text-center font-serif text-2xl font-semibold text-foreground">
                    Especificaciones técnicas
                  </h2>
                  <dl className="mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {product.specifications.map((spec) => (
                      <div
                        key={`${spec.label}-${spec.value}`}
                        className="flex h-full min-h-[92px] flex-col justify-between gap-2 rounded-xl border border-border/40 bg-muted/40 p-5"
                      >
                        <dt className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="text-base font-medium text-foreground">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-gradient-to-br from-muted to-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-serif text-3xl font-semibold text-foreground">
              Productos relacionados
            </h2>
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group flex h-full flex-col border-border/50 transition-shadow hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-muted">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={`Imagen representativa de ${relatedProduct.name}`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-3 p-6">
                    <div>
                      <Badge variant="outline" className="mb-2 border-primary/30 text-primary">
                        {getCategoryLabel(relatedProduct.category)}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {relatedProduct.name}
                      </h3>
                    </div>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{relatedProduct.shortDescription}</p>
                    <div className="mt-auto">
                      <Button asChild size="sm" className="w-full">
                        <Link href={`/productos/${relatedProduct.id}`}>Ver detalles</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
```

## File: `app/productos/_components/product-explorer.tsx`
```tsx
"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { RefreshCcw, Search } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getCategoryLabel, type Product, type ProductCategory } from "@/lib/products"
import { cn } from "@/lib/utils"

export type CategorySummary = {
  id: ProductCategory | "all"
  label: string
  description?: string
  count: number
}

interface ProductExplorerProps {
  categories: CategorySummary[]
  manufacturers: string[]
  products: Product[]
}

export function ProductExplorer({ categories, manufacturers, products }: ProductExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategorySummary["id"]>("all")
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>("all")
  const [query, setQuery] = useState("")

  const activeCategory = categories.find((category) => category.id === selectedCategory)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return products.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false
      }

      if (selectedManufacturer !== "all" && product.manufacturer.toLowerCase() !== selectedManufacturer) {
        return false
      }

      if (!normalizedQuery) {
        return true
      }

      const tokens = [
        product.name,
        product.manufacturer,
        product.shortDescription,
        product.fullDescription,
        ...(product.features || []),
        ...(product.keywords || []),
      ]
        .join(" ")
        .toLowerCase()

      return tokens.includes(normalizedQuery)
    })
  }, [products, query, selectedCategory, selectedManufacturer])

  const prefersReducedMotion = useReducedMotion()
  const totalResults = filteredProducts.length
  const nothingFound = totalResults === 0

  const resetFilters = () => {
    setSelectedCategory("all")
    setSelectedManufacturer("all")
    setQuery("")
  }

  return (
    <div className="bg-background">
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <label htmlFor="search" className="sr-only">
                Buscar productos
              </label>
              <div className="relative w-full lg:max-w-xl">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="search"
                  placeholder="Buscar por nombre, fabricante o característica"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="pl-9"
                />
              </div>

              {manufacturers.length > 1 && (
                <div className="flex w-full items-center gap-2 lg:w-auto">
                  <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                    <SelectTrigger aria-label="Filtrar por fabricante" className="w-full lg:w-64">
                      <SelectValue placeholder="Todos los fabricantes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los fabricantes</SelectItem>
                      {manufacturers.map((manufacturer) => (
                        <SelectItem key={manufacturer} value={manufacturer.toLowerCase()}>
                          {manufacturer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <Button
                type="button"
                variant="ghost"
                className="w-full gap-2 lg:w-auto"
                onClick={resetFilters}
                disabled={selectedCategory === "all" && selectedManufacturer === "all" && query.length === 0}
              >
                <RefreshCcw className="h-4 w-4" aria-hidden="true" />
                Limpiar filtros
              </Button>
            </div>

            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filtrar por categoría">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id
                const disabled = category.id !== "all" && category.count === 0

                return (
                  <Button
                    key={category.id}
                    type="button"
                    variant={isActive ? "default" : "outline"}
                    size="lg"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="catalogo-productos"
                    onClick={() => setSelectedCategory(category.id)}
                    disabled={disabled}
                    className={cn(
                      "transition-smooth",
                      isActive ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted",
                      disabled && "opacity-70"
                    )}
                  >
                    {category.label}
                    <Badge
                      variant="secondary"
                      className={cn(
                        "ml-2",
                        isActive && "bg-white/20 text-white",
                      )}
                    >
                      {category.count}
                    </Badge>
                    {disabled && <span className="sr-only">(Sin productos disponibles por ahora)</span>}
                  </Button>
                )
              })}
            </div>

            <div
              role="status"
              aria-live="polite"
              className="flex flex-col gap-1 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"
            >
              <span className="flex flex-wrap items-center gap-1">
                <span>
                  {totalResults} resultado{totalResults === 1 ? "" : "s"} para
                </span>
                <span className="font-medium text-foreground">{activeCategory?.label ?? "Todos"}</span>
                {selectedManufacturer !== "all" && (
                  <span>
                    · Fabricante: {manufacturers.find((item) => item.toLowerCase() === selectedManufacturer) ?? selectedManufacturer}
                  </span>
                )}
              </span>
              {activeCategory?.description && selectedCategory !== "all" && (
                <span>{activeCategory.description}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo-productos" className="py-16">
        <div className="container mx-auto px-4">
          {nothingFound ? (
            <div className="rounded-2xl border border-border bg-muted/40 p-10 text-center">
              <h2 className="text-lg font-semibold text-foreground">Sin coincidencias</h2>
              <p className="mt-2 text-muted-foreground">
                Ajusta los filtros o escríbenos a través del formulario de contacto para solicitar más información del catálogo.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contacto">Contactar al equipo</Link>
              </Button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.article
                    key={product.id}
                    layout
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.3,
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                    }}
                  >
                    <Card className="group flex h-full flex-col border-border/50 transition hover:border-primary/50 hover:shadow-xl">
                      <div className="relative h-56 w-full overflow-hidden rounded-t-xl bg-muted">
                        <Image
                          fill
                          priority={index < 2 && selectedCategory === "all" && query.length === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          src={product.images[0] || "/placeholder.svg"}
                          alt={`Imagen destacada de ${product.name}`}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                      <CardContent className="flex flex-1 flex-col gap-4 p-6">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="border-primary/30 text-primary">
                              {getCategoryLabel(product.category)}
                            </Badge>
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {product.manufacturer}
                            </span>
                          </div>
                          <h3 className="line-clamp-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                            {product.name}
                          </h3>
                        </div>
                        <p className="line-clamp-3 text-sm text-muted-foreground">{product.shortDescription}</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Button asChild className="w-full">
                          <Link href={`/productos/${product.id}`}>Ver detalles</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

```

## File: `app/productos/page.tsx`
```tsx
import type { Metadata } from "next"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  PRODUCT_CATEGORY_INFO,
  getCategoryLabel,
  products,
  type Product,
  type ProductCategory,
} from "@/lib/products"

import { ProductExplorer } from "./_components/product-explorer"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apolomedical.com.pe"

const pageTitle = "Catálogo de productos neuroquirúrgicos | Apolo Medical HT"
const pageDescription =
  "Descubre nuestra línea de dispositivos neuroquirúrgicos, soluciones para columna y accesorios especializados disponibles en Perú."

type CategorySummary = {
  id: ProductCategory | "all"
  label: string
  description?: string
  count: number
}

function buildCategorySummaries(list: Product[]): CategorySummary[] {
  const summaries = PRODUCT_CATEGORY_INFO.map((category) => ({
    ...category,
    count: list.filter((product) => product.category === category.id).length,
  }))

  return [
    {
      id: "all",
      label: "Todos",
      description: "Catálogo completo de soluciones Apolo Medical HT",
      count: list.length,
    },
    ...summaries,
  ]
}

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/productos`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/productos`,
    siteName: "Apolo Medical HT",
    type: "website",
  },
}

export default function ProductsPage() {
  const categories = buildCategorySummaries(products)
  const manufacturerOptions = Array.from(new Set(products.map((product) => product.manufacturer))).sort((a, b) =>
    a.localeCompare(b, "es"),
  )

  const highlightedCategories = categories.filter((category) => category.id !== "all")

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary py-24 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-10" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4 border-white/30 bg-white/20 text-white">
              Catálogo especializado
            </Badge>
            <h1 className="mb-6 text-balance font-serif text-5xl font-semibold md:text-6xl">
              Soluciones neuroquirúrgicas y de columna para equipos de alto rendimiento
            </h1>
            <p className="mx-auto text-pretty text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
              Equipos, implantes y accesorios diseñados para quirófanos modernamente equipados, con soporte local y documentación completa.
            </p>
          </div>

          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {highlightedCategories.map((category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-white/70">{category.label}</p>
                <p className="mt-2 text-3xl font-bold text-white">{category.count}</p>
                <p className="mt-2 text-sm text-white/80">
                  {category.description ?? `Explora nuestra oferta en ${category.label.toLowerCase()}.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductExplorer
        categories={categories}
        manufacturers={manufacturerOptions}
        products={products}
      />

      <section className="bg-gradient-to-br from-muted to-muted/40 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            ¿Necesitas especificaciones adicionales o una demo clínica?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Nuestro equipo técnico puede ayudarte a comparar soluciones, coordinar demos y preparar la documentación para licitaciones hospitalarias.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="transition-smooth hover:scale-105 text-lg px-8 py-6">
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-smooth hover:scale-105 text-lg px-8 py-6">
              <Link href="/distribucion">Conocer soporte regional</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

```

## File: `components/footer.tsx`
```tsx
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const partners = ["ENDAC", "PRODORTH", "SCIENCEMEDIC", "HC BIOLOGICS", "BONETECH"]

  const logistics = ["Cruz del Sur", "Flores Cargo", "DHL", "FedEx"]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">Apolo Medical HT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Innovación y confianza en soluciones médicas avanzadas para columna y neurocirugía.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:apolo.medicalht@gmail.com" className="hover:text-primary transition-colors">
                  apolo.medicalht@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>(+51) 957 359 298</div>
                  <div>(+51) 958 362 601</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>URB. Pablo VI – II Etapa Mz N Lote 1, Arequipa – Perú</span>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Socios Internacionales</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>

          {/* Logistics */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Logística</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {logistics.map((company) => (
                <li key={company}>{company}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apolo Medical HT S.A.C. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
```

## File: `components/navigation.tsx`
```tsx
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Productos" },
  ]

  return (
    <>
      {/* Header superior con teléfono y correo eliminado */}

      <nav
        className={`sticky top-0 z-50 w-full border-b transition-smooth font-header ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-border/80"
            : "bg-background/80 backdrop-blur-md border-border/40"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-3xl font-heading font-bold text-primary tracking-tight group-hover:text-primary/80 transition-smooth">
                  Apolo Medical
                </span>
                <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">HT S.A.C.</span>
              </div>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-base font-semibold text-foreground/80 transition-smooth hover:text-primary after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-smooth hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="lg"
                className="ml-2 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-smooth"
              >
                <Link href="/contacto">Contacto</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-border py-6 animate-fade-in">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-foreground/80 transition-smooth hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-2 font-semibold">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Contacto
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
```

## File: `components/partner-carousel.tsx`
```tsx
"use client"

export function PartnerCarousel() {
  const partners = [
    { name: "ENDAC", logo: "/logos/endac-logo.png" },
    { name: "PRODORTH", logo: "/logos/prodorth-logo.png" },
    { name: "SCIENCEMEDIC", logo: "/logos/sciencemedic-logo.jpg" },
    { name: "HC BIOLOGICS", logo: "/logos/hcbiologics_logo.jpg" },
    { name: "BONETECH", logo: "/logos/bonetech-logo.png" },
  ]

  // Duplicamos muchas veces para que el salto sea muy infrecuente
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners, 
                             ...partners, ...partners, ...partners, ...partners]

  return (
    <div className="relative overflow-hidden bg-muted/30 py-12">
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
              <img
                key={`${partner.name}-${index}`}
                src={partner.logo || "/placeholder.svg"}
                alt={`Logo ${partner.name}`}
                className="flex-shrink-0 h-32 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```

## File: `components/product-image-carousel.tsx`
```tsx
"use client"

import { useCallback, useEffect, useState, type KeyboardEvent } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductImageCarouselProps {
  images: string[]
  productName: string
}

export function ProductImageCarousel({ images, productName }: ProductImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (images.length <= 1) return

    if (event.key === "ArrowRight") {
      event.preventDefault()
      goToNext()
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goToPrevious()
    }
  }

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [goToNext, images.length])

  if (images.length === 0) {
    return (
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          fill
          src="/placeholder.svg"
          alt={`Imagen de referencia para ${productName}`}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    )
  }

  return (
    <div
      className="group relative h-[400px] w-full overflow-hidden rounded-lg bg-muted"
      role="region"
      aria-roledescription="Carrusel"
      aria-label={`Galería de imágenes de ${productName}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {images.map((image, index) => (
        <Image
          key={image ?? `placeholder-${index}`}
          fill
          priority={index === 0}
          src={image || "/placeholder.svg"}
          alt={`Imagen ${index + 1} de ${productName}`}
          className={`absolute inset-0 object-cover transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 text-foreground hover:bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

```

## File: `components/scroll-to-top.tsx`
```tsx
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return null
}

```

## File: `components/theme-provider.tsx`
```tsx
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

## File: `components/ui/accordion.tsx`
```tsx
'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

## File: `components/ui/alert-dialog.tsx`
```tsx
'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

## File: `components/ui/alert.tsx`
```tsx
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

```

## File: `components/ui/aspect-ratio.tsx`
```tsx
'use client'

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

```

## File: `components/ui/avatar.tsx`
```tsx
'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```

## File: `components/ui/badge.tsx`
```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```

## File: `components/ui/breadcrumb.tsx`
```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className,
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

## File: `components/ui/button-group.tsx`
```tsx
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}

```

## File: `components/ui/button.tsx`
```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

## File: `components/ui/calendar.tsx`
```tsx
'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'flex gap-4 flex-col md:flex-row relative',
          defaultClassNames.months,
        ),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn(
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'absolute bg-popover inset-0 opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
          defaultClassNames.weekday,
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn(
          'select-none w-(--cell-size)',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'text-[0.8rem] select-none text-muted-foreground',
          defaultClassNames.week_number,
        ),
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-md bg-accent',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon className={cn('size-4', className)} {...props} />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={cn('size-4', className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn('size-4', className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

```

## File: `components/ui/card.tsx`
```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

## File: `components/ui/carousel.tsx`
```tsx
'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

## File: `components/ui/chart.tsx`
```tsx
'use client'

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'

import { cn } from '@/lib/utils'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children']
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === 'string'
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn('font-medium', labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn('font-medium', labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  return (
    <div
      className={cn(
        'border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl',
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                '[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5',
                indicator === 'dot' && 'items-center',
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
                          {
                            'h-2.5 w-2.5': indicator === 'dot',
                            'w-1': indicator === 'line',
                            'w-0 border-[1.5px] border-dashed bg-transparent':
                              indicator === 'dashed',
                            'my-0.5': nestLabel && indicator === 'dashed',
                          },
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      'flex flex-1 justify-between leading-none',
                      nestLabel ? 'items-end' : 'items-center',
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={
              '[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3'
            }
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

## File: `components/ui/checkbox.tsx`
```tsx
'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

```

## File: `components/ui/collapsible.tsx`
```tsx
'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

## File: `components/ui/command.tsx`
```tsx
'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('bg-border -mx-1 h-px', className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

## File: `components/ui/context-menu.tsx`
```tsx
'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```

## File: `components/ui/dialog.tsx`
```tsx
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```

## File: `components/ui/drawer.tsx`
```tsx
'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```

## File: `components/ui/dropdown-menu.tsx`
```tsx
'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

```

## File: `components/ui/empty.tsx`
```tsx
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        'flex max-w-sm flex-col items-center gap-2 text-center',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-title"
      className={cn('text-lg font-medium tracking-tight', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className,
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}

```

## File: `components/ui/field.tsx`
```tsx
'use client'

import { useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'flex flex-col gap-6',
        'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'mb-3 font-medium',
        'data-[variant=legend]:text-base',
        'data-[variant=label]:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'group/field flex w-full gap-3 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('text-destructive text-sm font-normal', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

```

## File: `components/ui/form.tsx`
```tsx
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

## File: `components/ui/hover-card.tsx`
```tsx
'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '@/lib/utils'

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

```

## File: `components/ui/input-group.tsx`
```tsx
'use client'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
        'h-9 has-[>textarea]:h-auto',

        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Focus state.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]',

        // Error state.
        'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40',

        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        'inline-start':
          'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end':
          'order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'text-sm shadow-none flex gap-2 items-center',
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
        'icon-xs':
          'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
        'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

```

## File: `components/ui/input-otp.tsx`
```tsx
'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```

## File: `components/ui/input.tsx`
```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

```

## File: `components/ui/item.tsx`
```tsx
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]:hover:bg-accent/50 [a&]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50',
      },
      size: {
        default: 'p-4 gap-4 ',
        sm: 'py-3 px-4 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}

```

## File: `components/ui/kbd.tsx`
```tsx
import { cn } from '@/lib/utils'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'bg-muted w-fit text-muted-foreground pointer-events-none inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

```

## File: `components/ui/label.tsx`
```tsx
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }

```

## File: `components/ui/menubar.tsx`
```tsx
'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

```

## File: `components/ui/navigation-menu.tsx`
```tsx
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
        'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={'absolute top-full left-0 isolate z-50 flex justify-center'}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

```

## File: `components/ui/pagination.tsx`
```tsx
import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```

## File: `components/ui/popover.tsx`
```tsx
'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```

## File: `components/ui/progress.tsx`
```tsx
'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

```

## File: `components/ui/radio-group.tsx`
```tsx
'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```

## File: `components/ui/resizable.tsx`
```tsx
'use client'

import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```

## File: `components/ui/scroll-area.tsx`
```tsx
'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none p-px transition-colors select-none',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```

## File: `components/ui/select.tsx`
```tsx
'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```

## File: `components/ui/separator.tsx`
```tsx
'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }

```

## File: `components/ui/sheet.tsx`
```tsx
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

## File: `components/ui/sidebar.tsx`
```tsx
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'bg-background relative flex w-full flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('bg-background h-8 w-full shadow-none', className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : 'button'
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width] = React.useState(() => `${Math.floor(Math.random() * 40) + 50}%`)

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

## File: `components/ui/skeleton.tsx`
```tsx
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }

```

## File: `components/ui/slider.tsx`
```tsx
'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={
          'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
        }
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={
            'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          }
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```

## File: `components/ui/sonner.tsx`
```tsx
'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```

## File: `components/ui/spinner.tsx`
```tsx
import { Loader2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }

```

## File: `components/ui/switch.tsx`
```tsx
'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

```

## File: `components/ui/table.tsx`
```tsx
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

## File: `components/ui/tabs.tsx`
```tsx
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

## File: `components/ui/textarea.tsx`
```tsx
import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }

```

## File: `components/ui/toast.tsx`
```tsx
'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

## File: `components/ui/toaster.tsx`
```tsx
'use client'

import { useToast } from '@/hooks/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

## File: `components/ui/toggle-group.tsx`
```tsx
'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

```

## File: `components/ui/toggle.tsx`
```tsx
'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

```

## File: `components/ui/tooltip.tsx`
```tsx
'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

## File: `components/ui/use-mobile.tsx`
```tsx
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

```

## File: `components/ui/use-toast.ts`
```ts
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }

```

## File: `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}

```

## File: `eslint.config.mjs`
```mjs
import next from "eslint-config-next"

export default [
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**"],
  },
  ...next,
]

```

## File: `export-codebase.py`
```py
from pathlib import Path

# Directories to exclude from the export
EXCLUDED_DIRS = {'.git', '__pycache__', '.venv', '.idea', '.mypy_cache', '.vscode', '.github', 'node_modules', 
                '.next', 'out', 'dist', 'coverage', 'README.md','package-lock.json'}

# Important files to include even at the root level
IMPORTANT_CONFIG_FILES = [
    'next.config.mjs', 'next.config.js', 'package.json', 'tsconfig.json', 
    'tailwind.config.js', 'postcss.config.js', '.env.example', '.eslintrc.json'#,
    #'README.md'
]

def build_tree(directory: Path, prefix: str = "") -> list:
    """
    Generates a tree representation of directory structure and files,
    excluding the directories specified in EXCLUDED_DIRS.
    """
    # Filter and sort directory entries
    entries = sorted(
        [entry for entry in directory.iterdir() if entry.name not in EXCLUDED_DIRS],
        key=lambda e: e.name
    )
    tree_lines = []
    for index, entry in enumerate(entries):
        connector = "└── " if index == len(entries) - 1 else "├── "
        tree_lines.append(prefix + connector + entry.name)
        if entry.is_dir():
            extension = "    " if index == len(entries) - 1 else "│   "
            tree_lines.extend(build_tree(entry, prefix + extension))
    return tree_lines

def generate_codebase_markdown(base_path: str = ".", output_file: str = "full_codebase.md"):
    base = Path(base_path).resolve()
    
    lines = []

    # Add directory structure to the beginning of the Markdown file
    lines.append("# Project Structure")
    lines.append("")
    lines.append("```")
    # Start with the project root name
    lines.append(f"{base.name}/")
    tree_lines = build_tree(base)
    lines.extend(tree_lines)
    lines.append("```")
    lines.append("")

    # Add the codebase content in Markdown
    lines.append("# Full Codebase")
    lines.append("")

    # Process all important files at the root level first
    for filename in IMPORTANT_CONFIG_FILES:
        file_path = base / filename
        if file_path.exists() and file_path.is_file():
            rel_path = file_path.relative_to(base)
            lines.append(f"## File: `{rel_path}`")
            try:
                content = file_path.read_text(encoding='utf-8')
            except UnicodeDecodeError:
                lines.append("_[Skipped: binary or non-UTF8 file]_")
                continue
            except Exception as e:
                lines.append(f"_[Error reading file: {e}]_")
                continue
            ext = file_path.suffix.lstrip('.')
            lang = ext if ext else ""
            lines.append(f"```{lang}")
            lines.append(content)
            lines.append("```")
            lines.append("")

    # Process all files in project directories (excluding those in EXCLUDED_DIRS)
    for path in sorted(base.glob("**/*")):
        # Skip excluded directories
        if any(excluded in path.parts for excluded in EXCLUDED_DIRS):
            continue
        
        # Skip already processed root config files
        if path.parent == base and path.name in IMPORTANT_CONFIG_FILES:
            continue
            
        if path.is_file():
            rel_path = path.relative_to(base)
            lines.append(f"## File: `{rel_path}`")
            try:
                content = path.read_text(encoding='utf-8')
            except UnicodeDecodeError:
                lines.append("_[Skipped: binary or non-UTF8 file]_")
                continue
            except Exception as e:
                lines.append(f"_[Error reading file: {e}]_")
                continue
            ext = path.suffix.lstrip('.')
            lang = ext if ext else ""
            lines.append(f"```{lang}")
            lines.append(content)
            lines.append("```")
            lines.append("")

    output_path = base / output_file
    try:
        output_path.write_text("\n".join(lines), encoding='utf-8')
        print(f"✅ Code exported to Markdown at: {output_path}")
    except Exception as e:
        print(f"❌ Error writing output file: {e}")

# If the script is run directly 
if __name__ == "__main__":
    generate_codebase_markdown()
```

## File: `hooks/use-mobile.ts`
```ts
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

```

## File: `hooks/use-toast.ts`
```ts
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }

```

## File: `lib/products.ts`
```ts
export type ProductCategory = "neurocirugia" | "columna" | "accesorios"

export interface Product {
  id: string
  name: string
  category: ProductCategory
  manufacturer: string
  shortDescription: string
  fullDescription: string
  features: string[]
  specifications?: { label: string; value: string }[]
  images: string[]
  pdfUrl?: string
  videoUrl?: string
  keywords?: string[]
}

export const PRODUCT_CATEGORY_INFO: Array<{
  id: ProductCategory
  label: string
  description: string
}> = [
  {
    id: "neurocirugia",
    label: "Neurocirugía",
    description:
      "Tecnología de precisión para procedimientos neuroquirúrgicos avanzados y de mínima invasión.",
  },
  {
    id: "columna",
    label: "Columna",
    description: "Implantes, sistemas de estabilización y soluciones integrales para cirugía de columna.",
  },
  {
    id: "accesorios",
    label: "Accesorios",
    description: "Instrumental, consumibles y soluciones complementarias para quirófanos especializados.",
  },
]

export function getCategoryLabel(category: ProductCategory): string {
  return PRODUCT_CATEGORY_INFO.find((item) => item.id === category)?.label ?? category
}

export const products: Product[] = [
  {
    id: "craneotomo-midas-rex",
    name: "Craneótomo Midas Rex™ Legend EHS",
    category: "neurocirugia",
    manufacturer: "Medtronic",
    shortDescription:
      "Sistema quirúrgico de alta velocidad para neurocirugía. Combina microdebridador, taladro y sierra para cortes precisos en tejido óseo y blando.",
    fullDescription:
      "El Craneótomo Midas Rex™ Legend EHS de Medtronic es un sistema de alta precisión diseñado para la eliminación controlada de tejido duro y blando en procedimientos de neurocirugía craneal y de base de cráneo. Combina una consola de control avanzada, bombas de irrigación integradas, pedal ergonómico y piezas de mano intercambiables para ofrecer potencia, precisión y seguridad en cada intervención. Ideal para procedimientos neuroquirúrgicos, de columna y otorrinolaringología (ENT).",
    features: [
      "Consola de control avanzada con regulación digital de velocidad y torque",
      "Bombas de irrigación integradas para enfriamiento continuo",
      "Pedal ergonómico de doble función con control de velocidad variable",
      "Piezas de mano intercambiables: microdebridador, taladro y sierra quirúrgica",
      "Eliminación precisa de tejido duro y blando con mínimo trauma",
      "Sistema de seguridad integrado contra sobrecarga térmica y eléctrica",
      "Diseño modular y compatible con accesorios Medtronic Legend y Stylus",
    ],
    specifications: [
      { label: "Tipo", value: "Sistema microdebridador de alta velocidad" },
      { label: "Aplicación", value: "Neurocirugía craneal, columna y base de cráneo" },
      { label: "Velocidad máxima", value: "Hasta 75,000 rpm" },
      { label: "Fuente de energía", value: "Eléctrica (consola EC200 / Stylus EHS)" },
      { label: "Modo de control", value: "Pedal de pie variable o interfaz manual" },
      { label: "Torque", value: "Alto, ajustable según aplicación" },
      { label: "Sistema de irrigación", value: "Bomba peristáltica integrada" },
      { label: "Componentes incluidos", value: "Consola, bombas, pedal, piezas de mano, fresas y cables" },
    ],
    images: [
      "/products/craneotomo-midas-rex-1.jpg",
      "/products/craneotomo-midas-rex-2.jpg",
      "/products/craneotomo-midas-rex-3.jpg",
      "/products/craneotomo-midas-rex-4.jpg",
    ],
  },
  {
    id: "aspirador-ultrasonico-misonix",
    name: "Aspirador Ultrasónico Misonix® Sonastar RF 1000",
    category: "neurocirugia",
    manufacturer: "Misonix",
    shortDescription:
      "Sistema ultrasónico multifuncional con pedal inalámbrico de 4 funciones para resección precisa de hueso y tejidos blandos.",
    fullDescription:
      "El Misonix® Sonastar RF 1000 es un sistema quirúrgico ultrasónico que combina fragmentación, aspiración e irrigación en una sola plataforma. Diseñado para neurocirugía y cirugía espinal, permite la eliminación controlada de hueso, tumores calcificados y tejidos blandos con mínima afectación del tejido sano. Incluye pedal inalámbrico de 4 funciones y control electrónico con respuesta dinámica según el tejido. Soporta integración de coagulación monopolar (RF) de forma simultánea con la aspiración ultrasónica.",
    features: [
      "Pedal inalámbrico progresivo de 4 funciones",
      "Frecuencia ultrasónica de 23 kHz con generador piezoeléctrico",
      "Fragmentación, aspiración e irrigación simultáneas",
      "Respuesta dinámica: ajuste automático de potencia según el tejido",
      "Low Vac System (bajo vacío) para control delicado de aspiración",
      "Coagulación monopolar opcional integrada (módulo RF)",
      "Piezas de mano universales esterilizables y ergonómicas",
      "Interfaz intuitiva con control digital de parámetros",
    ],
    specifications: [
      { label: "Tipo", value: "Aspirador ultrasónico quirúrgico multifuncional" },
      { label: "Aplicación", value: "Neurocirugía y cirugía espinal; resección tumoral" },
      { label: "Frecuencia ultrasónica", value: "≈ 23 kHz" },
      { label: "Piezas de mano", value: "2 piezas universales de 23 kHz (esterilizables)" },
      { label: "Modo de control", value: "Pedal inalámbrico de 4 funciones y panel frontal" },
      { label: "Aspiración", value: "Low Vac System para bajo vacío controlado" },
      { label: "Coagulación", value: "Monopolar opcional (módulo RF), simultánea a la aspiración" },
      { label: "Fuente de energía", value: "Compatible con 110/220/230 V AC, 50/60 Hz" },
      { label: "Funciones integradas", value: "Fragmentación, aspiración e irrigación" },
      { label: "Registro/Regulaciones", value: "FDA (p. ej., K212060); cumplimiento de normativas internacionales" },
      { label: "Componentes (según configuración)", value: "Consola RF 1000, pedal inalámbrico, piezas de mano, cánulas, sistema de irrigación; módulos RF opcionales" }
    ],
    images: [
      "/products/aspirador-misonix-1.jpg",
      "/products/aspirador-misonix-2.jpg",
      "/products/aspirador-misonix-3.jpg",
    ],
  },
  {
    id: "neuroendoscopio-aesculap",
    name: "Neuroendoscopio Aesculap® MINOP®",
    category: "neurocirugia",
    manufacturer: "Aesculap",
    shortDescription:
      "Sistema modular de neuroendoscopia Full HD para procedimientos mínimamente invasivos en neurocirugía.",
    fullDescription:
      "El sistema Aesculap® MINOP® es un neuroendoscopio modular de alta precisión diseñado para procedimientos neuroquirúrgicos mínimamente invasivos. Compatible con ópticas Full HD y disponible en direcciones de visión de 0° y 30°, ofrece una calidad de imagen excepcional y una ergonomía superior. Su diseño modular permite combinar distintas ópticas, vainas de trabajo e instrumentos, optimizando la versatilidad y la seguridad intraoperatoria. Ideal para ventriculostomías, biopsias, resecciones tumorales y exploraciones endoscópicas cerebrales.",
    features: [
      "Compatibilidad con cámaras Full HD (Aesculap EinsteinVision® o similares)",
      "Ópticas de 0° y 30° de alta definición",
      "Sistema modular adaptable a múltiples procedimientos neuroendoscópicos",
      "Diseño ergonómico y balanceado para mayor precisión",
      "Instrumental intercambiable y de fácil esterilización",
      "Calidad óptica alemana con transmisión de luz superior",
      "Ideal para neurocirugía mínimamente invasiva (ventriculostomía, biopsia, resección tumoral)",
    ],
    specifications: [
      { label: "Tipo", value: "Sistema de neuroendoscopia modular" },
      { label: "Resolución", value: "Full HD (1920 x 1080 px)" },
      { label: "Ángulos de visión", value: "0° y 30°" },
      { label: "Compatibilidad", value: "Sistema de cámara EinsteinVision® o fuentes de luz estándar (Xenón/LED)" },
      { label: "Material del endoscopio", value: "Acero inoxidable médico con óptica multicapa de alta transmisión" },
      { label: "Diámetro de las ópticas", value: "2.7 mm a 4 mm según aplicación" },
      { label: "Aplicaciones principales", value: "Ventriculostomía, biopsia cerebral, resección tumoral y exploración endoscópica" },
      { label: "Fabricante", value: "Aesculap® (B. Braun Melsungen AG, Alemania)" },
      { label: "Certificaciones", value: "CE, ISO 13485, FDA" },
    ],
    images: [
      "/products/neuroendoscopio-aesculap-1.jpeg",
      "/products/neuroendoscopio-aesculap-2.jpeg",
      "/products/neuroendoscopio-aesculap-3.jpeg",
    ],
  },
  {
    id: "fijacion-craneal-craniofix",
    name: "Fijación Craneal Craniofix 2",
    category: "neurocirugia",
    manufacturer: "Aesculap",
    shortDescription:
      "Sistema de fijación craneal en aleación de titanio Ti6Al4V, biocompatible, estable y compatible con resonancia magnética.",
    fullDescription:
      "El sistema CranioFix® 2 es un dispositivo de fijación craneal fabricado en titanio Ti6Al4V (aleación de alta pureza, grado médico) diseñado para el cierre seguro de colgajos óseos tras una craneotomía o para la fijación de fragmentos óseos del neurocráneo. Proporciona una fijación mecánicamente estable, con baja altura de perfil para resultados cosméticos óptimos y total compatibilidad con resonancia magnética (MRI 1.5 T y 3.0 T). El sistema ofrece una aplicación rápida (menos de 2 minutos por clamp) gracias a su mecanismo de sujeción reproducible con fuerza definida, reduciendo el tiempo quirúrgico y mejorando la seguridad del paciente. Es ampliamente utilizado a nivel mundial, con más de 3.5 millones de implantes colocados.",
    features: [
      "Material: Titanio Ti6Al4V (aleación de grado médico, alta pureza)",
      "Alta biocompatibilidad y resistencia a la corrosión",
      "Bajo perfil para un excelente resultado cosmético",
      "Alta estabilidad mecánica (~30 kg de seguridad en depresión / ~22 kg en tensión)",
      "Aplicación rápida: colocación del clamp en menos de 2 minutos",
      "Compatibilidad total con resonancia magnética (MRI 1.5 T y 3.0 T)",
      "Mecanismo de sujeción reproducible con fuerza definida (strain-relief)",
      "No absorbible: fijación permanente",
      "Aprobado y utilizado globalmente en neurocirugía (Aesculap / B. Braun)"
    ],
    specifications: [
      { label: "Material", value: "Titanio Ti6Al4V (aleación Ti-6Al-4V, ISO 5832-3)" },
      { label: "Aplicación", value: "Fijación de colgajos óseos tras craneotomía y fragmentos del neurocráneo" },
      { label: "Compatibilidad", value: "MRI 1.5 T y 3.0 T (MRI-conditional)" },
      { label: "Perfil", value: "Bajo perfil, resultado estético superior" },
      { label: "Tiempo de aplicación", value: "< 2 minutos por clamp" },
      { label: "Estabilidad", value: "Depresión ≈ 30 kg / Tensión ≈ 22 kg" },
      { label: "Tamaños disponibles", value: "11 mm, 16 mm y 20 mm (clamps intercambiables)" },
      { label: "Instrumental asociado", value: "Aplicador, pin-cutter, pinzas de extracción" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Made in Germany)" }
    ],
    images: [
      "/products/craniofix-1.jpeg",
      "/products/craniofix-2.jpeg",
    ],
  },
  {
    id: "clips-aneurisma-yasargil",
    name: "Clips de Aneurisma Yasargil",
    category: "neurocirugia",
    manufacturer: "Aesculap",
    shortDescription:
      "Clips temporales y permanentes para clipaje de aneurismas cerebrales, en diversas configuraciones y tamaños.",
    fullDescription:
      "Los clips de aneurisma Yasargil son instrumentos neuroquirúrgicos de precisión utilizados para la oclusión segura y permanente o temporal de aneurismas intracraneales. Fabricados en aleación de titanio o acero inoxidable de grado médico, ofrecen una excelente biocompatibilidad, resistencia y elasticidad controlada. Disponibles en configuraciones rectas, curvas, anguladas, en forma de bayoneta y fenestradas, los clips Yasargil garantizan una presión constante en la zona de oclusión sin dañar las paredes del vaso. Se fabrican en versiones temporales y permanentes, con variantes MINI (3–7 mm, resorte pequeño) y STANDARD (3–25 mm, resorte grande), permitiendo una adaptación precisa al tipo y localización del aneurisma. Estos clips son el estándar de oro mundial en neurocirugía vascular, con más de 50 años de uso clínico comprobado.",
    features: [
      "Disponibles en versiones temporales y permanentes",
      "Alta precisión y fuerza de cierre constante",
      "Materiales biocompatibles: titanio o acero quirúrgico",
      "Diseño probado clínicamente (más de 50 años de experiencia)",
      "Variedad de formas: rectos, curvos, angulados, bayoneta y fenestrados",
      "Tamaños MINI (3–7 mm) y STANDARD (3–25 mm)",
      "Compatibles con estudios de resonancia magnética (MRI-safe)",
      "Fácil aplicación con instrumentos Yasargil originales",
      "Fabricación alemana con control de calidad B. Braun Aesculap"
    ],
    specifications: [
      { label: "Tipos de Clip", value: "Temporales y permanentes" },
      { label: "Tamaños", value: "Mini (3–7 mm) y estándar (3–25 mm)" },
      { label: "Material", value: "Titanio Ti6Al4V o acero inoxidable quirúrgico" },
      { label: "Configuraciones", value: "Rectos, curvos, angulados, bayoneta, fenestrado" },
      { label: "Aplicación", value: "Clipaje de aneurismas intracraneales" },
      { label: "Presión de cierre", value: "Constante y calibrada según tipo de clip (0.88–1.2 N típicamente)" },
      { label: "Compatibilidad MRI", value: "Seguros para resonancia magnética hasta 3.0 T" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Alemania)" }
    ],
    images: [
      "/products/clips-yasargil-1.jpeg",
      "/products/clips-yasargil-2.jpg",
    ],
  },
  {
    id: "neuro-patch",
    name: "Neuro-Patch®",
    category: "accesorios",
    manufacturer: "Aesculap",
    shortDescription:
      "Sustituto sintético y duradero de duramadre para reparación dural en neurocirugía.",
    fullDescription:
      "Neuro-Patch® es un sustituto sintético de duramadre fabricado a partir de un vellón microporoso de poliésteruretano altamente purificado. Está diseñado para la reparación o sustitución de la duramadre en procedimientos neuroquirúrgicos. Su estructura microporosa permite la infiltración rápida de fibroblastos y la integración con el tejido conectivo circundante, garantizando una excelente biocompatibilidad. El material ofrece alta estanqueidad al líquido cefalorraquídeo (LCR), gran resistencia a la tracción y excelente suturabilidad, evitando fugas o desgarros en la línea de sutura. Su flexibilidad permite adaptarse fácilmente a las estructuras anatómicas, asegurando una reparación dural firme y duradera.",
    features: [
      "Sustituto sintético de duramadre (vellón microporoso de poliésteruretano)",
      "Alta estanqueidad: evita fugas de líquido cefalorraquídeo (LCR)",
      "Excelente tolerancia tisular y biocompatibilidad",
      "Alta resistencia a la tracción: evita la extracción de la sutura",
      "Buena suturabilidad y facilidad de manipulación",
      "Adaptable a diferentes estructuras anatómicas",
      "Apoya la infiltración celular y regeneración del tejido conectivo",
      "Uso validado en neurocirugía y cirugía de base de cráneo"
    ],
    specifications: [
      { label: "Tipo", value: "Sustituto dural sintético (vellón microporoso de poliésteruretano)" },
      { label: "Aplicación", value: "Reconstrucción o sustitución de la duramadre en neurocirugía" },
      { label: "Biocompatibilidad", value: "Alta, material tolerante a los tejidos" },
      { label: "Estanqueidad", value: "Evita fugas de LCR gracias a su estructura densa" },
      { label: "Resistencia a tracción", value: "Alta, evita desprendimiento de la sutura" },
      { label: "Suturabilidad", value: "Excelente, permite sutura directa o adhesiva" },
      { label: "Fabricante", value: "Aesculap / B. Braun (Alemania)" },
      { label: "Presentaciones", value: "Diferentes medidas según área quirúrgica (p. ej. 2×2 cm, 5×5 cm, 10×10 cm)" }
    ],
    images: [
      "/products/neuro-patch-1.jpeg",
      "/products/neuro-patch-2.png",
    ],
  },
  {
    id: "sistema-drenaje-becker",
    name: "Sistema Becker EDMS",
    category: "neurocirugia",
    manufacturer: "Medtronic",
    shortDescription:
      "Sistema de drenaje y monitoreo externo avanzado para drenaje ventricular y control de presión intracraneal.",
    fullDescription:
      "El Sistema Externo de Drenaje y Monitoreo Becker® (EDMS) de Medtronic está diseñado para el drenaje controlado de líquido cefalorraquídeo (LCR) y la medición precisa de la presión intracraneal. Su estructura cerrada y estéril permite un monitoreo continuo y seguro, reduciendo el riesgo de infección y facilitando el manejo en unidades de cuidados intensivos. El sistema incorpora puntos múltiples de muestreo sin aguja, escalas calibradas en mmHg y cmH₂O de fácil lectura, y cámaras de goteo con fondo cónico para un control óptimo del flujo. Incluye bolsas extraíbles y de gran volumen para drenaje prolongado, además de instrucciones impresas en el panel posterior para un uso seguro y rápido. Es compatible con diferentes configuraciones ventriculares, subaracnoideas o lumbares.",
    features: [
      "Sistema cerrado y estéril para drenaje seguro de LCR",
      "Escala doble con medidas en mmHg y cmH₂O para monitoreo preciso",
      "Dos tipos de sitios de inyección sin aguja para toma de muestras seguras",
      "Hasta tres puntos de muestreo en el sistema",
      "Fondo cónico en la cámara de goteo que evita la acumulación de residuos",
      "Bolsas de drenaje de gran capacidad y fácilmente extraíbles",
      "Indicadores de volumen y presión claramente visibles",
      "Instrucciones impresas en el panel posterior",
      "Compatible con procedimientos de drenaje ventricular, lumbar y subaracnoideo",
      "Fácil instalación y manipulación por personal clínico"
    ],
    specifications: [
      { label: "Tipo", value: "Sistema de drenaje y monitoreo externo cerrado" },
      { label: "Aplicación", value: "Drenaje ventricular y medición de presión intracraneal" },
      { label: "Escala de medición", value: "mmHg y cmH₂O (doble escala legible)" },
      { label: "Puntos de muestreo", value: "2 a 3 puntos de acceso sin aguja" },
      { label: "Cámara de goteo", value: "Fondo cónico para control de flujo" },
      { label: "Bolsas", value: "Gran volumen, extraíbles y calibradas" },
      { label: "Esterilidad", value: "Sistema cerrado estéril, de un solo uso" },
      { label: "Fabricante", value: "Medtronic / Becker®" }
    ],
    images: [
      "/products/becker-edms-1.png",
      "/products/becker-edms-2.jpg",
    ],
  },
  {
    id: "valvulas-hidrocefalia",
    name: "Válvulas para Hidrocefalia",
    category: "neurocirugia",
    manufacturer: "Medtronic / Codman / Sophysa",
    shortDescription:
      "Válvulas de derivación para hidrocefalia en versiones adulto, pediátrica y neonatal, con diseño anatómico y materiales radiopacos.",
    fullDescription:
      "Las válvulas para hidrocefalia están diseñadas para el manejo controlado del líquido cefalorraquídeo (LCR) en pacientes con hidrocefalia. Disponibles en versiones para adulto, pediátrica y neonatal, cuentan con válvulas y catéteres radiopacos que permiten su visualización en estudios de imagen. Su forma contorneada imita la curvatura del cráneo, ofreciendo un bajo perfil que mejora la comodidad del paciente. Fabricadas con materiales no metálicos, son totalmente compatibles con estudios de tomografía y resonancia magnética. El domo del reservorio está hecho de elastómero de silicón inyectable, lo que facilita la obtención de muestras de LCR mediante punción, sin comprometer la integridad del sistema. Ofrecen alta confiabilidad, durabilidad y una amplia variedad de presiones de apertura para adaptarse a las necesidades clínicas de cada paciente.",
    features: [
      "Versiones disponibles: adulto, pediátrica y neonatal",
      "Válvulas y catéteres radiopacos (visibles en rayos X y tomografía)",
      "Diseño anatómico contorneado que imita la curvatura craneal",
      "Bajo perfil para mejor acomodamiento subcutáneo",
      "Compatibles con resonancia magnética (MRI-safe)",
      "Reservorio de elastómero de silicón inyectable",
      "Permite la punción y extracción de LCR para análisis de laboratorio",
      "Alta confiabilidad y precisión en el control de presión",
      "Materiales biocompatibles, no metálicos y duraderos"
    ],
    specifications: [
      { label: "Tipos", value: "Adulto, pediátrica, neonatal" },
      { label: "Material", value: "Radiopaco, elastómero de silicón inyectable, no metálico" },
      { label: "Compatibilidad MRI", value: "Seguras para resonancia magnética (MRI compatible)" },
      { label: "Perfil", value: "Bajo perfil anatómico, adaptable al cráneo" },
      { label: "Presiones disponibles", value: "Baja, media y alta (según modelo y paciente)" },
      { label: "Aplicación", value: "Tratamiento de hidrocefalia y manejo de LCR" },
      { label: "Fabricante", value: "Medtronic / Codman / Sophysa (según modelo y región)" }
    ],
    images: [
      "/products/valvulas-hidrocefalia-1.jpg",
      "/products/valvulas-hidrocefalia-2.jpg",
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category)
}

```

## File: `lib/utils.ts`
```ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

## File: `next-env.d.ts`
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## File: `pnpm-lock.yaml`
```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@emotion/is-prop-valid':
        specifier: latest
        version: 1.4.0
      '@hookform/resolvers':
        specifier: ^3.10.0
        version: 3.10.0(react-hook-form@7.65.0(react@19.2.0))
      '@radix-ui/react-accordion':
        specifier: 1.2.2
        version: 1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-alert-dialog':
        specifier: 1.1.4
        version: 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-aspect-ratio':
        specifier: 1.1.1
        version: 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-avatar':
        specifier: 1.1.2
        version: 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-checkbox':
        specifier: 1.1.3
        version: 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-collapsible':
        specifier: 1.1.2
        version: 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-context-menu':
        specifier: 2.2.4
        version: 2.2.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-dialog':
        specifier: 1.1.4
        version: 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-dropdown-menu':
        specifier: 2.1.4
        version: 2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-hover-card':
        specifier: 1.1.4
        version: 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-label':
        specifier: 2.1.1
        version: 2.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-menubar':
        specifier: 1.1.4
        version: 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-navigation-menu':
        specifier: 1.2.3
        version: 1.2.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-popover':
        specifier: 1.1.4
        version: 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-progress':
        specifier: 1.1.1
        version: 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-radio-group':
        specifier: 1.2.2
        version: 1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-scroll-area':
        specifier: 1.2.2
        version: 1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-select':
        specifier: 2.1.4
        version: 2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-separator':
        specifier: 1.1.1
        version: 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slider':
        specifier: 1.2.2
        version: 1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot':
        specifier: 1.1.1
        version: 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-switch':
        specifier: 1.1.2
        version: 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-tabs':
        specifier: 1.1.2
        version: 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-toast':
        specifier: 1.2.4
        version: 1.2.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-toggle':
        specifier: 1.1.1
        version: 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-toggle-group':
        specifier: 1.1.1
        version: 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-tooltip':
        specifier: 1.1.6
        version: 1.1.6(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@vercel/analytics':
        specifier: latest
        version: 1.5.0(next@15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0))(react@19.2.0)
      autoprefixer:
        specifier: ^10.4.20
        version: 10.4.21(postcss@8.5.6)
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      cmdk:
        specifier: 1.0.4
        version: 1.0.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      date-fns:
        specifier: 4.1.0
        version: 4.1.0
      embla-carousel-react:
        specifier: 8.5.1
        version: 8.5.1(react@19.2.0)
      framer-motion:
        specifier: latest
        version: 12.23.24(@emotion/is-prop-valid@1.4.0)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      geist:
        specifier: ^1.3.1
        version: 1.5.1(next@15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0))
      input-otp:
        specifier: 1.4.1
        version: 1.4.1(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      lucide-react:
        specifier: ^0.454.0
        version: 0.454.0(react@19.2.0)
      next:
        specifier: 15.2.4
        version: 15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      next-themes:
        specifier: ^0.4.6
        version: 0.4.6(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react:
        specifier: ^19
        version: 19.2.0
      react-day-picker:
        specifier: 9.8.0
        version: 9.8.0(react@19.2.0)
      react-dom:
        specifier: ^19
        version: 19.2.0(react@19.2.0)
      react-hook-form:
        specifier: ^7.60.0
        version: 7.65.0(react@19.2.0)
      react-resizable-panels:
        specifier: ^2.1.7
        version: 2.1.9(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      recharts:
        specifier: 2.15.4
        version: 2.15.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      sonner:
        specifier: ^1.7.4
        version: 1.7.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      tailwind-merge:
        specifier: ^2.5.5
        version: 2.6.0
      tailwindcss-animate:
        specifier: ^1.0.7
        version: 1.0.7(tailwindcss@4.1.16)
      vaul:
        specifier: ^0.9.9
        version: 0.9.9(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      zod:
        specifier: 3.25.76
        version: 3.25.76
    devDependencies:
      '@tailwindcss/postcss':
        specifier: ^4.1.9
        version: 4.1.16
      '@types/node':
        specifier: ^22
        version: 22.18.13
      '@types/react':
        specifier: ^19
        version: 19.2.2
      '@types/react-dom':
        specifier: ^19
        version: 19.2.2(@types/react@19.2.2)
      eslint-config-next:
        specifier: 16.0.1
        version: 16.0.1(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      postcss:
        specifier: ^8.5
        version: 8.5.6
      tailwindcss:
        specifier: ^4.1.9
        version: 4.1.16
      tw-animate-css:
        specifier: 1.3.3
        version: 1.3.3
      typescript:
        specifier: ^5
        version: 5.9.3

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@babel/code-frame@7.27.1':
    resolution: {integrity: sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.28.5':
    resolution: {integrity: sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.28.5':
    resolution: {integrity: sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.28.5':
    resolution: {integrity: sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.27.2':
    resolution: {integrity: sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-globals@7.28.0':
    resolution: {integrity: sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.27.1':
    resolution: {integrity: sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.28.3':
    resolution: {integrity: sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-string-parser@7.27.1':
    resolution: {integrity: sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.28.5':
    resolution: {integrity: sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.27.1':
    resolution: {integrity: sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.28.4':
    resolution: {integrity: sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.28.5':
    resolution: {integrity: sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/runtime@7.28.4':
    resolution: {integrity: sha512-Q/N6JNWvIvPnLDvjlE1OUBLPQHH6l3CltCEsHIujp45zQUSSh8K+gHnaEX45yAT1nyngnINhvWtzN+Nb9D8RAQ==}
    engines: {node: '>=6.9.0'}

  '@babel/template@7.27.2':
    resolution: {integrity: sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.28.5':
    resolution: {integrity: sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.28.5':
    resolution: {integrity: sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==}
    engines: {node: '>=6.9.0'}

  '@date-fns/tz@1.2.0':
    resolution: {integrity: sha512-LBrd7MiJZ9McsOgxqWX7AaxrDjcFVjWH/tIKJd7pnR7McaslGYOP1QmmiBXdJH/H/yLCT+rcQ7FaPBUxRGUtrg==}

  '@emnapi/core@1.6.0':
    resolution: {integrity: sha512-zq/ay+9fNIJJtJiZxdTnXS20PllcYMX3OE23ESc4HK/bdYu3cOWYVhsOhVnXALfU/uqJIxn5NBPd9z4v+SfoSg==}

  '@emnapi/runtime@1.6.0':
    resolution: {integrity: sha512-obtUmAHTMjll499P+D9A3axeJFlhdjOWdKUNs/U6QIGT7V5RjcUW1xToAzjvmgTSQhDbYn/NwfTRoJcQ2rNBxA==}

  '@emnapi/wasi-threads@1.1.0':
    resolution: {integrity: sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==}

  '@emotion/is-prop-valid@1.4.0':
    resolution: {integrity: sha512-QgD4fyscGcbbKwJmqNvUMSE02OsHUa+lAWKdEUIJKgqe5IwRSKd7+KhibEWdaKwgjLj0DRSHA9biAIqGBk05lw==}

  '@emotion/memoize@0.9.0':
    resolution: {integrity: sha512-30FAj7/EoJ5mwVPOWhAyCX+FPfMDrVecJAM+Iw9NRoSl4BBAQeqj4cApHHUXOVvIPgLVDsCFoz/hGD+5QQD1GQ==}

  '@eslint-community/eslint-utils@4.9.0':
    resolution: {integrity: sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.2':
    resolution: {integrity: sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/config-array@0.21.1':
    resolution: {integrity: sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/config-helpers@0.4.2':
    resolution: {integrity: sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/core@0.16.0':
    resolution: {integrity: sha512-nmC8/totwobIiFcGkDza3GIKfAw1+hLiYVrh3I1nIomQ8PEr5cxg34jnkmGawul/ep52wGRAcyeDCNtWKSOj4Q==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/core@0.17.0':
    resolution: {integrity: sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/eslintrc@3.3.1':
    resolution: {integrity: sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/js@9.38.0':
    resolution: {integrity: sha512-UZ1VpFvXf9J06YG9xQBdnzU+kthors6KjhMAl6f4gH4usHyh31rUf2DLGInT8RFYIReYXNSydgPY0V2LuWgl7A==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/object-schema@2.1.7':
    resolution: {integrity: sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/plugin-kit@0.4.1':
    resolution: {integrity: sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@floating-ui/core@1.7.3':
    resolution: {integrity: sha512-sGnvb5dmrJaKEZ+LDIpguvdX3bDlEllmv4/ClQ9awcmCZrlx5jQyyMWFM5kBI+EyNOCDDiKk8il0zeuX3Zlg/w==}

  '@floating-ui/dom@1.7.4':
    resolution: {integrity: sha512-OOchDgh4F2CchOX94cRVqhvy7b3AFb+/rQXyswmzmGakRfkMgoWVjfnLWkRirfLEfuD4ysVW16eXzwt3jHIzKA==}

  '@floating-ui/react-dom@2.1.6':
    resolution: {integrity: sha512-4JX6rEatQEvlmgU80wZyq9RT96HZJa88q8hp0pBd+LrczeDI4o6uA2M+uvxngVHo4Ihr8uibXxH6+70zhAFrVw==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.10':
    resolution: {integrity: sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==}

  '@hookform/resolvers@3.10.0':
    resolution: {integrity: sha512-79Dv+3mDF7i+2ajj7SkypSKHhl1cbln1OGavqrsF7p6mbUv11xpqpacPsGDCTRvCSjEEIez2ef1NveSVL3b0Ag==}
    peerDependencies:
      react-hook-form: ^7.0.0

  '@humanfs/core@0.19.1':
    resolution: {integrity: sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==}
    engines: {node: '>=18.18.0'}

  '@humanfs/node@0.16.7':
    resolution: {integrity: sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==}
    engines: {node: '>=18.18.0'}

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/retry@0.4.3':
    resolution: {integrity: sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==}
    engines: {node: '>=18.18'}

  '@img/sharp-darwin-arm64@0.33.5':
    resolution: {integrity: sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.33.5':
    resolution: {integrity: sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    resolution: {integrity: sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.0.4':
    resolution: {integrity: sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.0.4':
    resolution: {integrity: sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.0.5':
    resolution: {integrity: sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.0.4':
    resolution: {integrity: sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.0.4':
    resolution: {integrity: sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    resolution: {integrity: sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    resolution: {integrity: sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.33.5':
    resolution: {integrity: sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.33.5':
    resolution: {integrity: sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-s390x@0.33.5':
    resolution: {integrity: sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.33.5':
    resolution: {integrity: sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.33.5':
    resolution: {integrity: sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.33.5':
    resolution: {integrity: sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.33.5':
    resolution: {integrity: sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-ia32@0.33.5':
    resolution: {integrity: sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.33.5':
    resolution: {integrity: sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@0.2.12':
    resolution: {integrity: sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==}

  '@next/env@15.2.4':
    resolution: {integrity: sha512-+SFtMgoiYP3WoSswuNmxJOCwi06TdWE733D+WPjpXIe4LXGULwEaofiiAy6kbS0+XjM5xF5n3lKuBwN2SnqD9g==}

  '@next/eslint-plugin-next@16.0.1':
    resolution: {integrity: sha512-g4Cqmv/gyFEXNeVB2HkqDlYKfy+YrlM2k8AVIO/YQVEPfhVruH1VA99uT1zELLnPLIeOnx8IZ6Ddso0asfTIdw==}

  '@next/swc-darwin-arm64@15.2.4':
    resolution: {integrity: sha512-1AnMfs655ipJEDC/FHkSr0r3lXBgpqKo4K1kiwfUf3iE68rDFXZ1TtHdMvf7D0hMItgDZ7Vuq3JgNMbt/+3bYw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.2.4':
    resolution: {integrity: sha512-3qK2zb5EwCwxnO2HeO+TRqCubeI/NgCe+kL5dTJlPldV/uwCnUgC7VbEzgmxbfrkbjehL4H9BPztWOEtsoMwew==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.2.4':
    resolution: {integrity: sha512-HFN6GKUcrTWvem8AZN7tT95zPb0GUGv9v0d0iyuTb303vbXkkbHDp/DxufB04jNVD+IN9yHy7y/6Mqq0h0YVaQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.2.4':
    resolution: {integrity: sha512-Oioa0SORWLwi35/kVB8aCk5Uq+5/ZIumMK1kJV+jSdazFm2NzPDztsefzdmzzpx5oGCJ6FkUC7vkaUseNTStNA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.2.4':
    resolution: {integrity: sha512-yb5WTRaHdkgOqFOZiu6rHV1fAEK0flVpaIN2HB6kxHVSy/dIajWbThS7qON3W9/SNOH2JWkVCyulgGYekMePuw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.2.4':
    resolution: {integrity: sha512-Dcdv/ix6srhkM25fgXiyOieFUkz+fOYkHlydWCtB0xMST6X9XYI3yPDKBZt1xuhOytONsIFJFB08xXYsxUwJLw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.2.4':
    resolution: {integrity: sha512-dW0i7eukvDxtIhCYkMrZNQfNicPDExt2jPb9AZPpL7cfyUo7QSNl1DjsHjmmKp6qNAqUESyT8YFl/Aw91cNJJg==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.2.4':
    resolution: {integrity: sha512-SbnWkJmkS7Xl3kre8SdMF6F/XDh1DTFEhp0jRTj/uB8iPKoU2bb2NDfcu+iifv1+mxQEd1g2vvSxcZbXSKyWiQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@nolyfill/is-core-module@1.0.39':
    resolution: {integrity: sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==}
    engines: {node: '>=12.4.0'}

  '@radix-ui/number@1.1.0':
    resolution: {integrity: sha512-V3gRzhVNU1ldS5XhAPTom1fOIo4ccrjjJgmE+LI2h/WaFpHmx0MQApT+KZHnx8abG6Avtfcz4WoEciMnpFT3HQ==}

  '@radix-ui/primitive@1.1.1':
    resolution: {integrity: sha512-SJ31y+Q/zAyShtXJc8x83i9TYdbAfHZ++tUZnvjJJqFjzsdUnKsxPL6IEtBlxKkU7yzer//GQtZSV4GbldL3YA==}

  '@radix-ui/react-accordion@1.2.2':
    resolution: {integrity: sha512-b1oh54x4DMCdGsB4/7ahiSrViXxaBwRPotiZNnYXjLha9vfuURSAZErki6qjDoSIV0eXx5v57XnTGVtGwnfp2g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-alert-dialog@1.1.4':
    resolution: {integrity: sha512-A6Kh23qZDLy3PSU4bh2UJZznOrUdHImIXqF8YtUa6CN73f8EOO9XlXSCd9IHyPvIquTaa/kwaSWzZTtUvgXVGw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-arrow@1.1.1':
    resolution: {integrity: sha512-NaVpZfmv8SKeZbn4ijN2V3jlHA9ngBG16VnIIm22nUR0Yk8KUALyBxT3KYEUnNuch9sTE8UTsS3whzBgKOL30w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-aspect-ratio@1.1.1':
    resolution: {integrity: sha512-kNU4FIpcFMBLkOUcgeIteH06/8JLBcYY6Le1iKenDGCYNYFX3TQqCZjzkOsz37h7r94/99GTb7YhEr98ZBJibw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-avatar@1.1.2':
    resolution: {integrity: sha512-GaC7bXQZ5VgZvVvsJ5mu/AEbjYLnhhkoidOboC50Z6FFlLA03wG2ianUoH+zgDQ31/9gCF59bE4+2bBgTyMiig==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-checkbox@1.1.3':
    resolution: {integrity: sha512-HD7/ocp8f1B3e6OHygH0n7ZKjONkhciy1Nh0yuBgObqThc3oyx+vuMfFHKAknXRHHWVE9XvXStxJFyjUmB8PIw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collapsible@1.1.2':
    resolution: {integrity: sha512-PliMB63vxz7vggcyq0IxNYk8vGDrLXVWw4+W4B8YnwI1s18x7YZYqlG9PLX7XxAJUi0g2DxP4XKJMFHh/iVh9A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.1':
    resolution: {integrity: sha512-LwT3pSho9Dljg+wY2KN2mrrh6y3qELfftINERIzBUO9e0N+t0oMTyn3k9iv+ZqgrwGkRnLpNJrsMv9BZlt2yuA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.1':
    resolution: {integrity: sha512-Y9VzoRDSJtgFMUCoiZBDVo084VQ5hfpXxVE+NgkdNsjiDBByiImMZKKhxMwCbdHvhlENG6a833CbFkOQvTricw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context-menu@2.2.4':
    resolution: {integrity: sha512-ap4wdGwK52rJxGkwukU1NrnEodsUFQIooANKu+ey7d6raQ2biTcEf8za1zr0mgFHieevRTB2nK4dJeN8pTAZGQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-context@1.1.1':
    resolution: {integrity: sha512-UASk9zi+crv9WteK/NU4PLvOoL3OuE6BWVKNF6hPRBtYBDXQ2u5iu3O59zUlJiTVvkyuycnqrztsHVJwcK9K+Q==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.4':
    resolution: {integrity: sha512-Ur7EV1IwQGCyaAuyDRiOLA5JIUZxELJljF+MbM/2NC0BYwfuRrbpS30BiQBJrVruscgUkieKkqXYDOoByaxIoA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.0':
    resolution: {integrity: sha512-BUuBvgThEiAXh2DWu93XsT+a3aWrGqolGlqqw5VU1kG7p/ZH2cuDlM1sRLNnY3QcBS69UIz2mcKhMxDsdewhjg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.3':
    resolution: {integrity: sha512-onrWn/72lQoEucDmJnr8uczSNTujT0vJnA/X5+3AkChVPowr8n1yvIKIabhWyMQeMvvmdpsvcyDqx3X1LEXCPg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.4':
    resolution: {integrity: sha512-iXU1Ab5ecM+yEepGAWK8ZhMyKX4ubFdCNtol4sT9D0OVErG9PNElfx3TQhjw7n7BC5nFVz68/5//clWy+8TXzA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.1':
    resolution: {integrity: sha512-pSIwfrT1a6sIoDASCSpFwOasEwKTZWDw/iBdtnqKO7v6FeOzYJ7U53cPzYFVR3geGGXgVHaH+CdngrrAzqUGxg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.1':
    resolution: {integrity: sha512-01omzJAYRxXdG2/he/+xy+c8a8gCydoQ1yOxnWNcRhrrBW5W+RQJ22EK1SaO8tb3WoUsuEw7mJjBozPzihDFjA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-hover-card@1.1.4':
    resolution: {integrity: sha512-QSUUnRA3PQ2UhvoCv3eYvMnCAgGQW+sTu86QPuNb+ZMi+ZENd6UWpiXbcWDQ4AEaKF9KKpCHBeaJz9Rw6lRlaQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.0':
    resolution: {integrity: sha512-EJUrI8yYh7WOjNOqpoJaf1jlFIH2LvtgAl+YcFqNCa+4hj64ZXmPkAKOFs/ukjz3byN6bdb/AVUqHkI8/uWWMA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.1':
    resolution: {integrity: sha512-UUw5E4e/2+4kFMH7+YxORXGWggtY6sM8WIwh5RZchhLuUg2H1hc98Py+pr8HMz6rdaYrK2t296ZEjYLOCO5uUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.4':
    resolution: {integrity: sha512-BnOgVoL6YYdHAG6DtXONaR29Eq4nvbi8rutrV/xlr3RQCMMb3yqP85Qiw/3NReozrSW+4dfLkK+rc1hb4wPU/A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menubar@1.1.4':
    resolution: {integrity: sha512-+KMpi7VAZuB46+1LD7a30zb5IxyzLgC8m8j42gk3N4TUCcViNQdX8FhoH1HDvYiA8quuqcek4R4bYpPn/SY1GA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-navigation-menu@1.2.3':
    resolution: {integrity: sha512-IQWAsQ7dsLIYDrn0WqPU+cdM7MONTv9nqrLVYoie3BPiabSfUVDe6Fr+oEt0Cofsr9ONDcDe9xhmJbL1Uq1yKg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popover@1.1.4':
    resolution: {integrity: sha512-aUACAkXx8LaFymDma+HQVji7WhvEhpFJ7+qPz17Nf4lLZqtreGOFRiNQWQmhzp7kEWg9cOyyQJpdIMUMPc/CPw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.1':
    resolution: {integrity: sha512-3kn5Me69L+jv82EKRuQCXdYyf1DqHwD2U/sxoNgBGCB7K9TRc3bQamQ+5EPM9EvyPdli0W41sROd+ZU1dTCztw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.3':
    resolution: {integrity: sha512-NciRqhXnGojhT93RPyDaMPfLH3ZSl4jjIFbZQ1b/vxvZEdHsBZ49wP9w8L3HzUQwep01LcWtkUvm0OVB5JAHTw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.2':
    resolution: {integrity: sha512-18TFr80t5EVgL9x1SwF/YGtfG+l0BS0PRAlCWBDoBEiDQjeKgnNZRVJp/oVBl24sr3Gbfwc/Qpj4OcWTQMsAEg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.0.1':
    resolution: {integrity: sha512-sHCWTtxwNn3L3fH8qAfnF3WbUZycW93SM1j3NFDzXBiz8D6F5UTTy8G1+WFEaiCdvCVRJWj6N2R4Xq6HdiHmDg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-progress@1.1.1':
    resolution: {integrity: sha512-6diOawA84f/eMxFHcWut0aE1C2kyE9dOyCTQOMRR2C/qPiXz/X0SaiA/RLbapQaXUCmy0/hLMf9meSccD1N0pA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-radio-group@1.2.2':
    resolution: {integrity: sha512-E0MLLGfOP0l8P/NxgVzfXJ8w3Ch8cdO6UDzJfDChu4EJDy+/WdO5LqpdY8PYnCErkmZH3gZhDL1K7kQ41fAHuQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.1':
    resolution: {integrity: sha512-QE1RoxPGJ/Nm8Qmk0PxP8ojmoaS67i0s7hVssS7KuI2FQoc/uzVlZsqKfQvxPE6D8hICCPHJ4D88zNhT3OOmkw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-scroll-area@1.2.2':
    resolution: {integrity: sha512-EFI1N/S3YxZEW/lJ/H1jY3njlvTd8tBmgKEn4GHi51+aMm94i6NmAJstsm5cu3yJwYqYc93gpCPm21FeAbFk6g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-select@2.1.4':
    resolution: {integrity: sha512-pOkb2u8KgO47j/h7AylCj7dJsm69BXcjkrvTqMptFqsE2i0p8lHkfgneXKjAgPzBMivnoMyt8o4KiV4wYzDdyQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.1':
    resolution: {integrity: sha512-RRiNRSrD8iUiXriq/Y5n4/3iE8HzqgLHsusUSg5jVpU2+3tqcUFPJXHDymwEypunc2sWxDUS3UC+rkZRlHedsw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slider@1.2.2':
    resolution: {integrity: sha512-sNlU06ii1/ZcbHf8I9En54ZPW0Vil/yPVg4vQMcFNjrIx51jsHbFl1HYHQvCIWJSr1q0ZmA+iIs/ZTv8h7HHSA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.1.1':
    resolution: {integrity: sha512-RApLLOcINYJA+dMVbOju7MYv1Mb2EBp2nH4HdDzXTSyaR5optlm6Otrz1euW3HbdOR8UmmFK06TD+A9frYWv+g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-switch@1.1.2':
    resolution: {integrity: sha512-zGukiWHjEdBCRyXvKR6iXAQG6qXm2esuAD6kDOi9Cn+1X6ev3ASo4+CsYaD6Fov9r/AQFekqnD/7+V0Cs6/98g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tabs@1.1.2':
    resolution: {integrity: sha512-9u/tQJMcC2aGq7KXpGivMm1mgq7oRJKXphDwdypPd/j21j/2znamPU8WkXgnhUaTrSFNIt8XhOyCAupg8/GbwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toast@1.2.4':
    resolution: {integrity: sha512-Sch9idFJHJTMH9YNpxxESqABcAFweJG4tKv+0zo0m5XBvUSL8FM5xKcJLFLXononpePs8IclyX1KieL5SDUNgA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toggle-group@1.1.1':
    resolution: {integrity: sha512-OgDLZEA30Ylyz8YSXvnGqIHtERqnUt1KUYTKdw/y8u7Ci6zGiJfXc02jahmcSNK3YcErqioj/9flWC9S1ihfwg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toggle@1.1.1':
    resolution: {integrity: sha512-i77tcgObYr743IonC1hrsnnPmszDRn8p+EGUsUt+5a/JFn28fxaM88Py6V2mc8J5kELMWishI0rLnuGLFD/nnQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-tooltip@1.1.6':
    resolution: {integrity: sha512-TLB5D8QLExS1uDn7+wH/bjEmRurNMTzNrtq7IjaS4kjion9NtzsTGkvR5+i7yc9q01Pi2KMM2cN3f8UG4IvvXA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.0':
    resolution: {integrity: sha512-CasTfvsy+frcFkbXtSJ2Zu9JHpN8TYKxkgJGWbjiZhFivxaeW7rMeZt7QELGVLaYVfFMsKHjb7Ak0nMEe+2Vfw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.1.0':
    resolution: {integrity: sha512-MtfMVJiSr2NjzS0Aa90NPTnvTSg6C/JLCV7ma0W6+OMV78vd8OyRpID+Ng9LxzsPbLeuBnWBA1Nq30AtBIDChw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.0':
    resolution: {integrity: sha512-L7vwWlR1kTTQ3oh7g1O0CBF3YCyyTj8NmhLR+phShpyA50HCfBFKVJTpshm9PzLiKmehsrQzTYTpX9HvmC9rhw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.0':
    resolution: {integrity: sha512-+FPE0rOdziWSrH9athwI1R0HDVbWlEhd+FR+aSDk4uWGmSJ9Z54sdZVDQPZAinJhJXwfT+qnj969mCsT2gfm5w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.0':
    resolution: {integrity: sha512-Z/e78qg2YFnnXcW88A4JmTtm4ADckLno6F7OXotmkQfeuCVaKuYzqAATPhVzl3delXE7CxIV8shofPn3jPc5Og==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.0':
    resolution: {integrity: sha512-0Fmkebhr6PiseyZlYAOtLS+nb7jLmpqTrJyv61Pe68MKYW6OWdRE2kI70TaYY27u7H0lajqM3hSMMLFq18Z7nQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.0':
    resolution: {integrity: sha512-XW3/vWuIXHa+2Uwcc2ABSfcCledmXhhQPlGbfcRXbiUQI5Icjcg19BGCZVKKInYbvUCut/ufbbLLPFC5cbb1hw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.1.1':
    resolution: {integrity: sha512-vVfA2IZ9q/J+gEamvj761Oq1FpWgCDaNOOIfbPVp2MVPLEomUr5+Vf7kJGwQ24YxZSlQVar7Bes8kyTo5Dshpg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.0':
    resolution: {integrity: sha512-A9+lCBZoaMJlVKcRBz2YByCG+Cp2t6nAnMnNba+XiWxnj6r4JUFqfsgwocMBZU9LPtdxC6wB56ySYpc7LQIoJg==}

  '@rtsao/scc@1.1.0':
    resolution: {integrity: sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==}

  '@swc/counter@0.1.3':
    resolution: {integrity: sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==}

  '@swc/helpers@0.5.15':
    resolution: {integrity: sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==}

  '@tailwindcss/node@4.1.16':
    resolution: {integrity: sha512-BX5iaSsloNuvKNHRN3k2RcCuTEgASTo77mofW0vmeHkfrDWaoFAFvNHpEgtu0eqyypcyiBkDWzSMxJhp3AUVcw==}

  '@tailwindcss/oxide-android-arm64@4.1.16':
    resolution: {integrity: sha512-8+ctzkjHgwDJ5caq9IqRSgsP70xhdhJvm+oueS/yhD5ixLhqTw9fSL1OurzMUhBwE5zK26FXLCz2f/RtkISqHA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.1.16':
    resolution: {integrity: sha512-C3oZy5042v2FOALBZtY0JTDnGNdS6w7DxL/odvSny17ORUnaRKhyTse8xYi3yKGyfnTUOdavRCdmc8QqJYwFKA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.1.16':
    resolution: {integrity: sha512-vjrl/1Ub9+JwU6BP0emgipGjowzYZMjbWCDqwA2Z4vCa+HBSpP4v6U2ddejcHsolsYxwL5r4bPNoamlV0xDdLg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.1.16':
    resolution: {integrity: sha512-TSMpPYpQLm+aR1wW5rKuUuEruc/oOX3C7H0BTnPDn7W/eMw8W+MRMpiypKMkXZfwH8wqPIRKppuZoedTtNj2tg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.1.16':
    resolution: {integrity: sha512-p0GGfRg/w0sdsFKBjMYvvKIiKy/LNWLWgV/plR4lUgrsxFAoQBFrXkZ4C0w8IOXfslB9vHK/JGASWD2IefIpvw==}
    engines: {node: '>= 10'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.1.16':
    resolution: {integrity: sha512-DoixyMmTNO19rwRPdqviTrG1rYzpxgyYJl8RgQvdAQUzxC1ToLRqtNJpU/ATURSKgIg6uerPw2feW0aS8SNr/w==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-musl@4.1.16':
    resolution: {integrity: sha512-H81UXMa9hJhWhaAUca6bU2wm5RRFpuHImrwXBUvPbYb+3jo32I9VIwpOX6hms0fPmA6f2pGVlybO6qU8pF4fzQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@tailwindcss/oxide-linux-x64-gnu@4.1.16':
    resolution: {integrity: sha512-ZGHQxDtFC2/ruo7t99Qo2TTIvOERULPl5l0K1g0oK6b5PGqjYMga+FcY1wIUnrUxY56h28FxybtDEla+ICOyew==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tailwindcss/oxide-linux-x64-musl@4.1.16':
    resolution: {integrity: sha512-Oi1tAaa0rcKf1Og9MzKeINZzMLPbhxvm7rno5/zuP1WYmpiG0bEHq4AcRUiG2165/WUzvxkW4XDYCscZWbTLZw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@tailwindcss/oxide-wasm32-wasi@4.1.16':
    resolution: {integrity: sha512-B01u/b8LteGRwucIBmCQ07FVXLzImWESAIMcUU6nvFt/tYsQ6IHz8DmZ5KtvmwxD+iTYBtM1xwoGXswnlu9v0Q==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.1.16':
    resolution: {integrity: sha512-zX+Q8sSkGj6HKRTMJXuPvOcP8XfYON24zJBRPlszcH1Np7xuHXhWn8qfFjIujVzvH3BHU+16jBXwgpl20i+v9A==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.1.16':
    resolution: {integrity: sha512-m5dDFJUEejbFqP+UXVstd4W/wnxA4F61q8SoL+mqTypId2T2ZpuxosNSgowiCnLp2+Z+rivdU0AqpfgiD7yCBg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.1.16':
    resolution: {integrity: sha512-2OSv52FRuhdlgyOQqgtQHuCgXnS8nFSYRp2tJ+4WZXKgTxqPy7SMSls8c3mPT5pkZ17SBToGM5LHEJBO7miEdg==}
    engines: {node: '>= 10'}

  '@tailwindcss/postcss@4.1.16':
    resolution: {integrity: sha512-Qn3SFGPXYQMKR/UtqS+dqvPrzEeBZHrFA92maT4zijCVggdsXnDBMsPFJo1eArX3J+O+Gi+8pV4PkqjLCNBk3A==}

  '@tybys/wasm-util@0.10.1':
    resolution: {integrity: sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==}

  '@types/d3-array@3.2.2':
    resolution: {integrity: sha512-hOLWVbm7uRza0BYXpIIW5pxfrKe0W+D5lrFiAEYR+pb6w3N2SwSMaJbXdUfSEv+dT4MfHBLtn5js0LAWaO6otw==}

  '@types/d3-color@3.1.3':
    resolution: {integrity: sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==}

  '@types/d3-ease@3.0.2':
    resolution: {integrity: sha512-NcV1JjO5oDzoK26oMzbILE6HW7uVXOHLQvHshBUW4UMdZGfiY6v5BeQwh9a9tCzv+CeefZQHJt5SRgK154RtiA==}

  '@types/d3-interpolate@3.0.4':
    resolution: {integrity: sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==}

  '@types/d3-path@3.1.1':
    resolution: {integrity: sha512-VMZBYyQvbGmWyWVea0EHs/BwLgxc+MKi1zLDCONksozI4YJMcTt8ZEuIR4Sb1MMTE8MMW49v0IwI5+b7RmfWlg==}

  '@types/d3-scale@4.0.9':
    resolution: {integrity: sha512-dLmtwB8zkAeO/juAMfnV+sItKjlsw2lKdZVVy6LRr0cBmegxSABiLEpGVmSJJ8O08i4+sGR6qQtb6WtuwJdvVw==}

  '@types/d3-shape@3.1.7':
    resolution: {integrity: sha512-VLvUQ33C+3J+8p+Daf+nYSOsjB4GXp19/S/aGo60m9h1v6XaxjiT82lKVWJCfzhtuZ3yD7i/TPeC/fuKLLOSmg==}

  '@types/d3-time@3.0.4':
    resolution: {integrity: sha512-yuzZug1nkAAaBlBBikKZTgzCeA+k1uy4ZFwWANOfKw5z5LRhV0gNA7gNkKm7HoK+HRN0wX3EkxGk0fpbWhmB7g==}

  '@types/d3-timer@3.0.2':
    resolution: {integrity: sha512-Ps3T8E8dZDam6fUyNiMkekK3XUsaUEik+idO9/YjPtfj2qruF8tFBXS7XhtE4iIXBLxhmLjP3SXpLhVf21I9Lw==}

  '@types/estree@1.0.8':
    resolution: {integrity: sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/json5@0.0.29':
    resolution: {integrity: sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==}

  '@types/node@22.18.13':
    resolution: {integrity: sha512-Bo45YKIjnmFtv6I1TuC8AaHBbqXtIo+Om5fE4QiU1Tj8QR/qt+8O3BAtOimG5IFmwaWiPmB3Mv3jtYzBA4Us2A==}

  '@types/react-dom@19.2.2':
    resolution: {integrity: sha512-9KQPoO6mZCi7jcIStSnlOWn2nEF3mNmyr3rIAsGnAbQKYbRLyqmeSc39EVgtxXVia+LMT8j3knZLAZAh+xLmrw==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.2':
    resolution: {integrity: sha512-6mDvHUFSjyT2B2yeNx2nUgMxh9LtOWvkhIU3uePn2I2oyNymUAX1NIsdgviM4CH+JSrp2D2hsMvJOkxY+0wNRA==}

  '@typescript-eslint/eslint-plugin@8.46.2':
    resolution: {integrity: sha512-ZGBMToy857/NIPaaCucIUQgqueOiq7HeAKkhlvqVV4lm089zUFW6ikRySx2v+cAhKeUCPuWVHeimyk6Dw1iY3w==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      '@typescript-eslint/parser': ^8.46.2
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/parser@8.46.2':
    resolution: {integrity: sha512-BnOroVl1SgrPLywqxyqdJ4l3S2MsKVLDVxZvjI1Eoe8ev2r3kGDo+PcMihNmDE+6/KjkTubSJnmqGZZjQSBq/g==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/project-service@8.46.2':
    resolution: {integrity: sha512-PULOLZ9iqwI7hXcmL4fVfIsBi6AN9YxRc0frbvmg8f+4hQAjQ5GYNKK0DIArNo+rOKmR/iBYwkpBmnIwin4wBg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/scope-manager@8.46.2':
    resolution: {integrity: sha512-LF4b/NmGvdWEHD2H4MsHD8ny6JpiVNDzrSZr3CsckEgCbAGZbYM4Cqxvi9L+WqDMT+51Ozy7lt2M+d0JLEuBqA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/tsconfig-utils@8.46.2':
    resolution: {integrity: sha512-a7QH6fw4S57+F5y2FIxxSDyi5M4UfGF+Jl1bCGd7+L4KsaUY80GsiF/t0UoRFDHAguKlBaACWJRmdrc6Xfkkag==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/type-utils@8.46.2':
    resolution: {integrity: sha512-HbPM4LbaAAt/DjxXaG9yiS9brOOz6fabal4uvUmaUYe6l3K1phQDMQKBRUrr06BQkxkvIZVVHttqiybM9nJsLA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/types@8.46.2':
    resolution: {integrity: sha512-lNCWCbq7rpg7qDsQrd3D6NyWYu+gkTENkG5IKYhUIcxSb59SQC/hEQ+MrG4sTgBVghTonNWq42bA/d4yYumldQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/typescript-estree@8.46.2':
    resolution: {integrity: sha512-f7rW7LJ2b7Uh2EiQ+7sza6RDZnajbNbemn54Ob6fRwQbgcIn+GWfyuHDHRYgRoZu1P4AayVScrRW+YfbTvPQoQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/utils@8.46.2':
    resolution: {integrity: sha512-sExxzucx0Tud5tE0XqR0lT0psBQvEpnpiul9XbGUB1QwpWJJAps1O/Z7hJxLGiZLBKMCutjTzDgmd1muEhBnVg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <6.0.0'

  '@typescript-eslint/visitor-keys@8.46.2':
    resolution: {integrity: sha512-tUFMXI4gxzzMXt4xpGJEsBsTox0XbNQ1y94EwlD/CuZwFcQP79xfQqMhau9HsRc/J0cAPA/HZt1dZPtGn9V/7w==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@unrs/resolver-binding-android-arm-eabi@1.11.1':
    resolution: {integrity: sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==}
    cpu: [arm]
    os: [android]

  '@unrs/resolver-binding-android-arm64@1.11.1':
    resolution: {integrity: sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==}
    cpu: [arm64]
    os: [android]

  '@unrs/resolver-binding-darwin-arm64@1.11.1':
    resolution: {integrity: sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==}
    cpu: [arm64]
    os: [darwin]

  '@unrs/resolver-binding-darwin-x64@1.11.1':
    resolution: {integrity: sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==}
    cpu: [x64]
    os: [darwin]

  '@unrs/resolver-binding-freebsd-x64@1.11.1':
    resolution: {integrity: sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==}
    cpu: [x64]
    os: [freebsd]

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.11.1':
    resolution: {integrity: sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm-musleabihf@1.11.1':
    resolution: {integrity: sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm64-gnu@1.11.1':
    resolution: {integrity: sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==}
    cpu: [arm64]
    os: [linux]

  '@unrs/resolver-binding-linux-arm64-musl@1.11.1':
    resolution: {integrity: sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==}
    cpu: [arm64]
    os: [linux]

  '@unrs/resolver-binding-linux-ppc64-gnu@1.11.1':
    resolution: {integrity: sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==}
    cpu: [ppc64]
    os: [linux]

  '@unrs/resolver-binding-linux-riscv64-gnu@1.11.1':
    resolution: {integrity: sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==}
    cpu: [riscv64]
    os: [linux]

  '@unrs/resolver-binding-linux-riscv64-musl@1.11.1':
    resolution: {integrity: sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==}
    cpu: [riscv64]
    os: [linux]

  '@unrs/resolver-binding-linux-s390x-gnu@1.11.1':
    resolution: {integrity: sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==}
    cpu: [s390x]
    os: [linux]

  '@unrs/resolver-binding-linux-x64-gnu@1.11.1':
    resolution: {integrity: sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==}
    cpu: [x64]
    os: [linux]

  '@unrs/resolver-binding-linux-x64-musl@1.11.1':
    resolution: {integrity: sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==}
    cpu: [x64]
    os: [linux]

  '@unrs/resolver-binding-wasm32-wasi@1.11.1':
    resolution: {integrity: sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@unrs/resolver-binding-win32-arm64-msvc@1.11.1':
    resolution: {integrity: sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==}
    cpu: [arm64]
    os: [win32]

  '@unrs/resolver-binding-win32-ia32-msvc@1.11.1':
    resolution: {integrity: sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==}
    cpu: [ia32]
    os: [win32]

  '@unrs/resolver-binding-win32-x64-msvc@1.11.1':
    resolution: {integrity: sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==}
    cpu: [x64]
    os: [win32]

  '@vercel/analytics@1.5.0':
    resolution: {integrity: sha512-MYsBzfPki4gthY5HnYN7jgInhAZ7Ac1cYDoRWFomwGHWEX7odTEzbtg9kf/QSo7XEsEAqlQugA6gJ2WS2DEa3g==}
    peerDependencies:
      '@remix-run/react': ^2
      '@sveltejs/kit': ^1 || ^2
      next: '>= 13'
      react: ^18 || ^19 || ^19.0.0-rc
      svelte: '>= 4'
      vue: ^3
      vue-router: ^4
    peerDependenciesMeta:
      '@remix-run/react':
        optional: true
      '@sveltejs/kit':
        optional: true
      next:
        optional: true
      react:
        optional: true
      svelte:
        optional: true
      vue:
        optional: true
      vue-router:
        optional: true

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.15.0:
    resolution: {integrity: sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.6:
    resolution: {integrity: sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==}
    engines: {node: '>=10'}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  array-includes@3.1.9:
    resolution: {integrity: sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlastindex@1.2.6:
    resolution: {integrity: sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.3:
    resolution: {integrity: sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.3:
    resolution: {integrity: sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==}
    engines: {node: '>= 0.4'}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.4:
    resolution: {integrity: sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==}
    engines: {node: '>= 0.4'}

  ast-types-flow@0.0.8:
    resolution: {integrity: sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==}

  async-function@1.0.0:
    resolution: {integrity: sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==}
    engines: {node: '>= 0.4'}

  autoprefixer@10.4.21:
    resolution: {integrity: sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axe-core@4.11.0:
    resolution: {integrity: sha512-ilYanEU8vxxBexpJd8cWM4ElSQq4QctCLKih0TSfjIfCQTeyH/6zVrmIJfLPrKTKJRbiG+cfnZbQIjAlJmF1jQ==}
    engines: {node: '>=4'}

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  baseline-browser-mapping@2.8.21:
    resolution: {integrity: sha512-JU0h5APyQNsHOlAM7HnQnPToSDQoEBZqzu/YBlqDnEeymPnZDREeXJA3KBMQee+dKteAxZ2AtvQEvVYdZf241Q==}
    hasBin: true

  brace-expansion@1.1.12:
    resolution: {integrity: sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==}

  brace-expansion@2.0.2:
    resolution: {integrity: sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.27.0:
    resolution: {integrity: sha512-AXVQwdhot1eqLihwasPElhX2tAZiBjWdJ9i/Zcj2S6QYIjkx62OKSfnobkriB81C3l4w0rVy3Nt4jaTBltYEpw==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  caniuse-lite@1.0.30001751:
    resolution: {integrity: sha512-A0QJhug0Ly64Ii3eIqHu5X51ebln3k4yTUkY1j8drqpWHVreg/VLijN48cZ1bYPiqOQuqpkIKnzr/Ul8V+p6Cw==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  cmdk@1.0.4:
    resolution: {integrity: sha512-AnsjfHyHpQ/EFeAnG216WY7A5LiYCoZzCSygiLvfXC3H3LFGCprErteUcszaVluGOhuOTbJS3jWHrSDYPBBygg==}
    peerDependencies:
      react: ^18 || ^19 || ^19.0.0-rc
      react-dom: ^18 || ^19 || ^19.0.0-rc

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  d3-array@3.2.4:
    resolution: {integrity: sha512-tdQAmyA18i4J7wprpYq8ClcxZy3SC31QMeByyCFyRt7BVHdREQZ5lpzoe5mFEYZUWe+oq8HBvk9JjpibyEV4Jg==}
    engines: {node: '>=12'}

  d3-color@3.1.0:
    resolution: {integrity: sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==}
    engines: {node: '>=12'}

  d3-ease@3.0.1:
    resolution: {integrity: sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==}
    engines: {node: '>=12'}

  d3-format@3.1.0:
    resolution: {integrity: sha512-YyUI6AEuY/Wpt8KWLgZHsIU86atmikuoOmCfommt0LYHiQSPjvX2AcFc38PX0CBpr2RCyZhjex+NS/LPOv6YqA==}
    engines: {node: '>=12'}

  d3-interpolate@3.0.1:
    resolution: {integrity: sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==}
    engines: {node: '>=12'}

  d3-path@3.1.0:
    resolution: {integrity: sha512-p3KP5HCf/bvjBSSKuXid6Zqijx7wIfNW+J/maPs+iwR35at5JCbLUT0LzF1cnjbCHWhqzQTIN2Jpe8pRebIEFQ==}
    engines: {node: '>=12'}

  d3-scale@4.0.2:
    resolution: {integrity: sha512-GZW464g1SH7ag3Y7hXjf8RoUuAFIqklOAq3MRl4OaWabTFJY9PN/E1YklhXLh+OQ3fM9yS2nOkCoS+WLZ6kvxQ==}
    engines: {node: '>=12'}

  d3-shape@3.2.0:
    resolution: {integrity: sha512-SaLBuwGm3MOViRq2ABk3eLoxwZELpH6zhl3FbAoJ7Vm1gofKx6El1Ib5z23NUEhF9AsGl7y+dzLe5Cw2AArGTA==}
    engines: {node: '>=12'}

  d3-time-format@4.1.0:
    resolution: {integrity: sha512-dJxPBlzC7NugB2PDLwo9Q8JiTR3M3e4/XANkreKSUxF8vvXKqm1Yfq4Q5dl8budlunRVlUUaDUgFt7eA8D6NLg==}
    engines: {node: '>=12'}

  d3-time@3.1.0:
    resolution: {integrity: sha512-VqKjzBLejbSMT4IgbmVgDjpkYrNWUYJnbCGo874u7MMKIWsILRX+OpX/gTk8MqjpT1A/c6HY2dCA77ZN0lkQ2Q==}
    engines: {node: '>=12'}

  d3-timer@3.0.1:
    resolution: {integrity: sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==}
    engines: {node: '>=12'}

  damerau-levenshtein@1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}

  data-view-buffer@1.0.2:
    resolution: {integrity: sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.2:
    resolution: {integrity: sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.1:
    resolution: {integrity: sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==}
    engines: {node: '>= 0.4'}

  date-fns-jalali@4.1.0-0:
    resolution: {integrity: sha512-hTIP/z+t+qKwBDcmmsnmjWTduxCg+5KfdqWQvb2X/8C9+knYY6epN/pfxdDuyVlSVeFz0sM5eEfwIUQ70U4ckg==}

  date-fns@4.1.0:
    resolution: {integrity: sha512-Ukq0owbQXxa/U3EGtsdVBkR1w7KOQ5gIBqdH2hkvknzZPYvBxb/aa6E8L7tmjFtkwZBu3UXBbjIgPo/Ez4xaNg==}

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decimal.js-light@2.5.1:
    resolution: {integrity: sha512-qIMFpTMZmny+MMIitAB6D7iVPEorVw6YQRWkvarTkT4tBeSLLiHzcwj6q0MmYSFCiVpiqPJTJEYIrpcPzVEIvg==}

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  dom-helpers@5.2.1:
    resolution: {integrity: sha512-nRCa7CK3VTrM2NmGkIy4cbK7IZlgBE/PYMn55rrXefr5xXDP0LdtfPnblFDoVdcAfslJ7or6iqAUnx0CCGIWQA==}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  electron-to-chromium@1.5.244:
    resolution: {integrity: sha512-OszpBN7xZX4vWMPJwB9illkN/znA8M36GQqQxi6MNy9axWxhOfJyZZJtSLQCpEFLHP2xK33BiWx9aIuIEXVCcw==}

  embla-carousel-react@8.5.1:
    resolution: {integrity: sha512-z9Y0K84BJvhChXgqn2CFYbfEi6AwEr+FFVVKm/MqbTQ2zIzO1VQri6w67LcfpVF0AjbhwVMywDZqY4alYkjW5w==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.1 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc

  embla-carousel-reactive-utils@8.5.1:
    resolution: {integrity: sha512-n7VSoGIiiDIc4MfXF3ZRTO59KDp820QDuyBDGlt5/65+lumPHxX2JLz0EZ23hZ4eg4vZGUXwMkYv02fw2JVo/A==}
    peerDependencies:
      embla-carousel: 8.5.1

  embla-carousel@8.5.1:
    resolution: {integrity: sha512-JUb5+FOHobSiWQ2EJNaueCNT/cQU9L6XWBbWmorWPQT9bkbk+fhsuLr8wWrzXKagO3oWszBO7MSx+GfaRk4E6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  enhanced-resolve@5.18.3:
    resolution: {integrity: sha512-d4lC8xfavMeBjzGr2vECC3fsGXziXZQyJxD868h2M/mBI3PwAuODxAkLkq5HYuvrPYcUtiLzsTo8U3PgX3Ocww==}
    engines: {node: '>=10.13.0'}

  es-abstract@1.24.0:
    resolution: {integrity: sha512-WSzPgsdLtTcQwm4CROfS5ju2Wa1QQcVeT37jFjYzdFz1r9ahadC8B8/a4qxJxM+09F18iumCdRmlr96ZYkQvEg==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-iterator-helpers@1.2.1:
    resolution: {integrity: sha512-uDn+FE1yrDzyC0pCo961B2IHbdM8y/ACZsKD4dG6WqrjV53BADjwa7D+1aom2rsNVfLyDgU/eigvlJGJ08OQ4w==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.1.0:
    resolution: {integrity: sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==}
    engines: {node: '>= 0.4'}

  es-to-primitive@1.3.0:
    resolution: {integrity: sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==}
    engines: {node: '>= 0.4'}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-next@16.0.1:
    resolution: {integrity: sha512-wNuHw5gNOxwLUvpg0cu6IL0crrVC9hAwdS/7UwleNkwyaMiWIOAwf8yzXVqBBzL3c9A7jVRngJxjoSpPP1aEhg==}
    peerDependencies:
      eslint: '>=9.0.0'
      typescript: '>=3.3.1'
    peerDependenciesMeta:
      typescript:
        optional: true

  eslint-import-resolver-node@0.3.9:
    resolution: {integrity: sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==}

  eslint-import-resolver-typescript@3.10.1:
    resolution: {integrity: sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      eslint-plugin-import: '*'
      eslint-plugin-import-x: '*'
    peerDependenciesMeta:
      eslint-plugin-import:
        optional: true
      eslint-plugin-import-x:
        optional: true

  eslint-module-utils@2.12.1:
    resolution: {integrity: sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: '*'
      eslint-import-resolver-node: '*'
      eslint-import-resolver-typescript: '*'
      eslint-import-resolver-webpack: '*'
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true
      eslint:
        optional: true
      eslint-import-resolver-node:
        optional: true
      eslint-import-resolver-typescript:
        optional: true
      eslint-import-resolver-webpack:
        optional: true

  eslint-plugin-import@2.32.0:
    resolution: {integrity: sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true

  eslint-plugin-jsx-a11y@6.10.2:
    resolution: {integrity: sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9

  eslint-plugin-react-hooks@7.0.1:
    resolution: {integrity: sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==}
    engines: {node: '>=18'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0

  eslint-plugin-react@7.37.5:
    resolution: {integrity: sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7

  eslint-scope@8.4.0:
    resolution: {integrity: sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@4.2.1:
    resolution: {integrity: sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint@9.38.0:
    resolution: {integrity: sha512-t5aPOpmtJcZcz5UJyY2GbvpDlsK5E8JqRqoKtfiKE3cNh437KIqfJr3A3AKf5k64NPx6d0G3dno6XDY05PqPtw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    hasBin: true
    peerDependencies:
      jiti: '*'
    peerDependenciesMeta:
      jiti:
        optional: true

  espree@10.4.0:
    resolution: {integrity: sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  eventemitter3@4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-equals@5.3.2:
    resolution: {integrity: sha512-6rxyATwPCkaFIL3JLqw8qXqMpIZ942pTX/tbQFkRsDGblS8tNGtlUauA/+mt6RUfqn/4MoEr+WDkYoIQbibWuQ==}
    engines: {node: '>=6.0.0'}

  fast-glob@3.3.1:
    resolution: {integrity: sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==}
    engines: {node: '>=8.6.0'}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  file-entry-cache@8.0.0:
    resolution: {integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==}
    engines: {node: '>=16.0.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@4.0.1:
    resolution: {integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==}
    engines: {node: '>=16'}

  flatted@3.3.3:
    resolution: {integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==}

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  framer-motion@12.23.24:
    resolution: {integrity: sha512-HMi5HRoRCTou+3fb3h9oTLyJGBxHfW+HnNE25tAXOvVx/IvwMHK0cx7IR4a2ZU6sh3IX1Z+4ts32PcYBOqka8w==}
    peerDependencies:
      '@emotion/is-prop-valid': '*'
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/is-prop-valid':
        optional: true
      react:
        optional: true
      react-dom:
        optional: true

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.8:
    resolution: {integrity: sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  geist@1.5.1:
    resolution: {integrity: sha512-mAHZxIsL2o3ZITFaBVFBnwyDOw+zNLYum6A6nIjpzCGIO8QtC3V76XF2RnZTyLx1wlDTmMDy8jg3Ib52MIjGvQ==}
    peerDependencies:
      next: '>=13.2.0'

  generator-function@2.0.1:
    resolution: {integrity: sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==}
    engines: {node: '>= 0.4'}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-symbol-description@1.1.0:
    resolution: {integrity: sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==}
    engines: {node: '>= 0.4'}

  get-tsconfig@4.13.0:
    resolution: {integrity: sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  globals@14.0.0:
    resolution: {integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==}
    engines: {node: '>=18'}

  globals@16.4.0:
    resolution: {integrity: sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==}
    engines: {node: '>=18'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.2.0:
    resolution: {integrity: sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==}
    engines: {node: '>= 0.4'}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  hermes-estree@0.25.1:
    resolution: {integrity: sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==}

  hermes-parser@0.25.1:
    resolution: {integrity: sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  ignore@7.0.5:
    resolution: {integrity: sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  input-otp@1.4.1:
    resolution: {integrity: sha512-+yvpmKYKHi9jIGngxagY9oWiiblPB7+nEO75F2l2o4vs+6vpPZZmUl4tBNYuTCvQjhvEIbdNeJu70bhfYP2nbw==}
    peerDependencies:
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0.0 || ^19.0.0-rc

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  internmap@2.0.3:
    resolution: {integrity: sha512-5Hh7Y1wQbvY5ooGgPbDaL5iYLAPzMTUrjMulskHLH6wnv/A+1q5rgEaiuqEjB+oxGXIVZs1FF+R/KPN3ZSQYYg==}
    engines: {node: '>=12'}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.3.4:
    resolution: {integrity: sha512-m6UrgzFVUYawGBh1dUsWR5M2Clqic9RVXC/9f8ceNlv2IcO9j9J/z8UoCLPqtsPBFNzEpfR3xftohbfqDx8EQA==}

  is-async-function@2.1.1:
    resolution: {integrity: sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==}
    engines: {node: '>= 0.4'}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-bun-module@2.0.0:
    resolution: {integrity: sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.2:
    resolution: {integrity: sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.1.1:
    resolution: {integrity: sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==}
    engines: {node: '>= 0.4'}

  is-generator-function@1.1.2:
    resolution: {integrity: sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-negative-zero@2.0.3:
    resolution: {integrity: sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.1.1:
    resolution: {integrity: sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  iterator.prototype@1.1.5:
    resolution: {integrity: sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==}
    engines: {node: '>= 0.4'}

  jiti@2.6.1:
    resolution: {integrity: sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==}
    hasBin: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  language-subtag-registry@0.3.23:
    resolution: {integrity: sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==}

  language-tags@1.0.9:
    resolution: {integrity: sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==}
    engines: {node: '>=0.10'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lightningcss-android-arm64@1.30.2:
    resolution: {integrity: sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.30.2:
    resolution: {integrity: sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.30.2:
    resolution: {integrity: sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.30.2:
    resolution: {integrity: sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.30.2:
    resolution: {integrity: sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.30.2:
    resolution: {integrity: sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-arm64-musl@1.30.2:
    resolution: {integrity: sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]

  lightningcss-linux-x64-gnu@1.30.2:
    resolution: {integrity: sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-linux-x64-musl@1.30.2:
    resolution: {integrity: sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]

  lightningcss-win32-arm64-msvc@1.30.2:
    resolution: {integrity: sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.30.2:
    resolution: {integrity: sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.30.2:
    resolution: {integrity: sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==}
    engines: {node: '>= 12.0.0'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  lodash@4.17.21:
    resolution: {integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  lucide-react@0.454.0:
    resolution: {integrity: sha512-hw7zMDwykCLnEzgncEEjHeA6+45aeEzRYuKHuyRSOPkhko+J3ySGjGIzu+mmMfDFG1vazHepMaYFYHbTFAZAAQ==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0-rc

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  motion-dom@12.23.23:
    resolution: {integrity: sha512-n5yolOs0TQQBRUFImrRfs/+6X4p3Q4n1dUEqt/H58Vx7OW6RF+foWEgmTVDhIWJIMXOuNNL0apKH2S16en9eiA==}

  motion-utils@12.23.6:
    resolution: {integrity: sha512-eAWoPgr4eFEOFfg2WjIsMoqJTW6Z8MTUCgn/GZ3VRpClWBdnbjryiA3ZSNLyxCTmCQx4RmYX6jX1iWHbenUPNQ==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  napi-postinstall@0.3.4:
    resolution: {integrity: sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==}
    engines: {node: ^12.20.0 || ^14.18.0 || >=16.0.0}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next-themes@0.4.6:
    resolution: {integrity: sha512-pZvgD5L0IEvX5/9GWyHMf3m8BKiVQwsCMHfoFosXtXBMnaS0ZnIJ9ST4b4NqLVKDEm8QBxoNNGNaBv2JNF6XNA==}
    peerDependencies:
      react: ^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc
      react-dom: ^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc

  next@15.2.4:
    resolution: {integrity: sha512-VwL+LAaPSxEkd3lU2xWbgEOtrM8oedmyhBqaVNmgKB+GvZlCy9rgaEc+y2on0wv+l0oSFqLtYD6dcC1eAedUaQ==}
    engines: {node: ^18.18.0 || ^19.8.0 || >= 20.0.0}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.41.2
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-releases@2.0.27:
    resolution: {integrity: sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.9:
    resolution: {integrity: sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.groupby@1.0.3:
    resolution: {integrity: sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.1:
    resolution: {integrity: sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==}
    engines: {node: '>= 0.4'}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  own-keys@1.0.1:
    resolution: {integrity: sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==}
    engines: {node: '>= 0.4'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.3:
    resolution: {integrity: sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==}
    engines: {node: '>=12'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.6:
    resolution: {integrity: sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==}
    engines: {node: ^10 || ^12 || >=14}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-day-picker@9.8.0:
    resolution: {integrity: sha512-E0yhhg7R+pdgbl/2toTb0xBhsEAtmAx1l7qjIWYfcxOy8w4rTSVfbtBoSzVVhPwKP/5E9iL38LivzoE3AQDhCQ==}
    engines: {node: '>=18'}
    peerDependencies:
      react: '>=16.8.0'

  react-dom@19.2.0:
    resolution: {integrity: sha512-UlbRu4cAiGaIewkPyiRGJk0imDN2T3JjieT6spoL2UeSf5od4n5LB/mQ4ejmxhCFT1tYe8IvaFulzynWovsEFQ==}
    peerDependencies:
      react: ^19.2.0

  react-hook-form@7.65.0:
    resolution: {integrity: sha512-xtOzDz063WcXvGWaHgLNrNzlsdFgtUWcb32E6WFaGTd7kPZG3EeDusjdZfUsPwKCKVXy1ZlntifaHZ4l8pAsmw==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      react: ^16.8.0 || ^17 || ^18 || ^19

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-is@18.3.1:
    resolution: {integrity: sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==}

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.1:
    resolution: {integrity: sha512-HpMh8+oahmIdOuS5aFKKY6Pyog+FNaZV/XyJOq7b4YFwsFHe5yYfdbIalI4k3vU2nSDql7YskmUseHsRrJqIPA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-resizable-panels@2.1.9:
    resolution: {integrity: sha512-z77+X08YDIrgAes4jl8xhnUu1LNIRp4+E7cv4xHmLOxxUPO/ML7PSrE813b90vj7xvQ1lcf7g2uA9GeMZonjhQ==}
    peerDependencies:
      react: ^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
      react-dom: ^16.14.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc

  react-smooth@4.0.4:
    resolution: {integrity: sha512-gnGKTpYwqL0Iii09gHobNolvX4Kiq4PKx6eWBCYYix+8cdw+cGo3do906l1NBPKkSWx1DghC1dlWG9L2uGd61Q==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-transition-group@4.4.5:
    resolution: {integrity: sha512-pZcd1MCJoiKiBR2NRxeCRg13uCXbydPnmB4EOeRrY7480qNWO8IIgQG6zlDkm6uRMsURXPuKq0GWtiM59a5Q6g==}
    peerDependencies:
      react: '>=16.6.0'
      react-dom: '>=16.6.0'

  react@19.2.0:
    resolution: {integrity: sha512-tmbWg6W31tQLeB5cdIBOicJDJRR2KzXsV7uSK9iNfLWQ5bIZfxuPEHp7M8wiHyHnn0DD1i7w3Zmin0FtkrwoCQ==}
    engines: {node: '>=0.10.0'}

  recharts-scale@0.4.5:
    resolution: {integrity: sha512-kivNFO+0OcUNu7jQquLXAxz1FIwZj8nrj+YkOKc5694NbjCvcT6aSZiIzNzd2Kul4o4rTto8QVR9lMNtxD4G1w==}

  recharts@2.15.4:
    resolution: {integrity: sha512-UT/q6fwS3c1dHbXv2uFgYJ9BMFHu3fwnd7AYZaEQhXuYQ4hgsxLvsUXzGdKeZrW5xopzDCvuA2N41WJ88I7zIw==}
    engines: {node: '>=14'}
    peerDependencies:
      react: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
      react-dom: ^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  reflect.getprototypeof@1.0.10:
    resolution: {integrity: sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==}
    engines: {node: '>= 0.4'}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve@1.22.11:
    resolution: {integrity: sha512-RfqAvLnMl313r7c9oclB1HhUEAezcpLjz95wFH4LVuhk9JF/r22qmVP9AMmOU4vMX7Q8pN8jwNg/CSpdFnMjTQ==}
    engines: {node: '>= 0.4'}
    hasBin: true

  resolve@2.0.0-next.5:
    resolution: {integrity: sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.3:
    resolution: {integrity: sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==}
    engines: {node: '>=0.4'}

  safe-push-apply@1.0.0:
    resolution: {integrity: sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==}
    engines: {node: '>= 0.4'}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.3:
    resolution: {integrity: sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==}
    engines: {node: '>=10'}
    hasBin: true

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  set-proto@1.0.0:
    resolution: {integrity: sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==}
    engines: {node: '>= 0.4'}

  sharp@0.33.5:
    resolution: {integrity: sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  simple-swizzle@0.2.4:
    resolution: {integrity: sha512-nAu1WFPQSMNr2Zn9PGSZK9AGn4t/y97lEm+MXTtUDwfP0ksAIX4nO+6ruD9Jwut4C49SB1Ws+fbXsm/yScWOHw==}

  sonner@1.7.4:
    resolution: {integrity: sha512-DIS8z4PfJRbIyfVFDVnK9rO3eYDtse4Omcm6bt0oEr5/jtLgysmjuBl1frJ9E/EQZrFmKx2A8m/s5s9CRXIzhw==}
    peerDependencies:
      react: ^18.0.0 || ^19.0.0 || ^19.0.0-rc
      react-dom: ^18.0.0 || ^19.0.0 || ^19.0.0-rc

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  stable-hash@0.0.5:
    resolution: {integrity: sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==}

  stop-iteration-iterator@1.1.0:
    resolution: {integrity: sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==}
    engines: {node: '>= 0.4'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string.prototype.includes@2.0.1:
    resolution: {integrity: sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==}
    engines: {node: '>= 0.4'}

  string.prototype.matchall@4.0.12:
    resolution: {integrity: sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.10:
    resolution: {integrity: sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.9:
    resolution: {integrity: sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==}
    engines: {node: '>= 0.4'}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tailwind-merge@2.6.0:
    resolution: {integrity: sha512-P+Vu1qXfzediirmHOC3xKGAYeZtPcV9g76X+xg2FD4tYgR71ewMA35Y3sCz3zhiN/dwefRpJX0yBcgwi1fXNQA==}

  tailwindcss-animate@1.0.7:
    resolution: {integrity: sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders'

  tailwindcss@4.1.16:
    resolution: {integrity: sha512-pONL5awpaQX4LN5eiv7moSiSPd/DLDzKVRJz8Q9PgzmAdd1R4307GQS2ZpfiN7ZmekdQrfhZZiSE5jkLR4WNaA==}

  tapable@2.3.0:
    resolution: {integrity: sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==}
    engines: {node: '>=6'}

  tiny-invariant@1.3.3:
    resolution: {integrity: sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==}

  tinyglobby@0.2.15:
    resolution: {integrity: sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==}
    engines: {node: '>=12.0.0'}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  ts-api-utils@2.1.0:
    resolution: {integrity: sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==}
    engines: {node: '>=18.12'}
    peerDependencies:
      typescript: '>=4.8.4'

  tsconfig-paths@3.15.0:
    resolution: {integrity: sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tw-animate-css@1.3.3:
    resolution: {integrity: sha512-tXE2TRWrskc4TU3RDd7T8n8Np/wCfoeH9gz22c7PzYqNPQ9FBGFbWWzwL0JyHcFp+jHozmF76tbHfPAx22ua2Q==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  typed-array-buffer@1.0.3:
    resolution: {integrity: sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.3:
    resolution: {integrity: sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.4:
    resolution: {integrity: sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.7:
    resolution: {integrity: sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==}
    engines: {node: '>= 0.4'}

  typescript-eslint@8.46.2:
    resolution: {integrity: sha512-vbw8bOmiuYNdzzV3lsiWv6sRwjyuKJMQqWulBOU7M0RrxedXledX8G8kBbQeiOYDnTfiXz0Y4081E1QMNB6iQg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <6.0.0'

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.1.0:
    resolution: {integrity: sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==}
    engines: {node: '>= 0.4'}

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  unrs-resolver@1.11.1:
    resolution: {integrity: sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==}

  update-browserslist-db@1.1.4:
    resolution: {integrity: sha512-q0SPT4xyU84saUX+tomz1WLkxUbuaJnR1xWt17M7fJtEJigJeWUNGUqrauFXsHnqev9y9JTRGwk13tFBuKby4A==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sync-external-store@1.6.0:
    resolution: {integrity: sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  vaul@0.9.9:
    resolution: {integrity: sha512-7afKg48srluhZwIkaU+lgGtFCUsYBSGOl8vcc8N/M3YQlZFlynHD15AE+pwrYdc826o7nrIND4lL9Y6b9WWZZQ==}
    peerDependencies:
      react: ^16.8 || ^17.0 || ^18.0
      react-dom: ^16.8 || ^17.0 || ^18.0

  victory-vendor@36.9.2:
    resolution: {integrity: sha512-PnpQQMuxlwYdocC8fIJqVXvkeViHYzotI+NJrCuav0ZYFoq912ZHBk3mCeuj+5/VpodOjPe1z0Fk2ihgzlXqjQ==}

  which-boxed-primitive@1.1.1:
    resolution: {integrity: sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==}
    engines: {node: '>= 0.4'}

  which-builtin-type@1.2.1:
    resolution: {integrity: sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.19:
    resolution: {integrity: sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  zod-validation-error@4.0.2:
    resolution: {integrity: sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==}
    engines: {node: '>=18.0.0'}
    peerDependencies:
      zod: ^3.25.0 || ^4.0.0

  zod@3.25.76:
    resolution: {integrity: sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@babel/code-frame@7.27.1':
    dependencies:
      '@babel/helper-validator-identifier': 7.28.5
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.28.5': {}

  '@babel/core@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-compilation-targets': 7.27.2
      '@babel/helper-module-transforms': 7.28.3(@babel/core@7.28.5)
      '@babel/helpers': 7.28.4
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/remapping': 2.3.5
      convert-source-map: 2.0.0
      debug: 4.4.3
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.28.5':
    dependencies:
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.27.2':
    dependencies:
      '@babel/compat-data': 7.28.5
      '@babel/helper-validator-option': 7.27.1
      browserslist: 4.27.0
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-globals@7.28.0': {}

  '@babel/helper-module-imports@7.27.1':
    dependencies:
      '@babel/traverse': 7.28.5
      '@babel/types': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.28.3(@babel/core@7.28.5)':
    dependencies:
      '@babel/core': 7.28.5
      '@babel/helper-module-imports': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5
      '@babel/traverse': 7.28.5
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-string-parser@7.27.1': {}

  '@babel/helper-validator-identifier@7.28.5': {}

  '@babel/helper-validator-option@7.27.1': {}

  '@babel/helpers@7.28.4':
    dependencies:
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5

  '@babel/parser@7.28.5':
    dependencies:
      '@babel/types': 7.28.5

  '@babel/runtime@7.28.4': {}

  '@babel/template@7.27.2':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/parser': 7.28.5
      '@babel/types': 7.28.5

  '@babel/traverse@7.28.5':
    dependencies:
      '@babel/code-frame': 7.27.1
      '@babel/generator': 7.28.5
      '@babel/helper-globals': 7.28.0
      '@babel/parser': 7.28.5
      '@babel/template': 7.27.2
      '@babel/types': 7.28.5
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.28.5':
    dependencies:
      '@babel/helper-string-parser': 7.27.1
      '@babel/helper-validator-identifier': 7.28.5

  '@date-fns/tz@1.2.0': {}

  '@emnapi/core@1.6.0':
    dependencies:
      '@emnapi/wasi-threads': 1.1.0
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.6.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.1.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emotion/is-prop-valid@1.4.0':
    dependencies:
      '@emotion/memoize': 0.9.0

  '@emotion/memoize@0.9.0': {}

  '@eslint-community/eslint-utils@4.9.0(eslint@9.38.0(jiti@2.6.1))':
    dependencies:
      eslint: 9.38.0(jiti@2.6.1)
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.12.2': {}

  '@eslint/config-array@0.21.1':
    dependencies:
      '@eslint/object-schema': 2.1.7
      debug: 4.4.3
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@eslint/config-helpers@0.4.2':
    dependencies:
      '@eslint/core': 0.17.0

  '@eslint/core@0.16.0':
    dependencies:
      '@types/json-schema': 7.0.15

  '@eslint/core@0.17.0':
    dependencies:
      '@types/json-schema': 7.0.15

  '@eslint/eslintrc@3.3.1':
    dependencies:
      ajv: 6.12.6
      debug: 4.4.3
      espree: 10.4.0
      globals: 14.0.0
      ignore: 5.3.2
      import-fresh: 3.3.1
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@9.38.0': {}

  '@eslint/object-schema@2.1.7': {}

  '@eslint/plugin-kit@0.4.1':
    dependencies:
      '@eslint/core': 0.17.0
      levn: 0.4.1

  '@floating-ui/core@1.7.3':
    dependencies:
      '@floating-ui/utils': 0.2.10

  '@floating-ui/dom@1.7.4':
    dependencies:
      '@floating-ui/core': 1.7.3
      '@floating-ui/utils': 0.2.10

  '@floating-ui/react-dom@2.1.6(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@floating-ui/dom': 1.7.4
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  '@floating-ui/utils@0.2.10': {}

  '@hookform/resolvers@3.10.0(react-hook-form@7.65.0(react@19.2.0))':
    dependencies:
      react-hook-form: 7.65.0(react@19.2.0)

  '@humanfs/core@0.19.1': {}

  '@humanfs/node@0.16.7':
    dependencies:
      '@humanfs/core': 0.19.1
      '@humanwhocodes/retry': 0.4.3

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/retry@0.4.3': {}

  '@img/sharp-darwin-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.0.4
    optional: true

  '@img/sharp-darwin-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.0.4
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-arm@1.0.5':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.0.4':
    optional: true

  '@img/sharp-libvips-linux-x64@1.0.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.0.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.0.4':
    optional: true

  '@img/sharp-linux-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.0.4
    optional: true

  '@img/sharp-linux-arm@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.0.5
    optional: true

  '@img/sharp-linux-s390x@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.0.4
    optional: true

  '@img/sharp-linux-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.0.4
    optional: true

  '@img/sharp-linuxmusl-arm64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.4
    optional: true

  '@img/sharp-linuxmusl-x64@0.33.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.0.4
    optional: true

  '@img/sharp-wasm32@0.33.5':
    dependencies:
      '@emnapi/runtime': 1.6.0
    optional: true

  '@img/sharp-win32-ia32@0.33.5':
    optional: true

  '@img/sharp-win32-x64@0.33.5':
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@napi-rs/wasm-runtime@0.2.12':
    dependencies:
      '@emnapi/core': 1.6.0
      '@emnapi/runtime': 1.6.0
      '@tybys/wasm-util': 0.10.1
    optional: true

  '@next/env@15.2.4': {}

  '@next/eslint-plugin-next@16.0.1':
    dependencies:
      fast-glob: 3.3.1

  '@next/swc-darwin-arm64@15.2.4':
    optional: true

  '@next/swc-darwin-x64@15.2.4':
    optional: true

  '@next/swc-linux-arm64-gnu@15.2.4':
    optional: true

  '@next/swc-linux-arm64-musl@15.2.4':
    optional: true

  '@next/swc-linux-x64-gnu@15.2.4':
    optional: true

  '@next/swc-linux-x64-musl@15.2.4':
    optional: true

  '@next/swc-win32-arm64-msvc@15.2.4':
    optional: true

  '@next/swc-win32-x64-msvc@15.2.4':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.19.1

  '@nolyfill/is-core-module@1.0.39': {}

  '@radix-ui/number@1.1.0': {}

  '@radix-ui/primitive@1.1.1': {}

  '@radix-ui/react-accordion@1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collapsible': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-alert-dialog@1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dialog': 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-arrow@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-aspect-ratio@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-avatar@1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-checkbox@1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-collapsible@1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-collection@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-compose-refs@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-compose-refs@1.1.2(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-context-menu@2.2.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-menu': 2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-context@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-dialog@1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-focus-scope': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      aria-hidden: 1.2.6
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-remove-scroll: 2.7.1(@types/react@19.2.2)(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-direction@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-dismissable-layer@1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-escape-keydown': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-dropdown-menu@2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-menu': 2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-focus-guards@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-focus-scope@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-hover-card@1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-popper': 1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-id@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-id@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-label@2.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-menu@2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-focus-scope': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-popper': 1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-roving-focus': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      aria-hidden: 1.2.6
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-remove-scroll: 2.7.1(@types/react@19.2.2)(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-menubar@1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-menu': 2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-roving-focus': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-navigation-menu@1.2.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-visually-hidden': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-popover@1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-focus-scope': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-popper': 1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      aria-hidden: 1.2.6
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-remove-scroll: 2.7.1(@types/react@19.2.2)(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-popper@1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@floating-ui/react-dom': 2.1.6(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-arrow': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-rect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/rect': 1.1.0
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-portal@1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-presence@1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-primitive@2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-primitive@2.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-progress@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-radio-group@1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-roving-focus': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-roving-focus@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-scroll-area@1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-select@2.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-focus-guards': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-focus-scope': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-popper': 1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-visually-hidden': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      aria-hidden: 1.2.6
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-remove-scroll: 2.7.1(@types/react@19.2.2)(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-separator@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-slider@1.2.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/number': 1.1.0
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-slot@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-slot@1.2.3(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-switch@1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-previous': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-size': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-tabs@1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-roving-focus': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-toast@1.2.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-collection': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-visually-hidden': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-toggle-group@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-direction': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-roving-focus': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-toggle': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-toggle@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-tooltip@1.1.6(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/primitive': 1.1.1
      '@radix-ui/react-compose-refs': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-context': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-dismissable-layer': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-popper': 1.2.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-portal': 1.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-presence': 1.1.2(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-slot': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-use-controllable-state': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-visually-hidden': 1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/react-use-callback-ref@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-controllable-state@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-escape-keydown@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-layout-effect@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-layout-effect@1.1.1(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-previous@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-rect@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/rect': 1.1.0
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-use-size@1.1.0(@types/react@19.2.2)(react@19.2.0)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.0(@types/react@19.2.2)(react@19.2.0)
      react: 19.2.0
    optionalDependencies:
      '@types/react': 19.2.2

  '@radix-ui/react-visually-hidden@1.1.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)':
    dependencies:
      '@radix-ui/react-primitive': 2.0.1(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2
      '@types/react-dom': 19.2.2(@types/react@19.2.2)

  '@radix-ui/rect@1.1.0': {}

  '@rtsao/scc@1.1.0': {}

  '@swc/counter@0.1.3': {}

  '@swc/helpers@0.5.15':
    dependencies:
      tslib: 2.8.1

  '@tailwindcss/node@4.1.16':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.18.3
      jiti: 2.6.1
      lightningcss: 1.30.2
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.1.16

  '@tailwindcss/oxide-android-arm64@4.1.16':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.1.16':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.1.16':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.1.16':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.1.16':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.1.16':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.1.16':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.1.16':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.1.16':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.1.16':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.1.16':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.1.16':
    optional: true

  '@tailwindcss/oxide@4.1.16':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.1.16
      '@tailwindcss/oxide-darwin-arm64': 4.1.16
      '@tailwindcss/oxide-darwin-x64': 4.1.16
      '@tailwindcss/oxide-freebsd-x64': 4.1.16
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.1.16
      '@tailwindcss/oxide-linux-arm64-gnu': 4.1.16
      '@tailwindcss/oxide-linux-arm64-musl': 4.1.16
      '@tailwindcss/oxide-linux-x64-gnu': 4.1.16
      '@tailwindcss/oxide-linux-x64-musl': 4.1.16
      '@tailwindcss/oxide-wasm32-wasi': 4.1.16
      '@tailwindcss/oxide-win32-arm64-msvc': 4.1.16
      '@tailwindcss/oxide-win32-x64-msvc': 4.1.16

  '@tailwindcss/postcss@4.1.16':
    dependencies:
      '@alloc/quick-lru': 5.2.0
      '@tailwindcss/node': 4.1.16
      '@tailwindcss/oxide': 4.1.16
      postcss: 8.5.6
      tailwindcss: 4.1.16

  '@tybys/wasm-util@0.10.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/d3-array@3.2.2': {}

  '@types/d3-color@3.1.3': {}

  '@types/d3-ease@3.0.2': {}

  '@types/d3-interpolate@3.0.4':
    dependencies:
      '@types/d3-color': 3.1.3

  '@types/d3-path@3.1.1': {}

  '@types/d3-scale@4.0.9':
    dependencies:
      '@types/d3-time': 3.0.4

  '@types/d3-shape@3.1.7':
    dependencies:
      '@types/d3-path': 3.1.1

  '@types/d3-time@3.0.4': {}

  '@types/d3-timer@3.0.2': {}

  '@types/estree@1.0.8': {}

  '@types/json-schema@7.0.15': {}

  '@types/json5@0.0.29': {}

  '@types/node@22.18.13':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.2.2(@types/react@19.2.2)':
    dependencies:
      '@types/react': 19.2.2

  '@types/react@19.2.2':
    dependencies:
      csstype: 3.1.3

  '@typescript-eslint/eslint-plugin@8.46.2(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)':
    dependencies:
      '@eslint-community/regexpp': 4.12.2
      '@typescript-eslint/parser': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      '@typescript-eslint/scope-manager': 8.46.2
      '@typescript-eslint/type-utils': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      '@typescript-eslint/utils': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.46.2
      eslint: 9.38.0(jiti@2.6.1)
      graphemer: 1.4.0
      ignore: 7.0.5
      natural-compare: 1.4.0
      ts-api-utils: 2.1.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/scope-manager': 8.46.2
      '@typescript-eslint/types': 8.46.2
      '@typescript-eslint/typescript-estree': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/visitor-keys': 8.46.2
      debug: 4.4.3
      eslint: 9.38.0(jiti@2.6.1)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/project-service@8.46.2(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/tsconfig-utils': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/types': 8.46.2
      debug: 4.4.3
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@8.46.2':
    dependencies:
      '@typescript-eslint/types': 8.46.2
      '@typescript-eslint/visitor-keys': 8.46.2

  '@typescript-eslint/tsconfig-utils@8.46.2(typescript@5.9.3)':
    dependencies:
      typescript: 5.9.3

  '@typescript-eslint/type-utils@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/types': 8.46.2
      '@typescript-eslint/typescript-estree': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/utils': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      debug: 4.4.3
      eslint: 9.38.0(jiti@2.6.1)
      ts-api-utils: 2.1.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@8.46.2': {}

  '@typescript-eslint/typescript-estree@8.46.2(typescript@5.9.3)':
    dependencies:
      '@typescript-eslint/project-service': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/tsconfig-utils': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/types': 8.46.2
      '@typescript-eslint/visitor-keys': 8.46.2
      debug: 4.4.3
      fast-glob: 3.3.3
      is-glob: 4.0.3
      minimatch: 9.0.5
      semver: 7.7.3
      ts-api-utils: 2.1.0(typescript@5.9.3)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)':
    dependencies:
      '@eslint-community/eslint-utils': 4.9.0(eslint@9.38.0(jiti@2.6.1))
      '@typescript-eslint/scope-manager': 8.46.2
      '@typescript-eslint/types': 8.46.2
      '@typescript-eslint/typescript-estree': 8.46.2(typescript@5.9.3)
      eslint: 9.38.0(jiti@2.6.1)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/visitor-keys@8.46.2':
    dependencies:
      '@typescript-eslint/types': 8.46.2
      eslint-visitor-keys: 4.2.1

  '@unrs/resolver-binding-android-arm-eabi@1.11.1':
    optional: true

  '@unrs/resolver-binding-android-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-freebsd-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-musleabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-ppc64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-s390x-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-wasm32-wasi@1.11.1':
    dependencies:
      '@napi-rs/wasm-runtime': 0.2.12
    optional: true

  '@unrs/resolver-binding-win32-arm64-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-ia32-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-x64-msvc@1.11.1':
    optional: true

  '@vercel/analytics@1.5.0(next@15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0))(react@19.2.0)':
    optionalDependencies:
      next: 15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0

  acorn-jsx@5.3.2(acorn@8.15.0):
    dependencies:
      acorn: 8.15.0

  acorn@8.15.0: {}

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  argparse@2.0.1: {}

  aria-hidden@1.2.6:
    dependencies:
      tslib: 2.8.1

  aria-query@5.3.2: {}

  array-buffer-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      is-array-buffer: 3.0.5

  array-includes@3.1.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      is-string: 1.1.1
      math-intrinsics: 1.1.0

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.findlastindex@1.2.6:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.flat@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-shim-unscopables: 1.1.0

  array.prototype.flatmap@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-shim-unscopables: 1.1.0

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-shim-unscopables: 1.1.0

  arraybuffer.prototype.slice@1.0.4:
    dependencies:
      array-buffer-byte-length: 1.0.2
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      is-array-buffer: 3.0.5

  ast-types-flow@0.0.8: {}

  async-function@1.0.0: {}

  autoprefixer@10.4.21(postcss@8.5.6):
    dependencies:
      browserslist: 4.27.0
      caniuse-lite: 1.0.30001751
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.1.1
      postcss: 8.5.6
      postcss-value-parser: 4.2.0

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.1.0

  axe-core@4.11.0: {}

  axobject-query@4.1.0: {}

  balanced-match@1.0.2: {}

  baseline-browser-mapping@2.8.21: {}

  brace-expansion@1.1.12:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.2:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.27.0:
    dependencies:
      baseline-browser-mapping: 2.8.21
      caniuse-lite: 1.0.30001751
      electron-to-chromium: 1.5.244
      node-releases: 2.0.27
      update-browserslist-db: 1.1.4(browserslist@4.27.0)

  busboy@1.6.0:
    dependencies:
      streamsearch: 1.1.0

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.8:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  caniuse-lite@1.0.30001751: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  client-only@0.0.1: {}

  clsx@2.1.1: {}

  cmdk@1.0.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      '@radix-ui/react-dialog': 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.2)(react@19.2.0)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      use-sync-external-store: 1.6.0(react@19.2.0)
    transitivePeerDependencies:
      - '@types/react'
      - '@types/react-dom'

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  color-string@1.9.1:
    dependencies:
      color-name: 1.1.4
      simple-swizzle: 0.2.4
    optional: true

  color@4.2.3:
    dependencies:
      color-convert: 2.0.1
      color-string: 1.9.1
    optional: true

  concat-map@0.0.1: {}

  convert-source-map@2.0.0: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  csstype@3.1.3: {}

  d3-array@3.2.4:
    dependencies:
      internmap: 2.0.3

  d3-color@3.1.0: {}

  d3-ease@3.0.1: {}

  d3-format@3.1.0: {}

  d3-interpolate@3.0.1:
    dependencies:
      d3-color: 3.1.0

  d3-path@3.1.0: {}

  d3-scale@4.0.2:
    dependencies:
      d3-array: 3.2.4
      d3-format: 3.1.0
      d3-interpolate: 3.0.1
      d3-time: 3.1.0
      d3-time-format: 4.1.0

  d3-shape@3.2.0:
    dependencies:
      d3-path: 3.1.0

  d3-time-format@4.1.0:
    dependencies:
      d3-time: 3.1.0

  d3-time@3.1.0:
    dependencies:
      d3-array: 3.2.4

  d3-timer@3.0.1: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-offset@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  date-fns-jalali@4.1.0-0: {}

  date-fns@4.1.0: {}

  debug@3.2.7:
    dependencies:
      ms: 2.1.3

  debug@4.4.3:
    dependencies:
      ms: 2.1.3

  decimal.js-light@2.5.1: {}

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  detect-libc@2.1.2: {}

  detect-node-es@1.1.0: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  dom-helpers@5.2.1:
    dependencies:
      '@babel/runtime': 7.28.4
      csstype: 3.1.3

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  electron-to-chromium@1.5.244: {}

  embla-carousel-react@8.5.1(react@19.2.0):
    dependencies:
      embla-carousel: 8.5.1
      embla-carousel-reactive-utils: 8.5.1(embla-carousel@8.5.1)
      react: 19.2.0

  embla-carousel-reactive-utils@8.5.1(embla-carousel@8.5.1):
    dependencies:
      embla-carousel: 8.5.1

  embla-carousel@8.5.1: {}

  emoji-regex@9.2.2: {}

  enhanced-resolve@5.18.3:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.0

  es-abstract@1.24.0:
    dependencies:
      array-buffer-byte-length: 1.0.2
      arraybuffer.prototype.slice: 1.0.4
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      data-view-buffer: 1.0.2
      data-view-byte-length: 1.0.2
      data-view-byte-offset: 1.0.1
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-set-tostringtag: 2.1.0
      es-to-primitive: 1.3.0
      function.prototype.name: 1.1.8
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      get-symbol-description: 1.1.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      internal-slot: 1.1.0
      is-array-buffer: 3.0.5
      is-callable: 1.2.7
      is-data-view: 1.0.2
      is-negative-zero: 2.0.3
      is-regex: 1.2.1
      is-set: 2.0.3
      is-shared-array-buffer: 1.0.4
      is-string: 1.1.1
      is-typed-array: 1.1.15
      is-weakref: 1.1.1
      math-intrinsics: 1.1.0
      object-inspect: 1.13.4
      object-keys: 1.1.1
      object.assign: 4.1.7
      own-keys: 1.0.1
      regexp.prototype.flags: 1.5.4
      safe-array-concat: 1.1.3
      safe-push-apply: 1.0.0
      safe-regex-test: 1.1.0
      set-proto: 1.0.0
      stop-iteration-iterator: 1.1.0
      string.prototype.trim: 1.2.10
      string.prototype.trimend: 1.0.9
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.3
      typed-array-byte-length: 1.0.3
      typed-array-byte-offset: 1.0.4
      typed-array-length: 1.0.7
      unbox-primitive: 1.1.0
      which-typed-array: 1.1.19

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-iterator-helpers@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-set-tostringtag: 2.1.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      iterator.prototype: 1.1.5
      safe-array-concat: 1.1.3

  es-object-atoms@1.1.1:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  es-shim-unscopables@1.1.0:
    dependencies:
      hasown: 2.0.2

  es-to-primitive@1.3.0:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.1.0
      is-symbol: 1.1.1

  escalade@3.2.0: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-next@16.0.1(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3):
    dependencies:
      '@next/eslint-plugin-next': 16.0.1
      eslint: 9.38.0(jiti@2.6.1)
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.38.0(jiti@2.6.1))
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.38.0(jiti@2.6.1))
      eslint-plugin-jsx-a11y: 6.10.2(eslint@9.38.0(jiti@2.6.1))
      eslint-plugin-react: 7.37.5(eslint@9.38.0(jiti@2.6.1))
      eslint-plugin-react-hooks: 7.0.1(eslint@9.38.0(jiti@2.6.1))
      globals: 16.4.0
      typescript-eslint: 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
    optionalDependencies:
      typescript: 5.9.3
    transitivePeerDependencies:
      - '@typescript-eslint/parser'
      - eslint-import-resolver-webpack
      - eslint-plugin-import-x
      - supports-color

  eslint-import-resolver-node@0.3.9:
    dependencies:
      debug: 3.2.7
      is-core-module: 2.16.1
      resolve: 1.22.11
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.10.1(eslint-plugin-import@2.32.0)(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      '@nolyfill/is-core-module': 1.0.39
      debug: 4.4.3
      eslint: 9.38.0(jiti@2.6.1)
      get-tsconfig: 4.13.0
      is-bun-module: 2.0.0
      stable-hash: 0.0.5
      tinyglobby: 0.2.15
      unrs-resolver: 1.11.1
    optionalDependencies:
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.38.0(jiti@2.6.1))
    transitivePeerDependencies:
      - supports-color

  eslint-module-utils@2.12.1(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.10.1)(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      debug: 3.2.7
    optionalDependencies:
      '@typescript-eslint/parser': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      eslint: 9.38.0(jiti@2.6.1)
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.38.0(jiti@2.6.1))
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.32.0(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      '@rtsao/scc': 1.1.0
      array-includes: 3.1.9
      array.prototype.findlastindex: 1.2.6
      array.prototype.flat: 1.3.3
      array.prototype.flatmap: 1.3.3
      debug: 3.2.7
      doctrine: 2.1.0
      eslint: 9.38.0(jiti@2.6.1)
      eslint-import-resolver-node: 0.3.9
      eslint-module-utils: 2.12.1(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.10.1)(eslint@9.38.0(jiti@2.6.1))
      hasown: 2.0.2
      is-core-module: 2.16.1
      is-glob: 4.0.3
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.1
      semver: 6.3.1
      string.prototype.trimend: 1.0.9
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.10.2(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      aria-query: 5.3.2
      array-includes: 3.1.9
      array.prototype.flatmap: 1.3.3
      ast-types-flow: 0.0.8
      axe-core: 4.11.0
      axobject-query: 4.1.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 9.38.0(jiti@2.6.1)
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      safe-regex-test: 1.1.0
      string.prototype.includes: 2.0.1

  eslint-plugin-react-hooks@7.0.1(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      '@babel/core': 7.28.5
      '@babel/parser': 7.28.5
      eslint: 9.38.0(jiti@2.6.1)
      hermes-parser: 0.25.1
      zod: 3.25.76
      zod-validation-error: 4.0.2(zod@3.25.76)
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-react@7.37.5(eslint@9.38.0(jiti@2.6.1)):
    dependencies:
      array-includes: 3.1.9
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.3
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.2.1
      eslint: 9.38.0(jiti@2.6.1)
      estraverse: 5.3.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.2
      object.entries: 1.1.9
      object.fromentries: 2.0.8
      object.values: 1.2.1
      prop-types: 15.8.1
      resolve: 2.0.0-next.5
      semver: 6.3.1
      string.prototype.matchall: 4.0.12
      string.prototype.repeat: 1.0.0

  eslint-scope@8.4.0:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint-visitor-keys@4.2.1: {}

  eslint@9.38.0(jiti@2.6.1):
    dependencies:
      '@eslint-community/eslint-utils': 4.9.0(eslint@9.38.0(jiti@2.6.1))
      '@eslint-community/regexpp': 4.12.2
      '@eslint/config-array': 0.21.1
      '@eslint/config-helpers': 0.4.2
      '@eslint/core': 0.16.0
      '@eslint/eslintrc': 3.3.1
      '@eslint/js': 9.38.0
      '@eslint/plugin-kit': 0.4.1
      '@humanfs/node': 0.16.7
      '@humanwhocodes/module-importer': 1.0.1
      '@humanwhocodes/retry': 0.4.3
      '@types/estree': 1.0.8
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.3
      escape-string-regexp: 4.0.0
      eslint-scope: 8.4.0
      eslint-visitor-keys: 4.2.1
      espree: 10.4.0
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 8.0.0
      find-up: 5.0.0
      glob-parent: 6.0.2
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      json-stable-stringify-without-jsonify: 1.0.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
    optionalDependencies:
      jiti: 2.6.1
    transitivePeerDependencies:
      - supports-color

  espree@10.4.0:
    dependencies:
      acorn: 8.15.0
      acorn-jsx: 5.3.2(acorn@8.15.0)
      eslint-visitor-keys: 4.2.1

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  eventemitter3@4.0.7: {}

  fast-deep-equal@3.1.3: {}

  fast-equals@5.3.2: {}

  fast-glob@3.3.1:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.19.1:
    dependencies:
      reusify: 1.1.0

  fdir@6.5.0(picomatch@4.0.3):
    optionalDependencies:
      picomatch: 4.0.3

  file-entry-cache@8.0.0:
    dependencies:
      flat-cache: 4.0.1

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@4.0.1:
    dependencies:
      flatted: 3.3.3
      keyv: 4.5.4

  flatted@3.3.3: {}

  for-each@0.3.5:
    dependencies:
      is-callable: 1.2.7

  fraction.js@4.3.7: {}

  framer-motion@12.23.24(@emotion/is-prop-valid@1.4.0)(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      motion-dom: 12.23.23
      motion-utils: 12.23.6
      tslib: 2.8.1
    optionalDependencies:
      '@emotion/is-prop-valid': 1.4.0
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  function-bind@1.1.2: {}

  function.prototype.name@1.1.8:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      functions-have-names: 1.2.3
      hasown: 2.0.2
      is-callable: 1.2.7

  functions-have-names@1.2.3: {}

  geist@1.5.1(next@15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)):
    dependencies:
      next: 15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)

  generator-function@2.0.1: {}

  gensync@1.0.0-beta.2: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      math-intrinsics: 1.1.0

  get-nonce@1.0.1: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.1

  get-symbol-description@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0

  get-tsconfig@4.13.0:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  globals@14.0.0: {}

  globals@16.4.0: {}

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.2.0

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  graphemer@1.4.0: {}

  has-bigints@1.1.0: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-proto@1.2.0:
    dependencies:
      dunder-proto: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  hermes-estree@0.25.1: {}

  hermes-parser@0.25.1:
    dependencies:
      hermes-estree: 0.25.1

  ignore@5.3.2: {}

  ignore@7.0.5: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  input-otp@1.4.1(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  internal-slot@1.1.0:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.2
      side-channel: 1.1.0

  internmap@2.0.3: {}

  is-array-buffer@3.0.5:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-arrayish@0.3.4:
    optional: true

  is-async-function@2.1.1:
    dependencies:
      async-function: 1.0.0
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-bigint@1.1.0:
    dependencies:
      has-bigints: 1.1.0

  is-boolean-object@1.2.2:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-bun-module@2.0.0:
    dependencies:
      semver: 7.7.3

  is-callable@1.2.7: {}

  is-core-module@2.16.1:
    dependencies:
      hasown: 2.0.2

  is-data-view@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      is-typed-array: 1.1.15

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-generator-function@1.1.2:
    dependencies:
      call-bound: 1.0.4
      generator-function: 2.0.1
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.4:
    dependencies:
      call-bound: 1.0.4

  is-string@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-symbol@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-symbols: 1.1.0
      safe-regex-test: 1.1.0

  is-typed-array@1.1.15:
    dependencies:
      which-typed-array: 1.1.19

  is-weakmap@2.0.2: {}

  is-weakref@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-weakset@2.0.4:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  iterator.prototype@1.1.5:
    dependencies:
      define-data-property: 1.1.4
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      has-symbols: 1.1.0
      set-function-name: 2.0.2

  jiti@2.6.1: {}

  js-tokens@4.0.0: {}

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  json5@2.2.3: {}

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.9
      array.prototype.flat: 1.3.3
      object.assign: 4.1.7
      object.values: 1.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lightningcss-android-arm64@1.30.2:
    optional: true

  lightningcss-darwin-arm64@1.30.2:
    optional: true

  lightningcss-darwin-x64@1.30.2:
    optional: true

  lightningcss-freebsd-x64@1.30.2:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.30.2:
    optional: true

  lightningcss-linux-arm64-gnu@1.30.2:
    optional: true

  lightningcss-linux-arm64-musl@1.30.2:
    optional: true

  lightningcss-linux-x64-gnu@1.30.2:
    optional: true

  lightningcss-linux-x64-musl@1.30.2:
    optional: true

  lightningcss-win32-arm64-msvc@1.30.2:
    optional: true

  lightningcss-win32-x64-msvc@1.30.2:
    optional: true

  lightningcss@1.30.2:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.30.2
      lightningcss-darwin-arm64: 1.30.2
      lightningcss-darwin-x64: 1.30.2
      lightningcss-freebsd-x64: 1.30.2
      lightningcss-linux-arm-gnueabihf: 1.30.2
      lightningcss-linux-arm64-gnu: 1.30.2
      lightningcss-linux-arm64-musl: 1.30.2
      lightningcss-linux-x64-gnu: 1.30.2
      lightningcss-linux-x64-musl: 1.30.2
      lightningcss-win32-arm64-msvc: 1.30.2
      lightningcss-win32-x64-msvc: 1.30.2

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  lodash@4.17.21: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  lucide-react@0.454.0(react@19.2.0):
    dependencies:
      react: 19.2.0

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  math-intrinsics@1.1.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.12

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.2

  minimist@1.2.8: {}

  motion-dom@12.23.23:
    dependencies:
      motion-utils: 12.23.6

  motion-utils@12.23.6: {}

  ms@2.1.3: {}

  nanoid@3.3.11: {}

  napi-postinstall@0.3.4: {}

  natural-compare@1.4.0: {}

  next-themes@0.4.6(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  next@15.2.4(@babel/core@7.28.5)(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      '@next/env': 15.2.4
      '@swc/counter': 0.1.3
      '@swc/helpers': 0.5.15
      busboy: 1.6.0
      caniuse-lite: 1.0.30001751
      postcss: 8.4.31
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      styled-jsx: 5.1.6(@babel/core@7.28.5)(react@19.2.0)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.2.4
      '@next/swc-darwin-x64': 15.2.4
      '@next/swc-linux-arm64-gnu': 15.2.4
      '@next/swc-linux-arm64-musl': 15.2.4
      '@next/swc-linux-x64-gnu': 15.2.4
      '@next/swc-linux-x64-musl': 15.2.4
      '@next/swc-win32-arm64-msvc': 15.2.4
      '@next/swc-win32-x64-msvc': 15.2.4
      sharp: 0.33.5
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-releases@2.0.27: {}

  normalize-range@0.1.2: {}

  object-assign@4.1.1: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.1:
    dependencies:
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  picomatch@4.0.3: {}

  possible-typed-array-names@1.1.0: {}

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.6:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-day-picker@9.8.0(react@19.2.0):
    dependencies:
      '@date-fns/tz': 1.2.0
      date-fns: 4.1.0
      date-fns-jalali: 4.1.0-0
      react: 19.2.0

  react-dom@19.2.0(react@19.2.0):
    dependencies:
      react: 19.2.0
      scheduler: 0.27.0

  react-hook-form@7.65.0(react@19.2.0):
    dependencies:
      react: 19.2.0

  react-is@16.13.1: {}

  react-is@18.3.1: {}

  react-remove-scroll-bar@2.3.8(@types/react@19.2.2)(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-style-singleton: 2.2.3(@types/react@19.2.2)(react@19.2.0)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.2

  react-remove-scroll@2.7.1(@types/react@19.2.2)(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-remove-scroll-bar: 2.3.8(@types/react@19.2.2)(react@19.2.0)
      react-style-singleton: 2.2.3(@types/react@19.2.2)(react@19.2.0)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@19.2.2)(react@19.2.0)
      use-sidecar: 1.1.3(@types/react@19.2.2)(react@19.2.0)
    optionalDependencies:
      '@types/react': 19.2.2

  react-resizable-panels@2.1.9(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  react-smooth@4.0.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      fast-equals: 5.3.2
      prop-types: 15.8.1
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-transition-group: 4.4.5(react-dom@19.2.0(react@19.2.0))(react@19.2.0)

  react-style-singleton@2.2.3(@types/react@19.2.2)(react@19.2.0):
    dependencies:
      get-nonce: 1.0.1
      react: 19.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.2

  react-transition-group@4.4.5(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      '@babel/runtime': 7.28.4
      dom-helpers: 5.2.1
      loose-envify: 1.4.0
      prop-types: 15.8.1
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  react@19.2.0: {}

  recharts-scale@0.4.5:
    dependencies:
      decimal.js-light: 2.5.1

  recharts@2.15.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      clsx: 2.1.1
      eventemitter3: 4.0.7
      lodash: 4.17.21
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
      react-is: 18.3.1
      react-smooth: 4.0.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      recharts-scale: 0.4.5
      tiny-invariant: 1.3.3
      victory-vendor: 36.9.2

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@1.22.11:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  resolve@2.0.0-next.5:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.3:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  scheduler@0.27.0: {}

  semver@6.3.1: {}

  semver@7.7.3: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1

  sharp@0.33.5:
    dependencies:
      color: 4.2.3
      detect-libc: 2.1.2
      semver: 7.7.3
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.33.5
      '@img/sharp-darwin-x64': 0.33.5
      '@img/sharp-libvips-darwin-arm64': 1.0.4
      '@img/sharp-libvips-darwin-x64': 1.0.4
      '@img/sharp-libvips-linux-arm': 1.0.5
      '@img/sharp-libvips-linux-arm64': 1.0.4
      '@img/sharp-libvips-linux-s390x': 1.0.4
      '@img/sharp-libvips-linux-x64': 1.0.4
      '@img/sharp-libvips-linuxmusl-arm64': 1.0.4
      '@img/sharp-libvips-linuxmusl-x64': 1.0.4
      '@img/sharp-linux-arm': 0.33.5
      '@img/sharp-linux-arm64': 0.33.5
      '@img/sharp-linux-s390x': 0.33.5
      '@img/sharp-linux-x64': 0.33.5
      '@img/sharp-linuxmusl-arm64': 0.33.5
      '@img/sharp-linuxmusl-x64': 0.33.5
      '@img/sharp-wasm32': 0.33.5
      '@img/sharp-win32-ia32': 0.33.5
      '@img/sharp-win32-x64': 0.33.5
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.0
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  simple-swizzle@0.2.4:
    dependencies:
      is-arrayish: 0.3.4
    optional: true

  sonner@1.7.4(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)

  source-map-js@1.2.1: {}

  stable-hash@0.0.5: {}

  stop-iteration-iterator@1.1.0:
    dependencies:
      es-errors: 1.3.0
      internal-slot: 1.1.0

  streamsearch@1.1.0: {}

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0

  string.prototype.matchall@4.0.12:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.0

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.24.0

  string.prototype.trim@1.2.10:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1
      has-property-descriptors: 1.0.2

  string.prototype.trimend@1.0.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.6(@babel/core@7.28.5)(react@19.2.0):
    dependencies:
      client-only: 0.0.1
      react: 19.2.0
    optionalDependencies:
      '@babel/core': 7.28.5

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwind-merge@2.6.0: {}

  tailwindcss-animate@1.0.7(tailwindcss@4.1.16):
    dependencies:
      tailwindcss: 4.1.16

  tailwindcss@4.1.16: {}

  tapable@2.3.0: {}

  tiny-invariant@1.3.3: {}

  tinyglobby@0.2.15:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.3)
      picomatch: 4.0.3

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  ts-api-utils@2.1.0(typescript@5.9.3):
    dependencies:
      typescript: 5.9.3

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  tw-animate-css@1.3.3: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.7:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript-eslint@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3):
    dependencies:
      '@typescript-eslint/eslint-plugin': 8.46.2(@typescript-eslint/parser@8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3))(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      '@typescript-eslint/parser': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      '@typescript-eslint/typescript-estree': 8.46.2(typescript@5.9.3)
      '@typescript-eslint/utils': 8.46.2(eslint@9.38.0(jiti@2.6.1))(typescript@5.9.3)
      eslint: 9.38.0(jiti@2.6.1)
      typescript: 5.9.3
    transitivePeerDependencies:
      - supports-color

  typescript@5.9.3: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.21.0: {}

  unrs-resolver@1.11.1:
    dependencies:
      napi-postinstall: 0.3.4
    optionalDependencies:
      '@unrs/resolver-binding-android-arm-eabi': 1.11.1
      '@unrs/resolver-binding-android-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-x64': 1.11.1
      '@unrs/resolver-binding-freebsd-x64': 1.11.1
      '@unrs/resolver-binding-linux-arm-gnueabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm-musleabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-arm64-musl': 1.11.1
      '@unrs/resolver-binding-linux-ppc64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-musl': 1.11.1
      '@unrs/resolver-binding-linux-s390x-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-musl': 1.11.1
      '@unrs/resolver-binding-wasm32-wasi': 1.11.1
      '@unrs/resolver-binding-win32-arm64-msvc': 1.11.1
      '@unrs/resolver-binding-win32-ia32-msvc': 1.11.1
      '@unrs/resolver-binding-win32-x64-msvc': 1.11.1

  update-browserslist-db@1.1.4(browserslist@4.27.0):
    dependencies:
      browserslist: 4.27.0
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.3(@types/react@19.2.2)(react@19.2.0):
    dependencies:
      react: 19.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.2

  use-sidecar@1.1.3(@types/react@19.2.2)(react@19.2.0):
    dependencies:
      detect-node-es: 1.1.0
      react: 19.2.0
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.2

  use-sync-external-store@1.6.0(react@19.2.0):
    dependencies:
      react: 19.2.0

  vaul@0.9.9(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0):
    dependencies:
      '@radix-ui/react-dialog': 1.1.4(@types/react-dom@19.2.2(@types/react@19.2.2))(@types/react@19.2.2)(react-dom@19.2.0(react@19.2.0))(react@19.2.0)
      react: 19.2.0
      react-dom: 19.2.0(react@19.2.0)
    transitivePeerDependencies:
      - '@types/react'
      - '@types/react-dom'

  victory-vendor@36.9.2:
    dependencies:
      '@types/d3-array': 3.2.2
      '@types/d3-ease': 3.0.2
      '@types/d3-interpolate': 3.0.4
      '@types/d3-scale': 4.0.9
      '@types/d3-shape': 3.1.7
      '@types/d3-time': 3.0.4
      '@types/d3-timer': 3.0.2
      d3-array: 3.2.4
      d3-ease: 3.0.1
      d3-interpolate: 3.0.1
      d3-scale: 4.0.2
      d3-shape: 3.2.0
      d3-time: 3.1.0
      d3-timer: 3.0.1

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.1.8
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.2
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.19

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.19:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      for-each: 0.3.5
      get-proto: 1.0.1
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  yallist@3.1.1: {}

  yocto-queue@0.1.0: {}

  zod-validation-error@4.0.2(zod@3.25.76):
    dependencies:
      zod: 3.25.76

  zod@3.25.76: {}

```

## File: `postcss.config.mjs`
```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config

```

## File: `public/advanced-neurosurgery-equipment.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/category-cranial-systems.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/category-neuroendoscopy.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/category-spinal-implants.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/dark-medical-background.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/hero-dark-medical-technology.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/hero-neurosurgery-background.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/aesculap-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/bonegraft-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/bonetech-logo.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/cruz-del-sur-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/dhl-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/endac-logo.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/fedex-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/flores-cargo-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/hcbiologics_logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/prodorth-logo.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/logos/sciencemedic-logo.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/medical-team-consultation-hospital.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/medical-technology-abstract-pattern.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/neurosurgery-medical-equipment-operating-room.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/neurosurgery-operating-room-dark.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/placeholder-logo.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/placeholder-logo.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="215" height="48" fill="none"><path fill="#000" d="M57.588 9.6h6L73.828 38h-5.2l-2.36-6.88h-11.36L52.548 38h-5.2l10.24-28.4Zm7.16 17.16-4.16-12.16-4.16 12.16h8.32Zm23.694-2.24c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.486-7.72.12 3.4c.534-1.227 1.307-2.173 2.32-2.84 1.04-.693 2.267-1.04 3.68-1.04 1.494 0 2.76.387 3.8 1.16 1.067.747 1.827 1.813 2.28 3.2.507-1.44 1.294-2.52 2.36-3.24 1.094-.747 2.414-1.12 3.96-1.12 1.414 0 2.64.307 3.68.92s1.84 1.52 2.4 2.72c.56 1.2.84 2.667.84 4.4V38h-4.96V25.92c0-1.813-.293-3.187-.88-4.12-.56-.96-1.413-1.44-2.56-1.44-.906 0-1.68.213-2.32.64-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.84-.48 3.04V38h-4.56V25.92c0-1.2-.133-2.213-.4-3.04-.24-.827-.626-1.453-1.16-1.88-.506-.427-1.133-.64-1.88-.64-.906 0-1.68.227-2.32.68-.64.427-1.133 1.053-1.48 1.88-.32.827-.48 1.827-.48 3V38h-4.96V16.8h4.48Zm26.723 10.6c0-2.24.427-4.187 1.28-5.84.854-1.68 2.067-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.84 0 3.494.413 4.96 1.24 1.467.827 2.64 2.08 3.52 3.76.88 1.653 1.347 3.693 1.4 6.12v1.32h-15.08c.107 1.813.614 3.227 1.52 4.24.907.987 2.134 1.48 3.68 1.48.987 0 1.88-.253 2.68-.76a4.803 4.803 0 0 0 1.84-2.2l5.08.36c-.64 2.027-1.84 3.64-3.6 4.84-1.733 1.173-3.733 1.76-6 1.76-2.08 0-3.906-.453-5.48-1.36-1.573-.907-2.786-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84Zm15.16-2.04c-.213-1.733-.76-3.013-1.64-3.84-.853-.827-1.893-1.24-3.12-1.24-1.44 0-2.6.453-3.48 1.36-.88.88-1.44 2.12-1.68 3.72h9.92ZM163.139 9.6V38h-5.04V9.6h5.04Zm8.322 7.2.24 5.88-.64-.36c.32-2.053 1.094-3.56 2.32-4.52 1.254-.987 2.787-1.48 4.6-1.48 2.32 0 4.107.733 5.36 2.2 1.254 1.44 1.88 3.387 1.88 5.84V38h-4.96V25.92c0-1.253-.12-2.28-.36-3.08-.24-.8-.64-1.413-1.2-1.84-.533-.427-1.253-.64-2.16-.64-1.44 0-2.573.48-3.4 1.44-.8.933-1.2 2.307-1.2 4.12V38h-4.96V16.8h4.48Zm30.003 7.72c-.186-1.307-.706-2.32-1.56-3.04-.853-.72-1.866-1.08-3.04-1.08-1.68 0-2.986.613-3.92 1.84-.906 1.227-1.36 2.947-1.36 5.16s.454 3.933 1.36 5.16c.934 1.227 2.24 1.84 3.92 1.84 1.254 0 2.307-.373 3.16-1.12.854-.773 1.387-1.867 1.6-3.28l5.12.24c-.186 1.68-.733 3.147-1.64 4.4-.906 1.227-2.08 2.173-3.52 2.84-1.413.667-2.986 1-4.72 1-2.08 0-3.906-.453-5.48-1.36-1.546-.907-2.76-2.2-3.64-3.88-.853-1.68-1.28-3.627-1.28-5.84 0-2.24.427-4.187 1.28-5.84.88-1.68 2.094-2.973 3.64-3.88 1.574-.907 3.4-1.36 5.48-1.36 1.68 0 3.227.32 4.64.96 1.414.64 2.56 1.56 3.44 2.76.907 1.2 1.454 2.6 1.64 4.2l-5.12.28Zm11.443 8.16V38h-5.6v-5.32h5.6Z"/><path fill="#171717" fill-rule="evenodd" d="m7.839 40.783 16.03-28.054L20 6 0 40.783h7.839Zm8.214 0H40L27.99 19.894l-4.02 7.032 3.976 6.914H20.02l-3.967 6.943Z" clip-rule="evenodd"/></svg>
```

## File: `public/placeholder-user.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/placeholder.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/placeholder.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
```

## File: `public/products/aspirador-misonix-1.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/aspirador-misonix-2.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/aspirador-misonix-3.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/becker-edms-1.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/becker-edms-2.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/clips-yasargil-1.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/clips-yasargil-2.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craneotomo-midas-rex-1.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craneotomo-midas-rex-2.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craneotomo-midas-rex-3.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craneotomo-midas-rex-4.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craniofix-1.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/craniofix-2.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/neuro-patch-1.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/neuro-patch-2.png`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/neuroendoscopio-aesculap-1.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/neuroendoscopio-aesculap-2.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/neuroendoscopio-aesculap-3.jpeg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/valvulas-hidrocefalia-1.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/products/valvulas-hidrocefalia-2.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/quality-control-medical-devices-laboratory.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/video-thumbnail.jpg`
_[Skipped: binary or non-UTF8 file]_
## File: `public/videos/presentation.mp4`
_[Skipped: binary or non-UTF8 file]_
## File: `styles/globals.css`
```css
@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```
