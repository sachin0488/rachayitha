import { ApiInstance } from '../../../../../api/global.api'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../store/slices/global/user.slice'
const API_URL = '/potentialstartletbook/'
const Url = '/potentialstartletbook'

export const weeklyAPI = ({ isLoggedIn }) => {
  return ApiInstance({
    url: isLoggedIn ? API_URL : Url,
    method: 'GET',
  })
}
