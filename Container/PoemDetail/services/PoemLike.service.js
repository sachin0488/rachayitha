import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likePoemAPI = async ({ poemId }) => {
  const response = await APIInstance({
    url: '/poemlike/',
    method: 'POST',
    data: {
      poem_id: poemId,
      poem_comment_id: '',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
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
    onSuccess({ message, isMessageVisible }) {
      queryClient.setQueryData([PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }], oldData => {
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
