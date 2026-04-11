'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SetHtmlLangFromPath() {
  const pathname = usePathname()

  useEffect(() => {
    const seg = pathname?.split('/').filter(Boolean)[0]
    document.documentElement.lang = seg === 'en' ? 'en' : 'id'
  }, [pathname])

  return null
}
