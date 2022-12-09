import { ApiInstance } from '../../../api/global.api'

export const fetchBookDetail = book => {
  const Url = `book/${book}`
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}

export const fetchCommentSection = book => {
  const Url = `/bookcomment?book_id=1`
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}
