import { ApiInstance } from 'api/global.api'
import axios from 'axios'

export const fakeExploreApi = async () => {
  const URL = 'https://novel-jsonserver.vercel.app/explorebook'
  const res = await axios.get(URL)
  return {
    data: { resources: { data: res.data } },
  }
}
// data?.data?.resources?.data

export const exploreApi = () => {
  const Url = '/explorebook?category_id=1&page=2'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
