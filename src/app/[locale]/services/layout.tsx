import type { Metadata } from 'next'
import { pageSeoMetadata } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageSeoMetadata(locale, 'services', 'services')
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
