'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { services, oracles, faqItems, type Service } from '@/lib/services-data'
import { cn } from '@/lib/utils'
import { 
  Sparkles, 
  Clock, 
  Star, 
  Heart, 
  Users, 
  TrendingUp, 
  Calendar, 
  Compass, 
  Layers,
  ChevronDown,
  ArrowRight,
  BadgePercent
} from 'lucide-react'

const categoryIcons = {
  love: Heart,
  relations: Users,
  financial: TrendingUp,
  planning: Calendar,
  direction: Compass,
  depth: Layers,
}

const filters = ['all', 'readings', 'spells', 'quick', 'special'] as const

export default function ServicosPage() {
  const { locale, t } = useLocale()
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>('all')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const getServiceName = (service: Service) => {
    if (locale === 'en') return service.nameEn
    if (locale === 'es') return service.nameEs
    return service.name
  }

  const getServiceDesc = (service: Service) => {
    if (locale === 'en') return service.descriptionEn
    if (locale === 'es') return service.descriptionEs
    return service.description
  }

  const filteredServices = services.filter((service) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'quick') return service.category === 'quick'
    if (activeFilter === 'special') return service.category === 'special'
    if (activeFilter === 'readings') return service.category === 'consultation'
    return true
  })

  const quickServices = services.filter((s) => s.category === 'quick')
  const consultationServices = services.filter((s) => s.category === 'consultation')
  const specialServices = services.filter((s) => s.category === 'special')

  const groupedSpecialServices = {
    love: specialServices.filter((s) => s.subcategory === 'love'),
    relations: specialServices.filter((s) => s.subcategory === 'relations'),
    financial: specialServices.filter((s) => s.subcategory === 'financial'),
    planning: specialServices.filter((s) => s.subcategory === 'planning'),
    direction: specialServices.filter((s) => s.subcategory === 'direction'),
    depth: specialServices.filter((s) => s.subcategory === 'depth'),
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t.servicesPage.hero}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t.servicesPage.heroSubtitle}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border/30 sticky top-[72px] z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50'
                )}
              >
                {t.servicesPage.filters[filter]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      {(activeFilter === 'all' || activeFilter === 'quick') && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              {t.servicesPage.quickAnswers}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickServices.map((service) => (
                <div
                  key={service.id}
                  className={cn(
                    'relative bg-card/50 border border-border/30 rounded-xl p-6',
                    'transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
                  )}
                >
                  {service.isOffer && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <BadgePercent className="w-3 h-3" />
                      Oferta
                    </div>
                  )}
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {getServiceName(service)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {getServiceDesc(service)}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">
                      {formatPrice(service.price)}
                    </span>
                    <Link
                      href={`/contato?servico=${service.id}`}
                      className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      {t.servicesPage.book}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full Consultations */}
      {(activeFilter === 'all' || activeFilter === 'readings') && (
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              {t.servicesPage.fullConsultation}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationServices.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    'relative bg-card/50 border rounded-xl p-8 text-center',
                    'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1',
                    index === 1 
                      ? 'border-primary/50 shadow-lg shadow-primary/10' 
                      : 'border-border/30 hover:border-primary/50'
                  )}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {getServiceName(service)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {getServiceDesc(service)}
                  </p>
                  {service.duration && (
                    <p className="text-primary/70 text-sm mb-4 flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </p>
                  )}
                  <div className="text-primary font-bold text-3xl mb-6">
                    {formatPrice(service.price)}
                  </div>
                  <Link
                    href={`/contato?servico=${service.id}`}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-all',
                      index === 1
                        ? 'bg-gold-gradient text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
                        : 'border border-primary text-primary hover:bg-primary/10'
                    )}
                  >
                    {t.servicesPage.book}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Special Readings */}
      {(activeFilter === 'all' || activeFilter === 'special') && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-12 flex items-center gap-3">
              <Star className="w-6 h-6 text-primary" />
              {t.servicesPage.specialReadings}
            </h2>
            
            {Object.entries(groupedSpecialServices).map(([category, categoryServices]) => {
              if (categoryServices.length === 0) return null
              const Icon = categoryIcons[category as keyof typeof categoryIcons]
              const categoryKey = category as keyof typeof t.servicesPage.categories
              
              return (
                <div key={category} className="mb-12">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    {t.servicesPage.categories[categoryKey]}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categoryServices.map((service) => (
                      <div
                        key={service.id}
                        className={cn(
                          'bg-card/30 border border-border/30 rounded-lg p-5',
                          'transition-all duration-300 hover:border-primary/50 hover:bg-card/50'
                        )}
                      >
                        <h4 className="font-medium text-foreground mb-2">
                          {getServiceName(service)}
                        </h4>
                        <p className="text-muted-foreground text-xs mb-3">
                          {getServiceDesc(service)}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-bold">
                            {formatPrice(service.price)}
                          </span>
                          <Link
                            href={`/contato?servico=${service.id}`}
                            className="text-primary/70 text-xs hover:text-primary"
                          >
                            {t.servicesPage.book} &rarr;
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Oracles Section */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t.servicesPage.oracles}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {oracles.map((oracle) => (
              <div
                key={oracle.id}
                className="bg-card/30 border border-border/30 rounded-xl p-6 text-center transition-all hover:border-primary/30"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {oracle.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {locale === 'en' ? oracle.descriptionEn : locale === 'es' ? oracle.descriptionEs : oracle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            {t.servicesPage.howItWorks}
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: t.servicesPage.step1Title, desc: t.servicesPage.step1Desc },
              { step: 2, title: t.servicesPage.step2Title, desc: t.servicesPage.step2Desc },
              { step: 3, title: t.servicesPage.step3Title, desc: t.servicesPage.step3Desc },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t.servicesPage.faq}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card/30 border border-border/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-foreground font-medium hover:bg-card/50 transition-colors"
                >
                  {locale === 'en' ? item.questionEn : locale === 'es' ? item.questionEs : item.question}
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-primary transition-transform',
                      expandedFaq === index && 'rotate-180'
                    )}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-muted-foreground text-sm">
                    {locale === 'en' ? item.answerEn : locale === 'es' ? item.answerEs : item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            <Sparkles className="w-5 h-5" />
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
