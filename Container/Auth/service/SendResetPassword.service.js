import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

export const useSendResetPasswordLinkService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: sendResetPasswordLinkByEmailAPI,
    onSuccess({ data }) {
      push('/forgot-password?status=success')

      enqueueSnackbar('Reset Password Link Sent successfully !', {
        variant: 'success',
      })
    },
    onError: error => {
      enqueueSnackbar(error.response?.data?.user?.error[0], {
        variant: 'error',
      })

      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleSendLinkByEmail = mutate

  return { handleSendLinkByEmail, isLoading, isSuccess }
}

const sendResetPasswordLinkByEmailAPI = ({ email }) => {
  return APIInstance({
    url: '/password_reset/',
    method: 'POST',
    data: {
      email: email,
    },
  })
}
