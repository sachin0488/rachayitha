import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../store/slices/global/user.slice'
import { weeklyAPI } from './weeklyCard.api'

const useWeeklyApi = () => {
  const { isLoggedIn } = useSelector(selectUser)
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-weekly', isLoggedIn],
    () => weeklyAPI(isLoggedIn),
    {
      onSuccess({ data }) {},
    },
  )
  return { data, isLoading, isError, error, isFetching }
}

export default useWeeklyApi
