import { APIInstance } from 'services/global.service'
import { ContentDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import i18n from 'i18next'

const likeContentAPI = async ({ contentId, contentType }) => {
  const response = await APIInstance({
    url: `/${contentType}like/`,
    method: 'POST',
    data: {
      [`${contentType}_id`]: contentId,
      [`${contentType}_comment_id`]: '',
    },
    params:{
      lang : i18n.language
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

export const useContentLikeService = ({ contentId, contentType }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likeContentAPI({
        contentId,
        contentType,
      })
    },
    onSuccess({ message, isMessageVisible }) {
      queryClient.setQueryData([ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(contentId), contentType }], oldData => {
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
