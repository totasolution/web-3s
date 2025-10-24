'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown, X } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from '../hooks/useLocale'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [locale])

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
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-sigma.png"
                  alt="Sigma Solusi Servis Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold text-brand-slate hidden sm:block">Sigma Solusi Servis</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href={`/${locale}`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('navigation.home')}
              </Link>
            </div>

            <div className="relative group">
              <div 
                className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={toggleAbout}
              >
                <span>{t('navigation.about')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 duration-300" />
              </div>
              
              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    <Link href={`/${locale}/about`} className="block px-4 py-2 text-brand-slate hover:bg-brand-cream hover:text-brand-muted">
                      {t('navigation.aboutUs')}
                    </Link>
                    <Link href={`/${locale}/about#team`} className="block px-4 py-2 text-brand-slate hover:bg-brand-cream hover:text-brand-muted">
                      {t('navigation.team')}
                    </Link>
                    <Link href={`/${locale}/about#values`} className="block px-4 py-2 text-brand-slate hover:bg-brand-cream hover:text-brand-muted">
                      {t('navigation.values')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group">
              <Link href={`/${locale}/services`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('navigation.services')}
              </Link>
            </div>

            <div className="relative group">
              <Link href={`/${locale}/clients`} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t('navigation.clients')}
              </Link>
            </div>

            <div className="relative group">
              <Link href={`/${locale}/contact`} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                {t('navigation.contact')}
              </Link>
            </div>

            <div className="relative">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <LanguageSwitcher />
            </div>
            <button 
              className="text-brand-slate hover:text-brand-blue transition-colors p-2 rounded-lg hover:bg-brand-cream"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-surface shadow-lg absolute top-16 left-0 right-0"
          >
            <div className="px-4 py-6 space-y-1">
              <Link 
                href={`/${locale}`} 
                className="block text-brand-slate hover:text-brand-blue py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              
              <div className="border-t border-brand-surface pt-3 mt-3">
                <div 
                  className="flex items-center justify-between cursor-pointer text-xs font-medium text-brand-muted uppercase tracking-wider px-3 py-2 mb-2 hover:text-brand-slate"
                  onClick={toggleAbout}
                >
                  <span>{t('navigation.about')}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1"
                    >
                      <Link 
                        href={`/${locale}/about`} 
                        className="block text-brand-slate hover:text-brand-blue py-2 px-6 rounded-lg hover:bg-brand-cream transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t('navigation.aboutUs')}
                      </Link>
                      <Link 
                        href={`/${locale}/about#team`} 
                        className="block text-brand-slate hover:text-brand-blue py-2 px-6 rounded-lg hover:bg-brand-cream transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t('navigation.team')}
                      </Link>
                      <Link 
                        href={`/${locale}/about#values`} 
                        className="block text-brand-slate hover:text-brand-blue py-2 px-6 rounded-lg hover:bg-brand-cream transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t('navigation.values')}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link 
                href={`/${locale}/services`} 
                className="block text-brand-slate hover:text-brand-blue py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.services')}
              </Link>
              
              <Link 
                href={`/${locale}/clients`} 
                className="block text-brand-slate hover:text-brand-blue py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.clients')}
              </Link>
              
              <Link 
                href={`/${locale}/contact`} 
                className="block text-brand-slate hover:text-brand-blue py-3 px-3 rounded-lg hover:bg-brand-cream transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.contact')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
