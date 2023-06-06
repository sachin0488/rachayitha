import { APIInstance } from 'api/global.api'

export const fetchChapterListAPI = ({ poemId }) => {
  return APIInstance({
    url: `/poem/${poemId}/chapter`,
    method: 'GET',
  })
}

export const fetchChapterContentAPI = ({ poemId, chapterId }) => {
  return APIInstance({
    url: `/poem/${poemId}/chapter/${chapterId}`,
    method: 'GET',
  })
}
