import { SITE_URL } from '@/lib/site'

const organizationDescription =
  'Penyedia layanan tenaga kerja dan business process outsourcing (BPO) di Indonesia, dengan solusi HR untuk mendukung operasional perusahaan.'

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'PT. Sigma Solusi Servis',
      alternateName: 'Sigma Solusi Servis',
      description: organizationDescription,
      url: SITE_URL,
      email: 'info@sigmasolusiservis.com',
      telephone: ['+62217986083', '+62217986183'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jakarta',
        addressCountry: 'ID',
      },
      logo: `${SITE_URL}/logo-sigma.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Sigma Solusi Servis',
      description: organizationDescription,
      url: SITE_URL,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['id', 'en'],
    },
  ],
}

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
