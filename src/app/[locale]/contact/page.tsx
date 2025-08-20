'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react'
import { useLocale } from '@/hooks/useLocale'
import Link from 'next/link'

export default function ContactPage() {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.officeAddress'),
      details: 'Jakarta, Indonesia',
      description: locale === 'en' ? 'Main office located in the heart of Jakarta' : 'Kantor utama berlokasi di jantung Jakarta'
    },
    {
      icon: Phone,
      title: t('contact.info.phoneNumber'),
      details: '+62 21 1234 5678',
      description: locale === 'en' ? 'Available Monday to Friday, 9 AM - 6 PM' : 'Tersedia Senin hingga Jumat, 9 AM - 6 PM'
    },
    {
      icon: Mail,
      title: t('contact.info.emailAddress'),
      details: 'info@sigmasolusiservis.com',
      description: locale === 'en' ? 'We respond within 24 hours' : 'Kami merespons dalam 24 jam'
    },
    {
      icon: Clock,
      title: t('contact.info.businessHours'),
      details: locale === 'en' ? 'Mon - Fri: 9:00 AM - 6:00 PM' : 'Sen - Jum: 9:00 AM - 6:00 PM',
      description: locale === 'en' ? 'Weekend consultations available by appointment' : 'Konsultasi akhir pekan tersedia dengan janji temu'
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
            {t('contact.hero.title')} <span className="bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] bg-clip-text text-transparent">{t('contact.hero.subtitle')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#6B7A99] max-w-3xl mx-auto"
          >
            {t('contact.hero.description')}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-[#E2E8F0]"
            >
              <h2 className="text-3xl font-bold text-[#4F5D75] mb-6">{t('contact.form.title')}</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-[#8FA8C9] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-[#4F5D75] mb-2">{t('contact.form.success')}</h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#4F5D75] mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#4F5D75] mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[#4F5D75] mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#4F5D75] mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#4F5D75] mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                    >
                      <option value="">{locale === 'en' ? 'Select a service' : 'Pilih layanan'}</option>
                      <option value="recruitment">{locale === 'en' ? 'Recruitment & Staffing' : 'Rekrutmen & Staffing'}</option>
                      <option value="hr-process">{locale === 'en' ? 'HR Process Optimization' : 'Optimasi Proses HR'}</option>
                      <option value="training">{locale === 'en' ? 'Training & Development' : 'Pelatihan & Pengembangan'}</option>
                      <option value="analytics">{locale === 'en' ? 'HR Analytics & Reporting' : 'Analitik & Pelaporan HR'}</option>
                      <option value="compliance">{locale === 'en' ? 'Compliance & Legal Support' : 'Kepatuhan & Dukungan Hukum'}</option>
                      <option value="consulting">{locale === 'en' ? 'Strategic HR Consulting' : 'Konsultasi HR Strategis'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4F5D75] mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#8FA8C9] focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4F5D75] to-[#6B7A99] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('contact.form.submit')}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#4F5D75] mb-8">{t('contact.info.title')}</h2>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-[#F7F3E9] rounded-xl border border-[#E2E8F0]"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#4F5D75] to-[#8FA8C9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#4F5D75] mb-2">{info.title}</h3>
                    <p className="text-lg font-medium text-[#6B7A99] mb-1">{info.details}</p>
                    <p className="text-[#6B7A99]">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4F5D75] to-[#6B7A99]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('contact.cta.title')}
            </h2>
            <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
              {t('contact.cta.subtitle')}
            </p>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center space-x-2 bg-white text-[#4F5D75] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7F3E9] transition-colors duration-300"
            >
              <span>{t('contact.cta.button')}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
