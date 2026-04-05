'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { useCart } from '@/lib/cart-context'
import { type Product, type ProductVariant } from '@/lib/products-data'
import { ProductVariantModal } from '@/components/product-variant-modal'
import { getActiveDiscount, calculateDiscountedPrice } from '@/lib/promotions'
import {
  ChevronLeft,
  ShoppingCart,
  Check,
  Sparkles
} from 'lucide-react'

interface ProductDetailClientProps {
  product: Product
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { locale, t } = useLocale()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [variantModalOpen, setVariantModalOpen] = useState(false)

  const getProductName = (p: typeof product) => {
    if (locale === 'en') return p.nameEn
    if (locale === 'es') return p.nameEs
    return p.name
  }

  const getProductDesc = (p: typeof product) => {
    if (locale === 'en') return p.descriptionEn
    if (locale === 'es') return p.descriptionEs
    return p.description
  }

  const getVariantName = (variant: ProductVariant) => {
    if (locale === 'en') return variant.nameEn
    if (locale === 'es') return variant.nameEs
    return variant.name
  }

  const getVariantDesc = (variant: ProductVariant) => {
    if (locale === 'en') return variant.descriptionEn
    if (locale === 'es') return variant.descriptionEs
    return variant.description
  }

  const currentVariant = selectedVariant || product.variants?.[0]

  const { finalPrice, originalPrice, discountPercent } = getActiveDiscount(product.id)
    ? {
        finalPrice: calculateDiscountedPrice(
          product.price + (currentVariant?.priceModifier || 0),
          getActiveDiscount(product.id) || 0
        ),
        originalPrice: product.price + (currentVariant?.priceModifier || 0),
        discountPercent: getActiveDiscount(product.id),
      }
    : {
        finalPrice: product.price + (currentVariant?.priceModifier || 0),
        originalPrice: null,
        discountPercent: null,
      }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  return (
    <>
      {/* Header Navigation */}
      <section className="pt-20 pb-8 border-b border-border/30">
        <div className="container mx-auto px-4">
          <Link
            href="/loja"
            className="text-primary hover:underline flex items-center gap-2 text-sm font-medium mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            {locale === 'en' ? 'Back to store' : locale === 'es' ? 'Volver a tienda' : 'Voltar à loja'}
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image & Variants */}
            <div className="space-y-8">
              {/* Main Image */}
              <div className="aspect-square bg-background-secondary rounded-xl overflow-hidden flex items-center justify-center border border-border/30">
                <div className="text-center">
                  {currentVariant?.image ? (
                    <img
                      src={currentVariant.image}
                      alt={getVariantName(currentVariant)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Sparkles className="w-24 h-24 text-primary/20 mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {locale === 'en'
                          ? 'Product image'
                          : locale === 'es'
                            ? 'Imagen del producto'
                            : 'Imagem do produto'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">
                    {locale === 'en'
                      ? 'Choose a variation'
                      : locale === 'es'
                        ? 'Elige una variación'
                        : 'Escolha uma variação'}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          currentVariant?.id === variant.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border/50 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="font-medium text-sm text-foreground">
                              {getVariantName(variant)}
                            </p>
                            {variant.priceModifier ? (
                              <p className="text-xs text-primary mt-1">
                                +{formatPrice(variant.priceModifier)}
                              </p>
                            ) : null}
                          </div>
                          {currentVariant?.id === variant.id && (
                            <Check className="w-5 h-5 text-primary shrink-0" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Title & Rating */}
              <div>
                <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
                  {getProductName(product)}
                </h1>
                {currentVariant && (
                  <p className="text-lg text-primary font-medium">
                    {getVariantName(currentVariant)}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="space-y-2">
                {originalPrice && (
                  <p className="text-lg text-muted-foreground/60 line-through">
                    {formatPrice(originalPrice)}
                  </p>
                )}
                <p className="text-4xl font-bold text-primary">
                  {formatPrice(finalPrice)}
                </p>
                {discountPercent && (
                  <p className="text-sm text-primary font-medium">
                    {locale === 'en'
                      ? `Save ${discountPercent}%`
                      : locale === 'es'
                        ? `Ahorra ${discountPercent}%`
                        : `Economize ${discountPercent}%`}
                  </p>
                )}
              </div>

              {/* General Description */}
              <div className="space-y-4 p-6 bg-card/30 rounded-lg border border-border/30">
                <h3 className="font-semibold text-foreground">
                  {locale === 'en'
                    ? 'About this product'
                    : locale === 'es'
                      ? 'Sobre este producto'
                      : 'Sobre este produto'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {getProductDesc(product)}
                </p>
              </div>

              {/* Variant Description */}
              {currentVariant?.description && (
                <div className="space-y-4 p-6 bg-background-secondary rounded-lg border border-border/30">
                  <h3 className="font-semibold text-foreground">
                    {locale === 'en'
                      ? `About ${getVariantName(currentVariant)}`
                      : locale === 'es'
                        ? `Sobre ${getVariantName(currentVariant)}`
                        : `Sobre ${getVariantName(currentVariant)}`}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {getVariantDesc(currentVariant)}
                  </p>
                </div>
              )}

              {/* Stock Status */}
              <div>
                {product.inStock ? (
                  <p className="text-green-600 font-medium flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    {locale === 'en'
                      ? 'In stock'
                      : locale === 'es'
                        ? 'Disponible'
                        : 'Em estoque'}
                  </p>
                ) : (
                  <p className="text-destructive font-medium">
                    {locale === 'en'
                      ? 'Out of stock'
                      : locale === 'es'
                        ? 'Agotado'
                        : 'Fora de estoque'}
                  </p>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => setVariantModalOpen(true)}
                disabled={!product.inStock}
                className="w-full bg-gold-gradient text-primary-foreground py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                {locale === 'en'
                  ? 'Add to Cart'
                  : locale === 'es'
                    ? 'Agregar al carrito'
                    : 'Adicionar ao carrinho'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variant Modal */}
      {product.variants && (
        <ProductVariantModal
          product={product}
          open={variantModalOpen}
          onOpenChange={(open) => {
            setVariantModalOpen(open)
          }}
          preselectedVariant={selectedVariant || undefined}
        />
      )}
    </>
  )
}
