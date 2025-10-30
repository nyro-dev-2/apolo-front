import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Apolo Medical HT S.A.C. - Innovación en Soluciones Médicas",
  description:
    "Importación y distribución de dispositivos médico-quirúrgicos, implantes de columna y productos de neurocirugía en Perú",
  generator: "v0.app",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${manrope.variable} font-body antialiased`}>
        <ScrollToTop />
        <WhatsAppButton />
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
