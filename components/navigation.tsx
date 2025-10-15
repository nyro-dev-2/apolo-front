"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
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
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Productos" },
    { href: "/distribucion", label: "Distribución" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <>
      <div className="hidden lg:block bg-secondary/50 backdrop-blur-md text-foreground py-2.5 border-b border-border/50 font-header">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a href="tel:+5114801525" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">+51 1 480 1525</span>
            </a>
            <a
              href="mailto:ventas@apolomedical.com.pe"
              className="flex items-center gap-2 hover:text-primary transition-smooth"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="font-medium">ventas@apolomedical.com.pe</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 w-full border-b transition-smooth font-header ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-border/80"
            : "bg-background/80 backdrop-blur-md border-border/40"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-primary tracking-tight group-hover:text-primary/80 transition-smooth">
                  Apolo Medical
                </span>
                <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">HT S.A.C.</span>
              </div>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-semibold text-foreground/80 transition-smooth hover:text-primary after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-smooth hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="default"
                className="ml-2 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-smooth"
              >
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                    className="text-base font-semibold text-foreground/80 transition-smooth hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-2 font-semibold">
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Solicitar Cotización
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
