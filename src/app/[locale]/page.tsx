import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ClientsSection from '@/components/ClientsSection'
import CompanyProfileSection from '@/components/CompanyProfileSection'
import Footer from '@/components/Footer'
import { pageSeoMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageSeoMetadata(locale, '', 'home')
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ClientsSection isHomePage={true} />
      <CompanyProfileSection />
      <Footer />
    </main>
  )
}
