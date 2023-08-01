import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance, AUTHORIZATION } from 'api/global.api'
import { authTokenHandles } from 'api/global.hook'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
// import { AuthQuery } from '../constants/query.address'

const { setAccess, setRefresh } = authTokenHandles()

export const useLoginService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()
  // const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: loginAPI,
    onSuccess({ data }, variables) {
      if (variables?.remember_me) {
        setAccess(data?.user?.tokens?.access)
        setRefresh(data?.user?.tokens?.refresh)
      } else {
        setAccess(data?.user?.tokens?.access, 'session')
        setRefresh(data?.user?.tokens?.refresh, 'session')
      }
      // APIInstance.interceptors.request.use(
      //   config => {
      //     config.headers[AUTHORIZATION] = data?.user?.tokens?.access
      //     return config
      //   },
      //   error => Promise.reject(error),
      // )

      router.push('/')

      window && window.location.reload()
    },
    onError: error => {
      enqueueSnackbar(error.response?.data?.user?.error?.[0], {
        variant: 'error',
      })

      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleLogin = mutate

  return { handleLogin, isLoading, isSuccess }
}

const loginAPI = ({ email, password, otp }) => {
  return APIInstance({
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
}
