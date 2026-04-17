import { getActiveVacancies, getCareerContent } from '@/content/careers/query'
import CareersPageClient from './CareersPageClient'

export const dynamic = 'force-dynamic'

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const content = getCareerContent(locale)
  const vacancies = getActiveVacancies(locale)

  return <CareersPageClient locale={locale} content={content} vacancies={vacancies} />
}
