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
  
  const features = [
    {
      icon: Users,
      title: t('hero.features.manPower'),
      description: t('hero.features.manPowerDesc')
    },
    {
      icon: TrendingUp,
      title: t('hero.features.hrdEfficiency'),
      description: t('hero.features.hrdEfficiencyDesc')
    },
    {
      icon: Shield,
      title: t('hero.features.trustedPartner'),
      description: t('hero.features.trustedPartnerDesc')
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F7F3E9] via-white to-[#E2E8F0] overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8FA8C9]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E8B4A0]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#4F5D75] mb-6"
          >
            <span className="bg-gradient-to-r from-[#4F5D75] to-[#6B7A99] bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
            <br />
            <span className="text-[#2D3748]">{t('hero.subtitle')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#6B7A99] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#4F5D75] to-[#6B7A99] hover:from-[#6B7A99] hover:to-[#4F5D75] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>{t('hero.cta.primary')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 border-2 border-[#8FA8C9] text-[#4F5D75] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#8FA8C9] hover:text-white transition-all duration-300"
            >
              <span>{t('hero.cta.secondary')}</span>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F5D75] to-[#8FA8C9] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{feature.title}</h3>
                <p className="text-[#6B7A99]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
