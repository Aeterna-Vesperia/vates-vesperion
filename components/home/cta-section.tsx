'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale } from '@/lib/locale-context'
import { Sparkles, ArrowRight } from 'lucide-react'

export function CTASection() {
  const { t } = useLocale()

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background-secondary to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
            <div className="mb-8 flex justify-center">
            <Image
              src="/Logos/Simple-Logo.png"
              alt="Vates Vesperion"
              width={80}
              height={80}
              className="w-16 h-16 opacity-80"
            />
            </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t.cta.title}
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          {/* CTA Button */}
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-10 py-5 rounded-lg font-semibold text-base tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 group animate-glow"
          >
            <Sparkles className="w-5 h-5" />
            {t.cta.button}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Decorative line */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-linear-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-16 h-px bg-linear-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
