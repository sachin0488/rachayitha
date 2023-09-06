import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import SideBar from './Sidebar'

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const handleSidebarOpen = useCallback(() => {
    setIsSideBarOpen(true)
  }, [])

  return (
    <Root>
      <Header handleSidebarOpen={handleSidebarOpen} />
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      <Main>{children}</Main>

      <Footer />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`

const Main = styled.main`
  width: 100%;
`

export default Layout
