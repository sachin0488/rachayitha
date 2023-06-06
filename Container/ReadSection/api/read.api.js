import { APIInstance } from 'api/global.api'

export const fetchChapterListAPI = ({ bookId }) => {
  return APIInstance({
    url: `/book/${bookId}/chapter`,
    method: 'GET',
  })
}

export const fetchChapterContentAPI = ({ bookId, chapterId }) => {
  return APIInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })
}
