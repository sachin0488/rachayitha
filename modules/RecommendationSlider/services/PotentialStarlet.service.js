import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'
import { ContentType } from '../constants/common.constants'
import i18n from 'i18next'

const fetchPotentialStarlet = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/potentialstartletbook/` : `/potentialstartletpoem/`,
    method: 'GET',
    params:{
      lang:i18n.language
    }
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper(contentType))
}

export const usePotentialStarletService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.POTENTIAL_STARLET_BOOKS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchPotentialStarlet({ contentType }),
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
