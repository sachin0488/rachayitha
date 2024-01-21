import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'

const { setAccess, setRefresh } = AuthTokenStore()

export const useLoginService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: loginAPI,
    onSuccess({ tokens, isMessageVisible, message }, variables) {
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

  return { handleLogin, isLoading, isSuccess }
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
    tokens: {
      access: user?.tokens?.access,
      refresh: user?.tokens?.refresh,
    },
  }
}
