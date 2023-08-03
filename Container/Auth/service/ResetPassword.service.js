import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

export const useResetPasswordService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: resetPasswordByTokenAPI,
    onSuccess({ data }) {
      push('/new-password?status=success')

      enqueueSnackbar('Reset Password Link Sent successfully !', {
        variant: 'success',
      })
    },
    onError: error => {
      if (error.response?.data?.errors?.password?.length > 0)
        enqueueSnackbar(error.response?.data?.errors?.password?.[0], {
          variant: 'error',
        })

      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleResetPasswordByToken = mutate

  return { handleResetPasswordByToken, isLoading, isSuccess }
}

export const resetPasswordByTokenAPI = data => {
  return APIInstance({
    url: '/password_reset/confirm/',
    method: 'POST',
    data,
  })
}
