import { SITE_URL } from '@/lib/site'

const organizationDescription =
  'Penyedia tenaga kerja Indonesia, perusahaan alih daya, dan jasa outsourcing—dengan solusi HR, payroll, BPJS, dan BPO. Melayani perusahaan di seluruh Indonesia dengan jangkauan eksekusi di Jabodetabek, Surabaya, Bandung, dan Medan sejak 2015.'

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
      foundingDate: '2015',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jakarta',
        addressRegion: 'DKI Jakarta',
        addressCountry: 'ID',
      },
      areaServed: [
        { '@type': 'Country', name: 'Indonesia' },
        { '@type': 'City', name: 'Jakarta' },
        { '@type': 'City', name: 'Surabaya' },
        { '@type': 'City', name: 'Bandung' },
        { '@type': 'City', name: 'Medan' },
      ],
      knowsAbout: [
        'Penyedia Tenaga Kerja Indonesia',
        'Perusahaan Alih Daya',
        'Jasa Outsourcing',
        'Business Process Outsourcing (BPO)',
        'Man Power Supply',
        'Payroll Outsourcing',
        'BPJS Administration',
        'Talent Headhunting',
      ],
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo-sigma.png`,
        width: 512,
        height: 512,
      },
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
