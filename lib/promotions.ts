export interface PromotionItem {
  id: string
  discountPercent: number
}

export interface Promotion {
  id: string
  name: string
  nameEn: string
  nameEs: string
  description: string
  descriptionEn: string
  descriptionEs: string
  startDate: Date
  endDate: Date
  isActive: boolean
  items: PromotionItem[]
}

/**
 * Promoções ativas
 * Adicione novas promoções aqui conforme necessário
 */
export const promotions: Promotion[] = [
  {
    id: 'pascoa-2026',
    name: 'Promoção de Páscoa',
    nameEn: 'Easter Promotion',
    nameEs: 'Promoción de Pascua',
    description: 'Descontos de 20% em consultas oraculares e tiragens especiais',
    descriptionEn: '20% discount on oracle consultations and special readings',
    descriptionEs: 'Descuento del 20% en consultas oraculares y tiradas especiales',
    startDate: new Date('2026-04-05'),
    endDate: new Date('2026-04-25'),
    isActive: true,
    items: [
      // Quick Questions
      { id: 'pergunta-objetiva', discountPercent: 17 },
      { id: 'pergunta-detalhada', discountPercent: 20 },
      
      // Full Consultations
      { id: 'consulta-30min', discountPercent: 20 },
      { id: 'consulta-45min', discountPercent: 20 },
      { id: 'consulta-60min', discountPercent: 20 },
      
      // Special Readings - Love
      { id: 'templo-afrodite', discountPercent: 20 },
      { id: 'aurora-coracao', discountPercent: 20 },
      { id: 'grande-mapa-amor', discountPercent: 20 },
      { id: 'despertar-amor', discountPercent: 20 },
      { id: 'ficar-partir', discountPercent: 20 },
      { id: 'ponte-almas', discountPercent: 20 },
      
      // Special Readings - Relations
      { id: 'espelho-confianca', discountPercent: 20 },
      
      // Special Readings - Financial
      { id: 'portal-novo-ciclo', discountPercent: 20 },
      { id: 'despertar-vocacao', discountPercent: 20 },
      { id: 'salto-empreendedor', discountPercent: 20 },
      { id: 'bussola-empreendedor', discountPercent: 20 },
      { id: 'caminho-fortuna', discountPercent: 20 },
      
      // Special Readings - Planning
      { id: 'bussola-semanal', discountPercent: 20 },
      { id: 'bussola-mensal', discountPercent: 20 },
      
      // Special Readings - Direction
      { id: 'mandala-vida', discountPercent: 20 },
      
      // Special Readings - Depth
      { id: 'cruz-celta', discountPercent: 20 },
      { id: 'ferradura', discountPercent: 20 },
    ],
  },
  
  // Adicione novas promoções aqui
]

/**
 * Utilitário: obter desconto ativo para um produto/serviço
 */
export function getActiveDiscount(itemId: string): number | null {
  const now = new Date()
  
  for (const promotion of promotions) {
    if (!promotion.isActive) continue
    if (now < promotion.startDate || now > promotion.endDate) continue
    
    const item = promotion.items.find(i => i.id === itemId)
    if (item) {
      return item.discountPercent
    }
  }
  
  return null
}

/**
 * Utilitário: arredondar para charm price (.99)
 * 4.97 -> 4.99
 * 62.39 -> 62.99
 */
export function roundToCharmPrice(price: number): number {
  return Math.floor(price) + 0.99
}

/**
 * Utilitário: calcular preço com desconto e arredondar para charm price (.99)
 */
export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercent: number
): number {
  const discounted = (originalPrice * (100 - discountPercent)) / 100
  return roundToCharmPrice(discounted)
}