import { APIInstance, AUTHORIZATION } from 'services/global.service'
import { useMutation } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { AuthTokenStore } from 'utility/authTokenStore'

const { setAccess, setRefresh } = AuthTokenStore()

export const useCreateAccountService = () => {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: createAccountAPI,
    onSuccess({ data }) {
      setAccess(data?.user?.tokens?.access)
      setRefresh(data?.user?.tokens?.refresh)

      APIInstance.interceptors.request.use(
        config => {
          config.headers[AUTHORIZATION] = data?.user?.tokens?.access
          return config
        },
        error => Promise.reject(error),
      )

      router.push('/otp')

      enqueueSnackbar(data.message, {
        variant: 'success',
      })
    },
    onError: error => {
      enqueueSnackbar(getFormErrorMessage(error.response?.data?.errors), {
        variant: 'error',
      })

      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleCreateAccount = mutate

  return { handleCreateAccount, isLoading, isSuccess }
}

const createAccountAPI = ({ username, email, password, bio, fullName, birthDate, gender }) => {
  return APIInstance({
    url: '/register/',
    method: 'POST',
    data: {
      user: {
        username,
        email,
        password,
        bio,
        full_name: fullName,
        birth_date: birthDate,
        gender,
      },
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })
}
