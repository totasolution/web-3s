import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'
import { medanContent } from '@/content/locations/cities'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import { canonicalUrl, languageAlternates } from '@/lib/seo'

const slug = 'outsourcing-medan'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const title = isEn ? medanContent.metaTitle.en : medanContent.metaTitle.id
  const description = isEn ? medanContent.metaDescription.en : medanContent.metaDescription.id
  const canonical = canonicalUrl(locale, slug)

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: languageAlternates(slug),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: isEn ? 'en_US' : 'id_ID',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  }
}

export default async function OutsourcingMedanPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const url = `${SITE_URL}/${locale}/${slug}`

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isEn ? medanContent.metaTitle.en : medanContent.metaTitle.id,
    description: isEn ? medanContent.metaDescription.en : medanContent.metaDescription.id,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Medan' },
      ...medanContent.areas.map((a) => ({ '@type': 'City', name: a })),
    ],
    serviceType: 'Outsourcing & Manpower Supply',
    url,
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: medanContent.faq.map((item) => ({
      '@type': 'Question',
      name: isEn ? item.q.en : item.q.id,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isEn ? item.a.en : item.a.id,
      },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Sigma Solusi Servis', item: `${SITE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Outsourcing Medan', item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <CityLandingPage city={medanContent} />
    </>
  )
}
