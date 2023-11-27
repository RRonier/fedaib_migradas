// @ts-check
// /** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
});