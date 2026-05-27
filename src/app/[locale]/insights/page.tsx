import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllArticles } from '@/content/articles/posts'
import idMessages from '../../../../messages/id.json'
import enMessages from '../../../../messages/en.json'

function formatArticleDate(iso: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-ID' : 'id-ID', {
    dateStyle: 'long',
  }).format(new Date(iso))
}

export default async function InsightsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = locale === 'en' ? enMessages : idMessages
  const articles = getAllArticles()
  const p = messages.insightsPage

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-28 pb-16 bg-gradient-to-br from-brand-lighter via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full mb-6">
            {p.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline">
            {p.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-14">{p.intro}</p>

          <ul className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => {
              const title = locale === 'en' ? article.title.en : article.title.id
              const description = locale === 'en' ? article.description.en : article.description.id
              return (
                <li key={article.slug}>
                  <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-brand-light transition-all duration-300 overflow-hidden">
                    <div className="p-8 flex flex-col flex-1">
                      <time
                        dateTime={article.datePublished}
                        className="text-sm font-medium text-brand-primary mb-3"
                      >
                        {p.published}: {formatArticleDate(article.datePublished, locale)}
                      </time>
                      <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-3 font-headline">
                        <Link
                          href={`/${locale}/insights/${article.slug}`}
                          className="hover:text-brand-primary transition-colors"
                        >
                          {title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 leading-relaxed flex-1 mb-6">{description}</p>
                      <Link
                        href={`/${locale}/insights/${article.slug}`}
                        className="inline-flex items-center font-semibold text-brand-primary hover:text-brand-light transition-colors"
                      >
                        {p.readMore}
                        <span className="ml-1" aria-hidden>
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}
