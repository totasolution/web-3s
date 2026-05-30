import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ClientsSection from '@/components/ClientsSection'
import CompanyProfileSection from '@/components/CompanyProfileSection'
import LatestInsightsSection from '@/components/LatestInsightsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import { pageSeoMetadata } from '@/lib/seo'
import idMessages from '../../../messages/id.json'
import enMessages from '../../../messages/en.json'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageSeoMetadata(locale, '', 'home')
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = locale === 'en' ? enMessages : idMessages
  const faqItems = messages.faq?.items ?? []

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ClientsSection isHomePage={true} />
      <CompanyProfileSection />
      <LatestInsightsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
