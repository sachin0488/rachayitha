import { useQuery } from '@tanstack/react-query'
import { newArrivalAPI, fakeNewArrivalApi } from './newArrivalCards.api'

const useNewArrivalApi = ({ isReal }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-new-arrival'],
    isReal ? newArrivalAPI : fakeNewArrivalApi,
  )
  return { data, isLoading, isError, error, isFetching }
}

export default useNewArrivalApi
