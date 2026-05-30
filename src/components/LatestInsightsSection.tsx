'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../hooks/useLocale'
import { getAllArticles } from '@/content/articles/posts'

const LatestInsightsSection = () => {
  const locale = useLocale()

  const messages = locale === 'en'
    ? require('../../messages/en.json')
    : require('../../messages/id.json')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  const articles = getAllArticles().slice(0, 3)

  const formatDate = (iso: string) =>
    new Intl.DateTimeFormat(locale === 'en' ? 'en-ID' : 'id-ID', {
      dateStyle: 'long',
    }).format(new Date(iso))

  return (
    <section className="py-20 bg-gradient-to-b from-brand-lighter/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full mb-4">
            {t('latestInsights.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline">
            {t('latestInsights.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('latestInsights.subtitle')}
          </p>
        </motion.div>

        <ul className="grid gap-8 md:grid-cols-3">
          {articles.map((article, index) => {
            const title = locale === 'en' ? article.title.en : article.title.id
            const description = locale === 'en' ? article.description.en : article.description.id
            return (
              <motion.li
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-brand-light transition-all duration-300 overflow-hidden">
                  <div className="p-7 flex flex-col flex-1">
                    <time
                      dateTime={article.datePublished}
                      className="text-xs font-medium text-brand-primary mb-3"
                    >
                      {t('latestInsights.published')}: {formatDate(article.datePublished)}
                    </time>
                    <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-3 font-headline leading-snug">
                      <Link
                        href={`/${locale}/insights/${article.slug}`}
                        className="hover:text-brand-primary transition-colors"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
                      {description}
                    </p>
                    <Link
                      href={`/${locale}/insights/${article.slug}`}
                      className="inline-flex items-center font-semibold text-brand-primary hover:text-brand-light transition-colors text-sm"
                    >
                      {t('latestInsights.readArticle')}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}/insights`}
            className="inline-flex items-center space-x-2 bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{t('latestInsights.viewAll')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default LatestInsightsSection
