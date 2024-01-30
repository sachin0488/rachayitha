import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = async ({ poemId, parentCommentId, comment }) => {
  const response = await APIInstance({
    url: '/poemcomment/',
    method: 'POST',
    data: {
      poem_id: poemId,
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

export const useCreateCommentService = ({ poemId, parentCommentId, sortBy }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment }) {
      return createCommentAPI({
        poemId,
        parentCommentId,
        comment,
      })
    },
    onSuccess({ message, isMessageVisible }) {
      queryClient.invalidateQueries({
        queryKey: [
          PoemDetailsQuery.COMMENT_LIST,
          { poemId: parseInt(poemId), parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
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
