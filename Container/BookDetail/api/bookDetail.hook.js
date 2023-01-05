import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import {
  addToLibraryAPI,
  bookCommentAPI,
  createBookCommentAPI,
  fetchBookDetail,
  fetchCommentList,
  fetchCommentSection,
} from './bookDetail.api'

export const useBookComment = book => {
  const { data, isLoading, isError, error, refetch } = useQuery(
    ['use-comment', book],
    () => fetchCommentSection(book),
    {
      refetchIntervalInBackground: true,
    },
  )
  return { data, isLoading, isError, error, refetch }
}

export const useAddToLibraryAPI = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess } = useMutation(addToLibraryAPI, {
    onSuccess({ data }) {
      enqueueSnackbar('Book Added to Library !', {
        variant: 'success',
      })
    },
    onError: error => {
      enqueueSnackbar('Request Failed !', {
        variant: 'error',
      })
    },
  })

  const handleAddToLibrary = mutate

  return { mutate, handleAddToLibrary, isLoading, isSuccess }
}

export const useBookCommentListAPI = ({ bookId, commentId, ...props }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isSuccess, isLoading, isError, refetch } = useQuery(
    ['comment-list', bookId, commentId],
    () => fetchCommentList({ bookId, commentId }),
    {
      enabled: !Boolean(props?.disableAPI),
      refetchIntervalInBackground: true,
      onError: error => {
        enqueueSnackbar('Something went wrong !', {
          variant: 'error',
        })
      },
    },
  )

  return { CommentList: data?.data?.data, isLoading, isSuccess, isError, refetch }
}

export const useCreateBookCommentAPI = ({ bookId, ...props }) => {
  const { refetch } = useBookCommentListAPI({
    bookId: bookId,
    commentId: Boolean(props?.commentId) ? commentId : null,
    disableAPI: true,
  })
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    data =>
      createBookCommentAPI({
        ...data,
        book_id: bookId,
        parent_comment_id: Boolean(props?.commentId) ? commentId : null,
      }),
    {
      onSuccess({ data }) {
        refetch()
        enqueueSnackbar('Your comment has been added !', {
          variant: 'success',
        })
      },
      onError: error => {
        enqueueSnackbar('Unable to post comment !', {
          variant: 'error',
        })
      },
    },
  )

  const handleCreateBookComment = mutate

  return { handleCreateBookComment, isLoading, isSuccess, isError }
}

const useBookDetail = bookId => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['book-details', bookId],
    () => fetchBookDetail(bookId),
    {
      enabled: Boolean(bookId),
      onSuccess({ data }) {},
    },
  )
  return { BookDetail: data?.data?.data[0], isLoading, isError, error, isFetching }
}

export default useBookDetail
