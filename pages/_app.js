import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { SnackbarProvider } from 'notistack'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'

import snackbarComponents from '../utility/snackbar.components'
import createEmotionCache from '../utility/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import store from '../store'
import '../styles/globals.css'
import LoadToken from '../Container/Auth/load-token'
import { queryCache, mutationCache } from '../api/global.api'

const clientSideEmotionCache = createEmotionCache()

const twentyFourHoursInMs = 1000 * 60 * 60 * 24

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
  mutationCache,
  queryCache,
})

const persistor = persistStore(store)

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <MUIThemeProvider theme={lightTheme}>
            <SnackbarProvider Components={snackbarComponents}>
              <QueryClientProvider client={queryClient}>
                <CssBaseline />
                <LoadToken />
                <Component {...pageProps} />
              </QueryClientProvider>
            </SnackbarProvider>
          </MUIThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
