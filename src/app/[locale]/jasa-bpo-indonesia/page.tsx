import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Cog, Calculator, FileText, Clock, Receipt } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import { SITE_URL, DEFAULT_OG_IMAGE_PATH } from '@/lib/site'
import { canonicalUrl, languageAlternates } from '@/lib/seo'

const slug = 'jasa-bpo-indonesia'

const copy = {
  id: {
    title: 'Jasa BPO Indonesia — Vendor BPO untuk HR & Payroll | PT. Sigma Solusi Servis',
    description:
      'Jasa BPO (Business Process Outsourcing) dari PT. Sigma Solusi Servis—vendor BPO Indonesia sejak 2015. Payroll outsourcing, administrasi BPJS, time & attendance, talent headhunting, dan BPO staffing terintegrasi.',
    badge: 'Business Process Outsourcing',
    heroTitle: 'Vendor BPO untuk Perusahaan Indonesia',
    heroSubtitle:
      'Sigma adalah vendor BPO terpercaya sejak 2015—mengambil alih proses payroll, administrasi BPJS, time & attendance, dan HR Anda. Anda fokus ke bisnis inti, kami yang jalankan back-office.',
    ctaPrimary: 'Konsultasi Gratis',
    ctaSecondary: 'Hitung Estimasi Biaya',
    whatHeading: 'Apa itu Business Process Outsourcing (BPO)?',
    whatBody:
      'Business Process Outsourcing (BPO) adalah model di mana perusahaan mengalihdayakan satu atau beberapa proses non-inti—paling umum payroll, administrasi BPJS, time & attendance, talent acquisition, dan HR administration—ke vendor spesialis seperti Sigma. Yang dialihkan: prosesnya, bukan tenaga kerjanya. Tim Sigma menjalankan proses tersebut dengan SLA terukur (akurasi payroll, ketepatan pelaporan, waktu respons).',
    whatBody2:
      'Beda dengan man power outsourcing (yang fokus supply tenaga kerja ke lokasi klien), BPO fokus pada eksekusi proses—biasanya dilakukan tim Sigma dari kantor mereka sendiri menggunakan platform digital terintegrasi. Klien mendapat output (gaji yang dibayarkan, BPJS yang dilaporkan, dashboard data) tanpa harus mengelola operasionalnya.',
    servicesHeading: 'Layanan BPO Sigma',
    services: [
      {
        icon: 'Receipt',
        title: 'Payroll Outsourcing',
        desc: 'Perhitungan gaji bulanan, PPh 21, tunjangan tetap dan variabel, slip gaji digital, dan transfer ke rekening karyawan—semua diaudit dan akurat. SLA akurasi ≥99,5%.',
      },
      {
        icon: 'FileText',
        title: 'Administrasi BPJS Ketenagakerjaan & Kesehatan',
        desc: 'Pendaftaran karyawan baru, pembayaran iuran bulanan, klaim JHT/JKK/JKM/JKP, dan pelaporan ke BPJS sesuai regulasi. Anda terbebas dari ribetnya administrasi BPJS.',
      },
      {
        icon: 'Clock',
        title: 'Time & Attendance Management',
        desc: 'Platform digital untuk pencatatan kehadiran, lembur, cuti, dan integrasi otomatis dengan sistem payroll. Klien dapat akses real-time ke data karyawan.',
      },
      {
        icon: 'Cog',
        title: 'Talent Headhunting & HR Administration',
        desc: 'Pencarian talenta untuk posisi strategis (manajerial, spesialis), administrasi kontrak kerja, dokumen ketenagakerjaan, dan kepatuhan regulasi terkini.',
      },
    ],
    whyBpoHeading: 'Mengapa Outsource Proses HR ke Vendor BPO?',
    whyBpoBullets: [
      'Tim internal fokus ke aktivitas strategis—bukan administrasi repetitif',
      'Akurasi proses lebih tinggi karena spesialisasi vendor + platform digital',
      'Kepatuhan regulasi otomatis ter-update saat regulasi berubah (Permenaker, BPJS, UMP)',
      'Biaya operasional lebih predictable—Anda bayar per layanan, tidak menanggung gaji tim HR internal',
      'Akses ke platform digital BPO tanpa investasi infrastruktur sendiri',
      'Audit trail dan transparansi proses untuk kebutuhan finance dan compliance internal',
    ],
    pricingHeading: 'Berapa Biaya Jasa BPO?',
    pricingBody:
      'Tarif jasa BPO bervariasi tergantung scope layanan dan jumlah karyawan yang dikelola. Tiga model pricing umum: (1) per-employee per-month (PEPM)—paling umum untuk payroll & BPJS admin, range Rp 50.000–250.000/karyawan/bulan, (2) persentase dari payroll (1–3%), atau (3) fixed monthly fee untuk paket layanan terintegrasi. Untuk perhitungan kustom sesuai kebutuhan Anda, gunakan kalkulator atau hubungi kami.',
    pricingCta: 'Buka Kalkulator Biaya',
    processHeading: 'Proses Kerja Sama BPO dengan Sigma',
    processSteps: [
      {
        n: '01',
        title: 'Audit kebutuhan & data assessment',
        desc: 'Tim Sigma melakukan audit awal: berapa karyawan, struktur upah, kompleksitas tunjangan, regulasi spesifik industri. Hasilnya: scope BPO yang dirancang sesuai bisnis Anda.',
      },
      {
        n: '02',
        title: 'Migrasi data & onboarding',
        desc: 'Migrasi data karyawan, payroll history, dan kepesertaan BPJS ke platform Sigma. Tim Anda dilatih menggunakan dashboard untuk akses data real-time.',
      },
      {
        n: '03',
        title: 'Eksekusi proses bulanan',
        desc: 'Sigma menjalankan payroll, BPJS reporting, time & attendance, dan layanan HR lain sesuai SLA yang disepakati. Anda terima output bersih: gaji terbayar, lapor BPJS clear, dashboard ter-update.',
      },
      {
        n: '04',
        title: 'Review kuartalan & continuous improvement',
        desc: 'Setiap kuartal, review SLA, akurasi, dan feedback. Adjustment proses untuk efisiensi berkelanjutan. Update regulasi (Permenaker, UMP, BPJS) diaplikasikan otomatis.',
      },
    ],
    industriesHeading: 'Industri yang Kami Layani',
    industries: [
      'Ritel & FMCG — payroll multi-cabang dengan tunjangan komisi',
      'F&B & Restoran — payroll shift-based dengan tip/service charge',
      'ISP & Telekomunikasi — payroll teknisi lapangan dengan tunjangan transport',
      'Teknologi & Digital — payroll terintegrasi dengan benefit komprehensif',
      'Multifinance & Perbankan — payroll dengan struktur komisi & bonus performance',
      'Logistik & Distribusi — payroll driver/gudang dengan tunjangan kehadiran',
    ],
    faqHeading: 'FAQ Jasa BPO',
    faq: [
      {
        q: 'Apa bedanya BPO dengan man power outsourcing?',
        a: 'Man power outsourcing = supply tenaga kerja yang ditempatkan di lokasi klien (Sigma sebagai employer of record). BPO = ambil alih proses bisnis (payroll, BPJS, time & attendance, HR) yang dijalankan oleh tim Sigma dari kantor mereka. Banyak klien Sigma menggunakan keduanya secara bundled untuk solusi outsourcing menyeluruh.',
      },
      {
        q: 'Apa saja yang bisa di-outsource ke vendor BPO?',
        a: 'Yang paling umum: payroll outsourcing (perhitungan gaji, PPh 21, transfer), administrasi BPJS Ketenagakerjaan dan Kesehatan, time & attendance management, talent headhunting & rekrutmen, dan HR administration. Untuk proses lain di luar HR (misal accounting, customer service), Sigma dapat evaluasi case-by-case.',
      },
      {
        q: 'Apakah aman memberikan data karyawan ke vendor BPO?',
        a: 'Sigma menerapkan standar keamanan data dengan akses terbatas (role-based), audit trail untuk setiap perubahan, dan kontrak NDA yang mengikat. Data karyawan tidak dishare ke pihak ketiga di luar kepentingan layanan. Untuk perusahaan dengan regulasi data spesifik (perbankan, kesehatan), arrangement keamanan khusus dapat disepakati.',
      },
      {
        q: 'Berapa lama proses migrasi dari HR internal ke Sigma BPO?',
        a: 'Untuk perusahaan dengan <50 karyawan dan data terstruktur: 2–3 minggu. Untuk perusahaan menengah (50–500 karyawan): 4–6 minggu, termasuk training tim untuk akses platform. Untuk skala lebih besar atau struktur kompleks: timeline disepakati di awal sebagai bagian dari onboarding plan.',
      },
      {
        q: 'Apakah Sigma mendukung integrasi dengan sistem internal kami?',
        a: 'Ya. Platform Sigma mendukung ekspor data dalam format standar (CSV, XLSX) dan dapat di-integrasikan ke sistem akuntansi atau HRIS yang sudah Anda gunakan. Untuk integrasi API kustom, scope dan effort dievaluasi di tahap proposal.',
      },
      {
        q: 'Apa yang terjadi jika ada kesalahan payroll atau pelaporan BPJS?',
        a: 'SLA Sigma menetapkan akurasi payroll ≥99,5% dan ketepatan pelaporan BPJS bulanan. Jika ada kesalahan, mekanisme koreksi (rebate atau correction filing) dijalankan dalam waktu yang disepakati. Klausul ini tertulis eksplisit di kontrak.',
      },
    ],
    ctaHeadline: 'Mulai outsource proses HR Anda ke Sigma',
    ctaSubline:
      'Konsultasi gratis 30 menit untuk audit awal kebutuhan BPO. Proposal transparan dalam 5 hari kerja.',
  },
  en: {
    title: 'BPO Services Indonesia — BPO Vendor for HR & Payroll | PT. Sigma Solusi Servis',
    description:
      'Business Process Outsourcing (BPO) from PT. Sigma Solusi Servis—a trusted Indonesian BPO vendor since 2015. Payroll outsourcing, BPJS administration, time & attendance, talent headhunting, and integrated BPO staffing.',
    badge: 'Business Process Outsourcing',
    heroTitle: 'BPO Vendor for Indonesian Businesses',
    heroSubtitle:
      'Sigma is a trusted BPO vendor since 2015—taking over your payroll, BPJS administration, time & attendance, and HR processes. You focus on core business; we run the back office.',
    ctaPrimary: 'Free Consultation',
    ctaSecondary: 'Estimate Cost',
    whatHeading: 'What is Business Process Outsourcing (BPO)?',
    whatBody:
      'Business Process Outsourcing (BPO) is a model where companies outsource one or more non-core processes—most commonly payroll, BPJS administration, time & attendance, talent acquisition, and HR administration—to a specialist vendor like Sigma. What is outsourced: the process, not the people. Sigma teams execute these processes with measurable SLAs (payroll accuracy, reporting timeliness, response time).',
    whatBody2:
      'Unlike manpower outsourcing (which supplies workers to the client’s site), BPO focuses on process execution—typically performed by Sigma teams from their offices using an integrated digital platform. Clients receive output (paid salaries, BPJS reports filed, dashboards updated) without managing operations.',
    servicesHeading: 'Sigma BPO Services',
    services: [
      {
        icon: 'Receipt',
        title: 'Payroll Outsourcing',
        desc: 'Monthly salary calculation, PPh 21, fixed and variable allowances, digital payslips, and bank transfer—all audited and accurate. SLA accuracy ≥99.5%.',
      },
      {
        icon: 'FileText',
        title: 'BPJS Ketenagakerjaan & Kesehatan Administration',
        desc: 'New employee registration, monthly contribution payments, JHT/JKK/JKM/JKP claims, and BPJS reporting per regulation. You are freed from BPJS administration overhead.',
      },
      {
        icon: 'Clock',
        title: 'Time & Attendance Management',
        desc: 'Digital platform for attendance, overtime, and leave tracking, with automatic payroll integration. Clients get real-time access to workforce data.',
      },
      {
        icon: 'Cog',
        title: 'Talent Headhunting & HR Administration',
        desc: 'Talent acquisition for strategic roles (managerial, specialist), employment contract administration, employment documents, and ongoing regulatory compliance.',
      },
    ],
    whyBpoHeading: 'Why Outsource HR Processes to a BPO Vendor?',
    whyBpoBullets: [
      'Internal teams focus on strategic activities—not repetitive admin',
      'Higher process accuracy from vendor specialization + digital platforms',
      'Automatic regulatory compliance updates (Permenaker, BPJS, UMP)',
      'More predictable operational cost—you pay per service, not in-house HR salaries',
      'Access to BPO digital platforms without your own infrastructure investment',
      'Audit trail and process transparency for internal finance and compliance',
    ],
    pricingHeading: 'How Much Do BPO Services Cost?',
    pricingBody:
      'BPO rates vary by service scope and the number of employees managed. Three common pricing models: (1) per-employee per-month (PEPM)—common for payroll & BPJS admin, range Rp 50,000–250,000/employee/month, (2) percentage of payroll (1–3%), or (3) fixed monthly fee for integrated service packages. Use the calculator or contact us for a custom estimate.',
    pricingCta: 'Open the Cost Calculator',
    processHeading: 'How the BPO Engagement Works',
    processSteps: [
      {
        n: '01',
        title: 'Needs audit & data assessment',
        desc: 'Initial audit: headcount, wage structure, allowance complexity, industry-specific regulations. Output: a BPO scope tailored to your business.',
      },
      {
        n: '02',
        title: 'Data migration & onboarding',
        desc: 'Migrate employee data, payroll history, and BPJS enrolment to Sigma’s platform. Your team is trained to use the dashboard for real-time data access.',
      },
      {
        n: '03',
        title: 'Monthly process execution',
        desc: 'Sigma runs payroll, BPJS reporting, time & attendance, and other HR services per the agreed SLA. You receive clean outputs: paid salaries, clear BPJS reports, updated dashboards.',
      },
      {
        n: '04',
        title: 'Quarterly review & continuous improvement',
        desc: 'Each quarter: SLA review, accuracy, and feedback. Process adjustments for ongoing efficiency. Regulatory updates (Permenaker, UMP, BPJS) applied automatically.',
      },
    ],
    industriesHeading: 'Industries We Serve',
    industries: [
      'Retail & FMCG — multi-branch payroll with commission allowances',
      'F&B & Restaurants — shift-based payroll with tip/service charge',
      'ISP & Telecommunications — field technician payroll with transport allowances',
      'Technology & Digital — integrated payroll with comprehensive benefits',
      'Multifinance & Banking — payroll with commission & performance bonus structures',
      'Logistics & Distribution — driver/warehouse payroll with attendance allowances',
    ],
    faqHeading: 'BPO Services FAQ',
    faq: [
      {
        q: 'How is BPO different from manpower outsourcing?',
        a: 'Manpower outsourcing = supplying workers placed at the client’s site (Sigma as employer of record). BPO = taking over business processes (payroll, BPJS, time & attendance, HR) executed by Sigma teams from their offices. Many Sigma clients use both bundled for end-to-end outsourcing solutions.',
      },
      {
        q: 'What can be outsourced to a BPO vendor?',
        a: 'Most commonly: payroll outsourcing (salary calculation, PPh 21, transfers), BPJS Ketenagakerjaan and Kesehatan administration, time & attendance management, talent headhunting & recruitment, and HR administration. For other non-HR processes (accounting, customer service), Sigma evaluates case by case.',
      },
      {
        q: 'Is it safe to share employee data with a BPO vendor?',
        a: 'Sigma applies data security standards with role-based access, audit trails for every change, and binding NDA contracts. Employee data is not shared with third parties outside service needs. For companies with specific data regulations (banking, healthcare), custom security arrangements can be agreed.',
      },
      {
        q: 'How long does migration from in-house HR to Sigma BPO take?',
        a: 'For companies with <50 employees and structured data: 2–3 weeks. Mid-size (50–500 employees): 4–6 weeks, including team training for platform access. Larger scale or complex structures: timeline agreed upfront as part of the onboarding plan.',
      },
      {
        q: 'Does Sigma support integration with our internal systems?',
        a: 'Yes. Sigma’s platform supports data export in standard formats (CSV, XLSX) and can integrate with your existing accounting or HRIS systems. Custom API integrations are scoped during the proposal phase.',
      },
      {
        q: 'What happens if there are errors in payroll or BPJS reporting?',
        a: 'Sigma SLAs set payroll accuracy ≥99.5% and timely monthly BPJS reporting. If errors occur, correction mechanisms (rebate or correction filing) are executed within agreed timeframes. This clause is explicitly written into the contract.',
      },
    ],
    ctaHeadline: 'Start outsourcing your HR processes to Sigma',
    ctaSubline:
      'Free 30-minute consultation for an initial BPO needs audit. Transparent proposal within 5 working days.',
  },
} as const

const iconMap: Record<string, typeof Cog> = {
  Receipt,
  FileText,
  Clock,
  Cog,
}

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

export default async function JasaBpoIndonesiaPage({
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
    serviceType: 'Business Process Outsourcing',
    areaServed: { '@type': 'Country', name: 'Indonesia' },
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
      { '@type': 'ListItem', position: 2, name: 'Jasa BPO', item: url },
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
              <Cog className="w-4 h-4 text-brand-primary" />
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

        {/* What is BPO */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 font-headline">
              {c.whatHeading}
            </h2>
            <p className="text-lg text-gray-600 mb-5 leading-relaxed">{c.whatBody}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{c.whatBody2}</p>
          </div>
        </section>

        {/* BPO Services */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-brand-lighter/30 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-10 font-headline">
              {c.servicesHeading}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {c.services.map((s, i) => {
                const Icon = iconMap[s.icon] ?? Cog
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-7 shadow-md border border-gray-100 hover:border-brand-light hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-light text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark">{s.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why BPO */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-8 font-headline">
              {c.whyBpoHeading}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.whyBpoBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-brand-lighter/40 to-white">
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

        {/* Pricing */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-brand-lighter/40 to-white">
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
