import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/content/articles/posts'
import { SITE_URL } from '@/lib/site'

const locales = ['id', 'en'] as const
const paths = ['', 'about', 'contact', 'services', 'clients', 'insights'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []
  const now = new Date()
  const articleSlugs = getAllSlugs()

  for (const locale of locales) {
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
    for (const slug of articleSlugs) {
      entries.push({
        url: `${SITE_URL}/${locale}/insights/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.65,
      })
    }
  }

  return entries
}
