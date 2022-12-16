import axios from 'axios'
import { ApiInstance } from '../../../../../api/global.api'

export const fakeNewArrivalApi = async () => {
  const URL = 'https://novel-jsonserver-production.up.railway.app/weeklybook'
  const res = await axios.get(URL)
  return {
    data: { data: res.data },
  }
}

export const newArrivalAPI = () => {
  const Url = '/newarrivalbook'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
