'use client'

import { MainLayout } from '@/components/main-layout'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ShopPreviewSection } from '@/components/home/shop-preview-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* <ShopPreviewSection /> */}
      <CTASection />
    </MainLayout>
  )
}
