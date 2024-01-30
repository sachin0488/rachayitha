import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const useResendVerificationService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, data } = useMutation({
    mutationFn: resendVerificationEmailAPI,
    onSuccess({ message }) {
      enqueueSnackbar(message || 'Email Resent Successfully!', {
        variant: 'success',
      })
    },
    onError: () => {
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      })
    },
  })

  return {
    mutate,
    isLoading,
    isSuccess,
  }
}

const resendVerificationEmailAPI = async data => {
  const response = await APIInstance({
    url: '/resendemailverification/',
    method: 'POST',
    data: {
      user: {
        email: data?.email,
      },
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })

  return {
    message: response?.data?.message,
  }
}
