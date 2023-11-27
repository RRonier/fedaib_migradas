import createMiddleware from 'next-intl/middleware';
import { pathnames, locales } from './config';

export default createMiddleware({
  defaultLocale: 'eus',
  locales,
  pathnames,
  // localeDetection: false,
  // localePrefix: 'as-needed'
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/', '/(en|es|fr|eus)/:path*']
};