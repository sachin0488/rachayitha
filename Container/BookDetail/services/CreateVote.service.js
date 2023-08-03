import { APIInstance } from 'api/global.api'
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
      enqueueSnackbar('Your Vote has been Added !', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to Add your Vote !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
