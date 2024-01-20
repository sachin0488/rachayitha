import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { BookDetailsQuery } from '../constants/query.address'

const createVoteAPI = async ({ bookId }) => {
  return APIInstance({
    url: `/bookvote/${bookId}`,
    method: 'POST',
  })
}

export const useCreateVoteService = ({ bookId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return createVoteAPI({
        bookId,
      })
    },
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [BookDetailsQuery.BOOK_VOTE, { bookId: parseInt(bookId) }],
      })
      queryClient.invalidateQueries({
        queryKey: [BookDetailsQuery.BOOK_DETAILS, { bookId: parseInt(bookId) }],
      })
      enqueueSnackbar(data.info.visible.message, {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar(error?.response?.data?.error?.visible?.message, {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
