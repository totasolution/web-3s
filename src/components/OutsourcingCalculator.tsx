'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calculator, Users, Cog, MapPin } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'

type CityKey = 'jakarta' | 'surabaya' | 'bandung' | 'medan' | 'custom'

const CITY_UMK_2026: Record<Exclude<CityKey, 'custom'>, { label: string; ump: number }> = {
  jakarta: { label: 'Jakarta (DKI)', ump: 5_729_876 },
  surabaya: { label: 'Surabaya (Jatim)', ump: 4_961_753 },
  bandung: { label: 'Bandung (Jabar)', ump: 4_482_914 },
  medan: { label: 'Medan (Sumut)', ump: 4_138_470 },
}

const POSITION_MULTIPLIERS = {
  entry: { label: { id: 'Entry-level (kasir, store crew, driver)', en: 'Entry-level (cashier, store crew, driver)' }, mult: 1.0 },
  mid: { label: { id: 'Mid-level (supervisor, teknisi)', en: 'Mid-level (supervisor, technician)' }, mult: 1.4 },
  senior: { label: { id: 'Senior/spesialis (admin senior, koordinator)', en: 'Senior/specialist (senior admin, coordinator)' }, mult: 1.85 },
}

const formatIDR = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Math.round(n))

const OutsourcingCalculator = () => {
  const locale = useLocale()
  const isEn = locale === 'en'

  const [tab, setTab] = useState<'manpower' | 'bpo'>('manpower')

  // Man Power state
  const [city, setCity] = useState<CityKey>('jakarta')
  const [customUmk, setCustomUmk] = useState<number>(3_500_000)
  const [position, setPosition] = useState<keyof typeof POSITION_MULTIPLIERS>('entry')
  const [headcount, setHeadcount] = useState<number>(10)
  const [mgmtFeePct, setMgmtFeePct] = useState<number>(12)

  // BPO state
  const [bpoEmployees, setBpoEmployees] = useState<number>(50)
  const [bpoScope, setBpoScope] = useState<'payroll' | 'bpjs' | 'payrollBpjs' | 'full'>('payrollBpjs')

  const mp = useMemo(() => {
    const baseUmk = city === 'custom' ? customUmk : CITY_UMK_2026[city].ump
    const basePerHead = baseUmk * POSITION_MULTIPLIERS[position].mult
    const bpjsPerHead = basePerHead * 0.108 // ~10.8% employer contribution
    const thrPerHead = basePerHead / 12 // 1 month / 12 monthly allocation
    const severancePerHead = basePerHead * 0.06 // 6% reserve
    const subtotalPerHead = basePerHead + bpjsPerHead + thrPerHead + severancePerHead
    const mgmtFeePerHead = subtotalPerHead * (mgmtFeePct / 100)
    const totalPerHead = subtotalPerHead + mgmtFeePerHead
    const monthly = totalPerHead * headcount
    const annual = monthly * 12
    const multiplier = totalPerHead / basePerHead

    return {
      basePerHead,
      bpjsPerHead,
      thrPerHead,
      severancePerHead,
      mgmtFeePerHead,
      totalPerHead,
      monthly,
      annual,
      multiplier,
    }
  }, [city, customUmk, position, headcount, mgmtFeePct])

  const bpo = useMemo(() => {
    // PEPM ranges (Rp/employee/month) by scope
    const RANGES = {
      payroll: { min: 50_000, max: 100_000 },
      bpjs: { min: 40_000, max: 80_000 },
      payrollBpjs: { min: 80_000, max: 150_000 },
      full: { min: 150_000, max: 250_000 },
    } as const
    const r = RANGES[bpoScope]
    return {
      perEmployeeMin: r.min,
      perEmployeeMax: r.max,
      monthlyMin: r.min * bpoEmployees,
      monthlyMax: r.max * bpoEmployees,
      annualMin: r.min * bpoEmployees * 12,
      annualMax: r.max * bpoEmployees * 12,
    }
  }, [bpoEmployees, bpoScope])

  const cityOptions = Object.entries(CITY_UMK_2026).map(([k, v]) => ({ key: k as CityKey, label: v.label }))

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-brand-lighter/30 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab switch */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-md border border-gray-100">
            <button
              type="button"
              onClick={() => setTab('manpower')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all ${
                tab === 'manpower'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              <Users className="w-4 h-4" />
              {isEn ? 'Manpower' : 'Man Power'}
            </button>
            <button
              type="button"
              onClick={() => setTab('bpo')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all ${
                tab === 'bpo'
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-primary'
              }`}
            >
              <Cog className="w-4 h-4" />
              BPO
            </button>
          </div>
        </div>

        {tab === 'manpower' && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 font-headline">
                {isEn ? 'Manpower Cost Estimator' : 'Estimasi Biaya Man Power'}
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-1" />
                    {isEn ? 'Placement City' : 'Kota Penempatan'}
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value as CityKey)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  >
                    {cityOptions.map((c) => (
                      <option key={c.key} value={c.key}>
                        {c.label} — {formatIDR(CITY_UMK_2026[c.key as Exclude<CityKey, 'custom'>].ump)}
                      </option>
                    ))}
                    <option value="custom">{isEn ? 'Custom UMP/UMK' : 'UMP/UMK Kustom'}</option>
                  </select>
                </div>

                {city === 'custom' && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isEn ? 'Custom UMP/UMK (Rp)' : 'UMP/UMK Kustom (Rp)'}
                    </label>
                    <input
                      type="number"
                      min={1_000_000}
                      step={100_000}
                      value={customUmk}
                      onChange={(e) => setCustomUmk(Number(e.target.value) || 0)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEn ? 'Position Level' : 'Level Posisi'}
                  </label>
                  <select
                    value={position}
                    onChange={(e) =>
                      setPosition(e.target.value as keyof typeof POSITION_MULTIPLIERS)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  >
                    {(Object.keys(POSITION_MULTIPLIERS) as Array<keyof typeof POSITION_MULTIPLIERS>).map(
                      (k) => (
                        <option key={k} value={k}>
                          {isEn ? POSITION_MULTIPLIERS[k].label.en : POSITION_MULTIPLIERS[k].label.id}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEn ? 'Headcount' : 'Jumlah Tenaga Kerja'}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={headcount}
                    onChange={(e) => setHeadcount(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEn ? `Management Fee: ${mgmtFeePct}%` : `Management Fee: ${mgmtFeePct}%`}
                  </label>
                  <input
                    type="range"
                    min={8}
                    max={18}
                    step={0.5}
                    value={mgmtFeePct}
                    onChange={(e) => setMgmtFeePct(Number(e.target.value))}
                    className="w-full accent-brand-primary"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>8%</span>
                    <span>18%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-light text-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 opacity-90">
                {isEn ? 'Estimated Monthly Cost' : 'Estimasi Biaya Bulanan'}
              </h3>

              <div className="mb-6">
                <div className="text-sm opacity-80 mb-1">
                  {isEn ? 'Total per month' : 'Total per bulan'}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold leading-tight font-headline break-words">
                  {formatIDR(mp.monthly)}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {isEn ? `~${formatIDR(mp.annual)}/year` : `~${formatIDR(mp.annual)}/tahun`}
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 mb-5 backdrop-blur">
                <div className="text-xs uppercase tracking-wider opacity-80 mb-3">
                  {isEn ? 'Per Head Breakdown' : 'Rincian per Tenaga Kerja'}
                </div>
                <div className="space-y-2 text-sm">
                  <Row label={isEn ? 'Base wage (UMP/UMK × level)' : 'Upah pokok (UMP/UMK × level)'} value={formatIDR(mp.basePerHead)} />
                  <Row label={isEn ? 'BPJS employer (≈10.8%)' : 'BPJS perusahaan (≈10,8%)'} value={formatIDR(mp.bpjsPerHead)} />
                  <Row label={isEn ? 'THR allocation (1/12)' : 'Alokasi THR (1/12)'} value={formatIDR(mp.thrPerHead)} />
                  <Row label={isEn ? 'Severance reserve (~6%)' : 'Cadangan pesangon (~6%)'} value={formatIDR(mp.severancePerHead)} />
                  <Row label={isEn ? `Management fee (${mgmtFeePct}%)` : `Management fee (${mgmtFeePct}%)`} value={formatIDR(mp.mgmtFeePerHead)} />
                  <div className="border-t border-white/20 pt-2 mt-2">
                    <Row
                      label={isEn ? 'Total per head' : 'Total per kepala'}
                      value={formatIDR(mp.totalPerHead)}
                      bold
                    />
                    <Row
                      label={isEn ? 'Multiplier vs base wage' : 'Multiplier vs upah pokok'}
                      value={`${mp.multiplier.toFixed(2)}×`}
                      bold
                    />
                  </div>
                </div>
              </div>

              <p className="text-xs opacity-80 mb-5 leading-relaxed">
                {isEn
                  ? 'Estimates assume standard PKWT, 12 monthly THR allocation, and severance reserve per PP 35/2021. Actual rates may vary based on industry, SLA complexity, and contract specifics.'
                  : 'Estimasi mengasumsikan kontrak PKWT standar, alokasi THR 1/12 per bulan, dan cadangan pesangon sesuai PP 35/2021. Tarif aktual dapat berbeda tergantung industri, kompleksitas SLA, dan ketentuan kontrak.'}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-xl font-bold w-full hover:shadow-2xl transition-all duration-300"
              >
                {isEn ? 'Get Accurate Proposal' : 'Minta Proposal Akurat'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {tab === 'bpo' && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6 font-headline">
                {isEn ? 'BPO Cost Estimator' : 'Estimasi Biaya BPO'}
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEn ? 'BPO Service Scope' : 'Lingkup Layanan BPO'}
                  </label>
                  <select
                    value={bpoScope}
                    onChange={(e) => setBpoScope(e.target.value as typeof bpoScope)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  >
                    <option value="payroll">
                      {isEn ? 'Payroll only' : 'Payroll saja'}
                    </option>
                    <option value="bpjs">
                      {isEn ? 'BPJS administration only' : 'Administrasi BPJS saja'}
                    </option>
                    <option value="payrollBpjs">
                      {isEn ? 'Payroll + BPJS' : 'Payroll + BPJS'}
                    </option>
                    <option value="full">
                      {isEn ? 'Full HR BPO (Payroll + BPJS + T&A + HR Admin)' : 'BPO HR Lengkap (Payroll + BPJS + T&A + HR Admin)'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isEn ? 'Number of Employees Managed' : 'Jumlah Karyawan yang Dikelola'}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={bpoEmployees}
                    onChange={(e) => setBpoEmployees(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-brand-lighter/40 rounded-xl text-sm text-gray-600 leading-relaxed">
                <strong className="text-brand-dark">
                  {isEn ? 'Pricing model:' : 'Model pricing:'}
                </strong>{' '}
                {isEn
                  ? 'Per-employee per-month (PEPM). Final rates depend on data complexity, payroll structure, integration needs, and SLA. Range below is a market benchmark.'
                  : 'Per-employee per-month (PEPM). Tarif final bergantung pada kompleksitas data, struktur payroll, kebutuhan integrasi, dan SLA. Range di bawah adalah benchmark pasar.'}
              </div>
            </div>

            {/* Output */}
            <div className="bg-gradient-to-br from-brand-primary to-brand-light text-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 opacity-90">
                {isEn ? 'Estimated Monthly Range' : 'Estimasi Rentang Biaya Bulanan'}
              </h3>

              <div className="mb-6">
                <div className="text-sm opacity-80 mb-1">
                  {isEn ? 'Monthly cost range' : 'Biaya bulanan'}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold leading-tight font-headline break-words">
                  {formatIDR(bpo.monthlyMin)} – {formatIDR(bpo.monthlyMax)}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  {isEn
                    ? `~${formatIDR(bpo.annualMin)} – ${formatIDR(bpo.annualMax)}/year`
                    : `~${formatIDR(bpo.annualMin)} – ${formatIDR(bpo.annualMax)}/tahun`}
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 mb-5 backdrop-blur">
                <div className="text-xs uppercase tracking-wider opacity-80 mb-3">
                  {isEn ? 'Per Employee Range' : 'Rentang per Karyawan'}
                </div>
                <Row
                  label={isEn ? 'Min/employee/month' : 'Min/karyawan/bulan'}
                  value={formatIDR(bpo.perEmployeeMin)}
                />
                <Row
                  label={isEn ? 'Max/employee/month' : 'Max/karyawan/bulan'}
                  value={formatIDR(bpo.perEmployeeMax)}
                />
              </div>

              <p className="text-xs opacity-80 mb-5 leading-relaxed">
                {isEn
                  ? 'PEPM range is a market benchmark for typical engagements. Custom integrations, complex payroll structures, and multi-entity setups may shift pricing.'
                  : 'Range PEPM adalah benchmark pasar untuk engagement tipikal. Integrasi kustom, struktur payroll kompleks, dan multi-entitas dapat mempengaruhi harga.'}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-6 py-3 rounded-xl font-bold w-full hover:shadow-2xl transition-all duration-300"
              >
                {isEn ? 'Get BPO Proposal' : 'Minta Proposal BPO'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

const Row = ({ label, value, bold }: { label: string; value: string; bold?: boolean }) => (
  <div className={`flex justify-between items-baseline gap-3 ${bold ? 'font-bold' : ''}`}>
    <span className="opacity-90">{label}</span>
    <span className="tabular-nums">{value}</span>
  </div>
)

export default OutsourcingCalculator
