import { APIInstance } from 'services/global.service'
import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCoinPurchaseAPI = async ({ amount, qty, coinPlanId }) => {
  const form = new FormData()

  form.append('name', 'coin')
  form.append('amount', amount)
  form.append('qty', qty)
  form.append('coin_plan_id', coinPlanId)

  const response = await APIInstance({
    url: '/paymentphonepe/',
    method: 'POST',
    data: form,
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

  if (response?.data?.data?.data?.merchantTransactionId) {
    localStorage.setItem('phonePeMerchantTransactionId', response.data.data.data.merchantTransactionId)
  }

  return {
    payUrl: response?.data?.data?.data?.instrumentResponse?.redirectInfo?.url,
  }
}

export const useCreateCoinPurchaseService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ amount, qty, coinPlanId }) {
      return createCoinPurchaseAPI({
        amount,
        qty,
        coinPlanId,
      })
    },
    onSuccess({ payUrl }) {
      window.location.href = payUrl

      enqueueSnackbar('Please follow next stop to complete your purchase !', {
        variant: 'success',
      })
    },
    onError(error) {
      console.log(error)
      enqueueSnackbar('Unable to make payment request at this moment !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
