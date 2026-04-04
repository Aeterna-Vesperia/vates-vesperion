'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mystical twilight background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Symbol */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-gbEjoGmlpyvX4xH4uf6i79xIR6C5fJ.png"
            alt="Vates Vesperion Symbol"
            width={100}
            height={100}
            className="w-20 h-20 md:w-24 md:h-24 animate-float"
          />
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] text-gold-gradient mb-6">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground/90 italic mb-12 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contato"
            className="group relative bg-gold-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/loja"
            className="group border border-primary/50 text-foreground px-8 py-4 rounded-lg font-medium text-sm tracking-wide transition-all duration-300 hover:border-primary hover:bg-primary/10 flex items-center gap-2"
          >
            {t.hero.ctaSecondary}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* Scroll indicator - positioned relative to section */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-float" />
        </div>
      </div>
    </section>
  )
}
