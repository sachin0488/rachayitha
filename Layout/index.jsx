import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'
import { useRouter } from 'next/router'

import { useUserService } from 'Container/Auth/service/User.service'

const Layout = ({ children }) => {
  const router = useRouter()
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const { isLoggedIn } = useUserService()

  const isHeaderVisible = !(
    (router.pathname === '/' && isLoggedIn === false) ||
    router.pathname === '/login' ||
    router.pathname === '/create-account' ||
    router.pathname === '/otp' ||
    router.pathname === '/forgot-password' ||
    router.pathname === '/new-password' ||
    router.pathname.includes('/create')
  )

  const isFooterVisible = !(
    router.pathname === '/login' ||
    router.pathname === '/create-account' ||
    router.pathname === '/otp' ||
    router.pathname === '/forgot-password' ||
    router.pathname === '/new-password' ||
    router.pathname.includes('/read')
  )

  const handleSidebarOpen = useCallback(() => {
    setIsSideBarOpen(true)
  }, [])

  return (
    <Root>
      {isHeaderVisible ? <Header handleSidebarOpen={handleSidebarOpen} /> : null}
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      <Main>{children}</Main>

      {isFooterVisible && <Footer />}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`

const Main = styled.main`
  width: 100%;
`

export default Layout
