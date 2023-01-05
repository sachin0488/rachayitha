import { ApiInstance } from 'api/global.api'

// const API_URL = '/potentialstartletbook/'

export const fetchLibraryAPI = () => {
  const Url = '/book'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
