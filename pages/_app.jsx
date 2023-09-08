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
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()

const MyApp = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <MUIThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Head>
            <title>{`St. Xavier's School | Bhitirawat, Sahjanwa, Gorakhpur`}</title>
            <meta
              name="description"
              content="Unlock Your Potential | Discover the Joy of Learning at St. Xavier's School | Our curriculum is designed to foster creativity and critical thinking"
            />
          </Head>
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
