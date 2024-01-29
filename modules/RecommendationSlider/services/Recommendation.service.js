import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'
import { ContentType } from '../constants/common.constants'

const fetchRecommendation = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/newarrivalbook/` : `/newarrivalpoem/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper(contentType))
}

export const useRecommendationService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.RECOMMENDATION_CONTENTS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchRecommendation({ contentType }),
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
