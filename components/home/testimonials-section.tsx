'use client'

import { useLocale } from '@/lib/locale-context'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Maria Clara',
    avatar: 'MC',
    rating: 5,
    text: 'A consulta com Vates mudou completamente minha perspectiva. As mensagens foram incrivelmente precisas e me ajudaram a tomar decisões importantes.',
  },
  {
    name: 'João Pedro',
    avatar: 'JP',
    rating: 5,
    text: 'Profissionalismo e sensibilidade únicos. A leitura do Tarot trouxe clareza para situações que eu não conseguia entender há anos.',
  },
  {
    name: 'Ana Beatriz',
    avatar: 'AB',
    rating: 5,
    text: 'Experiência transformadora! O baralho cigano revelou caminhos que eu nem imaginava. Recomendo a todos que buscam orientação.',
  },
]

export function TestimonialsSection() {
  const { t } = useLocale()

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 rotate-180">
        <Quote className="w-32 h-32 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={cn(
                'bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-8',
                'transition-all duration-300 hover:border-primary/30 hover:bg-card/50'
              )}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed mb-8 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <span className="font-medium text-foreground">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
