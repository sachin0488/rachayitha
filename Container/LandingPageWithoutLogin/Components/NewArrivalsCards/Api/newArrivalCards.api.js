import { ApiInstance } from '../../../../../api/global.api'

const API_URL = '/newarrivalbook'
const Url = '/newarrivalbook/'

export const newArrivalAPI = isLoggedIn => {
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
