import React, { useCallback, useMemo, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'
import { motion } from 'framer-motion'
import useWindowSize from 'hooks/useWindowSize'
import { useTheme } from '@mui/material'
import { useLayoutStore } from './store'

const Layout = ({ children }) => {
  const size = useWindowSize()
  const theme = useTheme()
  const isSidebarOpen = useLayoutStore(state => state.sidebar.isOpen)

  const variants = useMemo(
    () => ({
      open: {
        width: size.width,
        x: -theme.mixins.drawer.width,
      },
      closed: {
        width: size.width,
        x: 0,
      },
    }),
    [size.width, theme.mixins.drawer.width],
  )

  return (
    <Root>
      <SideBar />

      <Main animate={isSidebarOpen ? 'open' : 'closed'} variants={variants}>
        <Header />
        {children}
        <Footer />
      </Main>
    </Root>
  )
}

const Root = styled.div`
  --header-height: 65px;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.palette.background.default};
`

const Main = styled(motion.main)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
  margin-left: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 38px 0px #0f012f16;
  overflow: auto;
`

export default Layout
