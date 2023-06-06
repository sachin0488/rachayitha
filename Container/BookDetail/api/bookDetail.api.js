import { APIInstance } from '../../../api/global.api'

export const fetchBookVoteAPI = ({ bookId }) => {
  return APIInstance({
    url: `/bookvote/${bookId}`,
    method: 'GET',
  })
}

export const createBookVoteAPI = ({ bookId }) => {
  return APIInstance({
    url: `/bookvote/${bookId}`,
    method: 'POST',
  })
}
export const createBookRating = bookId => data => {
  return APIInstance({
    url: `/bookrate/`,
    method: 'POST',
    data: {
      book_id: bookId,
      parameter1: parseInt(data.parameter1),
      parameter2: parseInt(data.parameter2),
      parameter3: parseInt(data.parameter3),
      parameter4: parseInt(data.parameter4),
      parameter5: parseInt(data.parameter5),
    },
  })
}

// ----------------- Deprecated ----------------- //

export const fetchBookDetail = bookId => {
  return APIInstance({
    url: `book/${bookId}`,
    method: 'GET',
  })
}

export const fetchCommentList = ({ bookId, commentId, sortBy }) => {
  return APIInstance({
    method: 'GET',
    url: `/bookcomment/`,
    params: {
      book_id: bookId,
      parent_comment_id: commentId,
      sort_by: sortBy,
    },
  })
}

export const createBookCommentAPI = ({ book_id, comments, parent_comment_id }) => {
  return APIInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id,
      comments,
      parent_comment_id,
    },
  })
}

export const likeBookAPI = ({ bookId }) => {
  return APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: '',
    },
  })
}

export const likeBookCommentAPI = ({ bookId, commentId }) => {
  return APIInstance({
    url: '/booklike/',
    method: 'POST',
    data: {
      book_id: bookId,
      book_comment_id: commentId,
    },
  })
}

export const addToLibraryAPI = book_id => {
  return APIInstance({
    url: '/userbooklibrary/',
    method: 'POST',
    data: { book_id },
  })
}

// ----------------- Deprecated ----------------- //
