import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Container/LandingPageAfterLogin/Header/Header'
import Footer from '../../Container/LandingPageWithoutLogin/Components/Footer/Footer'

const NavLayout = ({ children, header, footer }) => {
  return (
    <>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {header === true ? <Header /> : null}
        {children}
        {footer === true ? <Footer /> : null}
      </Box>
    </>
  )
}

export default NavLayout
