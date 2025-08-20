'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  Target, 
  BarChart3, 
  FileText, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '@/hooks/useLocale'

export default function ServicesPage() {
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

  const services = [
    {
      id: 'recruitment',
      icon: Users,
      title: t('services.recruitment.title'),
      description: t('services.recruitment.description'),
      features: t('services.recruitment.features'),
      benefits: t('services.recruitment.benefits'),
      color: 'from-[#4F5D75] to-[#6B7A99]',
      bgColor: 'bg-[#F7F3E9]'
    },
    {
      id: 'hr-process',
      icon: Briefcase,
      title: t('services.hrProcess.title'),
      description: t('services.hrProcess.description'),
      features: t('services.hrProcess.features'),
      benefits: t('services.hrProcess.benefits'),
      color: 'from-[#6B7A99] to-[#8FA8C9]',
      bgColor: 'bg-[#E2E8F0]'
    },
    {
      id: 'training',
      icon: Target,
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: t('services.training.features'),
      benefits: t('services.training.benefits'),
      color: 'from-[#8FA8C9] to-[#4F5D75]',
      bgColor: 'bg-[#F7F3E9]'
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: t('services.analytics.features'),
      benefits: t('services.analytics.benefits'),
      color: 'from-[#4F5D75] to-[#E8B4A0]',
      bgColor: 'bg-[#E2E8F0]'
    },
    {
      id: 'compliance',
      icon: FileText,
      title: t('services.compliance.title'),
      description: t('services.compliance.description'),
      features: t('services.compliance.features'),
      benefits: t('services.compliance.benefits'),
      color: 'from-[#E8B4A0] to-[#6B7A99]',
      bgColor: 'bg-[#F7F3E9]'
    },
    {
      id: 'consulting',
      icon: Shield,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features'),
      benefits: t('services.consulting.benefits'),
      color: 'from-[#6B7A99] to-[#8FA8C9]',
      bgColor: 'bg-[#E2E8F0]'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#F7F3E9] via-white to-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-[#4F5D75] mb-6"
          >
            {t('services.hero.title')} <span className="bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] bg-clip-text text-transparent">{t('services.hero.subtitle')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#6B7A99] max-w-3xl mx-auto"
          >
            {t('services.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`${service.bgColor} rounded-2xl p-8 border border-[#E2E8F0]`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-[#4F5D75] mb-4">{service.title}</h2>
                <p className="text-lg text-[#6B7A99] mb-6">{service.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5D75] mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#8FA8C9] mr-2" />
                      {t('common.keyFeatures')}
                    </h3>
                    <ul className="space-y-2">
                      {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#8FA8C9] mt-1 mr-2 flex-shrink-0" />
                          <span className="text-[#6B7A99]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5D75] mb-4 flex items-center">
                      <Star className="w-5 h-5 text-[#E8B4A0] mr-2" />
                      {t('common.benefits')}
                    </h3>
                    <ul className="space-y-2">
                      {Array.isArray(service.benefits) && service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <Star className="w-4 h-4 text-[#E8B4A0] mt-1 mr-2 flex-shrink-0" />
                          <span className="text-[#6B7A99]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4F5D75] to-[#6B7A99]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('services.page.cta.title')}
            </h2>
            <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              {t('services.page.cta.subtitle')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 bg-white text-[#4F5D75] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7F3E9] transition-colors duration-300"
            >
              <span>{t('services.page.cta.button')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
