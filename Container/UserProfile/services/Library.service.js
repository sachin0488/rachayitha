import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { UserProfileQuery } from '../constants/query.address'

const fetchLibraryListAPI = async ({ pageParam = 1 }) => {
  const res = await APIInstance({
    url: 'userbooklibrary/',
    method: 'GET',
    params: {
      page: pageParam,
    },
  })

  return await {
    data: res?.data?.data?.map(item => {
      return {
        bookId: item?.book_id_id,
        bookName: item?.book_name,
        authorName: item?.author_name,
        category: item?.category?.category,
        commentCount: item?.comment_count,
        avgRatingValue: item?.rating?.rate__avg,
        totalRatingCount: item?.rating?.rate__count,
        likeCount: item?.like_count,
        libraryAdded: true,
        status: item?.status,
        tags: item?.tags,
        synopsis: item?.synopsis,
        coverImage: item?.cover_img,
        coverImage2: item?.cover_img2,
        coverImage3: item?.cover_img3,
        coverImage4: item?.cover_img4,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useLibraryService = () => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [UserProfileQuery.LIBRARY_LIST],
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
