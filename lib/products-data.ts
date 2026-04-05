export interface ProductVariant {
  id: string
  name: string
  nameEn: string
  nameEs: string
  description?: string
  descriptionEn?: string
  descriptionEs?: string
  image?: string
  priceModifier?: number
}

export interface Product {
  id: string
  name: string
  nameEn: string
  nameEs: string
  description: string
  descriptionEn: string
  descriptionEs: string
  price: number
  category: 'candles' | 'baths' | 'kits' | 'accessories'
  inStock: boolean
  featured?: boolean
  variants?: ProductVariant[]
}

export const products: Product[] = [
  {
    id: 'vela-individual',
    name: 'Vela Ritualística Individual',
    nameEn: 'Individual Ritual Candle',
    nameEs: 'Vela Ritualística Individual',
    description: '18cm - vestida com ervas sagradas selecionadas para seu propósito específico',
    descriptionEn: '18cm - dressed with sacred herbs selected for your specific purpose',
    descriptionEs: '18cm - vestida con hierbas sagradas seleccionadas para tu propósito específico',
    price: 17.90,
    category: 'candles',
    inStock: true,
    featured: true,
    variants: [
      {
        id: 'vela-protecao',
        name: 'Proteção',
        nameEn: 'Protection',
        nameEs: 'Protección',
        description: 'Vela para afastar energias negativas e criar um escudo de proteção espiritual. Use em altares ou ambientes que precisam de limpeza energética.',
        descriptionEn: 'Candle to ward off negative energies and create a spiritual protection shield. Use on altars or environments that need energetic cleansing.',
        descriptionEs: 'Vela para alejar energías negativas y crear un escudo de protección espiritual. Úsala en altares o espacios que necesitan limpieza energética.',
      },
      {
        id: 'vela-amor',
        name: 'Amor',
        nameEn: 'Love',
        nameEs: 'Amor',
        description: 'Vela carregada de energia para atrair amor verdadeiro e fortalecer relacionamentos existentes. Ideal para rituais de romance e conexão.',
        descriptionEn: 'Candle charged with energy to attract true love and strengthen existing relationships. Ideal for romance and connection rituals.',
        descriptionEs: 'Vela cargada de energía para atraer amor verdadero y fortalecer relaciones existentes. Ideal para rituales de romance y conexión.',
      },
      {
        id: 'vela-prosperidade',
        name: 'Prosperidade',
        nameEn: 'Prosperity',
        nameEs: 'Prosperidad',
        description: 'Vela para atrair abundância, sucesso e oportunidades financeiras. Use durante meditações sobre seus desejos materiais.',
        descriptionEn: 'Candle to attract abundance, success and financial opportunities. Use during meditations about your material desires.',
        descriptionEs: 'Vela para atraer abundancia, éxito y oportunidades financieras. Úsala durante meditaciones sobre tus deseos materiales.',
      },
      {
        id: 'vela-sorte',
        name: 'Sorte & Destino',
        nameEn: 'Luck & Destiny',
        nameEs: 'Suerte & Destino',
        description: 'Vela para sincronizar sua energia com as oportunidades que o universo oferece. Amplifica sua intuição e guia seu caminho.',
        descriptionEn: 'Candle to synchronize your energy with the opportunities the universe offers. Amplifies your intuition and guides your path.',
        descriptionEs: 'Vela para sincronizar tu energía con las oportunidades que el universo ofrece. Amplifica tu intuición y guía tu camino.',
      },
    ],
  },
  {
    id: 'duo-ritualistico',
    name: 'Duo Ritualístico',
    nameEn: 'Ritual Duo',
    nameEs: 'Dúo Ritualístico',
    description: 'Kit com 2 velas complementares para rituais de equilíbrio e harmonia',
    descriptionEn: 'Kit with 2 complementary candles for balance and harmony rituals',
    descriptionEs: 'Kit con 2 velas complementarias para rituales de equilibrio y armonía',
    price: 29.90,
    category: 'kits',
    inStock: true,
    featured: true,
    variants: [
      {
        id: 'duo-amor-seducao',
        name: 'Amor & Sedução',
        nameEn: 'Love & Seduction',
        nameEs: 'Amor & Seducción',
        description: 'Kit com 2 velas que trabalham juntas: uma para atrair o amor e outra para potencializar sua energia sensual. Perfeito para casais ou quem busca romance.',
        descriptionEn: 'Kit with 2 candles that work together: one to attract love and another to enhance your sensual energy. Perfect for couples or those seeking romance.',
        descriptionEs: 'Kit con 2 velas que trabajan juntas: una para atraer amor y otra para potencializar tu energía sensual. Perfecto para parejas o quienes buscan romance.',
      },
      {
        id: 'duo-protecao-prosperidade',
        name: 'Proteção & Prosperidade',
        nameEn: 'Protection & Prosperity',
        nameEs: 'Protección & Prosperidad',
        description: 'Duo estratégico: proteja seu progresso enquanto atrai oportunidades de sucesso. Ideal para empreendedores e profissionais.',
        descriptionEn: 'Strategic duo: protect your progress while attracting opportunities for success. Ideal for entrepreneurs and professionals.',
        descriptionEs: 'Dúo estratégico: protege tu progreso mientras atraes oportunidades de éxito. Ideal para emprendedores y profesionales.',
      },
      {
        id: 'duo-paz-equilibrio',
        name: 'Paz & Equilíbrio',
        nameEn: 'Peace & Balance',
        nameEs: 'Paz & Equilibrio',
        description: 'Duas velas para criar harmonia emocional e espiritual. Use quando precisar restaurar o equilíbrio em sua vida.',
        descriptionEn: 'Two candles to create emotional and spiritual harmony. Use when you need to restore balance in your life.',
        descriptionEs: 'Dos velas para crear armonía emocional y espiritual. Úsalas cuando necesites restaurar el equilibrio en tu vida.',
      },
    ],
  },
  {
    id: 'banho-energetico',
    name: 'Banho Energético',
    nameEn: 'Energy Bath',
    nameEs: 'Baño Energético',
    description: 'Ervas e essências para limpeza e renovação das energias',
    descriptionEn: 'Herbs and essences for cleansing and renewing energies',
    descriptionEs: 'Hierbas y esencias para limpieza y renovación de energías',
    price: 27.90,
    category: 'baths',
    inStock: true,
    variants: [
      {
        id: 'banho-protecao',
        name: 'Proteção & Limpeza',
        nameEn: 'Protection & Cleansing',
        nameEs: 'Protección & Limpieza',
        description: 'Banho com ervas de limpeza profunda. Recomendado após picos emocionais ou encontros drainantes. Remove bloqueios energéticos.',
        descriptionEn: 'Bath with deep cleansing herbs. Recommended after emotional peaks or draining encounters. Removes energetic blockages.',
        descriptionEs: 'Baño con hierbas de limpieza profunda. Recomendado después de picos emocionales o encuentros drenantes. Elimina bloqueos energéticos.',
      },
      {
        id: 'banho-seducao',
        name: 'Sedução & Atração',
        nameEn: 'Seduction & Attraction',
        nameEs: 'Seducción & Atracción',
        description: 'Banho para potencializar seu charme natural e atrair pessoas que vibram com sua energia. Use antes de encontros importantes.',
        descriptionEn: 'Bath to enhance your natural charm and attract people who vibrate with your energy. Use before important encounters.',
        descriptionEs: 'Baño para potencializar tu encanto natural y atraer personas que vibren con tu energía. Úsalo antes de encuentros importantes.',
      },
      {
        id: 'banho-prosperidade',
        name: 'Prosperidade & Abundância',
        nameEn: 'Prosperity & Abundance',
        nameEs: 'Prosperidad & Abundancia',
        description: 'Banho aberto para receber a energia de abundância do universo. Ideal antes de entrevistas ou momentos de decisão profissional.',
        descriptionEn: 'Open bath to receive the universe\'s abundance energy. Ideal before interviews or professional decision moments.',
        descriptionEs: 'Baño abierto para recibir la energía de abundancia del universo. Ideal antes de entrevistas o momentos de decisión profesional.',
      },
      {
        id: 'banho-paz',
        name: 'Paz & Harmonia',
        nameEn: 'Peace & Harmony',
        nameEs: 'Paz & Armonía',
        description: 'Banho tranquilizante para acalmar a mente e harmonizar corpo e espírito. Perfeito para antes de dormir ou meditação.',
        descriptionEn: 'Calming bath to soothe the mind and harmonize body and spirit. Perfect before sleep or meditation.',
        descriptionEs: 'Baño calmante para tranquilizar la mente y armonizar cuerpo y espíritu. Perfecto antes de dormir o meditación.',
      },
    ],
  },
]

export const categories = [
  { id: 'all', name: 'Todos', nameEn: 'All', nameEs: 'Todos' },
  { id: 'candles', name: 'Velas', nameEn: 'Candles', nameEs: 'Velas' },
  { id: 'baths', name: 'Banhos', nameEn: 'Baths', nameEs: 'Baños' },
  { id: 'kits', name: 'Kits', nameEn: 'Kits', nameEs: 'Kits' },
  { id: 'accessories', name: 'Acessórios', nameEn: 'Accessories', nameEs: 'Accesorios' },
]
