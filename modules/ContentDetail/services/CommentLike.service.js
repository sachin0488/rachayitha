import { APIInstance } from 'services/global.service'
import { ContentDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import i18n from 'i18next'
const likeCommentAPI = async ({ contentId, commentId, contentType }) => {
  const response = await APIInstance({
    url: `/${contentType}like/`,
    method: 'POST',
    data: {
      [`${contentType}_id`]: contentId,
      [`${contentType}_comment_id`]: commentId,
    },
    params:{
      lang:i18n.language
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

export const useCommentLikeService = ({ contentId, commentId, parentCommentId, sortBy, contentType }) => {
  contentId = parseInt(contentId)
  commentId = parseInt(commentId)
  parentCommentId = parseInt(parentCommentId)

  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likeCommentAPI({
        contentId,
        commentId,
        contentType,
      })
    },
    onSuccess({ message }) {
      let messageAlternative

      queryClient.setQueryData(
        [
          ContentDetailsQuery.COMMENT_LIST,
          { contentType, contentId, parentCommentId: parentCommentId ? parseInt(parentCommentId) : undefined, sortBy },
        ],

        oldData => {
          return oldData
            ? {
                ...oldData,
                pages: oldData?.pages?.map(group => {
                  return {
                    ...group,
                    data: group?.data?.map(item => {
                      if (item?.commentId !== commentId) return item

                      messageAlternative = item?.isLiked ? 'Your like has been removed !' : 'Your like has been added !'

                      return {
                        ...item,
                        likeCount: item?.likeCount + (item?.isLiked ? -1 : 1),
                        isLiked: !item?.isLiked,
                      }
                    }),
                  }
                }),
              }
            : oldData
        },
      )

      enqueueSnackbar(message || messageAlternative, {
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
