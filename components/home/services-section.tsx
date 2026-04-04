'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { Sparkles, Moon, Star, Dice6, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Sparkles,
    titleKey: 'tarot' as const,
    descKey: 'tarotDesc' as const,
  },
  {
    icon: Moon,
    titleKey: 'cigano' as const,
    descKey: 'ciganoDesc' as const,
  },
  {
    icon: Star,
    titleKey: 'sibilla' as const,
    descKey: 'sibillaDesc' as const,
  },
  {
    icon: Dice6,
    titleKey: 'cleromancia' as const,
    descKey: 'cleromanciaDesc' as const,
  },
]

export function ServicesSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.titleKey}
                className={cn(
                  'group relative bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl p-8',
                  'transition-all duration-500 hover:border-primary/50 hover:bg-card/80',
                  'hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {t.services[service.titleKey]}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t.services[service.descKey]}
                </p>

                {/* Hover decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full" />
                  <div className="absolute top-6 right-8 w-1.5 h-1.5 bg-primary/60 rounded-full" />
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            {t.services.viewAll}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
