import { APIInstance } from 'api/global.api'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'

const fetchContinueReading = async () => {
  const res = await APIInstance({
    url: `/incompletebookwatch/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useContinueReadingService = () => {
  const queryKey = [RecommendationSliderQuery.CONTINUE_READING_BOOKS]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: fetchContinueReading,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
