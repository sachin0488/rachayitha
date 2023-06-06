import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'

const fetchCategoryAPT = () => {
  return APIInstance({
    url: '/category/',
    method: 'GET',
  })
}

const useCategoryApi = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['category-list'], fetchCategoryAPT)

  return { CategoryList: data?.data?.data, isLoading, isError, error, isFetching }
}

export default useCategoryApi
