import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginPage from 'modules/Auth/pages/Login'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Login = () => {
  return (
    <>
      <LoginPage />
    </>
  )
}

export default Login


export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}