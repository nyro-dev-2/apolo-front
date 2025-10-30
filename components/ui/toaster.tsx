'use client'

import { CheckCircle2, XCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const variant = props.variant ?? 'default'
        const iconWrapperClasses =
          variant === 'destructive'
            ? 'bg-destructive-foreground/15 text-destructive-foreground'
            : 'bg-white/15 text-primary-foreground'
        return (
          <Toast key={id} {...props}>
            <div className="flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left">
              <span className={cn('flex h-12 w-12 items-center justify-center rounded-full', iconWrapperClasses)}>
                {variant === 'destructive' ? (
                  <XCircle className="h-6 w-6" />
                ) : (
                  <CheckCircle2 className="h-6 w-6" />
                )}
              </span>
              <div className="flex-1 space-y-1">
                {title && <ToastTitle className="text-lg font-semibold">{title}</ToastTitle>}
                {description && <ToastDescription className="text-pretty text-sm leading-relaxed">{description}</ToastDescription>}
              </div>
            </div>
            {action ? <div className="sm:ml-4">{action}</div> : null}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
