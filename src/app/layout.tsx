import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PT. Sigma Solusi Servis - HR Solutions & Manpower Services',
  description: 'PT. Sigma Solusi Servis memberikan solusi untuk kebutuhan man power dan meningkatkan efisiensi hrd perusahaan anda.',
  keywords: 'hrd,penyedia tenaga kerja,penyedia tenaga kerja indonesia,tenaga kerja murah,cari kerja, loker,fresh graduate,lulusan kerja, head hunting, hiring',
  authors: [{ name: 'PT. Sigma Solusi Servis' }],
  openGraph: {
    title: 'PT. Sigma Solusi Servis - HR Solutions & Manpower Services',
    description: 'Professional HR solutions and manpower services for your company',
    url: 'https://sigmasolusiservis.com',
    siteName: 'Sigma Solusi Servis',
    locale: 'id_ID',
    type: 'website',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
