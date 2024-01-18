import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { UserProfileQuery } from '../constants/query.address'

const fetchLibraryListAPI = async ({ pageParam = 1 }, contentType) => {
  const res = await APIInstance({
    url: contentType === 'book' ? '/userbooklibrary/' : contentType === 'poem' ? '/userpoemlibrary/' : '/userstorylibrary/',
    method: 'GET',
    params: {
      page: pageParam,
    },
  })

  if (contentType === 'poem')
    return await {
      data: res?.data?.data?.map(item => {
        return {
          poemId: item?.id,
          poemName: item?.poem_name,
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

  return await {
    data: res?.data?.data?.map(item => {
      return {
        bookId: item?.book_id_id,
        bookName: item?.book_name,
        authorName: item?.author_name,
        category: item?.category,
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

const useLibraryService = ({ contentType }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [UserProfileQuery.LIBRARY_LIST, { contentType }],
    queryFn: params => fetchLibraryListAPI(params, contentType),
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
