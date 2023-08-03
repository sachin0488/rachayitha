import { APIInstance } from 'api/global.api'
import { BookDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likeBookAPI = ({ bookId }) => {
  return APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: '',
    },
  })
}

export const useBookLikeService = ({ bookId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likeBookAPI({
        bookId,
      })
    },
    onSuccess({ data }) {
      queryClient.setQueryData([BookDetailsQuery.BOOK_DETAILS, { bookId: parseInt(bookId) }], oldData => {
        const message = oldData?.isLiked ? 'Your like has been removed !' : 'Your like has been added !'
        enqueueSnackbar(message, {
          variant: 'success',
        })

        return oldData
          ? {
              ...oldData,
              likeCount: oldData?.isLiked ? parseInt(oldData?.likeCount) - 1 : parseInt(oldData?.likeCount) + 1,
              isLiked: !oldData?.isLiked,
            }
          : oldData
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to like book !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
