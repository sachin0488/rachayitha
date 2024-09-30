const path = require('path')

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'hi-IN'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
