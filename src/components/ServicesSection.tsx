'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  Target, 
  BarChart3, 
  FileText, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../hooks/useLocale'

const ServicesSection = () => {
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
  
  const services = [
    {
      icon: Users,
      title: t('services.recruitment.title'),
      description: t('services.recruitment.description'),
      features: t('services.recruitment.features') || [],
      color: 'from-[#4F5D75] to-[#6B7A99]'
    },
    {
      icon: Briefcase,
      title: t('services.hrProcess.title'),
      description: t('services.hrProcess.description'),
      features: t('services.hrProcess.features') || [],
      color: 'from-[#6B7A99] to-[#8FA8C9]'
    },
    {
      icon: Target,
      title: t('services.training.title'),
      description: t('services.training.description'),
      features: t('services.training.features') || [],
      color: 'from-[#8FA8C9] to-[#4F5D75]'
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.description'),
      features: t('services.analytics.features') || [],
      color: 'from-[#4F5D75] to-[#E8B4A0]'
    },
    {
      icon: FileText,
      title: t('services.compliance.title'),
      description: t('services.compliance.description'),
      features: t('services.compliance.features') || [],
      color: 'from-[#E8B4A0] to-[#6B7A99]'
    },
    {
      icon: Shield,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: t('services.consulting.features') || [],
      color: 'from-[#6B7A99] to-[#8FA8C9]'
    }
  ]

  return (
    <section className="py-20 bg-[#F7F3E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#4F5D75] mb-4"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-[#6B7A99] max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-[#E2E8F0]"
            >
              <div className={`p-6 bg-gradient-to-r ${service.color} text-white`}>
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {Array.isArray(service.features) && service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#8FA8C9] flex-shrink-0" />
                      <span className="text-[#6B7A99]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center space-x-2 text-[#4F5D75] hover:text-[#8FA8C9] font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  <span>{t('common.learnMore')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
