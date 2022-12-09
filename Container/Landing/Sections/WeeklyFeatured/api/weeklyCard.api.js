import { ApiInstance } from '../../../../../api/global.api'

// const API_URL = '/potentialstartletbook/'
const Url = '/potentialstartletbook/'

export const weeklyAPI = () => {
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
