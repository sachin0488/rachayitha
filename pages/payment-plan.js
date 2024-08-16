import PaymentPlanPage from 'modules/Payment/pages/payment-plan.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const PaymentPlan = () => {
  return <PaymentPlanPage />
}

export default PaymentPlan


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}