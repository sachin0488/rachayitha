import { APIInstance } from 'services/global.service'
import { BookDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likeCommentAPI = async ({ bookId, commentId }) => {
  const response = await APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: commentId || '',
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
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
    onSuccess({ message }) {
      let messageAlternative

      queryClient.setQueryData(
        [BookDetailsQuery.COMMENT_LIST, { bookId, parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy }],

        oldData => {
          return oldData
            ? {
                ...oldData,
                pages: oldData?.pages?.map(group => {
                  return {
                    ...group,
                    data: group?.data?.map(item => {
                      if (item?.commentId !== commentId) return item

                      messageAlternative = item?.isLiked ? 'Your like has been removed !' : 'Your like has been added !'

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

      enqueueSnackbar(message || messageAlternative, {
        variant: 'success',
      })
    },
    onError(error) {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Unable to perform requested action!', {
          variant: 'error',
        })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
