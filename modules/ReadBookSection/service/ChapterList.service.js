import { useQuery, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useCallback } from 'react'
import { BookReadQuery } from '../constants/query.address'
import { useChapterContentService } from './ChapterContent.service'
import { useUserService } from 'modules/Auth/service/User.service'

export const useChapterListService = ({ bookId, chapterId }) => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useChapterContentService({ bookId: bookId })
  const { isLoggedIn } = useUserService()

  const { data, isLoading, isError, isSuccess, isFetching, remove, refetch } = useQuery({
    queryKey: [BookReadQuery.CHAPTER_LIST, { bookId }],
    queryFn: () => fetchChapterListAPI({ bookId, chapterId }),
    enabled: Boolean(bookId && chapterId),
    staleTime: 0,
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
      if (isLoggedIn) {
        const response = await mutateAsync({ chapterId })

        queryClient.setQueryData([BookReadQuery.CHAPTER_LIST, { bookId }], preData => {
          return {
            ChapterList: preData?.ChapterList?.map(chapter => {
              return {
                ...chapter,
                chapterContent: chapterId === chapter.chapterId ? response?.chapterContent : chapter.chapterContent,
                isLoaded: chapter.chapterId === chapterId,
              }
            }),
          }
        })
      } else {
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
    [bookId, mutateAsync, queryClient, isLoggedIn],
  )

  return { ChapterList: data?.ChapterList, setChapterLoadedById, isLoading, isError, isSuccess, isFetching, reload }
}

const fetchChapterListAPI = async ({ bookId, chapterId }) => {
  const ChapterListAPI = await APIInstance({
    url: `/book/${bookId}/chapter`,
    method: 'GET',
    params: {
      tab: 'published',
      limit: 1000,
    },
  })

  const ChapterContentAPI = await APIInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const [ChapterListResponse, ChapterContentResponse] = await Promise.all([ChapterListAPI, ChapterContentAPI])

  if (ChapterListResponse.data?.data)
    return {
      ChapterList: ChapterListResponse.data?.data?.map(chapter => ({
        bookId: parseInt(chapter.book_id),
        chapterId: parseInt(chapter.id),
        authorNote: chapter.author_note,
        chapterTitle: chapter.chapter_title,
        chapterSequence: chapter.chapter_sequence,
        chapterContent: '',
        chapterContent: chapterId === chapter.id ? ChapterContentResponse?.data?.data?.[0]?.chapter_content : '',
        isPublished: chapter.is_published,
        publishDate: chapter.publish_date,
        userId: chapter.user_id,
        isLocked: chapter.lock_status,
        isPaid: chapter?.is_lock,
        isAvailableInSubscription: false,
        coinRequired: chapter?.price || 0,
        isLoaded: chapterId === chapter.id,
      })),
      // .filter(chapter => chapter.isPublished),
    }

  return
}
