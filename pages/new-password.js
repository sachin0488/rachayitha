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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}