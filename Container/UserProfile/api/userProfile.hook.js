import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/global/user.slice'
import { libraryAPI } from './userProfile.api'

const useLibraryApi = () => {
  const { isLoggedIn } = useSelector(selectUser)
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-library', isLoggedIn],
    () => libraryAPI(isLoggedIn),
    {
      onSuccess({ data }) {},
    },
  )
  return { data, isLoading, isError, error, isFetching }
}

export default useLibraryApi
