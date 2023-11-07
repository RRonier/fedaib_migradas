/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en-US', 'es', 'eu-ES', 'fr-FR'],
        defaultLocale: 'en-US',
        localeDetection: true
      },
}

module.exports = nextConfig
