import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

export const useResetPasswordService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: resetPasswordByTokenAPI,
    onSuccess({ isMessageVisible, message }) {
      push('/new-password?status=success')

      if (isMessageVisible) {
        enqueueSnackbar(message || 'Reset Password Link Sent successfully !', {
          variant: 'success',
        })
      }
    },
    onError: error => {
      if (error.response?.data?.errors?.password?.length > 0)
        enqueueSnackbar(error.response?.data?.errors?.password?.[0], {
          variant: 'error',
        })
      else if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  const handleResetPasswordByToken = mutate

  return { handleResetPasswordByToken, isLoading, isSuccess }
}

export const resetPasswordByTokenAPI = data => {
  const response = APIInstance({
    url: '/password_reset/confirm/',
    method: 'POST',
    data,
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}
