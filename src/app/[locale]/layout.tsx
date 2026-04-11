import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SetHtmlLangFromPath from '@/components/SetHtmlLangFromPath'
import StructuredData from '@/components/StructuredData'

const locales = ['en', 'id'] as const

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    authors: [{ name: 'PT. Sigma Solusi Servis' }],
    robots: { index: true, follow: true },
    openGraph: {
      siteName: 'Sigma Solusi Servis',
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound()
  }

  return (
    <>
      <SetHtmlLangFromPath />
      <StructuredData />
      {children}
    </>
  )
}
