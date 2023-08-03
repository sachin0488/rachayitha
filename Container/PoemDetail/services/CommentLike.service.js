import { APIInstance } from 'api/global.api'
import { PoemDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

const likeCommentAPI = ({ poemId, commentId }) => {
  return APIInstance({
    url: '/poemlike/',
    method: 'POST',
    data: {
      poem_id: poemId,
      poem_comment_id: commentId || '',
    },
  })
}

export const useCommentLikeService = ({ poemId, commentId, parentCommentId, sortBy }) => {
  poemId = parseInt(poemId)
  commentId = parseInt(commentId)
  parentCommentId = parseInt(parentCommentId)

  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn() {
      return likeCommentAPI({
        poemId,
        commentId,
      })
    },
    onSuccess({ data }) {
      queryClient.setQueryData(
        [PoemDetailsQuery.COMMENT_LIST, { poemId, parentCommentId, sortBy }],

        oldData => {
          return oldData
            ? {
                ...oldData,
                pages: oldData?.pages?.map(group => {
                  return {
                    ...group,
                    data: group?.data?.map(item => {
                      if (item?.commentId !== commentId) return item

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
    },
    onError(error) {
      enqueueSnackbar('Unable to like poem !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
