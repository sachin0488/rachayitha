import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ExploreQuery } from '../constants/query.address'
import i18n from 'i18next'
const fetchCategoryAPT = async () => {
  const lang=i18n.language;
  const res = await APIInstance({
    url: '/category/',
    method: 'GET',
    params: { lang }
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
