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
    // "Inicio" eliminado
    { href: "/nosotros", label: "Nosotros" },
    { href: "/productos", label: "Productos" },
    // "Distribución" eliminado
    // "Noticias" eliminado
    { href: "/contacto", label: "Contacto" },
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
                <Link href="/contacto">Solicitar Cotización</Link>
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