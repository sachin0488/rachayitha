import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { BookDetailsQuery } from '../constants/query.address'

const createReviewAPI = async ({ bookId, comment, parameter1, parameter2, parameter3, parameter4, parameter5 }) => {
  const commentAPI = APIInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id: bookId,
      parent_comment_id: null,
      comments: comment,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const ratingAPI = APIInstance({
    url: `/bookrate/`,
    method: 'POST',
    data: {
      book_id: bookId,
      parameter1: parseInt(parameter1),
      parameter2: parseInt(parameter2),
      parameter3: parseInt(parameter3),
      parameter4: parseInt(parameter4),
      parameter5: parseInt(parameter5),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const [commentResponse, ratingResponse] = await Promise.all([commentAPI, ratingAPI])

  return {
    comment: {
      message: commentResponse?.data?.info?.visible?.message || '',
      isMessageVisible: !!commentResponse?.data?.info?.visible?.message,
    },
    rating: {
      message: ratingResponse?.data?.info?.visible?.message || '',
      isMessageVisible: !!ratingResponse?.data?.info?.visible?.message,
    },
  }
}

export const useCreateReviewService = ({ bookId, sortBy }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment, parameter1, parameter2, parameter3, parameter4, parameter5 }) {
      return createReviewAPI({
        bookId,
        comment,
        parameter1,
        parameter2,
        parameter3,
        parameter4,
        parameter5,
      })
    },
    onSuccess({ comment, rating }) {
      queryClient.invalidateQueries({
        queryKey: [BookDetailsQuery.COMMENT_LIST, { bookId: parseInt(bookId), parentCommentId: null, sortBy }],
      })

      if (comment?.isMessageVisible)
        enqueueSnackbar(comment?.message, {
          variant: 'success',
        })

      if (rating?.isMessageVisible)
        enqueueSnackbar(rating?.message, {
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