import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { BookDetailsQuery } from '../constants/query.address'

const fetchCommentListAPI = async ({ pageParam = 1, bookId, parentCommentId, sortBy }) => {
  const res = await APIInstance({
    url: `/bookcomment/`,
    method: 'GET',
    params: {
      page: pageParam,
      book_id: bookId,
      parent_comment_id: parentCommentId,
      sort_by: sortBy,
    },
  })

  return await {
    data: res?.data?.data.map(item => {
      return {
        bookId: item?.book_id,
        commentId: item?.id,
        parentCommentId: item?.parent_comment_id,
        userId: item?.user_id,
        username: item?.comment_by,
        profileImage: item?.commentuser_profile_pic,
        rating: item?.rating,
        isLiked: item?.is_liked,
        comment: item?.comments,
        likeCount: item?.like_count,
        commentCount: item?.comment_count,
        createdAt: item?.comment_date,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useCommentListService = ({ bookId, parentCommentId, sortBy }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        BookDetailsQuery.COMMENT_LIST,
        { bookId: parseInt(bookId), parentCommentId: parseInt(parentCommentId), sortBy },
      ],
      queryFn: ({ pageParam }) => fetchCommentListAPI({ pageParam, bookId, parentCommentId, sortBy }),
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

export default useCommentListService
