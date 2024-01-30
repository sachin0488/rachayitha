import { APIInstance } from 'services/global.service'
import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import useRazorpay from 'react-razorpay'
import { useVerifyPaymentAPI } from './VerifyPayment.service'
import { useCallback } from 'react'
import { useTheme } from '@mui/material'

export const createCoinPurchaseAPI = async ({ amount, qty }) => {
  const form = new FormData()

  form.append('name', 'coin')
  form.append('amount', amount)
  form.append('qty', qty)

  const res = await APIInstance({
    url: '/payment/',
    method: 'POST',
    data: form,
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    data: {
      ...res.data,
    },
  }
}

export const useCreateCoinPurchaseService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const theme = useTheme()

  const [Razorpay, isLoaded] = useRazorpay()
  //   const queryClient = useQueryClient()

  const { mutate: handleVerifyPayment, isSuccess: isPaymentSuccess, isVerifying } = useVerifyPaymentAPI()

  const handlePaymentError = useCallback(
    response => {
      enqueueSnackbar(response?.error?.description, {
        variant: 'error',
      })
    },
    [enqueueSnackbar],
  )

  const handlePayments = useCallback(
    async paymentOptions => {
      const options = {
        key: paymentOptions?.razorpay_key,
        amount: paymentOptions?.amount,
        name: paymentOptions?.name,
        description: 'Test Transaction',
        image: '',
        order_id: paymentOptions?.provider_order_id,
        callback_url: paymentOptions?.callback_url,
        // redirect: true,
        // prefill: {
        //   name: 'Piyush Garg',
        //   email: 'youremail@example.com',
        //   contact: '9999999999',
        // },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: theme.palette.primary.main,
        },
        handler: handleVerifyPayment,
      }

      const paymentInstance = new Razorpay(options)

      paymentInstance.on('payment.failed', handlePaymentError)

      paymentInstance.open()
    },
    [Razorpay, handlePaymentError, handleVerifyPayment, theme.palette.primary.main],
  )

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ amount, qty }) {
      return createCoinPurchaseAPI({
        amount,
        qty,
      })
    },
    onSuccess({ data }) {
      handlePayments({
        razorpay_key: data?.data?.razorpay_key,
        callback_url: data?.data?.callback_url,
        ...data?.data?.order?.[0],
      })

      enqueueSnackbar('Please follow next stop to complete your purchase !', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to make payment request at this moment !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
