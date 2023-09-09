import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'

const fetchNewArrivals = async () => {
  const res = await APIInstance({
    url: `/newarrivalbook`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useNewArrivalsService = () => {
  const queryKey = [RecommendationSliderQuery.NEW_ARRIVAL_BOOKS]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: fetchNewArrivals,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
