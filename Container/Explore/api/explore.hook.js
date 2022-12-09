import { useQuery } from '@tanstack/react-query'
import { fetchExploreSection } from './explore.api'

const useExplore = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-explore'], () => fetchExploreSection(), {
    onSuccess({ data }) {
      console.log(data.resources.data, 'data explore')
    },
  })
  return { data, isLoading, isError, error, isFetching }
}

export default useExplore
