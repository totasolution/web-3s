'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'

export default function AboutPage() {
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

  const coreValues = [
    {
      icon: Target,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Users,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: Award,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description')
    }
  ]

  const gains = [
    t('about.gains.efficiency'),
    t('about.gains.recruitment'),
    t('about.gains.satisfaction'),
    t('about.gains.compliance'),
    t('about.gains.processes'),
    t('about.gains.expertise')
  ]

  const clients = [
    {
      name: t('about.testimonials.client1.name'),
      industry: t('about.testimonials.client1.industry'),
      testimonial: t('about.testimonials.client1.testimonial'),
      rating: 5
    },
    {
      name: t('about.testimonials.client2.name'),
      industry: t('about.testimonials.client2.industry'),
      testimonial: t('about.testimonials.client2.testimonial'),
      rating: 5
    },
    {
      name: t('about.testimonials.client3.name'),
      industry: t('about.testimonials.client3.industry'),
      testimonial: t('about.testimonials.client3.testimonial'),
      rating: 5
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
            {t('about.hero.title')} <span className="bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] bg-clip-text text-transparent">3S</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#6B7A99] max-w-3xl mx-auto"
          >
            {t('about.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* About 3S Section */}
      <section id="about-3s" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[#4F5D75] mb-6">
                {t('about.section.title')}
              </h2>
              <p className="text-lg text-[#6B7A99] mb-6">
                {t('about.section.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#8FA8C9] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7A99]">{t('about.section.bullet1')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#8FA8C9] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7A99]">{t('about.section.bullet2')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#8FA8C9] mt-1 flex-shrink-0" />
                  <p className="text-[#6B7A99]">{t('about.section.bullet3')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#4F5D75] to-[#6B7A99] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">{t('about.section.statsTitle')}</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-[#E2E8F0]">{t('about.section.stats.clients')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">1000+</div>
                    <div className="text-[#E2E8F0]">{t('about.section.stats.placements')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-[#E2E8F0]">{t('about.section.stats.satisfaction')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">7+</div>
                    <div className="text-[#E2E8F0]">{t('about.section.stats.years')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{value.title}</h3>
                <p className="text-[#6B7A99]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {t('about.gains.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {t('about.gains.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gains.map((gain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-[#F7F3E9] rounded-lg border border-[#E2E8F0]"
              >
                <CheckCircle className="w-6 h-6 text-[#8FA8C9] mt-1 flex-shrink-0" />
                <span className="text-[#6B7A99]">{gain}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#F7F3E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{t('about.team.member1.name')}</h3>
              <p className="text-[#6B7A99] mb-2">{t('about.team.member1.role')}</p>
              <p className="text-sm text-[#6B7A99]">{t('about.team.member1.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{t('about.team.member2.name')}</h3>
              <p className="text-[#6B7A99] mb-2">{t('about.team.member2.role')}</p>
              <p className="text-sm text-[#6B7A99]">{t('about.team.member2.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{t('about.team.member3.name')}</h3>
              <p className="text-[#6B7A99] mb-2">{t('about.team.member3.role')}</p>
              <p className="text-sm text-[#6B7A99]">{t('about.team.member3.description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#4F5D75] mb-4">
              {t('about.testimonials.title')}
            </h2>
            <p className="text-xl text-[#6B7A99] max-w-3xl mx-auto">
              {t('about.testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#8FA8C9] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#E8B4A0] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#6B7A99] mb-4 italic">"{client.testimonial}"</p>
                <div>
                  <p className="font-semibold text-[#4F5D75]">{client.name}</p>
                  <p className="text-sm text-[#6B7A99]">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
