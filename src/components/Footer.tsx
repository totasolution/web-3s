'use client'

import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram,
  ArrowUp
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLocale } from '../hooks/useLocale'
import Link from 'next/link'

const Footer = () => {
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-[#4F5D75] to-[#6B7A99] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-sigma.png"
                  alt="Sigma Solusi Servis Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t('footer.companyName')}</h3>
                <p className="text-[#E2E8F0]">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-[#E2E8F0] mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#8FA8C9] rounded-lg flex items-center justify-center hover:bg-[#E8B4A0] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8FA8C9] rounded-lg flex items-center justify-center hover:bg-[#E8B4A0] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8FA8C9] rounded-lg flex items-center justify-center hover:bg-[#E8B4A0] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('footer.ourServices')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/clients`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('footer.clients')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('footer.contactUs')}
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.ourServices')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/services#recruitment`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('services.recruitment.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#hr-process`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('services.hrProcess.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#training`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('services.training.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#analytics`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('services.analytics.title')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services#consulting`} className="text-[#E2E8F0] hover:text-white transition-colors">
                  {t('services.consulting.title')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#8FA8C9] mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-[#E8B4A0]" />
              <span className="text-[#E2E8F0]">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#E8B4A0]" />
              <span className="text-[#E2E8F0]">+62 21 1234 5678</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#E8B4A0]" />
              <span className="text-[#E2E8F0]">info@sigmasolusiservis.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#8FA8C9] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#E2E8F0] text-sm">
            {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#E2E8F0] hover:text-white text-sm transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-[#E2E8F0] hover:text-white text-sm transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#E8B4A0] hover:bg-[#8FA8C9] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer