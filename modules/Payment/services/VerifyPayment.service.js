import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { AuthQuery } from 'modules/Auth/constants/query.address'
import i18n from 'i18next'

export const verifyPaymentAPI = async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => {
  const form = new FormData()

  form.append('razorpay_payment_id', razorpay_payment_id)
  form.append('razorpay_order_id', razorpay_order_id)
  form.append('razorpay_signature', razorpay_signature)

  const res = await APIInstance({
    url: '/callback/',
    method: 'POST',
    data: form,
    params:{
      lang: i18n.language
    },
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return {
    data: {
      ...res.data,
      isVerified: res.data?.data?.is_payment_verified,
    },
  }
}

export const useVerifyPaymentAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) {
      return verifyPaymentAPI({
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
      })
    },
    onSuccess({ data }) {
      if (data?.isVerified) {
        window.location.href = '/payment-success'

        // push('/payment-success')
        // history.pushState(null, null,'/payment-success')
        enqueueSnackbar('Payment verified successfully !', {
          variant: 'success',
        })
        queryClient.invalidateQueries([AuthQuery.USER_DATA])
      } else
        enqueueSnackbar('Unable to verify your payment !', {
          variant: 'error',
        })
    },
    onError(error) {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
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
