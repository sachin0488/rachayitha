import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'

const fetchWeeklyBook = async () => {
  const res = await APIInstance({
    url: `/weeklybook/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useWeeklyBookService = () => {
  const queryKey = [RecommendationSliderQuery.WEEKLY_BOOKS]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: fetchWeeklyBook,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
