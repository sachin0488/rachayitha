/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SUPPORT_EMAIL: 'support@rachayitha.com',
    NEXT_PUBLIC_DASHBOARD_URL: 'https://editor.rachayitha.com/',
    NEXT_PUBLIC_TWITTER_LINK: 'https://twitter.com/',
    NEXT_PUBLIC_FACEBOOK_LINK: 'https://facebook.com/',
    NEXT_PUBLIC_INSTAGRAM_LINK: 'https://instagram.com/',
    GOOGLE_CLIENT_ID: '520490534029-t5tqkocrf5qq1fk2m5m6rf7lvj5dsvcg.apps.googleusercontent.com',
  },
}

module.exports = nextConfig
