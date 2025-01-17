import NewPasswordPage from 'modules/Auth/pages/NewPassword'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const NewPassword = () => {
  return (
    <>
      <NewPasswordPage />
    </>
  )
}

export default NewPassword

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}