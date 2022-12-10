import { ApiInstance } from 'api/global.api'

export const fetchExploreSection = () => {
  const Url = '/explorebook?category_id=1&page=2'
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
