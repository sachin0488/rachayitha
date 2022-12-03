import { ApiInstance } from '../../../../../api/global.api'
import axios from 'axios'
// const API_URL = 'https://novel-jsonserver-production.up.railway.app/weekly_feature'
const API_URL = '/potentialstartletbook/'
const Url = '/potentialstartletbook/'

export const weeklyAPI = isLoggedIn => {
  // const response = await axios.get('http://rachayitha.com/api/v1/newarrivalbook', {
  //   headers: { Authorization: ApiInstance.defaults.headers.common['Authorization'] },
  // })
  // console.log('api call force', response?.data)
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
