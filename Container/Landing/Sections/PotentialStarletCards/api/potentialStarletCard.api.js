import axios from 'axios'
import { ApiInstance } from 'api/global.api'
export const fakePotentialStarletApi = async () => {
  const URL = 'https://novel-jsonserver.vercel.app/potentialstartletbook'
  const res = await axios.get(URL)
  return {
    data: { data: res.data },
  }
}

export const potentialStarletApi = () => {
  const Url = '/potentialstartletbook/'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
