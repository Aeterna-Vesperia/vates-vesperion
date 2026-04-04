'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle, Mail, Youtube } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
  const { t } = useLocale()

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/servicos', label: t.nav.services },
    { href: '/loja', label: t.nav.shop },
    { href: '/sobre', label: t.nav.about },
    { href: '/contato', label: t.nav.contact },
  ]

  return (
    <footer className="bg-background-secondary border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
            <div className="lg:col-span-1">
            <Image
              src="/Logos/Full-Logo.png"
              alt="Vates Vesperion"
              width={200}
              height={100}
              className="w-48 mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              A noite revela o que o sol não ousa dizer. Consultas oraculares personalizadas para guiar seu caminho.
            </p>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5521972592555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vatesvesperion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-5 h-5" />
                  @vatesvesperion
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@vatesvesperion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@vatesvesperion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:vatesvesperion@proton.me"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5" />
                  vatesvesperion@proton.me
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-6">
              {t.footer.payment}
            </h3>
            <div className="flex flex-wrap gap-3">
              {/* Pix */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Pix</span>
              </div>
              {/* Visa */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Visa</span>
              </div>
              {/* Mastercard */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Mastercard</span>
              </div>
              {/* Elo */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Elo</span>
              </div>
              {/* Hipercard */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Hipercard</span>
              </div>
              {/* Amex */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Amex</span>
              </div>
              {/* Boleto */}
              <div className="flex items-center justify-center bg-card/50 px-4 py-3 rounded-lg border border-border/30">
                <span className="text-foreground font-bold text-sm">Boleto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
