import { useQuery, useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { LOGIN_SUCCESS } from '../../../store'
import { setLoginToken, setUserData, setUserLogout } from '../../../store/slices/global/user.slice'
import {
  createAccountAPI,
  fetchUserDataAPI,
  loginAPI,
  resetPasswordByTokenAPI,
  sendResetPasswordLinkByEmailAPI,
} from './auth.api'
import { useAuthTokens } from 'api/global.hook'
import { getFormErrorMessage } from 'hooks/useFormError'
import { AuthQuery } from '../constants/query.address'

export const useFetchUserDataAPI = ({ enabled }) => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const { data, isFetching, isSuccess, refetch, isError } = useQuery([AuthQuery.USER_DATA], {
    queryFn: fetchUserDataAPI,
    enabled: enabled,
    onSuccess({ data }) {
      dispatch(setUserData(data.user))
    },
    onError: error => {
      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  return {
    isLoading: isFetching,
    isSuccess,
    isError,
    refetch,
    status: data?.status,
  }
}

export const useCreateAccountAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const dispatch = useDispatch()
  const { setAccess, setRefresh } = useAuthTokens()

  const { mutate, isLoading, isSuccess } = useMutation(createAccountAPI, {
    onSuccess({ data }) {
      dispatch(setUserData(data.user))
      dispatch(setLoginToken(data.token))
      setAccess(data?.user?.tokens?.access)
      setRefresh(data?.user?.tokens?.refresh)
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

export const useLoginAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const dispatch = useDispatch()
  const { setAccess, setRefresh } = useAuthTokens()
  const { mutate, isLoading, isSuccess } = useMutation(loginAPI, {
    onSuccess({ data }, variables) {
      dispatch(setUserData(data?.user))
      dispatch(setLoginToken(data?.user?.tokens))
      if (variables?.remember_me) {
        localStorage.setItem('remember_me', 'true')
        setAccess(data?.user?.tokens?.access)
        setRefresh(data?.user?.tokens?.refresh)
      }
      dispatch({ type: LOGIN_SUCCESS })
      router.push('/')
      // enqueueSnackbar(data?.message, {
      //   variant: 'success',
      // })
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

  const handleLogin = mutate

  return { handleLogin, isLoading, isSuccess }
}

export const useSendResetPasswordLinkAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()
  const { mutate, isLoading, isSuccess } = useMutation(sendResetPasswordLinkByEmailAPI, {
    onSuccess({ data }, variables) {
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

export const useResetPasswordAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { mutate, isLoading, isSuccess } = useMutation(resetPasswordByTokenAPI, {
    onSuccess({ data }, variables) {
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

export const useLogoutUserAPI = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogoutUser = () => {
    dispatch(setUserLogout())
    router.push('/')
    window && window.localStorage.setItem('persist:root', '')
    window && window.localStorage.clear()
  }

  // const { mutate, isLoading, isSuccess } = useMutation(logoutUserAPI, {
  //   onSuccess({ data }) {
  //     dispatch(setUserLogout())
  //     router.push('/login')
  //     window.localStorage.setItem('persist:root', '')
  //     enqueueSnackbar(data.message, {
  //       variant: 'success',
  //     })
  //   },
  //   onError: error => {
  //     if (error.response?.data?.message)
  //       enqueueSnackbar(error.response?.data?.message, {
  //         variant: 'error',
  //       })
  //   },
  // })

  return { handleLogoutUser }
}
