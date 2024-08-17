import SubscriptionPlanPage from 'modules/Payment/pages/subscription-plan.page'
import ConditionalRedirect from 'hooks/ConditionalRedirect'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const SubscriptionPlan = () => {
  return (
    <>
      <SubscriptionPlanPage />
    </>
  )
}

export default SubscriptionPlan

export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}