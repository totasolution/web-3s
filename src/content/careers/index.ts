import id from '@/content/careers/id.json'
import en from '@/content/careers/en.json'

export type CareerApplication = {
  method?: string
  email?: string
  subject?: string
  documents?: string[]
  steps?: string[]
}

export type Vacancy = {
  slug: string
  isActive?: boolean
  title: string
  department?: string
  level?: string
  location: string
  employmentType: string
  workModel?: string
  experience?: string
  salaryRange?: string
  postedDate?: string
  applicationDeadline?: string
  summary: string
  responsibilities?: string[]
  requirements?: string[]
  benefits?: string[]
  application?: CareerApplication
}

export type CareerContent = {
  heroBadge: string
  title: string
  highlight: string
  description: string
  sectionTitle: string
  sectionDescription: string
  emptyStateTitle: string
  emptyStateDescription: string
  applyLabel: string
  email: string
  vacancies: Vacancy[]
}

const contentByLocale: Record<'id' | 'en', CareerContent> = { id, en }

function normalizeLocale(locale: string): 'id' | 'en' {
  return locale === 'en' ? 'en' : 'id'
}

export function getCareerContent(locale: string): CareerContent {
  return contentByLocale[normalizeLocale(locale)]
}

export function getActiveVacancies(locale: string): Vacancy[] {
  return getCareerContent(locale).vacancies.filter((vacancy) => vacancy.isActive !== false)
}

export function getVacancyBySlug(locale: string, slug: string): Vacancy | undefined {
  return getActiveVacancies(locale).find((vacancy) => vacancy.slug === slug)
}

export function getAllCareerSlugs(): string[] {
  const slugs = new Set<string>()
  for (const locale of ['id', 'en'] as const) {
    for (const vacancy of getActiveVacancies(locale)) {
      slugs.add(vacancy.slug)
    }
  }
  return [...slugs]
}
