import CreateAccountPage from 'modules/Auth/pages/CreateAccount'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const createAccount = () => {
  return (
    <>
      <CreateAccountPage />
    </>
  )
}

export default createAccount

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}