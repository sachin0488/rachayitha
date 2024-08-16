import React from 'react'
import PropTypes from 'prop-types'
import { SnackbarProvider } from 'notistack'
import { CacheProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'
import { I18nextProvider } from 'react-i18next'
import {i18n} from 'next-i18next'

import snackbarComponents from 'utility/snackbar.components'
import createEmotionCache from 'utility/createEmotionCache'
import lightTheme from 'styles/theme/lightTheme'
import 'styles/globals.css'
import 'styles/quill.snow.css'

import { queryCache, mutationCache } from 'services/global.service'

import Layout from 'Layout'
import AuthProvider from 'modules/Auth/AuthProvider'
import darkTheme from 'styles/theme/darkTheme'
import Head from 'next/head'
import CookiesAlert from 'components/CookiesAlert'
import { GoogleOAuthProvider } from '@react-oauth/google'
import nextI18NextConfig from '../next-i18next.config.js'
import { appWithTranslation } from 'next-i18next'
const clientSideEmotionCache = createEmotionCache()

const twentyFourHoursInMs = 1000 * 60 * 60 * 24



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: true,
      refetchOnReconnect: false,
      retry: 2,
      staleTime: twentyFourHoursInMs,
    },
  },
  mutationCache,
  queryCache,
})

const emptyInitialI18NextConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
}

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
      <CacheProvider value={emotionCache}>
        <I18nextProvider i18n={i18n}>
          <MUIThemeProvider theme={lightTheme}>
            <SnackbarProvider Components={snackbarComponents}>
              <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <AuthProvider>
                  <Layout>
                    <Head>
                      <title>Rachayitha | {`India's own online book store`}</title>
                      <meta name="description" content="Expand your Vision of Literature and Poem Here" />
                      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                      <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4036020514230622"
                        crossorigin="anonymous"></script>

                      <script async src="https://www.googletagmanager.com/gtag/js?id=G-97EPHN49EQ"></script>
                      <script>
                        {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-97EPHN49EQ');`}
                      </script>
                    </Head>
                    <CookiesAlert />
                    <Component {...pageProps} />
                  </Layout>
                </AuthProvider>
              </QueryClientProvider>
            </SnackbarProvider>
          </MUIThemeProvider>
        </I18nextProvider>
      </CacheProvider>
    </GoogleOAuthProvider>
  )
}

export default appWithTranslation(MyApp, emptyInitialI18NextConfig);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
