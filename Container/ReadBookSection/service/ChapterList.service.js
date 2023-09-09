import { useQuery, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useCallback } from 'react'
import { BookReadQuery } from '../constants/query.address'
import { useEffect } from 'react'
import { useChapterContentService } from './ChapterContent.service'

export const useChapterListService = ({ bookId, chapterId }) => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useChapterContentService({ bookId: bookId })

  const { data, isLoading, isError, isSuccess, isFetching, remove, refetch } = useQuery({
    queryKey: [BookReadQuery.CHAPTER_LIST, { bookId }],
    queryFn: () => fetchChapterListAPI({ bookId, chapterId }),
    enabled: Boolean(bookId && chapterId),
  })

  const setChapterLoadedById = useCallback(
    chapterId => {
      queryClient.setQueryData([BookReadQuery.CHAPTER_LIST, { bookId }], preData => {
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
    [bookId, queryClient],
  )

  const reload = useCallback(
    async ({ chapterId }) => {
      const response = await mutateAsync({ chapterId })
      if (response) {
        queryClient.setQueryData([BookReadQuery.CHAPTER_LIST, { bookId }], preData => {
          return {
            ChapterList: preData?.ChapterList?.map(chapter => {
              return {
                ...chapter,
                isLoaded: chapter.chapterId === chapterId,
              }
            }),
          }
        })
      }
    },
    [bookId, mutateAsync, queryClient],
  )

  return { ChapterList: data?.ChapterList, setChapterLoadedById, isLoading, isError, isSuccess, isFetching, reload }
}

const fetchChapterListAPI = async ({ bookId, chapterId }) => {
  const ChapterListAPI = await APIInstance({
    url: `/book/${bookId}/chapter`,
    method: 'GET',
  })

  const ChapterContentAPI = await APIInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const [ChapterListResponse, ChapterContentResponse] = await Promise.all([ChapterListAPI, ChapterContentAPI])

  return {
    ChapterList: ChapterListResponse.data?.data?.map(chapter => ({
      bookId: parseInt(chapter.book_id),
      chapterId: parseInt(chapter.id),
      authorNote: chapter.author_note,
      chapterTitle: chapter.chapter_title,
      chapterSequence: chapter.chapter_sequence,
      chapterContent: '',
      chapterContent: chapterId === chapter.id ? ChapterContentResponse?.data?.data[0]?.chapter_content : '',
      isPublished: chapter.is_published,
      publishDate: chapter.publish_date,
      userId: chapter.user_id,
      isLocked: false,
      isPaid: false,
      isAvailableInSubscription: false,
      isAvailableInSubscription: 0,
      coinRequired: 0,
      isLoaded: chapterId === chapter.id,
    })),
    // .filter(chapter => chapter.isPublished),
  }
}
