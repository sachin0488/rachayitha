import React from 'react'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import ContestListPage from 'modules/ContestList/pages/ContestList.page'

const Contest = () => {
  return (
    <>
      <ContestListPage />
    </>
  )
}

export default Contest

export async function getServerSideProps({ req, res, query, params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
