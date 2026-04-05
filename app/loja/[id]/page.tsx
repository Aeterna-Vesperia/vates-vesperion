import Link from 'next/link'
import { MainLayout } from '@/components/main-layout'
import { products } from '@/lib/products-data'
import { ProductDetailClient } from './product-detail-client'
import { ChevronLeft } from 'lucide-react'

type Params = Promise<{ id: string }>

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <MainLayout>
        <section className="py-32 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">
            Produto não encontrado
          </h1>
          <Link
            href="/loja"
            className="text-primary hover:underline flex items-center gap-2 justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar à loja
          </Link>
        </section>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <ProductDetailClient product={product} />
    </MainLayout>
  )
}
