import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'id']
const defaultLocale = 'id'

/** Paths served at site root by Next.js (MetadataRoute); must not get /id/ prefix. */
const SKIP_LOCALE_PREFIX = new Set(['/sitemap.xml', '/robots.txt'])

function shouldSkipLocalePrefix(pathname: string): boolean {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return SKIP_LOCALE_PREFIX.has(normalized)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (shouldSkipLocalePrefix(pathname)) {
    return NextResponse.next()
  }

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
    // Skip _next, api, favicon, MetadataRoute URLs, and static asset extensions
    '/((?!_next|api|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|pdf)).*)',
  ],
}
