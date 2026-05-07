import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/content/articles/posts'
import { getActiveVacancies } from '@/content/careers/query'
import { SITE_URL } from '@/lib/site'

const locales = ['id', 'en'] as const
const paths = ['', 'about', 'contact', 'services', 'clients', 'insights', 'careers'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const now = new Date()
  const articles = getAllArticles()

  for (const locale of locales) {
    const vacancySlugs = getActiveVacancies(locale).map((vacancy) => vacancy.slug)

    for (const path of paths) {
      const pathname = path ? `/${locale}/${path}` : `/${locale}`
      const isInsights = path === 'insights'
      entries.push({
        url: `${SITE_URL}${pathname}`,
        lastModified: now,
        changeFrequency: path === '' ? 'weekly' : isInsights ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : isInsights ? 0.85 : 0.8,
      })
    }
    for (const article of articles) {
      entries.push({
        url: `${SITE_URL}/${locale}/insights/${article.slug}`,
        lastModified: new Date(article.datePublished),
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }

    for (const slug of vacancySlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/careers/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.78,
      })
    }
  }

  return entries
}
