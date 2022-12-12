import { ApiInstance } from 'api/global.api'

// const API_URL = '/potentialstartletbook/'

export const libraryAPI = () => {
  const Url = '/book'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
