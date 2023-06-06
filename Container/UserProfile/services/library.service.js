import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'

const fetchLibraryListAPI = async ({ pageParam = 1 }) => {
  const res = await APIInstance({
    url: 'userbooklibrary/',
    method: 'GET',
    params: {
      page: pageParam,
    },
  })

  return await {
    data: res?.data?.data,
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useLibraryService = () => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['library-list'],
      queryFn: fetchLibraryListAPI,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextCursor
      },
      staleTime: 1000,
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

export default useLibraryService
