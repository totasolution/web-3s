'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'
import Navigation from './Navigation'
import Footer from './Footer'
import FAQAccordion from './FAQAccordion'
import { useLocale } from '../hooks/useLocale'
import type { CityContent, LocaleStr } from '@/content/locations/types'

const pick = (str: LocaleStr, locale: string) => (locale === 'en' ? str.en : str.id)

type Props = { city: CityContent }

const CityLandingPage = ({ city }: Props) => {
  const locale = useLocale()
  const isEn = locale === 'en'

  const t = (s: LocaleStr) => pick(s, locale)

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-brand-lighter via-white to-brand-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-light/20 via-brand-primary/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-primary/10 via-brand-light/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-lighter px-4 py-2 rounded-full mb-6 border border-brand-primary/20"
          >
            <MapPin className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-primary font-semibold text-sm">{t(city.hero.badge)}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] font-headline"
          >
            <span className="block bg-gradient-to-r from-brand-primary via-brand-light to-brand-primary bg-clip-text text-transparent">
              {t(city.hero.title)}
            </span>
            <span className="block text-brand-dark mt-2 text-2xl sm:text-3xl md:text-4xl">
              PT. Sigma Solusi Servis
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed"
          >
            {t(city.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>{isEn ? 'Free Consultation' : 'Konsultasi Gratis'}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
            >
              <span>{isEn ? 'Explore All Services' : 'Lihat Semua Layanan'}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4 font-headline">
            {t(city.coverageHeading)}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl">{t(city.coverageIntro)}</p>
          <div className="flex flex-wrap gap-3">
            {city.areas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 bg-brand-lighter text-brand-primary px-4 py-2 rounded-full font-semibold text-sm border border-brand-primary/20"
              >
                <MapPin className="w-3.5 h-3.5" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-brand-lighter/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-10 font-headline">
            {isEn
              ? `Industries We Serve in ${pick(city.cityName, locale)}`
              : `Industri yang Dilayani di ${pick(city.cityName, locale)}`}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {city.industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 hover:border-brand-light hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-light text-white flex items-center justify-center shadow-md">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{t(ind.name)}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{t(ind.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sigma here */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
            {t(city.whyUs.heading)}
          </h2>
          {city.whyUs.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-gray-600 mb-5 leading-relaxed max-w-3xl">
              {t(p)}
            </p>
          ))}
          {city.whyUs.bullets && (
            <ul className="grid gap-3 md:grid-cols-2 mt-6">
              {city.whyUs.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{t(b)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Pricing note */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-brand-lighter/40 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
            {isEn
              ? `Outsourcing Costs in ${pick(city.cityName, locale)}`
              : `Biaya Jasa Outsourcing di ${pick(city.cityName, locale)}`}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">{t(city.pricingNote)}</p>
          <Link
            href={`/${locale}/insights/tarif-biaya-jasa-outsourcing-indonesia`}
            className="inline-flex items-center mt-6 font-semibold text-brand-primary hover:text-brand-light transition-colors"
          >
            {isEn ? 'Read the full cost breakdown' : 'Baca pembedahan biaya selengkapnya'}
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion
        title={
          isEn
            ? `FAQ — Outsourcing in ${pick(city.cityName, locale)}`
            : `FAQ — Outsourcing di ${pick(city.cityName, locale)}`
        }
        items={city.faq.map((f) => ({ q: t(f.q), a: t(f.a) }))}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-light text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-headline">
            {t(city.ctaHeadline)}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">{t(city.ctaSubline)}</p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{isEn ? 'Free Consultation' : 'Konsultasi Gratis'}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CityLandingPage
