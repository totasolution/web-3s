import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LocaleLayoutClient from './LocaleLayoutClient'

// Define supported locales
const locales = ['en', 'id'] as const

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: 'PT. Sigma Solusi Servis - HR Solutions & Manpower Services',
    description: locale === 'id' 
      ? 'PT. Sigma Solusi Servis memberikan solusi untuk kebutuhan man power dan meningkatkan efisiensi hrd perusahaan anda. Professional HR solutions and manpower services.'
      : 'PT. Sigma Solusi Servis provides solutions for manpower needs and increases your company\'s HRD efficiency. Professional HR solutions and manpower services.',
    keywords: 'HR solutions, manpower services, HRD efficiency, recruitment, human resources, Indonesia',
    authors: [{ name: 'PT. Sigma Solusi Servis' }],
    openGraph: {
      title: 'PT. Sigma Solusi Servis - HR Solutions & Manpower Services',
      description: 'Professional HR solutions and manpower services for your company',
      url: 'https://sigmasolusiservis.com',
      siteName: 'Sigma Solusi Servis',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    robots: 'index, follow',
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  return (
    <LocaleLayoutClient locale={locale}>
      {children}
    </LocaleLayoutClient>
  )
}
