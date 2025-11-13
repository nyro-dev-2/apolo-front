"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { Play, RefreshCcw } from "lucide-react"

import { cn } from "@/lib/utils"

export type DeferredVideoSource = {
  src: string
  type?: string
}

type DeferredVideoProps = {
  poster: StaticImageData | string
  sources: DeferredVideoSource[]
  title: string
  className?: string
  videoClassName?: string
}

/**
 * DeferredVideo renders a lightweight poster until the user decides to play the media.
 * This avoids heavy payloads from downloading on first paint and prevents network errors
 * in Lighthouse caused by missing or slow-loading video assets.
 */
export function DeferredVideo({
  poster,
  sources,
  title,
  className,
  videoClassName,
}: DeferredVideoProps) {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const posterSrc = typeof poster === "string" ? poster : poster.src

  useEffect(() => {
    const video = videoRef.current
    if (!isActive || !video) {
      return
    }

    const handleLoaded = () => setIsLoading(false)
    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    setIsLoading(true)
    setHasError(false)

    video.addEventListener("loadeddata", handleLoaded)
    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("loadeddata", handleLoaded)
      video.removeEventListener("error", handleError)
    }
  }, [isActive])

  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl border border-primary/20", className)}>
      <Image
        src={poster}
        alt=""
        fill
        className="pointer-events-none object-cover"
        sizes="100vw"
        placeholder={typeof poster === "string" ? undefined : "blur"}
        priority={false}
      />

      {isActive ? (
        <video
          ref={videoRef}
          className={cn("absolute inset-0 h-full w-full object-cover", videoClassName)}
          poster={posterSrc}
          preload="metadata"
          controls
          controlsList="nodownload"
          aria-label={title}
        >
          {sources.map(({ src, type }) => (
            <source key={`${src}-${type ?? "mp4"}`} src={src} type={type ?? "video/mp4"} />
          ))}
          Tu navegador no soporta la reproducción de video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/45 text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Reproducir video: ${title}`}
        >
          <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 text-base font-semibold backdrop-blur-sm transition-transform hover:scale-105">
            <Play className="h-5 w-5" aria-hidden="true" />
            <span>Reproducir video</span>
          </div>
        </button>
      )}

      {isLoading && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/50 text-white" aria-live="polite">
          <RefreshCcw className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
          Cargando video…
        </div>
      )}

      {hasError && (
        <div className="absolute inset-x-4 bottom-4 z-30 flex flex-col items-center gap-3 rounded-lg bg-black/80 px-4 py-4 text-center text-sm text-white" role="alert">
          <span>No se pudo cargar el video. Intenta nuevamente más tarde o contáctanos para obtener el material.</span>
          <button
            type="button"
            onClick={() => {
              setIsActive(false)
              setHasError(false)
              setIsLoading(false)
            }}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Reintentar
          </button>
        </div>
      )}

      <span className="sr-only">{title}</span>
    </div>
  )
}
