'use client'

import Link from 'next/link'
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
  Quote,
  ArrowRight,
  FileText,
  Download
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-lighter via-white to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
              {t('about.hero.badge')}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-brand-dark mb-6 font-headline"
          >
            {t('about.hero.title')} <span className="bg-gradient-to-r from-brand-primary to-brand-light bg-clip-text text-transparent">3S</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              <h2 className="text-4xl font-bold text-brand-dark mb-6 font-headline">
                {t('about.section.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.section.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{t('about.section.bullet1')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{t('about.section.bullet2')}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{t('about.section.bullet3')}</p>
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
              <div className="bg-gradient-to-br from-brand-primary to-brand-light rounded-2xl p-8 shadow-xl" style={{color: 'white'}}>
                <h3 className="text-2xl font-bold mb-6 text-center" style={{color: 'white'}}>Why Choose 3S?</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: 'white'}}>50+</div>
                    <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: 'white'}}>5000+</div>
                    <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Successful Placements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: 'white'}}>95%</div>
                    <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2" style={{color: 'white'}}>10+</div>
                    <div className="text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-24 bg-gradient-to-b from-white via-brand-lighter/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-light/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-brand-primary font-bold text-sm uppercase tracking-wider bg-brand-lighter px-4 py-2 rounded-full">
                {t('about.values.badge')}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-light transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-brand-primary transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lighter border border-brand-lighter mb-6">
              <Award className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-primary">{t('about.gains.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              {t('about.gains.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group flex items-start space-x-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-brand-light hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{gain}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section - Elegant Version */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <FileText className="w-4 h-4 text-brand-light" />
              <span className="text-sm font-semibold text-brand-lighter">{t('about.companyProfile.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {t('about.companyProfile.title')}
            </h2>
            <p className="text-xl text-brand-lighter max-w-3xl mx-auto leading-relaxed">
              {t('about.companyProfile.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-purple-600 to-brand-light rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left side - Icon and Stats */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex-shrink-0 text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-light rounded-3xl blur-xl opacity-50"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-light rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-brand-lighter to-indigo-50 rounded-xl p-4 border border-brand-lighter">
                      <div className="text-2xl font-bold text-brand-primary">25+</div>
                      <div className="text-xs text-gray-600">{locale === 'en' ? 'Pages' : 'Halaman'}</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="text-2xl font-bold text-purple-600">PDF</div>
                      <div className="text-xs text-gray-600">{locale === 'en' ? 'Format' : 'Format'}</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right side - Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                    {t('about.companyProfile.cardTitle')}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {t('about.companyProfile.cardDescription')}
                  </p>
                  
                  {/* Features list */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{locale === 'en' ? 'Complete service portfolio' : 'Portofolio layanan lengkap'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{locale === 'en' ? 'Company achievements' : 'Pencapaian perusahaan'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{locale === 'en' ? 'Client testimonials' : 'Testimoni klien'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{locale === 'en' ? 'Expert team profiles' : 'Profil tim ahli'}</span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="/assets/company-profile-3s.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      type="application/pdf"
                      className="group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <FileText className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">{t('about.companyProfile.viewButton')}</span>
                      <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    
                    <a
                      href="/assets/company-profile-3s.pdf"
                      download="Sigma-Solusi-Servis-Company-Profile.pdf"
                      type="application/pdf"
                      className="group/btn inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-brand-primary hover:text-brand-primary hover:bg-brand-lighter hover:shadow-lg transition-all duration-300"
                    >
                      <Download className="w-5 h-5 group-hover/btn:translate-y-0.5 transition-transform" />
                      {t('about.companyProfile.downloadButton')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6">
              <Quote className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-600">{t('about.testimonials.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              {t('about.testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-brand-light transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-brand-lighter rounded-xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{client.testimonial}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-800 text-lg">{client.name}</p>
                  <p className="text-sm text-gray-600">{client.industry}</p>
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-brand-lighter mb-10 leading-relaxed">
              {t('about.cta.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-brand-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3"
              >
                {t('about.cta.button')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
