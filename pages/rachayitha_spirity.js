import React from 'react'
import SpirityMain from 'modules/Spirity/pages'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Spirity = () => {
  return (
    <>
      <SpirityMain />
    </>
  )
}

export default Spirity

export async function getServerSideProps({ req, res, query, params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
