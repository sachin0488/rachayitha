import { useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../store/slices/global/user.slice'
import { newArrivalAPI } from './newArrivalCards.api'

const useNewArrivalApi = () => {
  const { isLoggedIn } = useSelector(selectUser)
  const { enqueueSnackbar } = useSnackbar()
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-new-arrival', newArrivalAPI],
    () => newArrivalAPI(isLoggedIn),
    {
      //   enabled: false,
      //   onSuccess({ data }) {
      //     enqueueSnackbar(data?.message, {
      //       variant: 'success',
      //     })
      //   },
      onError: error => {
        if (error.response?.data?.message)
          enqueueSnackbar(error.response?.data?.message, {
            variant: 'error',
          })
      },
    },
  )
  return { data, isLoading, isError, error, isFetching }
}

export default useNewArrivalApi
