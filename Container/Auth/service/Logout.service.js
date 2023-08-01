import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import { AuthQuery } from '../constants/query.address'
import { APIInstance, AUTHORIZATION } from 'api/global.api'
import { authTokenHandles } from 'api/global.hook'
import { useCallback } from 'react'

const { setAccess, setRefresh, getAccess, getRefresh } = authTokenHandles()

export const useLogoutService = () => {
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()
  // const queryClient = useQueryClient()

  const clearLoginInfo = useCallback(() => {
    window && window.localStorage.setItem('persist:root', '')
    window && window.localStorage.clear()
    window && window.sessionStorage.setItem('persist:root', '')
    window && window.sessionStorage.clear()

    router.push('/')

    window && window.location.reload()
  }, [router])

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: logoutAPI,
    onSuccess({ data }) {
      clearLoginInfo()
    },
    onError: error => {
      clearLoginInfo()

      if (error?.response?.data?.user?.error?.[0])
        enqueueSnackbar(error?.response?.data?.user?.error?.[0], {
          variant: 'error',
        })

      if (error?.response?.data?.message)
        enqueueSnackbar(error?.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleLogout = mutate

  return { handleLogout, isLoading, isSuccess }
}

const logoutAPI = () => {
  return APIInstance({
    url: '/logout/',
    method: 'POST',
    data: {
      refresh: getRefresh,
    },
  })
}
