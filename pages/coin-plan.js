import CoinPlanPage from 'modules/Payment/pages/coin-plan.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const CoinPlan = () => {
  return <CoinPlanPage />
}

export default CoinPlan

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}