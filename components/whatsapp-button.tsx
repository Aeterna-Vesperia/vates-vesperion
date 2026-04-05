'use client'

import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521972592555?text=Olá! Gostaria de saber mais sobre as consultas."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'w-14 h-14 rounded-full',
        'bg-[#25D366] hover:bg-[#20BD5A]',
        'flex items-center justify-center',
        'shadow-lg shadow-[#25D366]/30',
        'transition-all duration-300',
        'hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40',
        'animate-float'
      )}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  )
}
