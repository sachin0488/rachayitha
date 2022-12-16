import { ApiInstance } from 'api/global.api'
import axios from 'axios'

export const fakeweeklyApi = async () => {
  const URL = 'https://novel-jsonserver-production.up.railway.app/weeklybook'
  const res = await axios.get(URL)
  return {
    data: { data: res.data },
  }
}

export const weeklyAPI = () => {
  const Url = '/weeklybook/'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
