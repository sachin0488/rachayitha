import React from 'react'
import SpirityMain from 'modules/Contest/pages'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Contest = () => {
  return (
    <>
      <SpirityMain />
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
