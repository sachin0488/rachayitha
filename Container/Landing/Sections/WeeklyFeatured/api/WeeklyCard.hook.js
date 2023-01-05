import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../store/slices/global/user.slice'
import { weeklyAPI, fakeweeklyApi } from './weeklyCard.api'

const useWeeklyApi = ({ isReal }) => {
  const { isLoggedIn } = useSelector(selectUser)
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-weekly'], isReal ? weeklyAPI : fakeweeklyApi, {
    onSuccess({ data }) {},
  })
  return { data, isLoading, isError, error, isFetching }
}

export default useWeeklyApi
