import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Briefcase, Calculator, MapPin } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import { canonicalUrl, languageAlternates } from '@/lib/seo'

const slug = 'man-power-outsourcing'

const copy = {
  id: {
    title: 'Man Power Outsourcing Indonesia — Penyedia Tenaga Kerja Terpercaya',
    description:
      'Layanan man power outsourcing dari PT. Sigma Solusi Servis sejak 2015: man power supply, contract & permanent staffing, mass recruitment, dan PEO. Tenaga kerja outsourcing untuk perusahaan di Jabodetabek, Surabaya, Bandung, dan Medan.',
    badge: 'Man Power Supply & Staffing',
    heroTitle: 'Penyedia Man Power Outsourcing Indonesia',
    heroSubtitle:
      'Sigma menyediakan tenaga kerja outsourcing—rekrut, dikelola, dan ditempatkan di lokasi Anda—dengan kepatuhan regulasi yang terjaga dan supervisi harian.',
    ctaPrimary: 'Konsultasi Gratis',
    ctaSecondary: 'Hitung Estimasi Biaya',
    whatHeading: 'Apa itu Man Power Outsourcing?',
    whatBody:
      'Man power outsourcing adalah model kerja sama di mana perusahaan penyedia tenaga kerja (seperti Sigma) bertanggung jawab atas rekrutmen, kontrak kerja, payroll, administrasi BPJS, dan supervisi tenaga kerja yang ditempatkan di lokasi klien. Hubungan hukum: tenaga kerja menjadi karyawan Sigma, bukan klien—sehingga klien terbebas dari risiko ketenagakerjaan langsung tetapi tetap mendapat tenaga kerja yang sesuai kebutuhan operasional.',
    whatBody2:
      'Sejak Permenaker Nomor 7 Tahun 2026, ruang lingkup outsourcing tenaga kerja di Indonesia dibatasi pada enam kategori penunjang: kebersihan, catering, keamanan, transportasi pekerja, penunjang operasional umum, dan penunjang sektor pertambangan. Sigma beroperasi penuh dalam ruang lingkup yang diizinkan regulasi.',
    modelsHeading: 'Model Layanan Man Power Sigma',
    models: [
      {
        title: 'Professional Employer Organization (PEO)',
        desc: 'Sigma mengelola seluruh siklus ketenagakerjaan—dari rekrutmen, kontrak, payroll, BPJS, hingga offboarding. Klien fokus ke arahan kerja, Sigma handle administrasi penuh. Cocok untuk perusahaan yang ingin scale headcount tanpa ekspansi HR internal.',
      },
      {
        title: 'Contract & Permanent Staffing',
        desc: 'Penempatan tenaga kerja berdasarkan kebutuhan: kontrak waktu tertentu (PKWT) atau permanen (PKWTT). Cocok untuk posisi yang Anda butuhkan jangka pendek (project-based) atau jangka panjang.',
      },
      {
        title: 'Mass Recruitment Solutions',
        desc: 'Rekrut puluhan hingga ratusan tenaga kerja dalam waktu cepat untuk pembukaan cabang baru, ekspansi area, atau ramp-up musiman. Tim recruiter Sigma menangani sourcing, screening, hingga deployment terkoordinasi.',
      },
      {
        title: 'Man Power Supply on Demand',
        desc: 'Penyediaan tenaga kerja temporary untuk lonjakan operasional jangka pendek—event, peak season, atau kebutuhan mendesak. Deployment cepat 7–14 hari kerja.',
      },
    ],
    industriesHeading: 'Industri yang Kami Layani',
    industries: [
      'Ritel & FMCG — kasir, store crew, area supervisor',
      'F&B & Restoran — barista, kitchen crew, server, store supervisor',
      'ISP & Telekomunikasi — teknisi instalasi, customer service lapangan, sales',
      'Teknologi & Digital — customer service, operations, sales executive',
      'Multifinance & Perbankan — collector, telesales, operational support',
      'Logistik & Distribusi — driver, gudang, operasional distribusi',
      'Manufaktur — operator produksi, QC, supervisor lini',
      'Perkebunan & Agribisnis — administrasi, supervisi lapangan',
    ],
    geoHeading: 'Cakupan Geografis Man Power Outsourcing',
    geoBody:
      'Sigma memberi layanan man power outsourcing dengan jangkauan eksekusi nyata di Jabodetabek (kantor pusat Jakarta), Surabaya & Jawa Timur, Bandung & Jawa Barat, serta Medan & Sumatera Utara. Untuk kota di luar empat metro tersebut, kapasitas dievaluasi case-by-case.',
    geoLinks: [
      { city: 'Jakarta', href: '/id/outsourcing-jakarta' },
      { city: 'Medan', href: '/id/outsourcing-medan' },
    ],
    processHeading: 'Proses Kerja Sama Man Power Outsourcing',
    processSteps: [
      {
        n: '01',
        title: 'Klarifikasi kebutuhan',
        desc: 'Diskusi awal: jumlah headcount, jenis posisi, lokasi, SLA, dan anggaran. Tim Sigma memetakan kebutuhan Anda secara konkret.',
      },
      {
        n: '02',
        title: 'Proposal & kontrak',
        desc: 'Proposal dengan komponen biaya terbuka—upah pokok, BPJS, THR, management fee—dikirim dalam 5 hari kerja. Tanda tangan kontrak setelah disepakati.',
      },
      {
        n: '03',
        title: 'Rekrutmen & screening',
        desc: 'Sigma menjalankan sourcing, screening, interview, dan background check. Anda dapat opsi shortlist sebelum deployment.',
      },
      {
        n: '04',
        title: 'Onboarding & deployment',
        desc: 'Tenaga kerja onboarded—training awal, safety induction, dokumen lengkap—lalu deployed ke lokasi Anda. Timeline: 7–14 hari kerja untuk posisi standar.',
      },
      {
        n: '05',
        title: 'Supervisi & ongoing management',
        desc: 'Koordinator Sigma supervisi harian, handle payroll bulanan, BPJS, evaluasi kinerja, dan eskalasi. Anda dapat dashboard real-time.',
      },
    ],
    whyHeading: 'Mengapa Sigma untuk Man Power Outsourcing',
    whyBullets: [
      '11+ tahun pengalaman sebagai penyedia tenaga kerja Indonesia sejak 2015',
      'Kepatuhan penuh terhadap Permenaker 7/2026 dan regulasi ketenagakerjaan terkini',
      'Proses terdokumentasi: SOP rekrutmen, payroll, BPJS, dan supervisi',
      'Platform digital untuk time & attendance dengan akses real-time klien',
      'Jangkauan 4 metro: Jabodetabek, Surabaya, Bandung, Medan',
      'Klien lintas industri: ritel, F&B, ISP, teknologi, multifinance',
    ],
    pricingHeading: 'Berapa Biaya Man Power Outsourcing?',
    pricingBody:
      'Tarif man power outsourcing di Indonesia mengikuti UMP/UMK lokasi penempatan. Total cost per head umumnya 1,35–1,55× dari upah pokok—sudah termasuk BPJS Ketenagakerjaan & Kesehatan (10–11%), THR (alokasi 1/12 per bulan), cadangan pesangon (5–8% per PP 35/2021), dan management fee (8–18%). Gunakan kalkulator kami untuk estimasi cepat.',
    pricingCta: 'Buka Kalkulator Biaya',
    faqHeading: 'FAQ Man Power Outsourcing',
    faq: [
      {
        q: 'Apa bedanya man power outsourcing dengan rekrutmen langsung?',
        a: 'Pada man power outsourcing, tenaga kerja menjadi karyawan Sigma (bukan klien)—sehingga Sigma yang menanggung administrasi ketenagakerjaan, BPJS, payroll, dan risiko PHK. Pada rekrutmen langsung, Anda mempekerjakan langsung dan menanggung seluruh administrasi sendiri. Outsourcing cocok untuk posisi penunjang non-core; rekrutmen langsung cocok untuk posisi strategis core business.',
      },
      {
        q: 'Berapa lama waktu deployment tenaga kerja?',
        a: 'Untuk posisi penunjang standar (kasir, store crew, driver, security) dengan spesifikasi jelas: 7–14 hari kerja dari penandatanganan kontrak. Untuk rekrutmen massal (>20 orang) atau posisi spesialis: timeline disepakati di awal sebagai bagian dari SLA.',
      },
      {
        q: 'Apakah posisi yang saya butuhkan diizinkan dialihdayakan?',
        a: 'Sejak Permenaker 7/2026, outsourcing dibatasi pada enam kategori: kebersihan, catering, keamanan, transportasi pekerja, penunjang operasional umum, dan penunjang sektor pertambangan. Sebagian besar posisi non-core di ritel, F&B, ISP, dan layanan masuk dalam "penunjang operasional umum". Kami evaluasi kebutuhan Anda di awal untuk memastikan kepatuhan.',
      },
      {
        q: 'Bagaimana mekanisme penggantian jika tenaga kerja resign atau bermasalah?',
        a: 'Sigma bertanggung jawab atas replacement. Untuk resign di 30 hari pertama, biaya replacement biasanya gratis (depending on SLA). Setelah itu, tergantung skema kontrak. Untuk masalah disiplin, prosedur peringatan dan PHK ditangani Sigma sesuai regulasi.',
      },
      {
        q: 'Apakah Sigma menjamin kepatuhan terhadap UMP/UMK terbaru?',
        a: 'Ya. Sigma mengaplikasikan UMP/UMK yang berlaku di lokasi penempatan secara otomatis. Untuk perubahan UMP/UMK tahunan, mekanisme penyesuaian biaya ditegaskan di kontrak agar tidak ada surprise charge.',
      },
      {
        q: 'Berapa minimum headcount untuk kontrak man power outsourcing?',
        a: 'Tidak ada batas keras, tapi praktis: di bawah 5 headcount, biaya management fee biasanya tidak sebanding dengan kompleksitas internal yang Anda hilangkan. Sweet spot mulai dari 10 headcount ke atas.',
      },
    ],
    ctaHeadline: 'Siap mulai man power outsourcing dengan Sigma?',
    ctaSubline: 'Konsultasi gratis 30 menit. Proposal transparan dalam 5 hari kerja. Tanpa komitmen.',
  },
  en: {
    title: 'Manpower Outsourcing Indonesia — Trusted Provider | PT. Sigma Solusi Servis',
    description:
      'Manpower outsourcing services from PT. Sigma Solusi Servis since 2015: man power supply, contract & permanent staffing, mass recruitment, and PEO. Outsourced workforce for businesses in Jabodetabek, Surabaya, Bandung, and Medan.',
    badge: 'Man Power Supply & Staffing',
    heroTitle: 'Manpower Outsourcing Provider in Indonesia',
    heroSubtitle:
      'Sigma supplies outsourced workforce—recruited, managed, and placed at your location—with regulatory compliance and daily supervision.',
    ctaPrimary: 'Free Consultation',
    ctaSecondary: 'Estimate Cost',
    whatHeading: 'What is Manpower Outsourcing?',
    whatBody:
      'Manpower outsourcing is a model where a workforce provider (like Sigma) takes responsibility for recruitment, employment contracts, payroll, BPJS administration, and supervision of workers placed at the client’s site. Legal relationship: workers are Sigma employees, not the client’s—so the client is freed from direct employment risk while still getting workforce matched to operational needs.',
    whatBody2:
      'Since Permenaker No. 7 of 2026, outsourcing scope in Indonesia is limited to six support categories: cleaning, catering, security, employee transportation, general operational support, and mining-sector support. Sigma operates fully within the regulated scope.',
    modelsHeading: 'Sigma Manpower Service Models',
    models: [
      {
        title: 'Professional Employer Organization (PEO)',
        desc: 'Sigma manages the entire employment lifecycle—recruitment, contracts, payroll, BPJS, offboarding. Client focuses on work direction; Sigma handles full administration. Best for companies scaling headcount without expanding internal HR.',
      },
      {
        title: 'Contract & Permanent Staffing',
        desc: 'Placement on contract (PKWT) or permanent (PKWTT) basis. Best for short-term project roles or long-term positions.',
      },
      {
        title: 'Mass Recruitment Solutions',
        desc: 'Recruit tens to hundreds of workers quickly for new branch openings, area expansions, or seasonal ramp-up. Sigma recruiters handle sourcing, screening, and coordinated deployment.',
      },
      {
        title: 'Man Power Supply on Demand',
        desc: 'Temporary workforce for short-term operational surges—events, peak seasons, urgent needs. Deployment within 7–14 working days.',
      },
    ],
    industriesHeading: 'Industries We Serve',
    industries: [
      'Retail & FMCG — cashiers, store crew, area supervisors',
      'F&B & Restaurants — baristas, kitchen crew, servers, store supervisors',
      'ISP & Telecommunications — installation technicians, field customer service, sales',
      'Technology & Digital — customer service, operations, sales executives',
      'Multifinance & Banking — collectors, telesales, operational support',
      'Logistics & Distribution — drivers, warehouse, distribution operations',
      'Manufacturing — production operators, QC, line supervisors',
      'Plantation & Agribusiness — administration, field supervision',
    ],
    geoHeading: 'Geographic Coverage',
    geoBody:
      'Sigma delivers manpower outsourcing with real execution coverage in Jabodetabek (Jakarta HQ), Surabaya & East Java, Bandung & West Java, and Medan & North Sumatra. For cities outside these four metros, capacity is evaluated case by case.',
    geoLinks: [
      { city: 'Jakarta', href: '/en/outsourcing-jakarta' },
      { city: 'Medan', href: '/en/outsourcing-medan' },
    ],
    processHeading: 'How the Engagement Works',
    processSteps: [
      {
        n: '01',
        title: 'Needs clarification',
        desc: 'Initial discussion: headcount, role types, locations, SLAs, and budget. Sigma maps your needs concretely.',
      },
      {
        n: '02',
        title: 'Proposal & contract',
        desc: 'Proposal with transparent cost components—base wage, BPJS, THR, management fee—delivered in 5 working days. Contract signed once agreed.',
      },
      {
        n: '03',
        title: 'Recruitment & screening',
        desc: 'Sigma runs sourcing, screening, interviews, and background checks. You may shortlist before deployment.',
      },
      {
        n: '04',
        title: 'Onboarding & deployment',
        desc: 'Workers are onboarded—initial training, safety induction, complete documentation—then deployed. Timeline: 7–14 working days for standard roles.',
      },
      {
        n: '05',
        title: 'Supervision & ongoing management',
        desc: 'Sigma coordinators handle daily supervision, monthly payroll, BPJS, performance evaluation, and escalations. You get a real-time dashboard.',
      },
    ],
    whyHeading: 'Why Sigma for Manpower Outsourcing',
    whyBullets: [
      '11+ years as an Indonesian manpower provider since 2015',
      'Full compliance with Permenaker 7/2026 and current labour regulations',
      'Documented processes: recruitment SOPs, payroll, BPJS, supervision',
      'Digital platform for time & attendance with real-time client access',
      'Coverage across 4 metros: Jabodetabek, Surabaya, Bandung, Medan',
      'Cross-industry clients: retail, F&B, ISP, technology, multifinance',
    ],
    pricingHeading: 'How Much Does Manpower Outsourcing Cost?',
    pricingBody:
      'Rates follow the UMP/UMK at the placement location. Total cost per head typically lands at 1.35–1.55× base wage—including BPJS Ketenagakerjaan & Kesehatan (10–11%), THR (1/12 monthly allocation), severance reserve (5–8% per PP 35/2021), and management fee (8–18%). Use our calculator for a quick estimate.',
    pricingCta: 'Open the Cost Calculator',
    faqHeading: 'Manpower Outsourcing FAQ',
    faq: [
      {
        q: 'How is manpower outsourcing different from direct hiring?',
        a: 'With manpower outsourcing, workers are Sigma employees (not the client’s)—so Sigma carries employment administration, BPJS, payroll, and termination risk. With direct hiring, you employ directly and carry the full administration. Outsourcing fits non-core support roles; direct hiring fits strategic core roles.',
      },
      {
        q: 'How long is the deployment timeline?',
        a: 'For standard support roles (cashier, store crew, driver, security) with clear specs: 7–14 working days from contract signing. For mass recruitment (>20) or specialist roles: timeline is agreed upfront as part of the SLA.',
      },
      {
        q: 'Is the role I need eligible for outsourcing?',
        a: 'Since Permenaker 7/2026, outsourcing is limited to six categories: cleaning, catering, security, employee transportation, general operational support, and mining-sector support. Most non-core roles in retail, F&B, ISP, and services fall under "general operational support". We assess your needs upfront for compliance.',
      },
      {
        q: 'How do replacements work if a worker resigns or underperforms?',
        a: 'Sigma is responsible for replacements. For resignations within the first 30 days, replacement is typically free (depending on SLA). After that, it depends on contract terms. For discipline issues, warning and termination procedures are handled by Sigma per regulation.',
      },
      {
        q: 'Does Sigma guarantee compliance with current UMP/UMK?',
        a: 'Yes. Sigma automatically applies the UMP/UMK at the placement location. For annual UMP/UMK changes, the cost adjustment mechanism is specified in the contract to avoid surprise charges.',
      },
      {
        q: 'Is there a minimum headcount for manpower outsourcing?',
        a: 'No hard floor, but practically: under 5 headcount the management fee typically does not offset the internal complexity saved. Sweet spot starts at 10 headcount.',
      },
    ],
    ctaHeadline: 'Ready to start manpower outsourcing with Sigma?',
    ctaSubline: 'A free 30-minute consultation. Transparent proposal within 5 working days. No commitment.',
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isEn = locale === 'en'
  const c = isEn ? copy.en : copy.id
  const canonical = canonicalUrl(locale, slug)
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: { canonical, languages: languageAlternates(slug) },
    openGraph: {
      title: c.title,
      description: c.description,
      url: canonical,
      locale: isEn ? 'en_US' : 'id_ID',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE_PATH, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  }
}

export default async function ManPowerOutsourcingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const isEn = locale === 'en'
  const c = isEn ? copy.en : copy.id
  const url = `${SITE_URL}/${locale}/${slug}`

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.title,
    description: c.description,
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Manpower Outsourcing',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'City', name: 'Surabaya' },
      { '@type': 'City', name: 'Bandung' },
      { '@type': 'City', name: 'Medan' },
    ],
    url,
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Sigma Solusi Servis',
        item: `${SITE_URL}/${locale}`,
      },
      { '@type': 'ListItem', position: 2, name: 'Man Power Outsourcing', item: url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 bg-gradient-to-br from-brand-lighter via-white to-brand-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-light/20 via-brand-primary/15 to-transparent rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-brand-lighter px-4 py-2 rounded-full mb-6 border border-brand-primary/20">
              <Users className="w-4 h-4 text-brand-primary" />
              <span className="text-brand-primary font-semibold text-sm">{c.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-[1.1] font-headline">
              <span className="block bg-gradient-to-r from-brand-primary via-brand-light to-brand-primary bg-clip-text text-transparent">
                {c.heroTitle}
              </span>
              <span className="block text-brand-dark mt-2 text-2xl sm:text-3xl md:text-4xl">
                PT. Sigma Solusi Servis
              </span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
              {c.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>{c.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${locale}/kalkulator-biaya-outsourcing`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                <span>{c.ctaSecondary}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* What is */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
              {c.whatHeading}
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">{c.whatBody}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{c.whatBody2}</p>
          </div>
        </section>

        {/* Service Models */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-brand-lighter/30 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-10 font-headline">
              {c.modelsHeading}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {c.models.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 hover:border-brand-light hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-light text-white flex items-center justify-center shadow-md">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark">{m.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8 font-headline">
              {c.industriesHeading}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.industries.map((ind, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{ind}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Geo Coverage */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-brand-lighter/40 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
              {c.geoHeading}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{c.geoBody}</p>
            <div className="flex flex-wrap gap-3">
              {c.geoLinks.map((l) => (
                <Link
                  key={l.city}
                  href={l.href}
                  className="inline-flex items-center gap-2 bg-white text-brand-primary px-5 py-3 rounded-xl font-semibold border border-brand-primary/30 hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  {isEn ? `Outsourcing in ${l.city}` : `Outsourcing ${l.city}`}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-10 font-headline">
              {c.processHeading}
            </h2>
            <ol className="space-y-6">
              {c.processSteps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-light text-white flex items-center justify-center text-xl font-bold shadow-md">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Why Sigma */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-brand-lighter/40 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8 font-headline">
              {c.whyHeading}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.whyBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
              {c.pricingHeading}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{c.pricingBody}</p>
            <Link
              href={`/${locale}/kalkulator-biaya-outsourcing`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              {c.pricingCta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion title={c.faqHeading} items={c.faq} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-brand-primary via-brand-primary to-brand-light text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-headline">
              {c.ctaHeadline}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">{c.ctaSubline}</p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>{c.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
