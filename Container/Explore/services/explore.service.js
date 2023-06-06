import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'

const fetchExploreListAPI = async ({ categoryId, contentType, page, sortBy }) => {
  const res = await APIInstance({
    url: contentType?.toLocaleLowerCase() === 'poem' ? `/explorepoem/` : `/explorebook/`,
    method: 'GET',
    params: {
      category_id: categoryId,
      sort_by: sortBy,
      page,
    },
  })
  return await {
    data: res?.data?.data,
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useExplore = ({ categoryId, contentType, sortBy }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['explore-list', categoryId, contentType, sortBy],
      enabled: !!categoryId && !!contentType && !!sortBy,
      queryFn: ({ pageParam = 1 }) => fetchExploreListAPI({ categoryId, contentType, page: pageParam, sortBy }),
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

export default useExplore
