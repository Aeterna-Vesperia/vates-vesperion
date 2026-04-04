import Link from 'next/link';
import { MainLayout } from '@/components/main-layout';

export default function PageInConstruction() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center h-screen bg-background text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Página em Construção</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Estamos trabalhando para trazer novidades. Volte em breve!
        </p>
        <Link href="">
          <span className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/80 transition">
            Visite nossa loja na Shopee
          </span>
        </Link>
      </section>
    </MainLayout>
  );
}