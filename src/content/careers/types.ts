export type CareerApplication = {
  method?: string
  url?: string
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
  /** Monthly base salary range for JobPosting schema (IDR). */
  salaryMin?: number
  salaryMax?: number
  salaryCurrency?: string
  postedDate?: string
  applicationDeadline?: string
  summary: string
  responsibilities?: string[]
  requirements?: string[]
  benefits?: string[]
  application?: CareerApplication
}

export type JobPostingPostalAddress = {
  streetAddress: string
  addressRegion: string
  postalCode: string
  /** City / subregion shown to users (e.g. Jakarta Selatan). */
  addressLocality?: string
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
  /** Used for JobPosting jobLocation.address (Google requires street/region/postal). */
  jobPostingAddress?: JobPostingPostalAddress
  vacancies: Vacancy[]
}
