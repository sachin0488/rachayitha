import VoteCoinPlanPage from 'modules/Payment/pages/vote-coin-plan.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const VoteCoinPlan = () => {
  return <VoteCoinPlanPage />
}

export default VoteCoinPlan

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}