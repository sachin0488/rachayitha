/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SUPPORT_EMAIL: 'support@rachayitha.com',
    NEXT_PUBLIC_DASHBOARD_URL: 'https://editor.rachayitha.com/',
    NEXT_PUBLIC_TWITTER_LINK: 'https://twitter.com/',
    NEXT_PUBLIC_FACEBOOK_LINK: 'https://facebook.com/',
    NEXT_PUBLIC_INSTAGRAM_LINK: 'https://instagram.com/',
  },
}

module.exports = nextConfig
