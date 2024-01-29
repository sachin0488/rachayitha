import { APIInstance } from 'services/global.service'
import { BookDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likeBookAPI = async ({ bookId }) => {
  const response = await APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: '',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
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
    onSuccess({ message, isMessageVisible }) {
      queryClient.setQueryData([BookDetailsQuery.BOOK_DETAILS, { bookId: parseInt(bookId) }], oldData => {
        const messageAlternative = oldData?.isLiked ? 'Your like has been removed !' : 'Your like has been added !'

        enqueueSnackbar(message || messageAlternative, {
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
