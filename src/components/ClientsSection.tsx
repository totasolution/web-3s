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
      <section className="py-20 bg-gradient-to-b from-white to-brand-lighter/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
{t('clients.stats.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline">
              {t('clients.stats.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clients.stats.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-sm">
                    {stat.label}
                  </div>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-light rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-4">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
                {isHomePage ? t('clients.home.badge') : t('clients.hero.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline">
              {isHomePage ? t('clients.home.title') : t('clients.logos.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isHomePage ? t('clients.home.description') : t('clients.logos.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.slice(0, isHomePage ? 6 : 12).map((client, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center border border-gray-100 hover:border-brand-light min-h-[150px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-light/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="relative w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xs font-semibold text-gray-600 group-hover:text-gray-800 text-center leading-tight transition-colors">
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
                className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-light text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
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
