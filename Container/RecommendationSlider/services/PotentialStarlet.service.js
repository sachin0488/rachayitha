import { APIInstance } from 'api/global.api'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'

const fetchPotentialStarlet = async () => {
  const res = await APIInstance({
    url: `/potentialstartletbook/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const usePotentialStarletService = () => {
  const queryKey = [RecommendationSliderQuery.POTENTIAL_STARLET_BOOKS]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: fetchPotentialStarlet,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
