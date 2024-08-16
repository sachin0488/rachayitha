import React from 'react'
import OTPPage from 'modules/Auth/pages/OTP'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const OTP = () => {
  return <OTPPage />
}

export default OTP

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}