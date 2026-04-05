'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { blogPosts } from '@/lib/blog-data'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const { locale } = useLocale()
  const postId = parseInt(params.id as string)

  const post = blogPosts.find((p) => p.id === postId)

  if (!post) {
    notFound()
  }

  const getTitle = () => {
    if (locale === 'en') return post.titleEn
    if (locale === 'es') return post.titleEs
    return post.title
  }

  const getContent = () => {
    if (locale === 'en') return post.contentEn
    if (locale === 'es') return post.contentEs
    return post.content
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
      <section className="pt-20 pb-12 bg-linear-to-b from-background-secondary to-background">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6">
            {getTitle()}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-muted-foreground text-sm md:text-base">
            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            {post.author && (
              <span className="flex items-center gap-2">
                Por <span className="text-foreground font-medium">{post.author}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <div className="text-foreground leading-relaxed space-y-6 prose-headings:font-serif prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline prose-ul:text-muted-foreground prose-li:marker:text-primary">
              {getContent().split('\n\n').map((paragraph, idx) => {
                // Detect and render headings
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={idx} className="font-serif text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }

                // Detect and render bold text and lists
                if (paragraph.startsWith('**')) {
                  return (
                    <p key={idx} className="text-muted-foreground">
                      <strong className="text-foreground">{paragraph.split(':')[0].replace(/\*\*/g, '')}:</strong>
                      {paragraph.split(':')[1]}
                    </p>
                  )
                }

                // Detect and render lists
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter((line) => line.startsWith('- '))
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 text-muted-foreground">
                      {items.map((item, itemIdx) => (
                        <li key={itemIdx} className="ml-2">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  )
                }

                return (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Share and Back */}
          <div className="mt-12 pt-8 border-t border-border/30 flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>

            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
              <Share2 className="w-4 h-4" />
              Compartilhar
            </button>
          </div>
        </article>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
            Outros artigos que podem interessar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {blogPosts
              .filter((p) => p.id !== postId)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group bg-card/30 border border-border/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="p-5">
                    <h3 className="font-serif text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {locale === 'en'
                        ? relatedPost.titleEn
                        : locale === 'es'
                          ? relatedPost.titleEs
                          : relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {locale === 'en'
                        ? relatedPost.excerptEn
                        : locale === 'es'
                          ? relatedPost.excerptEs
                          : relatedPost.excerpt}
                    </p>
                    <span className="text-primary text-xs font-medium">Ler mais →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
