/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: false,
  i18n,
  swcMinify: true,
   env: {
    NEXT_PUBLIC_SUPPORT_EMAIL: 'support@rachayitha.com',
    NEXT_PUBLIC_DASHBOARD_URL: 'https://editor.rachayitha.com/',
    NEXT_PUBLIC_TWITTER_LINK: 'https://x.com/Rachayitha_2024',
    NEXT_PUBLIC_FACEBOOK_LINK: 'https://www.facebook.com/people/Rachayitha/61557670751348/',
    NEXT_PUBLIC_INSTAGRAM_LINK: 'https://www.instagram.com/rachayitha2024/',
    NEXT_PUBLIC_YOUTUBE_LINK: 'https://www.youtube.com/@rachayitha_24',
    NEXT_PUBLIC_LINKEDIN_LINK: 'https://www.linkedin.com/company/rachayitha/',
    GOOGLE_CLIENT_ID: '520490534029-t5tqkocrf5qq1fk2m5m6rf7lvj5dsvcg.apps.googleusercontent.com',
  },
}

module.exports = nextConfig
