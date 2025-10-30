"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Search, Hospital, Building2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

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

              <div className="relative ml-auto flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar producto..."
                    className="pl-9 h-10 w-48 rounded-full bg-muted/50 focus:w-56 transition-all"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-10">
                      Soy...
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/contacto?profile=hospital">
                        <Hospital className="mr-2 h-4 w-4" />
                        <span>Hospital / Clínica</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/contacto?profile=distributor">
                        <Building2 className="mr-2 h-4 w-4" />
                        <span>Distribuidor</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

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
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar producto..."
                    className="pl-12 h-12 w-full text-base rounded-lg"
                  />
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-semibold text-foreground/80 transition-smooth hover:text-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Separator className="my-2" />
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-muted-foreground">¿Eres...?</p>
                  <Link
                    href="/contacto?profile=hospital"
                    className="flex items-center text-lg font-semibold text-foreground/80 transition-smooth hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Hospital className="mr-3 h-5 w-5" /> Hospital / Clínica
                  </Link>
                  <Link
                    href="/contacto?profile=distributor"
                    className="flex items-center text-lg font-semibold text-foreground/80 transition-smooth hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="mr-3 h-5 w-5" /> Distribuidor
                  </Link>
                </div>
                <Separator className="my-2" />
                <Button asChild size="lg" className="mt-2 font-semibold text-base py-6">
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