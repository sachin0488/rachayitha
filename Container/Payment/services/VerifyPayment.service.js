import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useSnackbar } from 'notistack'

export const verifyPaymentAPI = async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => {
  const form = new FormData()

  form.append('razorpay_payment_id', razorpay_payment_id)
  form.append('razorpay_order_id', razorpay_order_id)
  form.append('razorpay_signature', razorpay_signature)

  const res = APIInstance({
    url: '/callback/',
    method: 'POST',
    data: form,
  })

  console.log('====================================')
  console.log(res.data)
  console.log('====================================')

  return {
    data: {
      ...res.data,
      isVerified: res.data?.data?.is_verified,
    },
  }
}

export const useVerifyPaymentAPI = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) {
      return verifyPaymentAPI({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      })
    },
    onSuccess({ data }) {
      if (data.isVerified) {
        enqueueSnackbar('Payment verified successfully !', {
          variant: 'success',
        })
      } else
        enqueueSnackbar('Unable to verify your payment !', {
          variant: 'error',
        })
    },
    onError(error) {
      if (error?.response?.data?.message)
        enqueueSnackbar('Something went wrong !', {
          variant: 'error',
        })
    },
  })

  return {
    mutate,
    isVerifying: isLoading,
    isSuccess,
  }
}
