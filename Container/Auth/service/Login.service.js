import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { useEmailVerificationStatusService } from './EmailVerificationStatus.service'

const { setAccess, setRefresh } = AuthTokenStore()

export const useLoginService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const { isSessionActive, isEmailVerified, user, mutate: checkVerificationStatus, setAuthAdopter } = useEmailVerificationStatusService()

  const { mutate, isLoading, isSuccess, data } = useMutation({
    mutationFn: loginAPI,
    onSuccess({ tokens, isMessageVisible, isEmailVerified, message }, variables) {
      if (isEmailVerified) {
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
      } else {
        setAuthAdopter({
          accessToken: tokens?.access,
          refreshToken: tokens?.refresh,
          rememberMe: variables?.remember_me,
        })
        setTimeout(() => {
          checkVerificationStatus()
        }, 50)
        enqueueSnackbar(message || 'Please verify your email to login', {
          variant: 'error',
        })
      }
    },
    onError: error => {
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
    },
  })

  const handleLogin = mutate

  return {
    handleLogin,
    isLoading,
    isSuccess,
    isEmailVerified: isEmailVerified,
    user: user || data?.user,
    isSessionActive,
    checkVerificationStatus,
  }
}

const loginAPI = async ({ email, password, otp }) => {
  const response = await APIInstance({
    url: '/login/',
    method: 'POST',
    data: {
      user: {
        email,
        password,
        otp,
      },
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
    isEmailVerified: !!!user?.is_email_verified, // TODO: add one more ! to make the logic correct
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
