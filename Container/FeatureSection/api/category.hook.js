import { useQuery } from '@tanstack/react-query'
import { fetchCategoryAPT } from './category.api'

const useCategoryApi = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-category'], fetchCategoryAPT)
  return { data, isLoading, isError, error, isFetching }
}

export default useCategoryApi
