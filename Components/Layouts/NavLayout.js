import React from 'react'
import { Box } from '@mui/material'
import Header from '../../Layout/Header/index'
import Footer from '../../Container/LandingPageWithoutLogin/Components/Footer/Footer'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/slices/global/user.slice'

const NavLayout = ({ children, header, footer }) => {
  const { isLoggedIn } = useSelector(selectUser)
  return (
    <>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
        {isLoggedIn === true ? <Header /> : null}
        <Box marginTop="60px"> {children}</Box>

        <Footer />
      </Box>
    </>
  )
}

export default NavLayout
