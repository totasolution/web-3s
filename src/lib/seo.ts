import type { Metadata } from 'next'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import { getSeoCopy, type SeoPageKey } from '@/lib/seo-messages'

export function languageAlternates(pathWithoutLocale: string): Record<string, string> {
  const suffix = pathWithoutLocale ? `/${pathWithoutLocale}` : ''
  return {
    id: `${SITE_URL}/id${suffix}`,
    en: `${SITE_URL}/en${suffix}`,
    'x-default': `${SITE_URL}/id${suffix}`,
  }
}

export function canonicalUrl(locale: string, pathWithoutLocale: string): string {
  const suffix = pathWithoutLocale ? `/${pathWithoutLocale}` : ''
  return `${SITE_URL}/${locale}${suffix}`
}

const ogImage = {
  url: DEFAULT_OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: 'Sigma Solusi Servis — layanan tenaga kerja, HR dan BPO',
}

export function pageSeoMetadata(
  locale: string,
  pathWithoutLocale: string,
  page: SeoPageKey
): Metadata {
  const { title, description } = getSeoCopy(locale, page)
  const canonical = canonicalUrl(locale, pathWithoutLocale)
  const ogLocale = locale === 'id' ? 'id_ID' : 'en_US'
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(pathWithoutLocale),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: ogLocale,
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  }
}

export function articlePageMetadata(
  locale: string,
  slug: string,
  title: string,
  description: string,
  datePublished: string
): Metadata {
  const pathWithoutLocale = `insights/${slug}`
  const canonical = canonicalUrl(locale, pathWithoutLocale)
  const ogLocale = locale === 'id' ? 'id_ID' : 'en_US'
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(pathWithoutLocale),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: ogLocale,
      type: 'article',
      publishedTime: `${datePublished}T08:00:00.000Z`,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  }
}
