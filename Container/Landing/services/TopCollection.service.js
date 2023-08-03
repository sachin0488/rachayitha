import { useQuery } from '@tanstack/react-query'
import { LandingQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

export const useTopCollectionService = ({ startDate, endDate }) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [LandingQuery?.TOP_COLLACTION, { startDate, endDate }],
    queryFn: () => fetchTopCollectionAPI({ startDate, endDate }),
  })

  return {
    data: data?.data?.data || {
      book: [],
      poem: [],
      shorts: [],
    },
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchTopCollectionAPI = async ({ startDate, endDate }) => {
  const res = await APIInstance({
    url: '/topbooklist/',
    params: {
      startDate,
      endDate,
    },
    method: 'GET',
  })

  return {
    book: res?.data?.data?.book || [],
    poem: res?.data?.data?.poem || [],
    shorts: res?.data?.data?.shorts || [],
  }
}
