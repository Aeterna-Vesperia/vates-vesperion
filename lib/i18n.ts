export const locales = ['pt', 'en', 'es'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'pt'

export const localeNames: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español'
}

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      shop: 'Loja Vesperyx',
      about: 'Sobre Mim',
      blog: 'Blog',
      contact: 'Contato'
    },
    hero: {
      title: 'VATES VESPERION',
      subtitle: 'A noite revela o que o sol não ousa dizer',
      cta: 'AGENDAR CONSULTA',
      ctaSecondary: 'Conhecer a Loja Vesperyx'
    },
    services: {
      title: 'Serviços em Destaque',
      viewAll: 'Ver todos os serviços',
      tarot: 'Tarot',
      tarotDesc: 'Leituras profundas com o tradicional Tarot de Marselha e Rider-Waite',
      cigano: 'Baralho Cigano',
      ciganoDesc: 'Respostas diretas e objetivas através da sabedoria cigana',
      sibilla: 'Sibilla',
      sibillaDesc: 'Oráculo italiano para questões do cotidiano e relacionamentos',
      cleromancia: 'Cleromancia',
      cleromanciaDesc: 'Leitura através de dados sagrados e sortes divinatórias'
    },
    testimonials: {
      title: 'O que meus clientes dizem'
    },
    shop: {
      title: 'Loja Vesperyx',
      subtitle: 'Produtos rituais selecionados',
      viewAll: 'Ver toda a loja',
      addToCart: 'Adicionar ao carrinho'
    },
    cta: {
      title: 'Pronto para revelar seu destino?',
      subtitle: 'Agende sua consulta e descubra o que os oráculos têm a revelar sobre seu caminho',
      button: 'Agendar Consulta'
    },
    footer: {
      quickLinks: 'Links Rápidos',
      contact: 'Contato & Redes',
      payment: 'Formas de Pagamento',
      copyright: '© 2024 Vates Vesperion. Todos os direitos reservados.'
    },
    servicesPage: {
      hero: 'Serviços Oraculares',
      heroSubtitle: 'Descubra os mistérios que aguardam por você',
      filters: {
        all: 'Todos',
        readings: 'Leituras',
        spells: 'Feitiços & Rituais',
        quick: 'Respostas Rápidas',
        special: 'Tiragens Especiais'
      },
      quickAnswers: 'Respostas Rápidas',
      fullConsultation: 'Consulta Completa',
      specialReadings: 'Tiragens Especiais',
      categories: {
        love: 'Amor',
        relations: 'Relações',
        financial: 'Financeiro & Carreira',
        planning: 'Planejamento',
        direction: 'Direcionamento',
        depth: 'Aprofundamento'
      },
      oracles: 'Meus Oráculos',
      howItWorks: 'Como funciona uma consulta',
      faq: 'Perguntas Frequentes',
      book: 'Agendar'
    },
    shopPage: {
      hero: 'Loja Vesperyx',
      heroSubtitle: 'Produtos ritualísticos para sua prática espiritual',
      filters: 'Filtros',
      search: 'Buscar produtos...',
      cart: 'Carrinho',
      emptyCart: 'Seu carrinho está vazio',
      total: 'Total',
      checkout: 'Finalizar Compra'
    },
    aboutPage: {
      title: 'Sobre Mim',
      mission: 'Minha Missão'
    },
    contactPage: {
      title: 'Contato',
      subtitle: 'Entre em contato para agendar sua consulta ou tirar dúvidas',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      whatsapp: 'Falar pelo WhatsApp'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      shop: 'Vesperyx Shop',
      about: 'About Me',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      title: 'VATES VESPERION',
      subtitle: 'The night reveals what the sun dares not speak',
      cta: 'BOOK CONSULTATION',
      ctaSecondary: 'Explore Vesperyx Shop'
    },
    services: {
      title: 'Featured Services',
      viewAll: 'View all services',
      tarot: 'Tarot',
      tarotDesc: 'Deep readings with traditional Marseille and Rider-Waite Tarot',
      cigano: 'Gypsy Cards',
      ciganoDesc: 'Direct and objective answers through gypsy wisdom',
      sibilla: 'Sibilla',
      sibillaDesc: 'Italian oracle for everyday questions and relationships',
      cleromancia: 'Cleromancy',
      cleromanciaDesc: 'Reading through sacred dice and divinatory lots'
    },
    testimonials: {
      title: 'What my clients say'
    },
    shop: {
      title: 'Vesperyx Shop',
      subtitle: 'Selected ritual products',
      viewAll: 'View entire shop',
      addToCart: 'Add to cart'
    },
    cta: {
      title: 'Ready to reveal your destiny?',
      subtitle: 'Book your consultation and discover what the oracles have to reveal about your path',
      button: 'Book Consultation'
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact & Social',
      payment: 'Payment Methods',
      copyright: '© 2024 Vates Vesperion. All rights reserved.'
    },
    servicesPage: {
      hero: 'Oracle Services',
      heroSubtitle: 'Discover the mysteries that await you',
      filters: {
        all: 'All',
        readings: 'Readings',
        spells: 'Spells & Rituals',
        quick: 'Quick Answers',
        special: 'Special Readings'
      },
      quickAnswers: 'Quick Answers',
      fullConsultation: 'Full Consultation',
      specialReadings: 'Special Readings',
      categories: {
        love: 'Love',
        relations: 'Relations',
        financial: 'Financial & Career',
        planning: 'Planning',
        direction: 'Direction',
        depth: 'In-Depth'
      },
      oracles: 'My Oracles',
      howItWorks: 'How a consultation works',
      faq: 'Frequently Asked Questions',
      book: 'Book'
    },
    shopPage: {
      hero: 'Vesperyx Shop',
      heroSubtitle: 'Ritual products for your spiritual practice',
      filters: 'Filters',
      search: 'Search products...',
      cart: 'Cart',
      emptyCart: 'Your cart is empty',
      total: 'Total',
      checkout: 'Checkout'
    },
    aboutPage: {
      title: 'About Me',
      mission: 'My Mission'
    },
    contactPage: {
      title: 'Contact',
      subtitle: 'Get in touch to book your consultation or ask questions',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      whatsapp: 'Chat on WhatsApp'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      shop: 'Tienda Vesperyx',
      about: 'Sobre Mí',
      blog: 'Blog',
      contact: 'Contacto'
    },
    hero: {
      title: 'VATES VESPERION',
      subtitle: 'La noche revela lo que el sol no se atreve a decir',
      cta: 'AGENDAR CONSULTA',
      ctaSecondary: 'Conocer la Tienda Vesperyx'
    },
    services: {
      title: 'Servicios Destacados',
      viewAll: 'Ver todos los servicios',
      tarot: 'Tarot',
      tarotDesc: 'Lecturas profundas con el tradicional Tarot de Marsella y Rider-Waite',
      cigano: 'Baraja Gitana',
      ciganoDesc: 'Respuestas directas y objetivas a través de la sabiduría gitana',
      sibilla: 'Sibilla',
      sibillaDesc: 'Oráculo italiano para cuestiones cotidianas y relaciones',
      cleromancia: 'Cleromancia',
      cleromanciaDesc: 'Lectura a través de dados sagrados y suertes adivinatorias'
    },
    testimonials: {
      title: 'Lo que dicen mis clientes'
    },
    shop: {
      title: 'Tienda Vesperyx',
      subtitle: 'Productos rituales seleccionados',
      viewAll: 'Ver toda la tienda',
      addToCart: 'Añadir al carrito'
    },
    cta: {
      title: '¿Listo para revelar tu destino?',
      subtitle: 'Agenda tu consulta y descubre lo que los oráculos tienen que revelar sobre tu camino',
      button: 'Agendar Consulta'
    },
    footer: {
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto y Redes',
      payment: 'Formas de Pago',
      copyright: '© 2024 Vates Vesperion. Todos los derechos reservados.'
    },
    servicesPage: {
      hero: 'Servicios Oraculares',
      heroSubtitle: 'Descubre los misterios que te esperan',
      filters: {
        all: 'Todos',
        readings: 'Lecturas',
        spells: 'Hechizos y Rituales',
        quick: 'Respuestas Rápidas',
        special: 'Tiradas Especiales'
      },
      quickAnswers: 'Respuestas Rápidas',
      fullConsultation: 'Consulta Completa',
      specialReadings: 'Tiradas Especiales',
      categories: {
        love: 'Amor',
        relations: 'Relaciones',
        financial: 'Financiero y Carrera',
        planning: 'Planificación',
        direction: 'Dirección',
        depth: 'Profundización'
      },
      oracles: 'Mis Oráculos',
      howItWorks: 'Cómo funciona una consulta',
      faq: 'Preguntas Frecuentes',
      book: 'Agendar'
    },
    shopPage: {
      hero: 'Tienda Vesperyx',
      heroSubtitle: 'Productos rituales para tu práctica espiritual',
      filters: 'Filtros',
      search: 'Buscar productos...',
      cart: 'Carrito',
      emptyCart: 'Tu carrito está vacío',
      total: 'Total',
      checkout: 'Finalizar Compra'
    },
    aboutPage: {
      title: 'Sobre Mí',
      mission: 'Mi Misión'
    },
    contactPage: {
      title: 'Contacto',
      subtitle: 'Ponte en contacto para agendar tu consulta o hacer preguntas',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      whatsapp: 'Hablar por WhatsApp'
    }
  }
} as const

export type TranslationKeys = typeof translations.pt

export function getTranslation(locale: Locale) {
  return translations[locale]
}
