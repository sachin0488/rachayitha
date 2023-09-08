import React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from 'utility/createEmotionCache'
import lightTheme from 'styles/theme/lightTheme'
import 'styles/globals.css'

import Layout from 'Layout'
import GlobalBackGround from 'Layout/GlobalBackGround'
import BlobAnimation from 'Layout/BlobAnimation'

const clientSideEmotionCache = createEmotionCache()

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <MUIThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
          <BlobAnimation />
          <GlobalBackGround />
        </Layout>
      </MUIThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
