'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPage() {
  const { locale } = useLocale()

  const getTitle = (post: typeof blogPosts[0]) => {
    if (locale === 'en') return post.titleEn
    if (locale === 'es') return post.titleEs
    return post.title
  }

  const getExcerpt = (post: typeof blogPosts[0]) => {
    if (locale === 'en') return post.excerptEn
    if (locale === 'es') return post.excerptEs
    return post.excerpt
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : locale === 'es' ? 'es-ES' : 'pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Artigos sobre oráculos, espiritualidade e autoconhecimento
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className={cn(
                  'group bg-card/30 border border-border/30 rounded-xl overflow-hidden',
                  'transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10'
                )}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-background-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-primary/30" />
                  </div>
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {getTitle(post)}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {getExcerpt(post)}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline group-hover:gap-2 transition-all"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.blogPage.newsletter}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t.blogPage.newsletterDesc}
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.blogPage.emailPlaceholder}
                className="flex-1 px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 whitespace-nowrap"
              >
                {t.blogPage.subscribe}
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
