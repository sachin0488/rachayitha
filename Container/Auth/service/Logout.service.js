// import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
// import { APIInstance, queryCache } from 'services/global.service'
// import { useCallback } from 'react'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { formatUnAuthData } from './User.service'
import { APIInstance, queryCache } from 'services/global.service'

const { setAccess, setRefresh, getAccess, getRefresh } = AuthTokenStore()

export const useLogoutService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: logoutAPI,
    onSuccess() {
      try {
        window && window.localStorage.clear()
        window && window.sessionStorage.clear()

        queryCache.clear()

        queryClient.setQueryData([AuthQuery.USER_DATA], () => {
          return formatUnAuthData()
        })
      } catch (e) {
        console.log(e)
      }
    },
    onError: error => {
      try {
        window && window.localStorage.clear()
        window && window.sessionStorage.clear()

        queryCache.clear()

        queryClient.setQueryData([AuthQuery.USER_DATA], () => {
          return formatUnAuthData()
        })
      } catch (e) {
        console.log(e)
      }

      enqueueSnackbar('Unable to Logout', {
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
      refresh: getRefresh(),
    },
  })
}
