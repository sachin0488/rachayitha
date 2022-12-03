import { useQuery } from '@tanstack/react-query'
import fetchBookDetail from './bookDetail.api'

const useBookDetail = book => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-book', book], () => fetchBookDetail(book))
  return { data, isLoading, isError, error, isFetching }
}

export default useBookDetail
