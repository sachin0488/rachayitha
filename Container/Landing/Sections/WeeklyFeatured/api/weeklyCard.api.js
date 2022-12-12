import { ApiInstance } from 'api/global.api'

// const API_URL = '/potentialstartletbook/'

export const weeklyAPI = () => {
  const Url = '/potentialstartletbook/'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
