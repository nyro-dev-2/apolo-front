"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

/**
 * Floating WhatsApp button component
 * Follows best practices for accessibility and user experience
 */
export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // WhatsApp configuration
  const phoneNumber = "51957359298" // Peru country code + number
  const defaultMessage = "Hola, me gustaría recibir información sobre sus productos y servicios médicos de Apolo Medical HT."
  
  // Build WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip */}
      <div
        className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        ¿Necesitas ayuda? Escríbenos
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-gray-900" />
        </div>
      </div>
      
      {/* Button */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] ${
          isHovered ? "ring-4 ring-[#25D366]/30" : ""
        }`}
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2} />
        
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" aria-hidden="true" />
      </div>
      
      {/* Active indicator badge */}
      <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-400 border-2 border-white shadow-md">
        <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
      </div>
    </a>
  )
}
