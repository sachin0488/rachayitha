import PrivacyPolicyPage from 'modules/documents/pages/privacy-policy.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const PrivacyPolicy = () => {
  return <PrivacyPolicyPage />
}

export default PrivacyPolicy

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}