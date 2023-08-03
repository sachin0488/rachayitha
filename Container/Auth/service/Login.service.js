import { useMutation } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'

const { setAccess, setRefresh } = AuthTokenStore()

export const useLoginService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const router = useRouter()

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
