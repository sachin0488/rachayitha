import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { addToLibraryAPI, bookCommentAPI, fetchBookDetail, fetchCommentSection } from './bookDetail.api'

export const useBookComment = book => {
  const { data, isLoading, isError, error } = useQuery(['use-comment', book], () => fetchCommentSection(book))
  return { data, isLoading, isError, error }
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

export const useBookCommentAPI = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess } = useMutation(bookCommentAPI, {
    onSuccess({ data }) {
      console.log(hello)
      enqueueSnackbar(data.message, {
        variant: 'success',
      })
    },
    onError: error => {
      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleBookComment = mutate

  return { handleBookComment, isLoading, isSuccess }
}

const useBookDetail = book => {
  console.log(book, 'book')
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-book', book], () => fetchBookDetail(book), {
    onSuccess({ data }) {},
  })
  return { data, isLoading, isError, error, isFetching }
}

export default useBookDetail
