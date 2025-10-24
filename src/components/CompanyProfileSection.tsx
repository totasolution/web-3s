'use client'

import { motion } from 'framer-motion'
import { FileText, Download, ArrowRight } from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

export default function CompanyProfileSection() {
  const locale = useLocale()
  
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

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-light/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lighter border border-brand-light/30 mb-6">
              <FileText className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">{t('companyProfile.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline">
              {t('companyProfile.title')} <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent">{t('companyProfile.highlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('companyProfile.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-lighter via-white to-brand-lighter rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-light rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Sigma Solusi Servis
                </h3>
                <p className="text-gray-600 mb-6">
                  {locale === 'en' 
                    ? 'Your trusted HR solutions partner since 2017' 
                    : 'Mitra solusi HR terpercaya Anda sejak 2017'}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="/assets/company-profile-3s.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    type="application/pdf"
                    className="group/btn inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-light text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <FileText className="w-5 h-5" />
                    {t('companyProfile.viewButton')}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="/assets/company-profile-3s.pdf"
                    download="Sigma-Solusi-Servis-Company-Profile.pdf"
                    type="application/pdf"
                    className="group/btn inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-brand-primary hover:text-brand-primary hover:shadow-lg transition-all duration-300"
                  >
                    <Download className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform" />
                    {t('companyProfile.downloadButton')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

