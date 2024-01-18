import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'
import { ContentType } from '../constants/common.constants'

const fetchContinueReading = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/incompletebookwatch/` : `/incompletepoemwatch/`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useContinueReadingService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.CONTINUE_READING_CONTENTS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchContinueReading({ contentType }),
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
