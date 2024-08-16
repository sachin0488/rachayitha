import ForgotPasswordPage from 'modules/Auth/pages/ForgotPassword'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordPage />
    </>
  )
}

export default ForgotPassword

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}