import { APIInstance } from 'api/global.api'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'

const fetchRecommendation = async () => {
  const res = await APIInstance({
    url: `/newarrivalbook/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useRecommendationService = () => {
  const queryKey = [RecommendationSliderQuery.RECOMMENDATION_BOOKS]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: fetchRecommendation,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
