import React from 'react'
import PropTypes from 'prop-types'
import { SnackbarProvider } from 'notistack'
import { CacheProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'

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

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <GoogleOAuthProvider clientId="13783589174-81cucueivlm245ag49pq5v3c4f3jqscd.apps.googleusercontent.com">
      <CacheProvider value={emotionCache}>
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
                  </Head>
                  <CookiesAlert />
                  <Component {...pageProps} />
                </Layout>
              </AuthProvider>
            </QueryClientProvider>
          </SnackbarProvider>
        </MUIThemeProvider>
      </CacheProvider>
    </GoogleOAuthProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
