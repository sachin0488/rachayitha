import React from 'react'
import RankingPage from 'modules/Explore/pages/Ranking.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Ranking = () => {
  return <RankingPage />
}

export default Ranking

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}