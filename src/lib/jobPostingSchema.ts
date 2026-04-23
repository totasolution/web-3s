import type { CareerContent, Vacancy } from '@/content/careers/types'

const DEFAULT_ADDRESS: Required<
  Pick<NonNullable<CareerContent['jobPostingAddress']>, 'streetAddress' | 'addressRegion' | 'postalCode'>
> & { addressLocality?: string } = {
  streetAddress: 'Kantor operasional Jakarta (alamat lengkap diberikan pada tahap rekrutmen)',
  addressRegion: 'DKI Jakarta',
  postalCode: '10110',
  addressLocality: 'Jakarta',
}

const DEFAULT_SALARY = { min: 4_500_000, max: 12_000_000, currency: 'IDR' as const }

function employmentTypeSchema(employmentType: string): string {
  const t = employmentType.toLowerCase()
  if (t.includes('full')) return 'https://schema.org/FullTime'
  if (t.includes('part')) return 'https://schema.org/PartTime'
  if (t.includes('contract')) return 'https://schema.org/Contractor'
  return 'https://schema.org/FullTime'
}

function jobDescriptionText(vacancy: Vacancy): string {
  const parts = [vacancy.summary]
  if (vacancy.responsibilities?.length) {
    parts.push('Tanggung jawab:', ...vacancy.responsibilities.map((r) => `- ${r}`))
  }
  if (vacancy.requirements?.length) {
    parts.push('Persyaratan:', ...vacancy.requirements.map((r) => `- ${r}`))
  }
  if (vacancy.benefits?.length) {
    parts.push('Benefit:', ...vacancy.benefits.map((b) => `- ${b}`))
  }
  return parts.join('\n\n')
}

export function buildSigmaJobPostingSchema(params: {
  vacancy: Vacancy
  career: CareerContent
  hiringOrganization: { name: string; sameAs: string; logo: string }
  jobPageUrl: string
}): Record<string, unknown> {
  const { vacancy, career, hiringOrganization, jobPageUrl } = params
  const addr = { ...DEFAULT_ADDRESS, ...career.jobPostingAddress }
  const locality = addr.addressLocality ?? vacancy.location

  const min = typeof vacancy.salaryMin === 'number' ? vacancy.salaryMin : DEFAULT_SALARY.min
  const max = typeof vacancy.salaryMax === 'number' ? vacancy.salaryMax : DEFAULT_SALARY.max
  const currency = vacancy.salaryCurrency ?? DEFAULT_SALARY.currency

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: vacancy.title,
    description: jobDescriptionText(vacancy),
    datePosted: vacancy.postedDate,
    employmentType: employmentTypeSchema(vacancy.employmentType),
    hiringOrganization: {
      '@type': 'Organization',
      name: hiringOrganization.name,
      sameAs: hiringOrganization.sameAs,
      logo: hiringOrganization.logo,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: addr.streetAddress,
        addressLocality: locality,
        addressRegion: addr.addressRegion,
        postalCode: addr.postalCode,
        addressCountry: 'ID',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency,
      value: {
        '@type': 'QuantitativeValue',
        minValue: min,
        maxValue: max,
        unitText: 'MONTH',
      },
    },
    url: jobPageUrl,
  }

  if (vacancy.applicationDeadline) {
    schema.validThrough = `${vacancy.applicationDeadline}T23:59:59+07:00`
  }

  if (vacancy.application?.url) {
    schema.directApply = true
    schema.potentialAction = {
      '@type': 'ApplyAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: vacancy.application.url,
      },
    }
  }

  return schema
}
