import { useQuery, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useCallback } from 'react'
import { ContentReadQuery } from '../constants/query.address'
import { useChapterContentService } from './ChapterContent.service'
import { useUserService } from 'modules/Auth/service/User.service'
import slugUtility from 'utility/slug.utility'

export const useChapterListService = ({ contentId, chapterId, contentType }) => {
  const queryClient = useQueryClient()
  const { mutateAsync } = useChapterContentService({ contentId: contentId, contentType })
  const { isLoggedIn } = useUserService()

  const { data, isLoading, isError, isSuccess, isFetching, remove, refetch } = useQuery({
    queryKey: [ContentReadQuery.CHAPTER_LIST, { contentId, contentType }],
    queryFn: () => fetchChapterListAPI({ contentId, chapterId, contentType }),
    enabled: Boolean(contentId && chapterId && contentType),
    staleTime: 0,
  })

  const setChapterLoadedById = useCallback(
    chapterId => {
      queryClient.setQueryData([ContentReadQuery.CHAPTER_LIST, { contentId, contentType }], preData => {
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
    [contentId, contentType, queryClient],
  )

  const reload = useCallback(
    async ({ chapterId }) => {
      if (isLoggedIn) {
        const response = await mutateAsync({ chapterId })

        queryClient.setQueryData([ContentReadQuery.CHAPTER_LIST, { contentId, contentType }], preData => {
          return {
            ChapterList: preData?.ChapterList?.map(chapter => {
              return {
                ...chapter,
                chapterContent: chapterId === chapter.chapterId ? response?.chapterContent : '',
                isLoaded: chapter.chapterId === chapterId,
              }
            }),
          }
        })
      } else {
        queryClient.setQueryData([ContentReadQuery.CHAPTER_LIST, { contentId, contentType }], preData => {
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
    [isLoggedIn, mutateAsync, queryClient, contentId, contentType],
  )

  // This function will clear the cache of the chapter content except the latest , current and next chapter
  const clearCacheExceptLCN = useCallback(
    async ({ chapterId }) => {
      const currentChapterIndex = data?.ChapterList?.findIndex(chapter => chapter.chapterId === chapterId)

      const LCNChapterIndexList = [currentChapterIndex - 1, currentChapterIndex, currentChapterIndex + 1].filter(index => index >= 0)

      queryClient.setQueryData([ContentReadQuery.CHAPTER_LIST, { contentId, contentType }], preData => {
        return {
          ChapterList: preData?.ChapterList?.map((chapter, idx) => {
            if (LCNChapterIndexList.includes(idx)) {
              return chapter
            }
            return {
              ...chapter,
              chapterContent: '',
              isLoaded: false,
            }
          }),
        }
      })
    },
    [data?.ChapterList, queryClient, contentId, contentType],
  )

  return {
    ChapterList: data?.ChapterList,
    setChapterLoadedById,
    isLoading,
    isError,
    isSuccess,
    isFetching,
    reload,
    clearCacheExceptLCN,
  }
}

const fetchChapterListAPI = async ({ contentId, chapterId, contentType }) => {
  const ChapterListAPI = await APIInstance({
    url: `/${contentType}/${contentId}/chapter`,
    method: 'GET',
    params: {
      tab: 'published',
      limit: 1000,
    },
  })

  const ChapterContentAPI = await APIInstance({
    url: `/${contentType}/${contentId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const [ChapterListResponse, ChapterContentResponse] = await Promise.all([ChapterListAPI, ChapterContentAPI])

  if (ChapterListResponse.data?.data)
    return {
      ChapterList: ChapterListResponse.data?.data?.map(chapter => ({
        contentId: parseInt(chapter?.[`${contentType}_id`]),
        chapterId: parseInt(chapter.id),
        authorNote: chapter.author_note,
        chapterTitle: chapter.chapter_title,
        chapterSlug: slugUtility.create(chapter.chapter_title),
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
