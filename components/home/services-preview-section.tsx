'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { Sparkles, ArrowRight, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const featuredServices = [
  {
    id: 'pergunta-detalhada',
    name: 'Pergunta Detalhada',
    nameEn: 'Detailed Question',
    nameEs: 'Pregunta Detallada',
    description: 'Leitura aprofundada para perguntas abertas e temas complexos',
    descriptionEn: 'In-depth reading for open questions and complex themes',
    descriptionEs: 'Lectura profunda para preguntas abiertas y temas complejos',
    price: 9.99,
    badge: 'Rápida',
    badgeEn: 'Quick',
    badgeEs: 'Rápida',
    category: 'Quick',
  },
  {
    id: 'consulta-60min',
    name: 'Consulta Completa 60min',
    nameEn: 'Full Consultation 60min',
    nameEs: 'Consulta Completa 60min',
    description: 'Sessão extensa para questões complexas',
    descriptionEn: 'Extended session for complex questions',
    descriptionEs: 'Sesión extendida para cuestiones complejas',
    price: 99.99,
    badge: 'Completa',
    badgeEn: 'Complete',
    badgeEs: 'Completa',
    category: 'Consultation',
  },
  {
    id: 'templo-afrodite',
    name: 'Templo de Afrodite (Casais)',
    nameEn: 'Temple of Aphrodite (Couples)',
    nameEs: 'Templo de Afrodita (Parejas)',
    description: 'Análise profunda do relacionamento atual',
    descriptionEn: 'Deep analysis of current relationship',
    descriptionEs: 'Análisis profundo de la relación actual',
    price: 29.99,
    badge: 'Amor',
    badgeEn: 'Love',
    badgeEs: 'Amor',
    category: 'Love',
  },
  {
    id: 'caminho-fortuna',
    name: 'Caminho da Fortuna',
    nameEn: 'Path of Fortune',
    nameEs: 'Camino de la Fortuna',
    description: 'Prosperidade e abundância financeira',
    descriptionEn: 'Prosperity and financial abundance',
    descriptionEs: 'Prosperidad y abundancia financiera',
    price: 49.99,
    badge: 'Finanças',
    badgeEn: 'Financial',
    badgeEs: 'Finanzas',
    category: 'Financial',
  },
]

export function ServicesPreviewSection() {
  const { locale, t } = useLocale()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/60 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">
              {locale === 'en' ? 'Featured Readings' : locale === 'es' ? 'Lecturas Destacadas' : 'Leituras Destacadas'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {locale === 'en' ? 'Explore Our Special Readings' : locale === 'es' ? 'Explora Nuestras Lecturas Especiales' : 'Explore as Nossas Leituras Especiais'}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            {locale === 'en' 
              ? 'Deep readings designed to guide you through life\'s most important questions'
              : locale === 'es'
              ? 'Lecturas profundas diseñadas para guiarte a través de las preguntas más importantes de la vida'
              : 'Leituras profundas criadas para guiá-lo através das perguntas mais importantes da vida'}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/servicos#${service.id}`}
              className={cn(
                'group relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden',
                'transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2'
              )}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  {locale === 'en' ? service.badgeEn : service.badge}
                </span>
              </div>

              {/* Decorative icon background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon area */}
              <div className="h-32 relative bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary rounded-full blur-xl group-hover:blur-2xl transition-all" />
                </div>
                <Sparkles className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors relative z-10" />
              </div>

              {/* Service Info */}
              <div className="p-5 relative z-10">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {locale === 'en' ? service.nameEn : service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors">
                  {locale === 'en' ? service.descriptionEn : service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <div className="flex flex-col">
                    <span className="text-primary font-bold text-lg">
                      {formatPrice(service.price)}
                    </span>
                  </div>
                  <div className="text-primary/60 group-hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
          >
            {locale === 'en' ? 'View All Readings' : locale === 'es' ? 'Ver Todas Las Lecturas' : 'Ver Todas as Leituras'}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
