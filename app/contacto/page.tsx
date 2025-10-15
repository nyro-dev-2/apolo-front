"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram } from "lucide-react"
import { products } from "@/lib/products"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
        "Contáctanos a través de este formulario o llámanos directamente para conocer los requisitos y condiciones.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl text-balance">Contáctanos</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Estamos aquí para responder tus consultas y brindarte la mejor asesoría
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Envíanos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+51 999 999 999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Producto de interés</Label>
                    <Select
                      value={formData.product}
                      onValueChange={(value) => setFormData({ ...formData, product: value })}
                    >
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Selecciona un producto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Consulta general</SelectItem>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            {product.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Información de contacto</h2>
                  <div className="space-y-6">
                    <Card className="border-border/50">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Correo electrónico</h3>
                          <a
                            href="mailto:apolo.medicalht@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            apolo.medicalht@gmail.com
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Teléfonos</h3>
                          <div className="space-y-1 text-muted-foreground">
                            <div>(+51) 957 359 298</div>
                            <div>(+51) 958 362 601</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/50">
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="rounded-full bg-primary/10 p-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Dirección</h3>
                          <p className="text-muted-foreground">URB. Pablo VI – II Etapa Mz N Lote 1, Arequipa – Perú</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="mb-4 font-semibold text-foreground">Síguenos en redes sociales</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://wa.me/51957359298" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground text-center">Nuestra ubicación</h2>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.2!2d-71.537!3d-16.409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzMyLjQiUyA3McKwMzInMTMuMiJX!5e0!3m2!1sen!2spe!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Apolo Medical HT"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
