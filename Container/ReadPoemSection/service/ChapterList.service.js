import { useQuery, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useCallback } from 'react'
import { NovelReadQuery } from '../constants/query.address'

export const useChapterListService = ({ poemId, chapterId }) => {
  const queryClient = useQueryClient()

  const { data, isLoading, isError, isSuccess, isFetching } = useQuery({
    queryKey: [NovelReadQuery.CHAPTER_LIST, { poemId }],
    queryFn: () => fetchChapterListAPI({ poemId, chapterId }),
    enabled: Boolean(poemId && chapterId),
  })

  const setChapterLoadedById = useCallback(
    chapterId => {
      queryClient.setQueryData([NovelReadQuery.CHAPTER_LIST, { poemId }], preData => {
        return {
          ChapterList: preData?.ChapterList?.map(chapter => {
            if (chapter.chapterId !== chapterId) return chapter

            return {
              ...chapter,
              isLoaded: true,
            }
          }),
        }
      })
    },
    [poemId, queryClient],
  )

  return { ChapterList: data?.ChapterList, setChapterLoadedById, isLoading, isError, isSuccess, isFetching }
}

const fetchChapterListAPI = async ({ poemId, chapterId }) => {
  const ChapterListAPI = await APIInstance({
    url: `/poem/${poemId}/chapter`,
    method: 'GET',
  })

  const ChapterContentAPI = await APIInstance({
    url: `/poem/${poemId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const [ChapterListResponse, ChapterContentResponse] = await Promise.all([ChapterListAPI, ChapterContentAPI])

  return {
    ChapterList: ChapterListResponse.data?.data?.map(chapter => ({
      poemId: parseInt(chapter.poem_id),
      chapterId: parseInt(chapter.id),
      authorNote: chapter.author_note,
      chapterTitle: chapter.chapter_title,
      chapterSequence: chapter.chapter_sequence,
      chapterContent: chapterId === chapter.id ? ChapterContentResponse?.data?.data[0]?.chapter_content : '',
      isPublished: chapter.is_published,
      publishDate: chapter.publish_date,
      userId: chapter.user_id,
      coinRequired: 0,
      isLocked: false,
      isPaid: false,
      isAvailableInSubscription: false,
      isLoaded: chapterId === chapter.id,
    })),
    // .filter(chapter => chapter.isPublished),
  }
}
