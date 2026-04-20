import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'id']
const defaultLocale = 'id'

/** Paths served at site root by Next.js (MetadataRoute); must not get /id/ prefix. */
const SKIP_LOCALE_PREFIX = new Set(['/sitemap.xml', '/robots.txt'])

/** Query keys that create duplicate URLs in Search Console; strip via 308 → canonical URL. */
const DISCARDABLE_SEARCH_PARAM = new Set([
  'trk',
  'fbclid',
  'gclid',
  'gbraid',
  'wbraid',
  'msclkid',
  'igshid',
  'mc_cid',
  'mc_eid',
  '_hsenc',
  '_hsmi',
])

function shouldSkipLocalePrefix(pathname: string): boolean {
  const normalized = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return SKIP_LOCALE_PREFIX.has(normalized)
}

/** Mutates `url` search params; returns true if anything was removed. */
function stripDiscardableSearchParams(url: URL): boolean {
  const keys = [...url.searchParams.keys()]
  if (keys.length === 0) return false
  let changed = false
  for (const key of keys) {
    const lower = key.toLowerCase()
    if (DISCARDABLE_SEARCH_PARAM.has(lower) || lower.startsWith('utm_')) {
      url.searchParams.delete(key)
      changed = true
    }
  }
  return changed
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (shouldSkipLocalePrefix(pathname)) {
    return NextResponse.next()
  }

  const cleaned = request.nextUrl.clone()
  if (stripDiscardableSearchParams(cleaned) && cleaned.href !== request.nextUrl.href) {
    return NextResponse.redirect(cleaned, 308)
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
  const target = request.nextUrl.clone()
  target.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(target, 308)
}

export const config = {
  matcher: [
    // Skip _next, api, favicon, MetadataRoute URLs, and static asset extensions
    '/((?!_next|api|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|pdf)).*)',
  ],
}
