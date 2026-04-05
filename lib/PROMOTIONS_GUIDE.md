# Sistema de Promoções - Guia

## Visão Geral

O sistema de promoções foi refatorado para um arquivo separado (`lib/promotions.ts`). Agora você pode:

- **Adicionar promoções facilmente** sem modificar as estruturas de dados
- **Gerenciar descontos por porcentagem** de forma centralizada
- **Ativar/desativar promoções** com um simples booleano
- **Definir períodos** de início e fim das promoções

## Como Adicionar uma Nova Promoção

### Passo 1: Editar `lib/promotions.ts`

Adicione uma nova promoção ao array `promotions`:

```typescript
{
  id: 'pascoa-2026',
  name: 'Promoção de Páscoa',
  nameEn: 'Easter Promotion',
  nameEs: 'Promoción de Pascua',
  description: 'Descontos especiais para a Páscoa',
  descriptionEn: 'Special discounts for Easter',
  descriptionEs: 'Descuentos especiales para Pascua',
  startDate: new Date('2026-04-01'),
  endDate: new Date('2026-04-20'),
  isActive: true,
  items: [
    { id: 'vela-individual', discountPercent: 15 },
    { id: 'duo-ritualistico', discountPercent: 20 },
    { id: 'banho-energetico', discountPercent: 25 },
  ],
}
```

## Como Usar no Frontend

### Obter Desconto Ativo

```typescript
import { getActiveDiscount } from '@/lib/promotions'

const discount = getActiveDiscount('vela-individual') // retorna 17 ou null
```

### Calcular Preço com Desconto

```typescript
import { calculateDiscountedPrice, getActiveDiscount } from '@/lib/promotions'

const originalPrice = 29.99
const discount = getActiveDiscount('templo-afrodite') // 20

if (discount) {
  const discountedPrice = calculateDiscountedPrice(originalPrice, discount)
  console.log(`Preço original: ${originalPrice}`)
  console.log(`Desconto: ${discount}%`)
  console.log(`Novo preço: ${discountedPrice}`)
}
```

## Campos da Promoção

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | ID único da promoção |
| `name` | string | Nome em português |
| `nameEn` | string | Nome em inglês |
| `nameEs` | string | Nome em espanhol |
| `description` | string | Descrição em português |
| `descriptionEn` | string | Descrição em inglês |
| `descriptionEs` | string | Descrição em espanhol |
| `startDate` | Date | Data de início |
| `endDate` | Date | Data de fim |
| `isActive` | boolean | Ativa/desativa a promoção |
| `items` | PromotionItem[] | Array com itens com desconto |

## Exemplo Prático: Promoção Sexta-Feira 13

A promoção de exemplo inclui descontos em serviços específicos:

```typescript
{
  id: 'sexta-feira-13',
  startDate: new Date('2026-04-01'),
  endDate: new Date('2026-04-13'),
  isActive: true,
  items: [
    { id: 'pergunta-objetiva', discountPercent: 17 },
    { id: 'pergunta-detalhada', discountPercent: 20 },
    { id: 'templo-afrodite', discountPercent: 20 },
    // ... mais itens
  ],
}
```

## Estrutura Alinhada

- **Services** (`lib/services-data.ts`): Apenas preços base, sem dados de desconto
- **Products** (`lib/products-data.ts`): Apenas preços base, sem dados de desconto
- **Promotions** (`lib/promotions.ts`): Gerencia todos os descontos de forma centralizada

Isso facilita manutenção e evita duplicação de dados!
