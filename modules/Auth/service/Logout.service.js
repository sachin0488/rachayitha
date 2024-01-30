import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
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

        queryClient.invalidateQueries([AuthQuery.USER_DATA])
      } catch (e) {
        console.log(e)
      } finally {
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
    },
    onError: error => {
      try {
        window && window.localStorage.clear()
        window && window.sessionStorage.clear()

        queryCache.clear()

        queryClient.invalidateQueries([AuthQuery.USER_DATA])

        enqueueSnackbar('Unable to Logout', {
          variant: 'error',
        })
      } catch (e) {
        console.log(e)
      } finally {
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
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
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
