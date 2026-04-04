'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { Sparkles, Heart, Eye, Moon, Star, ArrowRight } from 'lucide-react'

export default function SobrePage() {
  const { locale, t } = useLocale()

  const values = [
    {
      icon: Eye,
      title: 'Clareza',
      titleEn: 'Clarity',
      titleEs: 'Claridad',
      desc: 'Leituras honestas e transparentes, sem rodeios',
      descEn: 'Honest and transparent readings, without beating around the bush',
      descEs: 'Lecturas honestas y transparentes, sin rodeos',
    },
    {
      icon: Heart,
      title: 'Empatia',
      titleEn: 'Empathy',
      titleEs: 'Empatía',
      desc: 'Cada consulta é tratada com respeito e acolhimento',
      descEn: 'Every consultation is treated with respect and warmth',
      descEs: 'Cada consulta es tratada con respeto y acogida',
    },
    {
      icon: Moon,
      title: 'Confidencialidade',
      titleEn: 'Confidentiality',
      titleEs: 'Confidencialidad',
      desc: 'Sigilo absoluto em cada consulta, sua privacidade é sagrada',
      descEn: 'Absolute secrecy in every consultation, your privacy is sacred',
      descEs: 'Sigilo absoluto en cada consulta, su privacidad es sagrada',
    },
    {
      icon: Star,
      title: 'Excelência',
      titleEn: 'Excellence',
      titleEs: 'Excelencia',
      desc: 'Compromisso com a qualidade em cada atendimento',
      descEn: 'Commitment to quality in every service',
      descEs: 'Compromiso con la calidad en cada atención',
    },
  ]

  const getValueTitle = (v: typeof values[0]) => {
    if (locale === 'en') return v.titleEn
    if (locale === 'es') return v.titleEs
    return v.title
  }

  const getValueDesc = (v: typeof values[0]) => {
    if (locale === 'en') return v.descEn
    if (locale === 'es') return v.descEs
    return v.desc
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t.aboutPage.title}
          </h1>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/foto.png"
                  alt="Vates Vesperion"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -inset-8 border border-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Story */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-gold-gradient">Vates Vesperion</span>
              </h2>
              <div className="space-y-6 text-foreground/90 leading-relaxed">
                <p>
                  Desde jovem, sempre senti uma conexão profunda com o mundo invisível. As cartas 
                  chamaram minha atenção antes mesmo de entender seu verdadeiro poder. O que começou 
                  como curiosidade se transformou em uma vocação que guia minha vida há mais de uma década.
                </p>
                <p>
                  Formado em diferentes tradições oraculares, trabalho com Tarot, Baralho Cigano 
                  (Lenormand), Sibilla e Cleromancia. Cada sistema tem sua própria linguagem, 
                  e é meu papel traduzir essas mensagens para que você possa compreender os 
                  caminhos que se abrem à sua frente.
                </p>
                <p>
                  Acredito que os oráculos não determinam o futuro — eles iluminam possibilidades. 
                  Você sempre mantém o poder de escolha. Meu trabalho é oferecer clareza para 
                  que suas decisões sejam mais conscientes e alinhadas com seu verdadeiro propósito.
                </p>
                <p className="text-muted-foreground italic">
                  &quot;A noite revela o que o sol não ousa dizer.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.aboutPage.mission}
            </h2>
            <p className="text-foreground/90 text-lg leading-relaxed mb-8">
              Minha missão é democratizar o acesso aos oráculos, oferecendo consultas de 
              alta qualidade com respeito às tradições ancestrais. Acredito que todos 
              merecem ter acesso a orientação espiritual genuína, independente de onde 
              estejam ou qual seja sua história.
            </p>
            <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Meus Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-card/30 border border-border/30 rounded-xl p-6 text-center transition-all hover:border-primary/30"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {getValueTitle(value)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {getValueDesc(value)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background-secondary">
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
