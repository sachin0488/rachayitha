import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = ({ poemId, parentCommentId, comment }) => {
  return APIInstance({
    url: '/poemcomment/',
    method: 'POST',
    data: {
      poem_id: poemId,
      parent_comment_id: parentCommentId,
      comments: comment,
    },
  })
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
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [
          PoemDetailsQuery.COMMENT_LIST,
          { poemId: parseInt(poemId), parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
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
