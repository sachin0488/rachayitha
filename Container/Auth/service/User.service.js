import { useQuery } from '@tanstack/react-query'
import { AuthQuery } from '../constants/query.address'
import { useEffect } from 'react'

export const useFetchUserDataAPI = ({ enabled }) => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()

  const { data, isFetching, isSuccess, refetch, isError, error } = useQuery({
    queryKey: [AuthQuery.USER_DATA],
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

  useEffect(() => {
    if (isError) {
      enqueueSnackbar(error.response?.data?.message, {
        variant: 'error',
      })
    }
  }, [isError, error, enqueueSnackbar])

  return {
    isLoading: isFetching,
    isSuccess,
    isError,
    refetch,
    status: data?.status,
  }
}

const fetchUserDataAPI = () => {
  return APIInstance({
    url: '/user/',
    method: 'GET',
  })
}
