import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { APIInstance, queryCache } from 'services/global.service'

const { setAccess, setRefresh, getAccess, getRefresh } = AuthTokenStore()

export const useDeleteAccountService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: deleteAccountAPI,
    onSuccess({ message }) {
      enqueueSnackbar(message || 'Account deleted successfully!', {
        variant: 'success',
      })

      setTimeout(() => {
        try {
          window && window.localStorage.clear()
          window && window.sessionStorage.clear()

          queryCache.clear()

          queryClient.invalidateQueries([AuthQuery.USER_DATA])
        } catch (e) {
          console.log(e)
        } finally {
          window.location.reload()
        }
      }, 500)
    },
    onError: error => {
      enqueueSnackbar(error?.response?.data?.message || 'Unable to delete your account!', {
        variant: 'error',
      })
    },
  })

  const handleDelete = mutate

  return { handleDelete, isLoading, isSuccess }
}

const deleteAccountAPI = async () => {
  const response = await APIInstance({
    url: '/user/delete',
    method: 'DELETE',
  })

  return {
    message: response?.data?.result || '',
  }
}
