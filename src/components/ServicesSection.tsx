'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  Cog,
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
      title: t('services.manPowerSupply.title'), 
      description: t('services.manPowerSupply.description'), 
      features: t('services.manPowerSupply.features') || [],
      color: 'from-brand-primary to-brand-light'
    },
    { 
      icon: Briefcase, 
      title: t('services.humanResource.title'), 
      description: t('services.humanResource.description'), 
      features: t('services.humanResource.features') || [],
      color: 'from-brand-light to-brand-primary'
    },
    { 
      icon: Cog, 
      title: t('services.bpo.title'), 
      description: t('services.bpo.description'), 
      features: t('services.bpo.features') || [],
      color: 'from-brand-primary to-brand-light'
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-brand-lighter/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-light/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
{t('services.badge')}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4 font-headline"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-light/20 to-brand-primary/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-brand-light transform hover:-translate-y-3">
                {/* Top accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <service.icon className="w-10 h-10" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-3">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {Array.isArray(service.features) && service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="mt-0.5">
                          <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/${locale}/services`}
                    className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-light font-bold group/link"
                  >
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50/50 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center space-x-2 bg-brand-primary hover:bg-brand-light text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>{t('services.viewAll')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
