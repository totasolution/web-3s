import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'PT. Sigma Solusi Servis — Tenaga Kerja, HR & BPO',
    template: '%s | PT. Sigma Solusi Servis',
  },
  description:
    'Penyedia layanan tenaga kerja dan business process outsourcing (BPO) di Indonesia, dengan solusi HR untuk mendukung operasional perusahaan Anda.',
  authors: [{ name: 'PT. Sigma Solusi Servis' }],
  openGraph: {
    siteName: 'Sigma Solusi Servis',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: 'Sigma Solusi Servis — layanan tenaga kerja, HR dan BPO',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE_PATH],
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'CHPve82O1hY_HtCAFdnGcid61EhuFxDCTxavt7gQUsc',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const localeHeader = headersList.get('x-next-locale')
  const lang = localeHeader === 'en' ? 'en' : 'id'

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
