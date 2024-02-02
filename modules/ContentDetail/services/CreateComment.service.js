import { APIInstance } from 'services/global.service'
import { ContentDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = async ({ contentId, parentCommentId, comment, contentType }) => {
  console.log('contentId', contentId)
  const response = await APIInstance({
    url: `/${contentType}comment/`,
    method: 'POST',
    data: {
      [`${contentType}_id`]: contentId,
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

export const useCreateCommentService = ({ contentId, parentCommentId, sortBy, contentType }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment }) {
      return createCommentAPI({
        contentId,
        parentCommentId,
        comment,
        contentType,
      })
    },
    onSuccess({ message, isMessageVisible }) {
      queryClient.invalidateQueries({
        queryKey: [
          ContentDetailsQuery.COMMENT_LIST,
          { contentType, contentId: parseInt(contentId), parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
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
