import type { Metadata } from 'next'
import { Calculator } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OutsourcingCalculator from '@/components/OutsourcingCalculator'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import { canonicalUrl, languageAlternates } from '@/lib/seo'

const slug = 'kalkulator-biaya-outsourcing'

const copy = {
  id: {
    title: 'Kalkulator Biaya Outsourcing & BPO — PT. Sigma Solusi Servis',
    description:
      'Hitung estimasi biaya outsourcing tenaga kerja dan jasa BPO di Indonesia. Input UMP/UMK, level posisi, headcount, dan management fee—dapatkan rincian biaya per kepala, total bulanan, dan tahunan secara instan.',
    badge: 'Tools',
    heroTitle: 'Kalkulator Biaya Outsourcing',
    heroSubtitle:
      'Estimasi cepat biaya outsourcing man power dan jasa BPO. Hasilnya: rincian komponen biaya yang transparan—upah pokok, BPJS, THR, cadangan pesangon, dan management fee. Untuk angka akurat sesuai kebutuhan spesifik, hubungi tim Sigma.',
  },
  en: {
    title: 'Outsourcing & BPO Cost Calculator — PT. Sigma Solusi Servis',
    description:
      'Estimate manpower outsourcing and BPO costs in Indonesia. Input UMP/UMK, position level, headcount, and management fee—get an instant breakdown per head, monthly, and annual cost.',
    badge: 'Tools',
    heroTitle: 'Outsourcing Cost Calculator',
    heroSubtitle:
      'Quick estimate for manpower outsourcing and BPO services. Output: transparent component breakdown—base wage, BPJS, THR, severance reserve, and management fee. For accurate quotes matching your specific needs, contact the Sigma team.',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const c = isEn ? copy.en : copy.id
  const canonical = canonicalUrl(locale, slug)
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: { canonical, languages: languageAlternates(slug) },
    openGraph: {
      title: c.title,
      description: c.description,
      url: canonical,
      locale: isEn ? 'en_US' : 'id_ID',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  }
}

export default async function KalkulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const c = isEn ? copy.en : copy.id

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-28 md:pt-32 pb-8 md:pb-12 bg-gradient-to-br from-brand-lighter via-white to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-lighter px-4 py-2 rounded-full mb-5 border border-brand-primary/20">
            <Calculator className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">{c.badge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight font-headline text-brand-dark">
            {c.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            {c.heroSubtitle}
          </p>
        </div>
      </section>

      <OutsourcingCalculator />

      <Footer />
    </main>
  )
}
