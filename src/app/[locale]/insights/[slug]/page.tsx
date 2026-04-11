import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleBody from '@/components/ArticleBody'
import { getAllSlugs, getArticleBySlug } from '@/content/articles/posts'
import { articlePageMetadata } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'
import idMessages from '../../../../../messages/id.json'
import enMessages from '../../../../../messages/en.json'

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  const locales = ['id', 'en'] as const
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  const title = locale === 'en' ? article.title.en : article.title.id
  const description = locale === 'en' ? article.description.en : article.description.id
  return articlePageMetadata(locale, slug, title, description, article.datePublished)
}

function formatArticleDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-ID' : 'id-ID', {
    dateStyle: 'long',
  }).format(new Date(iso))
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const messages = locale === 'en' ? enMessages : idMessages
  const p = messages.insightsPage
  const title = locale === 'en' ? article.title.en : article.title.id
  const description = locale === 'en' ? article.description.en : article.description.id
  const blocks = locale === 'en' ? article.body.en : article.body.id

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: `${article.datePublished}T08:00:00.000Z`,
    author: {
      '@type': 'Organization',
      name: 'PT. Sigma Solusi Servis',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PT. Sigma Solusi Servis',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-sigma.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/${locale}/insights/${slug}`,
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <article className="pt-28 pb-20 bg-gradient-to-b from-brand-lighter/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-dark mb-8 transition-colors"
          >
            <span className="mr-2" aria-hidden>
              ←
            </span>
            {p.backToInsights}
          </Link>
          <header className="mb-10">
            <time
              dateTime={article.datePublished}
              className="text-sm font-medium text-brand-primary block mb-4"
            >
              {p.published}: {formatArticleDate(article.datePublished, locale)}
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark font-headline leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">{description}</p>
          </header>
          <ArticleBody blocks={blocks} />
        </div>
      </article>
      <Footer />
    </main>
  )
}
