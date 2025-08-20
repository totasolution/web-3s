'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useLocale } from '../hooks/useLocale'
import { useRouter, usePathname } from 'next/navigation'

const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  const handleLanguageChange = (newLocale: string) => {
    // Update URL to reflect language change
    const pathWithoutLocale = pathname.replace(/^\/(id|en)/, '')
    const newPath = `/${newLocale}${pathWithoutLocale || ''}`
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-[#4F5D75] hover:text-[#8FA8C9] transition-colors rounded-lg hover:bg-[#F7F3E9]"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.code.toUpperCase()}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E2E8F0] py-2 z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-[#F7F3E9] transition-colors ${
                  language.code === currentLanguage?.code ? 'bg-[#8FA8C9]/10 text-[#4F5D75]' : 'text-[#4F5D75]'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="flex-1 text-sm font-medium">{language.name}</span>
                {language.code === currentLanguage?.code && (
                  <Check className="w-4 h-4 text-[#4F5D75]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
