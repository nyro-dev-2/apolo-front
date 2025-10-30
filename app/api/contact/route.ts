import nodemailer from "nodemailer"

import { products } from "@/lib/products"

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
          { status: 400, headers: { "Content-Type": "application/json" } },
        )
      }
    }

    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.ZOHO_USER ?? process.env.SMTP_USER
    const smtpPass = process.env.ZOHO_PASS ?? process.env.SMTP_PASS

    if (!smtpHost || !smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({ ok: false, error: "Configuración SMTP incompleta." }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      )
    }

    const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "465", 10)
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === "true"
      : smtpPort === 465

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
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
    const subject = `Contacto — ${payload.name} (${productName || "Consulta"})`

    const textBody = `Nuevo mensaje desde el formulario de contacto
Nombre: ${payload.name}
Email: ${payload.email}
Teléfono: ${payload.phone}${organizationSummary}${roleSummary}
  ${productSummary}${scheduleSummary}${methodSummary}

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
      <p><strong>Mensaje:</strong></p>
      <p>${(payload.message ?? "").replace(/\n/g, "<br/>")}</p>
    `

    await transporter.sendMail({
  from: `Apolo Medical HT <${smtpUser}>`,
  to: process.env.CONTACT_TO || smtpUser,
      replyTo: payload.email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "No se pudo enviar el mensaje en este momento."
    const isProduction = process.env.NODE_ENV === "production"
    const publicMessage = isProduction
      ? "No se pudo enviar el mensaje en este momento."
      : errorMessage

    console.error("Error enviando contacto:", error)
    return new Response(
      JSON.stringify({ ok: false, error: publicMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
