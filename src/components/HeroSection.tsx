'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, TrendingUp, Shield } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../hooks/useLocale'

const HeroSection = () => {
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
  
  const ctaPrimary = t('hero.cta.primary') !== 'hero.cta.primary' ? t('hero.cta.primary') : (locale === 'en' ? 'Start Now' : 'Mulai Sekarang')
  const ctaSecondary = t('hero.cta.secondary') !== 'hero.cta.secondary' ? t('hero.cta.secondary') : (locale === 'en' ? 'Contact Us' : 'Hubungi Kami')
  
  const features = [
    {
      icon: Users,
      title: t('hero.features.manPower') !== 'hero.features.manPower' ? t('hero.features.manPower') : (locale === 'en' ? 'Man Power Solutions' : 'Solusi Man Power'),
      description: t('hero.features.manPowerDesc') !== 'hero.features.manPowerDesc' ? t('hero.features.manPowerDesc') : (locale === 'en' ? 'Comprehensive staffing and recruitment' : 'Layanan staffing dan rekrutmen komprehensif')
    },
    {
      icon: TrendingUp,
      title: t('hero.features.hrdEfficiency') !== 'hero.features.hrdEfficiency' ? t('hero.features.hrdEfficiency') : (locale === 'en' ? 'HR Efficiency' : 'Efisiensi HRD'),
      description: t('hero.features.hrdEfficiencyDesc') !== 'hero.features.hrdEfficiencyDesc' ? t('hero.features.hrdEfficiencyDesc') : (locale === 'en' ? 'Streamline HR processes' : 'Optimasi proses HR')
    },
    {
      icon: Shield,
      title: t('hero.features.trustedPartner') !== 'hero.features.trustedPartner' ? t('hero.features.trustedPartner') : (locale === 'en' ? 'Trusted Partner' : 'Mitra Terpercaya'),
      description: t('hero.features.trustedPartnerDesc') !== 'hero.features.trustedPartnerDesc' ? t('hero.features.trustedPartnerDesc') : (locale === 'en' ? 'Reliable consulting and support' : 'Konsultasi dan dukungan yang handal')
    }
  ]

  return (
    <section className="relative flex items-center bg-gradient-to-br from-brand-lighter via-white to-brand-white overflow-hidden pt-24 pb-20 min-h-[90vh]">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Gradient orbs - Using brand colors */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-brand-light/20 via-brand-primary/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-brand-primary/10 via-brand-light/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-gradient-to-br from-brand-light/15 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-brand-lighter px-4 py-2 rounded-full mb-6 border border-brand-primary/20"
            >
              <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
              <span className="text-brand-primary font-semibold text-sm">{t('hero.badge')}</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight font-headline"
            >
              <span className="block bg-gradient-to-r from-brand-primary via-brand-light to-brand-primary bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
              <span className="block text-brand-dark mt-2">{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-medium"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                href={`/${locale}/services`}
                className="group relative inline-flex items-center justify-center space-x-2 bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-primary/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">{ctaPrimary}</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-brand-primary hover:text-brand-primary shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>{ctaSecondary}</span>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 hover:border-brand-light hover:bg-white transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-light text-white flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-brand-primary transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Floating decoration elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-brand-light/30 to-brand-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-brand-primary/30 to-brand-light/30 rounded-full blur-3xl"></div>
            
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-light/5 z-10"></div>
              <img
                src="/brand/kolaborasi-tim-kantor-modern-untuk-outsourcing.jpg"
                alt="Team collaboration illustration"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-primary/20 to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-light/20 to-transparent z-20"></div>
            </div>
            
            {/* Stats badges - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-light to-brand-primary flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">500+</span>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-sm">{t('hero.stats.clients')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.stats.clientsDesc')}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, type: "spring" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 hover:shadow-3xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-light flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">10+</span>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-sm">{t('hero.stats.experience')}</p>
                  <p className="text-gray-500 text-xs">{t('hero.stats.experienceDesc')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
