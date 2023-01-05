import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { fetchExploreApi } from './explore.api'

const useExplore = ({ categoryId }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['explore-list', categoryId],
    () => fetchExploreApi({ categoryId }),
    {
      enabled: Boolean(categoryId),
    },
  )

  return { data, isLoading, isError, error, isFetching }
}

export default useExplore
