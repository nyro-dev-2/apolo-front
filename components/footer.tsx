import { Mail, Phone, MapPin } from "lucide-react"

import { COMPANY_ADDRESS } from "@/lib/company-info"

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
                <span>{COMPANY_ADDRESS}</span>
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

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            &copy; {new Date().getFullYear()} Apolo Medical HT S.A.C. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Made with 🤖 by <span className="font-medium">Nyro</span>
          </p>
        </div>
      </div>
    </footer>
  )
}