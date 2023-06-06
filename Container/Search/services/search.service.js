import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
//  APIInstance({
//     url: '/book/',
//     method: 'GET',
//     params: { book_name: keyword },
//   })
const fetchSearchListAPI = async ({ pageParam = 1, SearchKeyword }) => {
  const res = await APIInstance({
    url: '/book/',
    method: 'GET',
    params: {
      page: pageParam,
      book_name: SearchKeyword,
    },
  })

  return await {
    data: res?.data?.data,
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useSearchService = ({ SearchKeyword }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search-list', SearchKeyword],
      queryFn: ({ pageParam }) => fetchSearchListAPI({ pageParam, SearchKeyword }),
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextCursor
      },
    })

  return {
    ContentList: data?.pages?.map(group => group?.data)?.flat() || [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isFetching,
    refetch,
  }
}

export default useSearchService
