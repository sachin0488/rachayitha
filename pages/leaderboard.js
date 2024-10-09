import React from 'react'
import LeaderboardPage from 'modules/Leaderboard/pages/Leaderboard.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Leaderboard = () => {
  return (
    <>
      <LeaderboardPage />
    </>
  )
}

export default Leaderboard

export async function getServerSideProps({ req, res, query, params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
