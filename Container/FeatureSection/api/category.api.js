import { ApiInstance } from 'api/global.api'

export const fetchCategoryAPT = () => {
  return ApiInstance({
    url: '/category/',
    method: 'GET',
  })
}
