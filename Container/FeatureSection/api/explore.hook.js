import { useQuery } from '@tanstack/react-query'
import { fakeExploreApi, exploreApi } from './explore.api'

const useExplore = () => {
  const isReal = true
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-explore'],
    isReal ? exploreApi : fakeExploreApi,
  )
  return { data, isLoading, isError, error, isFetching }
}

export default useExplore
