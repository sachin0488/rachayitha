import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { ContentDetailsQuery } from '../constants/query.address'
import i18n from 'i18next'

const createVoteAPI = async ({ contentId, contentType }) => {
  const response = await APIInstance({
    url: `/${contentType}vote/${contentId}`,
    method: 'POST',
    params:{
      lang:i18n.language
    }
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useCreateVoteService = ({ contentId, contentType }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return createVoteAPI({
        contentId,
        contentType,
      })
    },
    onSuccess({ isMessageVisible, message }) {
      queryClient.invalidateQueries({
        queryKey: [ContentDetailsQuery.CONTENT_VOTE, { contentId: parseInt(contentId), contentType }],
      })
      queryClient.invalidateQueries({
        queryKey: [ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(contentId), contentType }],
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
