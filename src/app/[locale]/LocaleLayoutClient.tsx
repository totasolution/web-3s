'use client'

import { useEffect } from 'react'

interface LocaleLayoutClientProps {
  children: React.ReactNode
  locale: string
}

export default function LocaleLayoutClient({ children, locale }: LocaleLayoutClientProps) {
  useEffect(() => {
    // Set the lang attribute on the html element
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])

  return (
    <div lang={locale}>
      {children}
    </div>
  )
}
