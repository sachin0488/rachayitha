import PaymentStatusPage from 'modules/Payment/pages/payment-status.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const PaymentStatus = () => {
  return <PaymentStatusPage />
}

export default PaymentStatus


export async function getServerSideProps({ req, res, query, params ,locale}) {
  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),  
    }
  }
}