export type LocaleStr = { id: string; en: string }

export type CityFAQ = {
  q: LocaleStr
  a: LocaleStr
}

export type CitySection = {
  heading: LocaleStr
  paragraphs: LocaleStr[]
  bullets?: LocaleStr[]
}

export type CityContent = {
  slug: string
  cityName: LocaleStr
  regionName: LocaleStr
  metaTitle: LocaleStr
  metaDescription: LocaleStr
  hero: {
    badge: LocaleStr
    title: LocaleStr
    subtitle: LocaleStr
  }
  coverageHeading: LocaleStr
  coverageIntro: LocaleStr
  areas: string[]
  industries: { name: LocaleStr; description: LocaleStr }[]
  whyUs: CitySection
  pricingNote: LocaleStr
  faq: CityFAQ[]
  ctaHeadline: LocaleStr
  ctaSubline: LocaleStr
}
