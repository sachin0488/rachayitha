import { useQuery } from '@tanstack/react-query'
import { fetchBookDetail, fetchCommentSection } from './bookDetail.api'

export const useBookComment = book => {
  const { data, isLoading, isError, error } = useQuery(['use-comment', book], () => fetchCommentSection(book))
  return { data, isLoading, isError, error }
}

const useBookDetail = book => {
  console.log(book, 'book')
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-book', book], () => fetchBookDetail(book), {
    onSuccess({ data }) {},
  })
  return { data, isLoading, isError, error, isFetching }
}

export default useBookDetail
