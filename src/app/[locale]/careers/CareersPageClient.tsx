'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { CareerContent, Vacancy } from '@/content/careers/types'

type Props = {
  locale: string
  content: CareerContent
  vacancies: Vacancy[]
}

export default function CareersPageClient({ locale, content, vacancies }: Props) {
  const viewDetailLabel = locale === 'en' ? 'View Details' : 'Lihat Detail'

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-brand-lighter/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full mb-6"
          >
            {content.heroBadge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
          >
            {content.title}{' '}
            <span className="bg-gradient-to-r from-brand-primary to-cyan-500 bg-clip-text text-transparent">
              {content.highlight}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{content.sectionTitle}</h2>
            {content.sectionDescription ? <p className="text-gray-600">{content.sectionDescription}</p> : null}
          </div>

          {vacancies.length === 0 ? (
            <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.emptyStateTitle}</h3>
              <p className="text-gray-600 mb-6">{content.emptyStateDescription}</p>
              <p className="text-gray-700">
                {content.applyLabel}{' '}
                <a href={`mailto:${content.email}`} className="font-semibold text-brand-primary hover:underline">
                  {content.email}
                </a>
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {vacancies.map((vacancy) => (
                <article key={vacancy.slug} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">{vacancy.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    {vacancy.department ? (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.department}</span>
                    ) : null}
                    {vacancy.level ? (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.level}</span>
                    ) : null}
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.location}</span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.employmentType}</span>
                    {vacancy.workModel ? (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.workModel}</span>
                    ) : null}
                  </div>
                  <p className="text-gray-700 mt-4">{vacancy.summary}</p>
                  <div className="mt-6">
                    <Link
                      href={`/${locale}/careers/${vacancy.slug}`}
                      className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90 transition-colors"
                    >
                      {viewDetailLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
