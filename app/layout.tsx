import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Cinzel_Decorative } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/lib/locale-context'
import { CartProvider } from '@/lib/cart-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

const cinzel = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Vates Vesperion | Oraculista & Magista',
  description: 'A noite revela o que o sol não ousa dizer. Consultas oraculares com Tarot, Baralho Cigano, Sibilla e Cleromancia. Loja Vesperyx com produtos rituais.',
  keywords: ['tarot', 'oráculo', 'baralho cigano', 'sibilla', 'cleromancia', 'consulta espiritual', 'leitura de cartas'],
  authors: [{ name: 'Vates Vesperion' }],
  openGraph: {
    title: 'Vates Vesperion | Oraculista & Magista',
    description: 'A noite revela o que o sol não ousa dizer. Consultas oraculares personalizadas.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/Logos/Simple-Logo.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#3C0F2A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        <LocaleProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LocaleProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
