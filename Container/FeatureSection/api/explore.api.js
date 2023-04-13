import { ApiInstance } from 'api/global.api'

export const fetchExploreApi = ({ categoryId, contentType, page,sortBy }) => {
  return ApiInstance({
    url: contentType?.toLocaleLowerCase() === 'poem' ? `/explorepoem/` : `/explorebook/`,
    method: 'GET',
    params: {
      category_id: categoryId,
      sort_by: sortBy,
      page,
    },
  })
}
