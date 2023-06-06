import { APIInstance } from 'api/global.api'
import { NovelDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likeCommentAPI = ({ bookId, commentId }) => {
  return APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: commentId || '',
    },
  })
}

export const useCommentLikeService = ({ bookId, commentId, parentCommentId, sortBy }) => {
  bookId = parseInt(bookId)
  commentId = parseInt(commentId)
  parentCommentId = parseInt(parentCommentId)

  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likeCommentAPI({
        bookId,
        commentId,
      })
    },
    onSuccess({ data }) {
      queryClient.setQueryData(
        [NovelDetailsQuery.COMMENT_LIST, { bookId, parentCommentId, sortBy }],

        oldData => {
          return oldData
            ? {
                ...oldData,
                pages: oldData?.pages?.map(group => {
                  return {
                    ...group,
                    data: group?.data?.map(item => {
                      if (item?.commentId !== commentId) return item

                      return {
                        ...item,
                        likeCount: item?.likeCount + (item?.isLiked ? -1 : 1),
                        isLiked: !item?.isLiked,
                      }
                    }),
                  }
                }),
              }
            : oldData
        },
      )
    },
    onError(error) {
      enqueueSnackbar('Unable to like book !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
