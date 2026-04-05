'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { type Product, type ProductVariant } from './products-data'

interface CartItem {
  product: Product
  variant?: ProductVariant
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product, variant?: ProductVariant) => void
  removeItem: (productId: string, variantId?: string) => void
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product: Product, variant?: ProductVariant) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.variant?.id === variant?.id
      )
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id &&
          item.variant?.id === variant?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, variant, quantity: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId: string, variantId?: string) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant?.id === variantId)
      )
    )
  }, [])

  const updateQuantity = useCallback(
    (productId: string, quantity: number, variantId?: string) => {
      if (quantity <= 0) {
        removeItem(productId, variantId)
        return
      }
      setItems((prev) =>
        prev.map((item) =>
          item.product.id === productId &&
          item.variant?.id === variantId
            ? { ...item, quantity }
            : item
        )
      )
    },
    [removeItem]
  )

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
