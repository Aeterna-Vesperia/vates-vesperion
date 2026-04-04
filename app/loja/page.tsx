'use client'

import { useState } from 'react'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { useCart } from '@/lib/cart-context'
import { products, categories, type Product } from '@/lib/products-data'
import { cn } from '@/lib/utils'
import { 
  ShoppingBag, 
  Search, 
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingCart,
  Sparkles
} from 'lucide-react'

export default function LojaPage() {
  const { locale, t } = useLocale()
  const { items, addItem, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen } = useCart()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price)
  }

  const getProductName = (product: Product) => {
    if (locale === 'en') return product.nameEn
    if (locale === 'es') return product.nameEs
    return product.name
  }

  const getProductDesc = (product: Product) => {
    if (locale === 'en') return product.descriptionEn
    if (locale === 'es') return product.descriptionEs
    return product.description
  }

  const getCategoryName = (cat: typeof categories[0]) => {
    if (locale === 'en') return cat.nameEn
    if (locale === 'es') return cat.nameEs
    return cat.name
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = 
      getProductName(product).toLowerCase().includes(searchQuery.toLowerCase()) ||
      getProductDesc(product).toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t.shopPage.hero}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t.shopPage.heroSubtitle}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-6 bg-background border-b border-border/30 sticky top-[72px] z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card/50 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50'
                  )}
                >
                  {getCategoryName(cat)}
                </button>
              ))}
            </div>

            {/* Search & Cart */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t.shopPage.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-card/50 border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 w-48 md:w-64"
                />
              </div>
              <button
                onClick={() => setIsOpen(true)}
                className="relative p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-primary" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum produto encontrado</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={cn(
                    'group bg-card/30 border border-border/30 rounded-xl overflow-hidden',
                    'transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                  )}
                >
                  {/* Product Image */}
                  <div className="aspect-square relative bg-background-secondary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ShoppingBag className="w-20 h-20 text-primary/20" />
                    </div>
                    {product.featured && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Destaque
                      </div>
                    )}
                    {product.discountPercent && (
                      <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
                        -{product.discountPercent}%
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button
                        onClick={() => addItem(product)}
                        className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Plus className="w-4 h-4" />
                        {t.shop.addToCart}
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                      {getProductName(product)}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {getProductDesc(product)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.originalPrice && (
                          <span className="text-muted-foreground/60 text-sm line-through mr-2">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                        <span className="text-primary font-bold text-lg">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <button
                        onClick={() => addItem(product)}
                        className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors lg:hidden"
                      >
                        <Plus className="w-5 h-5 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                {t.shopPage.cart}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-card rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">{t.shopPage.emptyCart}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 bg-card/30 border border-border/30 rounded-lg p-4"
                    >
                      <div className="w-16 h-16 bg-background-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-8 h-8 text-primary/30" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground text-sm line-clamp-1">
                          {getProductName(item.product)}
                        </h3>
                        <p className="text-primary font-semibold text-sm mt-1">
                          {formatPrice(item.product.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 bg-card hover:bg-border rounded transition-colors"
                          >
                            <Minus className="w-3 h-3 text-muted-foreground" />
                          </button>
                          <span className="text-sm text-foreground w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 bg-card hover:bg-border rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-foreground font-medium">{t.shopPage.total}</span>
                  <span className="text-primary font-bold">{formatPrice(totalPrice)}</span>
                </div>
                <button className="w-full bg-gold-gradient text-primary-foreground py-4 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/30">
                  {t.shopPage.checkout}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </MainLayout>
  )
}
