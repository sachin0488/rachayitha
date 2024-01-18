import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'

const fetchCommentListAPI = async ({ pageParam = 1, poemId, parentCommentId, sortBy }) => {
  const res = await APIInstance({
    url: `/poemcomment/`,
    method: 'GET',
    params: {
      page: pageParam,
      poem_id: poemId,
      parent_comment_id: parentCommentId,
      sort_by: sortBy,
    },
  })

  return await {
    data: res?.data?.data.map(item => {
      return {
        poemId: item?.poem_id,
        commentId: item?.id,
        parentCommentId: item?.parent_comment_id,
        userId: item?.user_id,
        username: item?.commentby,
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

const useCommentListService = ({ poemId, parentCommentId, sortBy }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [
      PoemDetailsQuery.COMMENT_LIST,
      { poemId: parseInt(poemId), parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
    ],
    queryFn: ({ pageParam }) => fetchCommentListAPI({ pageParam, poemId, parentCommentId, sortBy }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor
    },
    enabled: Boolean(poemId),
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
