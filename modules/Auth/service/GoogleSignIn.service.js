import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { useEmailVerificationStatusService } from './EmailVerificationStatus.service'
import { useGoogleLogin } from '@react-oauth/google'

const { setAccess, setRefresh } = AuthTokenStore()

export const useGoogleSignInService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { isEmailVerified, mutate: checkVerificationStatus, setAuthAdopter } = useEmailVerificationStatusService()

  const { mutate, variables, isLoading, isSuccess, data, error, isError } = useMutation({
    mutationFn: loginAPI,
    onSuccess({ tokens, message }, variables) {
      if (variables?.remember_me) {
        setAccess(tokens?.access)
        setRefresh(tokens?.refresh)
      } else {
        setAccess(tokens?.access, 'session')
        setRefresh(tokens?.refresh, 'session')
      }

      enqueueSnackbar(message || 'Logged in successfully !', {
        variant: 'success',
      })

      queryClient.invalidateQueries([AuthQuery.USER_DATA])
    },
    onError: (error, variables) => {
      console.log('error', error.response?.data)
      if (error.response?.data?.user?.is_active?.[0] === 'False') {
        enqueueSnackbar('Your account is not verified. Please verify your email to login', {
          variant: 'error',
        })
        setTimeout(() => {
          checkVerificationStatus()
        }, 50)
        setAuthAdopter({
          email: variables?.email,
          password: variables?.password,
          rememberMe: true,
        })
      } else {
        if (error.response?.data?.user?.error?.length > 0)
          enqueueSnackbar(error.response?.data?.user?.error?.[0], {
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
      }
    },
  })

  const loginWithGoogle = useGoogleLogin({
    onSuccess: tokenResponse =>
      mutate({
        access_token: tokenResponse.access_token,
      }),
    onError: error => console.error(error),
  })

  return {
    loginWithGoogle,
    isLoading,
    isError,
    isEmailVerified: isEmailVerified,
    user: {
      fullName: error?.response?.data?.user?.full_name?.[0],
      email: variables?.email,
    },
    checkVerificationStatus,
  }
}

const loginAPI = async ({ access_token }) => {
  const response = await APIInstance({
    url: '/account/google',
    method: 'POST',
    data: {
      access_token: access_token,
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })

  const user = response?.data?.user

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
    tokens: {
      access: user?.tokens?.access,
      refresh: user?.tokens?.refresh,
    },
    user: {
      fullName: user?.full_name || '',
      email: user?.email || '',
    },
  }
}
