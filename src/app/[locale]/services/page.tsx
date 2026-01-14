'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  Cog,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronRight,
  UserCheck,
  UserPlus,
  Search,
  GraduationCap,
  ClipboardList,
  DollarSign,
  Clock
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
      id: 'manPowerSupply',
      icon: Users,
      title: t('services.manPowerSupply.title'),
      description: t('services.manPowerSupply.description'),
      features: t('services.manPowerSupply.features'),
      benefits: t('services.manPowerSupply.benefits'),
      subServices: [
        {
          icon: UserCheck,
          title: t('services.manPowerSupply.subServices.peo.title'),
          description: t('services.manPowerSupply.subServices.peo.description'),
          color: 'from-brand-primary to-brand-primary'
        },
        {
          icon: UserPlus,
          title: t('services.manPowerSupply.subServices.staffing.title'),
          description: t('services.manPowerSupply.subServices.staffing.description'),
          color: 'from-cyan-500 to-brand-primary'
        }
      ],
      color: 'from-brand-blue to-brand-blueDark',
      bgColor: 'bg-brand-cream'
    },
    {
      id: 'humanResource',
      icon: Briefcase,
      title: t('services.humanResource.title'),
      description: t('services.humanResource.description'),
      features: t('services.humanResource.features'),
      benefits: t('services.humanResource.benefits'),
      subServices: [
        {
          icon: Search,
          title: t('services.humanResource.subServices.headhunting.title'),
          description: t('services.humanResource.subServices.headhunting.description'),
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: GraduationCap,
          title: t('services.humanResource.subServices.hrDevelopment.title'),
          description: t('services.humanResource.subServices.hrDevelopment.description'),
          color: 'from-indigo-500 to-purple-500'
        },
        {
          icon: ClipboardList,
          title: t('services.humanResource.subServices.hrAdministration.title'),
          description: t('services.humanResource.subServices.hrAdministration.description'),
          color: 'from-brand-primary to-indigo-500'
        }
      ],
      color: 'from-brand-blueDark to-brand-blue',
      bgColor: 'bg-white'
    },
    {
      id: 'bpo',
      icon: Cog,
      title: t('services.bpo.title'),
      description: t('services.bpo.description'),
      features: t('services.bpo.features'),
      benefits: t('services.bpo.benefits'),
      subServices: [
        {
          icon: DollarSign,
          title: t('services.bpo.subServices.payroll.title'),
          description: t('services.bpo.subServices.payroll.description'),
          color: 'from-emerald-500 to-green-600'
        },
        {
          icon: Clock,
          title: t('services.bpo.subServices.timeAttendance.title'),
          description: t('services.bpo.subServices.timeAttendance.description'),
          color: 'from-orange-500 to-amber-500'
        }
      ],
      color: 'from-brand-blue to-brand-blueLight',
      bgColor: 'bg-brand-cream'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-brand-lighter/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
{t('services.hero.badge')}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
          >
            {t('services.hero.title')} <span className="bg-gradient-to-r from-brand-primary to-cyan-500 bg-clip-text text-transparent">{t('services.hero.subtitle')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('services.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Service Card */}
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  {/* Colored Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  <div className="p-8 md:p-12">
                    {/* Header Section */}
                    <div className="mb-10">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    {/* Sub-services Grid */}
                    {service.subServices && service.subServices.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <ChevronRight className="w-6 h-6 text-brand-primary mr-2" />
                          Included Services
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {service.subServices.map((subService, subIndex) => {
                            const SubServiceIcon = subService.icon
                            return (
                              <div key={subIndex} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex gap-4">
                                  <div className="relative flex-shrink-0">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${subService.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${subService.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                      <SubServiceIcon className="w-7 h-7 text-white" />
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">{subService.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{subService.description}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary via-blue-700 to-indigo-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {t('services.page.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              {t('services.page.cta.subtitle')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center space-x-2 bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300"
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
