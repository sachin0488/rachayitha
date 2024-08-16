import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import i18n from 'i18next';
export const useSendResetPasswordLinkService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: sendResetPasswordLinkByEmailAPI,
    onSuccess({ isMessageVisible, message }) {
      push('/forgot-password?status=success')

      if (isMessageVisible) {
        enqueueSnackbar(message || 'Reset Password Link Sent successfully !', {
          variant: 'success',
        })
      }
    },
    onError: error => {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else if (error.response?.data?.errors?.email?.[0])
        enqueueSnackbar(error.response?.data?.errors?.email?.[0], {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  const handleSendLinkByEmail = mutate

  return { handleSendLinkByEmail, isLoading, isSuccess }
}

const sendResetPasswordLinkByEmailAPI = async ({ email }) => {
  const response = await APIInstance({
    url: '/password_reset/',
    method: 'POST',
    data: {
      email: email,
    },
    params: {
      lang: i18n.language,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}
