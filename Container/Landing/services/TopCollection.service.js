import { useQuery } from '@tanstack/react-query'
import { LandingQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

export const useTopCollectionService = ({ startDate, endDate }) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [LandingQuery?.TOP_COLLECTION, { startDate, endDate }],
    queryFn: () => fetchTopCollectionAPI({ startDate, endDate }),
  })

  return {
    data: {
      books: data?.books,
      poems: data?.poems,
      shorts: data?.shorts,
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
    books: res?.data?.data?.novels || [],
    poems: res?.data?.data?.poems || [],
    shorts: res?.data?.data?.shorts || [],
  }
}
