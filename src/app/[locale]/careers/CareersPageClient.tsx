'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { CareerContent, Vacancy } from '@/content/careers/types'

type Props = {
  locale: string
  content: CareerContent
  vacancies: Vacancy[]
}

/* ─── Social share icons ─── */
function IconWA() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function IconCopy({ copied }: { copied: boolean }) {
  return copied ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

/* ─── Share buttons component ─── */
function ShareButtons({ vacancy, locale, origin }: { vacancy: Vacancy; locale: string; origin: string }) {
  const [copied, setCopied] = useState(false)

  const jobUrl = origin ? `${origin}/${locale}/careers/${vacancy.slug}` : ''
  const shareText = `Lowongan Kerja: ${vacancy.title} di ${vacancy.location} — Sigma Solusi Servis`

  const waHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${jobUrl}`)}`
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`
  const xHref = `https://x.com/intent/post?text=${encodeURIComponent(`${shareText} ${jobUrl}`)}`
  const fbHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(jobUrl)}`

  const handleCopy = async () => {
    if (!jobUrl) return
    await navigator.clipboard.writeText(jobUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const btnBase =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-150'

  return (
    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 flex-wrap">
      <span className="text-[11px] text-gray-400 font-medium mr-0.5">Bagikan:</span>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20`}
        aria-label="Bagikan ke WhatsApp"
      >
        <IconWA /> WhatsApp
      </a>

      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20`}
        aria-label="Bagikan ke LinkedIn"
      >
        <IconLinkedIn /> LinkedIn
      </a>

      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-gray-100 text-gray-700 hover:bg-gray-200`}
        aria-label="Bagikan ke X"
      >
        <IconX /> X
      </a>

      <a
        href={fbHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnBase} bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20`}
        aria-label="Bagikan ke Facebook"
      >
        <IconFacebook /> Facebook
      </a>

      <button
        onClick={handleCopy}
        className={`${btnBase} ${copied ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        aria-label="Salin tautan"
      >
        <IconCopy copied={copied} />
        {copied ? 'Tersalin!' : 'Salin Tautan'}
      </button>
    </div>
  )
}

/* ─── Main page ─── */
export default function CareersPageClient({ locale, content, vacancies }: Props) {
  const viewDetailLabel = locale === 'en' ? 'View Details' : 'Lihat Detail'
  const [origin, setOrigin] = useState('')

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-brand-lighter/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
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

      {/* ─── Vacancy cards ─── */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {vacancies.map((vacancy, index) => (
                <motion.article
                  key={vacancy.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Flyer thumbnail or placeholder */}
                    <div className="relative md:w-48 shrink-0 aspect-[2/3] md:aspect-auto bg-gray-100 flex items-center justify-center">
                      {vacancy.image ? (
                        <Image
                          src={vacancy.image}
                          alt={`Lowongan kerja ${vacancy.title} - Sigma Solusi Servis`}
                          fill
                          sizes="(max-width: 768px) 100vw, 192px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-4xl select-none">💼</span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1 p-7">
                      <h3 className="text-2xl font-bold text-gray-900">{vacancy.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        {[vacancy.department, vacancy.level, vacancy.location, vacancy.employmentType, vacancy.workModel]
                          .filter(Boolean)
                          .map((tag) => (
                            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{tag}</span>
                          ))}
                      </div>
                      <p className="text-gray-700 mt-4 leading-relaxed">{vacancy.summary}</p>
                      {vacancy.experience && (
                        <p className="mt-2 text-sm text-gray-500">
                          <span className="font-semibold">Pengalaman:</span> {vacancy.experience}
                        </p>
                      )}
                      {vacancy.salaryRange && (
                        <p className="mt-1 text-sm text-gray-500">
                          <span className="font-semibold">Gaji:</span> {vacancy.salaryRange}
                        </p>
                      )}
                      <div className="mt-6">
                        <Link
                          href={`/${locale}/careers/${vacancy.slug}`}
                          className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90 transition-colors"
                        >
                          {viewDetailLabel}
                        </Link>
                      </div>

                      {/* Social share */}
                      <ShareButtons vacancy={vacancy} locale={locale} origin={origin} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
