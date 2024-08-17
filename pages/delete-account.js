import DeleteAccountPage from 'modules/Auth/pages/DeleteAccount'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const DeleteAccount = () => {
  return <DeleteAccountPage />
}

export default DeleteAccount

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}