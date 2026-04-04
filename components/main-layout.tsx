'use client'

import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { WhatsAppButton } from './whatsapp-button'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
