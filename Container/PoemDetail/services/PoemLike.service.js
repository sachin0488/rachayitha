import { APIInstance } from 'api/global.api'
import { PoemDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likePoemAPI = ({ poemId }) => {
  return APIInstance({
    url: '/poemlike/',
    method: 'POST',
    data: {
      poem_id: poemId,
      poem_comment_id: '',
    },
  })
}

export const usePoemLikeService = ({ poemId }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likePoemAPI({
        poemId,
      })
    },
    onSuccess({ data }) {
      queryClient.setQueryData([PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }], oldData => {
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
      enqueueSnackbar('Unable to like poem !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
