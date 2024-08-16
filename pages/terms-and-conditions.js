import TermsAndConditionsPage from 'modules/documents/pages/terms-and-conditions'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const TermsAndConditions = () => {
  return <TermsAndConditionsPage />
}

export default TermsAndConditions

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}