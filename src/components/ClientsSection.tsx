'use client'

import { motion } from 'framer-motion'
import { useLocale } from '../hooks/useLocale'

const ClientsSection = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const locale = useLocale()
  
  // Import messages based on locale
  const messages = locale === 'en'
    ? require('../../messages/en.json')
    : require('../../messages/id.json')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  const clientLogos = [
    { name: 'PT. Maju Bersama', logo: '/logo-sigma.png' },
    { name: 'CV. Sukses Mandiri', logo: '/logo-sigma.png' },
    { name: 'PT. Global Solutions', logo: '/logo-sigma.png' },
    { name: 'PT. Inovasi Digital', logo: '/logo-sigma.png' },
    { name: 'CV. Prima Sejahtera', logo: '/logo-sigma.png' },
    { name: 'PT. Energi Bersih', logo: '/logo-sigma.png' },
    { name: 'PT. Teknologi Maju', logo: '/logo-sigma.png' },
    { name: 'CV. Sukses Bersama', logo: '/logo-sigma.png' },
    { name: 'PT. Solusi Digital', logo: '/logo-sigma.png' },
    { name: 'PT. Inovasi Teknologi', logo: '/logo-sigma.png' },
    { name: 'CV. Prima Digital', logo: '/logo-sigma.png' },
    { name: 'PT. Energi Terbarukan', logo: '/logo-sigma.png' }
  ]

  const stats = [
    {
      number: '50+',
      label: locale === 'en' ? 'Happy Clients' : 'Klien Puas'
    },
    {
      number: '100+',
      label: locale === 'en' ? 'Projects Completed' : 'Proyek Selesai'
    },
    {
      number: '95%',
      label: locale === 'en' ? 'Client Satisfaction' : 'Kepuasan Klien'
    },
    {
      number: '5+',
      label: locale === 'en' ? 'Years Experience' : 'Tahun Pengalaman'
    }
  ]

  return (
    <>
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {t('clients.stats.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {t('clients.stats.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#8FA8C9] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#6B7A99] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {isHomePage ? t('clients.home.title') : t('clients.logos.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {isHomePage ? t('clients.home.description') : t('clients.logos.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.slice(0, isHomePage ? 6 : 12).map((client, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border border-[#E2E8F0]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium text-[#4F5D75] text-center leading-tight">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>

          {isHomePage && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href={`/${locale}/clients`}
                className="inline-flex items-center space-x-2 text-[#4F5D75] hover:text-[#8FA8C9] font-semibold text-lg transition-colors duration-300"
              >
                <span>{t('clients.home.viewAll')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default ClientsSection
