import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { ExploreQuery } from '../constants/query.address'

const fetchCategoryAPT = async () => {
  const res = await APIInstance({
    url: '/category/',
    method: 'GET',
  })
  return (
    res?.data?.data?.map(item => {
      return {
        categoryId: item?.id,
        categoryName: item?.category_name,
      }
    }) || []
  )
}

const useCategoryService = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [ExploreQuery.CATEGORY_LIST],
    queryFn: fetchCategoryAPT,
  })

  return { CategoryList: data, isLoading, isError, error, isFetching }
}

export default useCategoryService
