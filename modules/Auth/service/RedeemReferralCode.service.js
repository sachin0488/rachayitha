import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthQuery } from '../constants/query.address'

export const useRedeemReferralCodeService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: redeemReferralCodeAPI,
    onSuccess({ isMessageVisible, message }) {
      enqueueSnackbar(message || 'Submitted successfully', {
        variant: 'success',
      })

      queryClient.invalidateQueries([AuthQuery.USER_DATA])
    },
    onError: error => {
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

  return { mutate, isLoading, isSuccess }
}

export const redeemReferralCodeAPI = async data => {
  const form = new FormData()

  form.append('referral_code', data.referralCode)

  const response = await APIInstance({
    url: '/user/referralcode',
    method: 'POST',
    data: form,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
  }
}
