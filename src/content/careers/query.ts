import 'server-only'

import fs from 'node:fs'
import path from 'node:path'

import type { CareerContent, Vacancy } from '@/content/careers/types'

function normalizeLocale(locale: string): 'id' | 'en' {
  return locale === 'en' ? 'en' : 'id'
}

function readCareerFile(locale: 'id' | 'en'): CareerContent {
  const filePath = path.join(process.cwd(), 'src', 'content', 'careers', `${locale}.json`)
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as CareerContent
}

export function getCareerContent(locale: string): CareerContent {
  return readCareerFile(normalizeLocale(locale))
}

export function getActiveVacancies(locale: string): Vacancy[] {
  return getCareerContent(locale).vacancies.filter((vacancy) => vacancy.isActive !== false)
}

export function getVacancyBySlug(locale: string, slug: string): Vacancy | undefined {
  return getActiveVacancies(locale).find((vacancy) => vacancy.slug === slug)
}

export function getAllCareerSlugs(): string[] {
  const slugs = new Set<string>()
  for (const loc of ['id', 'en'] as const) {
    for (const vacancy of getActiveVacancies(loc)) {
      slugs.add(vacancy.slug)
    }
  }
  return [...slugs]
}
