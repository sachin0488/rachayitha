import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContestQuery } from '../constants/query.address'

export const usePoemDetailService = poemId => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery.POEM_DETAILS, poemId],
    queryFn: () => fetchPoemDetailAPI(poemId),
    enabled: !!poemId,
  })

  return {
    data: data?.data || {},
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchPoemDetailAPI = async poemId => {
  const response = await APIInstance({
    url: `/poem/${poemId}`,
    method: 'GET',
  })

  const data = response?.data?.data || []

  return {
    data: data.map(item => ({
      id: item.id,
      book_name: item.poem_name,
      cover_img: item.cover_img,
      author_name: item.author_name,
    })),
  }
}
