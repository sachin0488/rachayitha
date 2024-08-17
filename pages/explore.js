import React from 'react'
import ExplorePage from 'modules/Explore/pages/Explore.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Explore = () => {
  return (
    <>
      <ExplorePage />
    </>
  )
}

export default Explore

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}