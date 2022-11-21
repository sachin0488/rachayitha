import React from 'react'
import { Box } from '@mui/material'
import Header from "../../Container/LandingPageAfterLogin/Header/Header"
import Footer from '../../Container/LandingPageWithoutLogin/Footer/Footer'

const ProfileLayout = ({children}) => {
  return (
    <>
    <Box sx={{minHeight:"100vh",backgroundColor:"white",}}>
  
      <Header/>
  
     {children}

    </Box>
     </>
  )
}

export default ProfileLayout
