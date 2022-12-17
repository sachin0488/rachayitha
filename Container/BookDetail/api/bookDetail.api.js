import { ApiInstance } from '../../../api/global.api'

export const fetchBookDetail = book => {
  const Url = `book/${book}`
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}

export const fetchCommentSection = book => {
  const Url = `/bookcomment?book_id=${book}`
  return ApiInstance({
    url: Url,
    method: 'GET',
  })
}

export const addToLibraryAPI = book_id => {
  return ApiInstance({
    url: '/userbooklibrary/',
    method: 'POST',
    data: { book_id },
  })
}

export const bookCommentAPI = ({ book_id, comments, parent_comment_id }) => {
  return ApiInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id,
      comments,
      parent_comment_id,
    },
  })
}
