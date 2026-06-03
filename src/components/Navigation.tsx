'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
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

  const contactCtaLabel =
    t('navigation.contactCta') !== 'navigation.contactCta'
      ? t('navigation.contactCta')
      : t('navigation.contact')

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[4.5rem] gap-3 min-w-0">
          <div className="flex-shrink-0 min-w-0">
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-sigma.png"
                  alt="Sigma Solusi Servis logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold text-brand-dark whitespace-nowrap">
                <span className="sm:hidden">Sigma</span>
                <span className="hidden sm:inline">Sigma Solusi Servis</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 min-w-0 items-center justify-end flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 lg:gap-x-5">
            <div className="relative group shrink-0">
              <Link href={`/${locale}`} className="text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap">
                {t('navigation.home')}
              </Link>
            </div>

            <div className="relative group shrink-0">
              <div 
                className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap"
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
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100"
                  >
                    <Link href={`/${locale}/about`} className="block px-4 py-3 text-gray-700 hover:bg-brand-lighter hover:text-brand-primary transition-colors rounded-lg mx-2">
                      {t('navigation.aboutUs')}
                    </Link>
                    <Link href={`/${locale}/about#values`} className="block px-4 py-3 text-gray-700 hover:bg-brand-lighter hover:text-brand-primary transition-colors rounded-lg mx-2">
                      {t('navigation.values')}
                    </Link>
                    <Link href={`/${locale}/insights`} className="block px-4 py-3 text-gray-700 hover:bg-brand-lighter hover:text-brand-primary transition-colors rounded-lg mx-2">
                      {t('navigation.insights')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group shrink-0">
              <Link href={`/${locale}/services`} className="text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap">
                {t('navigation.services')}
              </Link>
            </div>

            <div className="relative group shrink-0">
              <Link href={`/${locale}/insights`} className="text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap">
                {t('navigation.insights')}
              </Link>
            </div>

            <div className="relative group shrink-0">
              <Link href={`/${locale}/careers`} className="text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap">
                {t('navigation.careers')}
              </Link>
            </div>

            <div className="relative group shrink-0">
              <Link href={`/${locale}/clients`} className="text-gray-700 hover:text-brand-primary transition-colors font-medium whitespace-nowrap">
                {t('navigation.clients')}
              </Link>
            </div>

            <div className="relative shrink-0">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:hidden flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-3">
            <div className="relative shrink-0">
              <LanguageSwitcher />
            </div>
            <button
              className="shrink-0 text-brand-dark hover:text-brand-primary transition-colors p-2 rounded-lg hover:bg-brand-lighter"
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

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-[72px]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl fixed top-[72px] left-0 right-0 z-50 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-2">
              <Link 
                href={`/${locale}`} 
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.home')}
              </Link>
              
              <div className="border-t border-gray-100 pt-3 mt-3">
                <div 
                  className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-brand-primary hover:bg-brand-lighter px-4 py-3 rounded-xl transition-all font-semibold"
                  onClick={toggleAbout}
                >
                  <span>{t('navigation.about')}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1 mt-2 ml-4 pl-4 border-l-2 border-brand-light"
                    >
                      <Link 
                        href={`/${locale}/about`} 
                        className="block text-gray-600 hover:text-brand-primary hover:bg-brand-lighter py-2.5 px-4 rounded-lg transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {t('navigation.aboutUs')}
                      </Link>
                      <Link 
                        href={`/${locale}/about#values`} 
                        className="block text-gray-600 hover:text-brand-primary hover:bg-brand-lighter py-2.5 px-4 rounded-lg transition-all"
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
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.services')}
              </Link>

              <Link 
                href={`/${locale}/insights`} 
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.insights')}
              </Link>
              
              <Link 
                href={`/${locale}/clients`} 
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.clients')}
              </Link>

              <Link
                href={`/${locale}/careers`}
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {t('navigation.careers')}
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="block text-gray-700 hover:text-brand-primary hover:bg-brand-lighter py-3 px-4 rounded-xl transition-all font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {contactCtaLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
