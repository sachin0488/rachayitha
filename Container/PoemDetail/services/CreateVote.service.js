import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PoemDetailsQuery } from '../constants/query.address'

const createVoteAPI = async ({ poemId }) => {
  return APIInstance({
    url: `/poemvote/${poemId}`,
    method: 'POST',
  })
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
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [PoemDetailsQuery.POEM_VOTE, { poemId: parseInt(poemId) }],
      })
      enqueueSnackbar(data.info.visible.message, {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to request your query!', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
