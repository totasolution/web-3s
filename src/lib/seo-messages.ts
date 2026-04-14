import en from '../../messages/en.json'
import id from '../../messages/id.json'

const messages = { en, id } as const

export type SeoPageKey = 'home' | 'about' | 'contact' | 'services' | 'clients' | 'insights' | 'careers'

export function getSeoCopy(locale: string, page: SeoPageKey) {
  const m = locale === 'en' ? messages.en : messages.id
  return m.seo.pages[page]
}
