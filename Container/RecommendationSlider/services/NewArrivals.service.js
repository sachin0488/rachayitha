import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import generateAPIRowMapper from '../utility/generateAPIRowMapper'
import { ContentType } from '../constants/common.constants'

const fetchNewArrivals = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/newarrivalbook` : `/newarrivalpoem`,
    method: 'GET',
  })

  const item = await res?.data?.data

  return await item.map(generateAPIRowMapper)
}

export const useNewArrivalsService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.NEW_ARRIVAL_CONTENTS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchNewArrivals({ contentType }),
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
