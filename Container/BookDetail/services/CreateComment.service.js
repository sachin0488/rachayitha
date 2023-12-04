import { APIInstance } from 'services/global.service'
import { BookDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = ({ bookId, parentCommentId, comment }) => {
  return APIInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id: bookId,
      parent_comment_id: parentCommentId,
      comments: comment,
    },
  })
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
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [
          BookDetailsQuery.COMMENT_LIST,
          { bookId: parseInt(bookId), parentCommentId: parseInt(parentCommentId), sortBy },
        ],
      })

      enqueueSnackbar(data.info.visible.message, {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to post your comment !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
