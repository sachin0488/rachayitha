import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'
import { ContentType } from '../constants/common.constants'

const fetchWeeklyBook = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/weeklybook/` : `/weeklypoem/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useWeeklyBookService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.WEEKLY_CONTENTS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchWeeklyBook({ contentType }),
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
