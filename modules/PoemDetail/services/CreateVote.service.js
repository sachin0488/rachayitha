import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PoemDetailsQuery } from '../constants/query.address'

const createVoteAPI = async ({ poemId }) => {
  const response = await APIInstance({
    url: `/poemvote/${poemId}`,
    method: 'POST',
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useCreateVoteService = ({ poemId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return createVoteAPI({
        poemId,
      })
    },
    onSuccess({ isMessageVisible, message }) {
      queryClient.invalidateQueries({
        queryKey: [PoemDetailsQuery.POEM_VOTE, { poemId: parseInt(poemId) }],
      })
      queryClient.invalidateQueries({
        queryKey: [PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }],
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
