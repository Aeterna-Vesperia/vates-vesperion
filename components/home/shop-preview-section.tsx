'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { ShoppingBag, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const products = [
  {
    id: 1,
    name: 'Vela Ritualística Individual',
    description: '18cm - vestida com ervas',
    price: 17.90,
    image: '/images/products/vela-individual.jpg',
  },
  {
    id: 2,
    name: 'Duo Ritualístico',
    description: 'Kit com 2 velas',
    price: 29.90,
    image: '/images/products/duo-ritualistico.jpg',
  },
  {
    id: 3,
    name: 'Vela Aromática em Pote',
    description: '70ml - fragrâncias exclusivas',
    price: 35.00,
    image: '/images/products/vela-aromatica.jpg',
  },
  {
    id: 4,
    name: 'Banho Energético Premium',
    description: 'Saco dourado especial',
    price: 24.90,
    image: '/images/products/banho-energetico.jpg',
  },
]

export function ShopPreviewSection() {
  const { t } = useLocale()

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.shop.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            {t.shop.subtitle}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/loja/${product.id}`}
              className={cn(
                'group bg-card/50 backdrop-blur-sm border border-border/30 rounded-xl overflow-hidden',
                'transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
              )}
            >
              {/* Product Image */}
              <div className="aspect-square relative bg-background-secondary overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-primary/30" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-primary/60 text-sm group-hover:text-primary transition-colors">
                    Ver mais
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/loja"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
          >
            {t.shop.viewAll}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
