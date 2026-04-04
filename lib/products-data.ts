export interface Product {
  id: string
  name: string
  nameEn: string
  nameEs: string
  description: string
  descriptionEn: string
  descriptionEs: string
  price: number
  originalPrice?: number
  category: 'candles' | 'baths' | 'kits' | 'accessories'
  inStock: boolean
  featured?: boolean
  discountPercent?: number
  discountStart?: Date
  discountEnd?: Date
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
  },
  {
    id: 'vela-aromatica-70ml',
    name: 'Vela Aromática em Pote 70ml',
    nameEn: 'Aromatic Candle in Jar 70ml',
    nameEs: 'Vela Aromática en Frasco 70ml',
    description: 'Fragrâncias exclusivas para meditação e relaxamento',
    descriptionEn: 'Exclusive fragrances for meditation and relaxation',
    descriptionEs: 'Fragancias exclusivas para meditación y relajación',
    price: 35.00,
    category: 'candles',
    inStock: true,
    featured: true,
  },
  {
    id: 'banho-energetico',
    name: 'Banho Energético Premium',
    nameEn: 'Premium Energy Bath',
    nameEs: 'Baño Energético Premium',
    description: 'Saco dourado com ervas selecionadas para limpeza e proteção espiritual',
    descriptionEn: 'Golden bag with selected herbs for spiritual cleansing and protection',
    descriptionEs: 'Bolsa dorada con hierbas seleccionadas para limpieza y protección espiritual',
    price: 24.90,
    category: 'baths',
    inStock: true,
    featured: true,
  },
  {
    id: 'vela-7-dias',
    name: 'Vela de 7 Dias',
    nameEn: '7 Day Candle',
    nameEs: 'Vela de 7 Días',
    description: 'Vela votiva de longa duração para trabalhos contínuos',
    descriptionEn: 'Long-lasting votive candle for continuous work',
    descriptionEs: 'Vela votiva de larga duración para trabajos continuos',
    price: 22.00,
    category: 'candles',
    inStock: true,
  },
  {
    id: 'kit-limpeza-espiritual',
    name: 'Kit Limpeza Espiritual',
    nameEn: 'Spiritual Cleansing Kit',
    nameEs: 'Kit Limpieza Espiritual',
    description: 'Conjunto completo com vela, banho e incenso para purificação',
    descriptionEn: 'Complete set with candle, bath, and incense for purification',
    descriptionEs: 'Conjunto completo con vela, baño e incienso para purificación',
    price: 59.90,
    category: 'kits',
    inStock: true,
  },
  {
    id: 'banho-prosperidade',
    name: 'Banho da Prosperidade',
    nameEn: 'Prosperity Bath',
    nameEs: 'Baño de la Prosperidad',
    description: 'Ervas e essências para atrair abundância e sucesso',
    descriptionEn: 'Herbs and essences to attract abundance and success',
    descriptionEs: 'Hierbas y esencias para atraer abundancia y éxito',
    price: 27.90,
    category: 'baths',
    inStock: true,
  },
  {
    id: 'banho-amor',
    name: 'Banho do Amor',
    nameEn: 'Love Bath',
    nameEs: 'Baño del Amor',
    description: 'Preparado especial para atrair e fortalecer relacionamentos',
    descriptionEn: 'Special preparation to attract and strengthen relationships',
    descriptionEs: 'Preparación especial para atraer y fortalecer relaciones',
    price: 27.90,
    category: 'baths',
    inStock: true,
  },
]

export const categories = [
  { id: 'all', name: 'Todos', nameEn: 'All', nameEs: 'Todos' },
  { id: 'candles', name: 'Velas', nameEn: 'Candles', nameEs: 'Velas' },
  { id: 'baths', name: 'Banhos', nameEn: 'Baths', nameEs: 'Baños' },
  { id: 'kits', name: 'Kits', nameEn: 'Kits', nameEs: 'Kits' },
  { id: 'accessories', name: 'Acessórios', nameEn: 'Accessories', nameEs: 'Accesorios' },
]
