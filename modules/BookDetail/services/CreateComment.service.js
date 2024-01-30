import { APIInstance } from 'services/global.service'
import { BookDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = async ({ bookId, parentCommentId, comment }) => {
  const response = await APIInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id: bookId,
      parent_comment_id: parentCommentId,
      comments: comment,
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

export const useCreateCommentService = ({ bookId, parentCommentId, sortBy }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment }) {
      return createCommentAPI({
        bookId,
        parentCommentId,
        comment,
      })
    },
    onSuccess({ message, isMessageVisible }) {
      queryClient.invalidateQueries({
        queryKey: [
          BookDetailsQuery.COMMENT_LIST,
          { bookId: parseInt(bookId), parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
        ],
      })

      if (isMessageVisible)
        enqueueSnackbar(message, {
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
