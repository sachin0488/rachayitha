import { APIInstance } from 'services/global.service'
import { useQuery } from '@tanstack/react-query'
import { PaymentQuery } from '../constants/query.address'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import i18n from 'i18next'

export const getPaymentStatusSAPI = async ({ transactionId }) => {
  const form = new FormData()
  form.append('transaction_id', transactionId)

  const response = await APIInstance({
    url: '/statuscheckphonepe/',
    method: 'POST',
    data: form,
    params:{
      lang:i18n.language
    },
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    isPaymentSuccess: response?.data?.data?.is_payment_verified,
    transactionId,
  }
}

export const usePaymentStatusService = () => {
  const { query, replace, isReady } = useRouter()

  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    if (isReady) {
      if (!query?.transactionId) {
        replace('/payment-status?transactionId=' + localStorage.getItem('phonePeMerchantTransactionId'))
        setTransactionId(localStorage.getItem('phonePeMerchantTransactionId'))
        localStorage.setItem('phonePeMerchantTransactionId', '')
      } else {
        setTransactionId(query?.transactionId)
      }
    }
  }, [isReady, query?.transactionId, replace])

  const { data, isError, refetch, isLoading } = useQuery({
    enabled: !!transactionId,
    queryKey: [PaymentQuery.PAYMENT_STATUS, { transactionId }],
    queryFn: () => getPaymentStatusSAPI({ transactionId }),
  })

  return {
    isPaymentSuccess: data?.isPaymentSuccess,
    isTransactionIdAvailable: data?.isTransactionIdAvailable,
    isLoading,
    isError,
    refetch,
  }
}
