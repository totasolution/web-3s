'use client'

import { motion } from 'framer-motion'
import { useLocale } from '../../../hooks/useLocale'
import Navigation from '../../../components/Navigation'
import ClientsSection from '../../../components/ClientsSection'
import Footer from '../../../components/Footer'

const ClientsPage = () => {
  const locale = useLocale()
  
  // Import messages based on locale
  const messages = locale === 'en'
    ? require('../../../../messages/en.json')
    : require('../../../../messages/id.json')

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

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-[#4F5D75] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('clients.hero.title')} <span className="bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] bg-clip-text text-transparent">{t('clients.hero.highlight')}</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-[#6B7A99] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('clients.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Clients Section with Stats */}
      <ClientsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4F5D75] to-[#6B7A99]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('clients.cta.title')}
            </h2>
            <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              {t('clients.cta.description')}
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 bg-white text-[#4F5D75] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7F3E9] transition-colors duration-300"
            >
              <span>{t('clients.cta.button')}</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ClientsPage
