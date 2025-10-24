'use client'

import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Facebook, 
  Instagram
} from 'lucide-react'
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

  return (
    <footer className="relative isolate z-50 w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Brand and Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-sigma.png"
                  alt="Sigma Solusi Servis Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t('footer.companyName')}</h3>
                <p className="text-white/70">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300 shadow-lg" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href={`/${locale}`} className="hover:text-white transition-colors">{t('footer.home')}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-white transition-colors">{t('footer.aboutUs')}</Link></li>
                <li><Link href={`/${locale}/services`} className="hover:text-white transition-colors">{t('footer.ourServices')}</Link></li>
                <li><Link href={`/${locale}/clients`} className="hover:text-white transition-colors">{t('footer.clients')}</Link></li>
                <li><Link href={`/${locale}/contact`} className="hover:text-white transition-colors">{t('footer.contactUs')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.ourServices')}</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href={`/${locale}/services#manpower`} className="hover:text-white hover:pl-2 transition-all duration-200">{t('services.manPowerSupply.title')}</Link></li>
                <li><Link href={`/${locale}/services#hr`} className="hover:text-white hover:pl-2 transition-all duration-200">{t('services.humanResource.title')}</Link></li>
                <li><Link href={`/${locale}/services#bpo`} className="hover:text-white hover:pl-2 transition-all duration-200">{t('services.bpo.title')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-3"><MapPin className="w-5 h-5" /><span>Jakarta, Indonesia</span></li>
                <li className="flex items-center space-x-3"><Phone className="w-5 h-5" /><span>+62 21 1234 5678</span></li>
                <li className="flex items-center space-x-3"><Mail className="w-5 h-5" /><span>info@sigmasolusiservis.com</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/75 hover:text-white text-sm transition-all duration-200 hover:underline">{t('footer.privacyPolicy')}</Link>
            <Link href="/terms" className="text-white/75 hover:text-white text-sm transition-all duration-200 hover:underline">{t('footer.termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer