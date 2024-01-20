import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { PoemReadQuery } from '../constants/query.address'
import { create } from 'zustand'

const useChapterContentCacheStore = create(set => ({
  chapterContentCache: {},
  setChapterContentInCacheByChapterId: value => {
    set(state => ({
      chapterContentCache: {
        [value.chapterId]: value.chapterContent,
        ...state.chapterContentCache,
      },
    }))
  },
}))

export const useChapterContentService = ({ poemId }) => {
  const queryClient = useQueryClient()
  const { chapterContentCache, setChapterContentInCacheByChapterId } = useChapterContentCacheStore()

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: ({ chapterId }) => {
      if (chapterContentCache?.[chapterId]) {
        return chapterContentCache?.[chapterId]
      } else {
        return fetchChapterContentAPI({ poemId, chapterId })
      }
    },
    onSuccess: data => {
      setChapterContentInCacheByChapterId({
        chapterId: data.chapterId,
        chapterContent: data,
      })
      queryClient.setQueryData([PoemReadQuery.CHAPTER_LIST, { poemId }], preData => {
        return {
          ChapterList: preData?.ChapterList?.map(chapter => {
            if (chapter.chapterId !== data.chapterId) return chapter
            return {
              ...data,
            }
          }),
        }
      })
    },
  })

  return { isLoading, isSuccess, mutateAsync }
}

export const usePoemChapterContentFCService = () => {
  const queryClient = useQueryClient()
  const { chapterContentCache, setChapterContentInCacheByChapterId } = useChapterContentCacheStore()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: ({ chapterId, poemId }) => {
      if (chapterContentCache?.[chapterId]) {
        return chapterContentCache?.[chapterId]
      } else {
        return fetchChapterContentAPI({ poemId, chapterId })
      }
    },
    onSuccess: data => {
      setChapterContentInCacheByChapterId({
        chapterId: data.chapterId,
        chapterContent: data,
      })
      queryClient.setQueryData([PoemReadQuery.CHAPTER_LIST, { poemId: data?.poemId }], preData => {
        return {
          ChapterList: preData?.ChapterList?.map(chapter => {
            if (chapter.chapterId !== data.chapterId) return chapter
            return {
              ...data,
            }
          }),
        }
      })
    },
  })

  return { isLoading, isSuccess, mutate }
}

const fetchChapterContentAPI = async ({ poemId, chapterId }) => {
  const res = await APIInstance({
    url: `/poem/${poemId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const chapter = res.data?.data?.[0]

  return {
    poemId: parseInt(chapter.poem_id_id),
    chapterId: parseInt(chapter.id),
    authorNote: chapter.author_note,
    chapterTitle: chapter.chapter_title,
    chapterSequence: chapter.chapter_sequence,
    chapterContent: chapter.chapter_content,
    isPublished: chapter.is_published,
    publishDate: chapter.publish_date,
    userId: chapter.user_id,
    isLocked: chapter.lock_status,
    isPaid: chapter?.is_lock,
    isAvailableInSubscription: false,
    coinRequired: chapter?.price || 0,
    isLoaded: chapterId === chapter.id,
  }
}
