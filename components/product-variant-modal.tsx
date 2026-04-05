'use client'

import { useState } from 'react'
import { type Product, type ProductVariant } from '@/lib/products-data'
import { useLocale } from '@/lib/locale-context'
import { useCart } from '@/lib/cart-context'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface ProductVariantModalProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
  preselectedVariant?: ProductVariant
}

export function ProductVariantModal({
  product,
  open,
  onOpenChange,
  preselectedVariant,
}: ProductVariantModalProps) {
  const { locale, t } = useLocale()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    preselectedVariant || null
  )

  const getVariantName = (variant: ProductVariant) => {
    if (locale === 'en') return variant.nameEn
    if (locale === 'es') return variant.nameEs
    return variant.name
  }

  const getProductName = (p: Product) => {
    if (locale === 'en') return p.nameEn
    if (locale === 'es') return p.nameEs
    return p.name
  }

  const handleAddToCart = () => {
    if (selectedVariant) {
      addItem(product, selectedVariant)
      onOpenChange(false)
      setSelectedVariant(null)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-serif">
            {getProductName(product)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {locale === 'en'
              ? 'Select a variation:'
              : locale === 'es'
                ? 'Selecciona una variación:'
                : 'Selecione uma variação:'}
          </p>

          <div className="space-y-2">
            {product.variants?.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left flex items-center justify-between ${
                  selectedVariant?.id === variant.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                <span className="font-medium">{getVariantName(variant)}</span>
                {selectedVariant?.id === variant.id && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t">
            <Button
              onClick={handleAddToCart}
              disabled={!selectedVariant}
              className="w-full"
            >
              {locale === 'en'
                ? 'Add to Cart'
                : locale === 'es'
                  ? 'Agregar al carrito'
                  : 'Adicionar ao carrinho'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
