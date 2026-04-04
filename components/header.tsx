'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { locales, localeNames, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/servicos', label: t.nav.services },
    { href: '/em-construcao', label: t.nav.shop },
    { href: '/sobre', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/contato', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logos/Simple-Logo.png"
            alt="Vates Vesperion"
            width={50}
            height={50}
            loading="eager"
            priority
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Language Selector */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {localeNames[locale]}
              <ChevronDown className={cn('w-4 h-4 transition-transform', isLangMenuOpen && 'rotate-180')} />
            </button>
            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl py-2 min-w-[140px]">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocale(loc as Locale)
                      setIsLangMenuOpen(false)
                    }}
                    className={cn(
                      'w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors',
                      locale === loc && 'text-primary font-medium'
                    )}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-2">
              <p className="text-xs text-muted-foreground mb-3">Idioma</p>
              <div className="flex gap-3">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocale(loc as Locale)
                      setIsMobileMenuOpen(false)
                    }}
                    className={cn(
                      'px-4 py-2 text-sm rounded-lg border transition-colors',
                      locale === loc
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-border text-foreground/70 hover:border-primary/50'
                    )}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
