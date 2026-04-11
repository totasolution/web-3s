import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'id']
const defaultLocale = 'id'

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1]
    if (locales.includes(locale)) {
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-next-locale', locale)
      return NextResponse.next({
        request: { headers: requestHeaders },
      })
    }
  }

  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), api routes, static files, and favicon
    '/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|pdf)).*)',
  ],
}
