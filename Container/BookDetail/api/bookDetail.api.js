import { ApiInstance } from '../../../api/global.api'

export const fetchBookDetail = bookId => {
  return ApiInstance({
    url: `book/${bookId}`,
    method: 'GET',
  })
}

export const fetchCommentList = ({ bookId, commentId }) => {
  return ApiInstance({
    method: 'GET',
    url: `/bookcomment`,
    params: {
      book_id: bookId,
      parent_comment_id: commentId,
    },
  })
}

export const createBookCommentAPI = ({ book_id, comments, parent_comment_id }) => {
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

export const addToLibraryAPI = book_id => {
  return ApiInstance({
    url: '/userbooklibrary/',
    method: 'POST',
    data: { book_id },
  })
}
