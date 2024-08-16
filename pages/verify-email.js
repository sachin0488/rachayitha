import VerifyEmailForwardPage from 'modules/Auth/pages/VerifyEmailForward'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const VerifyEmail = () => {
  return (
    <>
      <VerifyEmailForwardPage />
    </>
  )
}

export default VerifyEmail

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}