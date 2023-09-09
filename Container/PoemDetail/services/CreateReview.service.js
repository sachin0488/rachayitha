import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PoemDetailsQuery } from '../constants/query.address'

const createReviewAPI = async ({ poemId, comment, parameter1, parameter2, parameter3, parameter4, parameter5 }) => {
  const commentAPI = APIInstance({
    url: '/poemcomment/',
    method: 'POST',
    data: {
      poem_id: poemId,
      parent_comment_id: null,
      comments: comment,
    },
  })

  const ratingAPI = APIInstance({
    url: `/poemrate/`,
    method: 'POST',
    data: {
      poem_id: poemId,
      parameter1: parseInt(parameter1),
      parameter2: parseInt(parameter2),
      parameter3: parseInt(parameter3),
      parameter4: parseInt(parameter4),
      parameter5: parseInt(parameter5),
    },
  })

  const [commentResponse, ratingResponse] = await Promise.all([commentAPI, ratingAPI])

  return { commentResponse, ratingResponse }
}

export const useCreateReviewService = ({ poemId, sortBy }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment, parameter1, parameter2, parameter3, parameter4, parameter5 }) {
      return createReviewAPI({
        poemId,
        comment,
        parameter1,
        parameter2,
        parameter3,
        parameter4,
        parameter5,
      })
    },
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [PoemDetailsQuery.COMMENT_LIST, { poemId: parseInt(poemId), parentCommentId: null, sortBy }],
      })
      enqueueSnackbar('Your review has been posted !', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to post your review !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
