'use client'

import { usePathname } from 'next/navigation'

export function useLocale() {
  const pathname = usePathname()
  
  if (pathname?.startsWith('/en')) {
    return 'en'
  }
  
  return 'id'
}
