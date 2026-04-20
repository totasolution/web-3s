import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getActiveVacancies, getCareerContent, getVacancyBySlug } from '@/content/careers/query'
import { buildSigmaJobPostingSchema } from '@/lib/jobPostingSchema'
import { canonicalUrl, languageAlternates } from '@/lib/seo'
import { SITE_URL } from '@/lib/site'

export const dynamic = 'force-dynamic'

const locales = ['id', 'en'] as const

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getActiveVacancies(locale).map((vacancy) => ({
      locale,
      slug: vacancy.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const vacancy = getVacancyBySlug(locale, slug)

  if (!vacancy) {
    return {}
  }

  const pathWithoutLocale = `careers/${slug}`
  const title = `${vacancy.title} | Sigma Solusi Servis`
  const canonical = canonicalUrl(locale, pathWithoutLocale)

  return {
    title,
    description: vacancy.summary,
    alternates: {
      canonical,
      languages: languageAlternates(pathWithoutLocale),
    },
    openGraph: {
      title,
      description: vacancy.summary,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: vacancy.summary,
    },
  }
}

function labels(locale: string) {
  return locale === 'en'
    ? {
        back: 'Back to Careers',
        experience: 'Experience',
        compensation: 'Compensation',
        posted: 'Posted',
        deadline: 'Deadline',
        responsibilities: 'Responsibilities',
        requirements: 'Requirements',
        benefits: 'Benefits',
        howToApply: 'How to Apply',
        requiredDocuments: 'Required documents',
      }
    : {
        back: 'Kembali ke Karir',
        experience: 'Pengalaman',
        compensation: 'Kompensasi',
        posted: 'Dipublikasikan',
        deadline: 'Batas Lamaran',
        responsibilities: 'Tanggung Jawab',
        requirements: 'Persyaratan',
        benefits: 'Benefit',
        howToApply: 'Cara Melamar',
        requiredDocuments: 'Dokumen wajib',
      }
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const vacancy = getVacancyBySlug(locale, slug)

  if (!vacancy) {
    notFound()
  }

  const t = labels(locale)
  const career = getCareerContent(locale)
  const jobPageUrl = canonicalUrl(locale, `careers/${slug}`)
  const jobPostingSchema = buildSigmaJobPostingSchema({
    vacancy,
    career,
    hiringOrganization: {
      name: 'PT. Sigma Solusi Servis',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo-sigma.png`,
    },
    jobPageUrl,
  })

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-brand-lighter/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/careers`}
            className="inline-flex items-center text-sm font-semibold text-brand-primary hover:underline"
          >
            {t.back}
          </Link>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900">{vacancy.title}</h1>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
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

          <p className="mt-6 text-lg text-gray-700">{vacancy.summary}</p>

          <div className="mt-6 grid gap-1 text-sm text-gray-600">
            {vacancy.experience ? <p>{t.experience}: {vacancy.experience}</p> : null}
            {vacancy.salaryRange ? <p>{t.compensation}: {vacancy.salaryRange}</p> : null}
            {vacancy.postedDate ? <p>{t.posted}: {vacancy.postedDate}</p> : null}
            {vacancy.applicationDeadline ? <p>{t.deadline}: {vacancy.applicationDeadline}</p> : null}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {vacancy.responsibilities?.length ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t.responsibilities}</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
                {vacancy.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {vacancy.requirements?.length ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t.requirements}</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
                {vacancy.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {vacancy.benefits?.length ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{t.benefits}</h2>
              <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
                {vacancy.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="rounded-3xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900">{t.howToApply}</h2>
            {vacancy.application?.method ? <p className="text-gray-700 mt-2">{vacancy.application.method}</p> : null}
            {vacancy.application?.url ? (
              <p className="text-gray-700 mt-2">
                <a
                  href={vacancy.application.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-primary hover:underline break-all"
                >
                  {vacancy.application.url}
                </a>
              </p>
            ) : (
              <p className="text-gray-700 mt-2">
                <a
                  href={`mailto:${vacancy.application?.email || 'info@sigmasolusiservis.com'}${
                    vacancy.application?.subject
                      ? `?subject=${encodeURIComponent(vacancy.application.subject)}`
                      : ''
                  }`}
                  className="font-semibold text-brand-primary hover:underline"
                >
                  {vacancy.application?.email || 'info@sigmasolusiservis.com'}
                </a>
              </p>
            )}
            {vacancy.application?.documents?.length ? (
              <p className="text-gray-600 mt-2">
                {t.requiredDocuments}: {vacancy.application.documents.join(', ')}
              </p>
            ) : null}
            {vacancy.application?.steps?.length ? (
              <ol className="mt-3 list-decimal pl-5 text-gray-700 space-y-1">
                {vacancy.application.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
