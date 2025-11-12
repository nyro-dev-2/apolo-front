"use client"

import dynamic from "next/dynamic"

const ScrollToTop = dynamic(async () => {
  const mod = await import("@/components/scroll-to-top")
  return { default: mod.ScrollToTop }
}, {
  ssr: false,
  loading: () => null,
})

const WhatsAppButton = dynamic(async () => {
  const mod = await import("@/components/whatsapp-button")
  return { default: mod.WhatsAppButton }
}, {
  ssr: false,
  loading: () => null,
})

export function ClientOnlyWidgets() {
  return (
    <>
      <ScrollToTop />
      <WhatsAppButton />
    </>
  )
}
