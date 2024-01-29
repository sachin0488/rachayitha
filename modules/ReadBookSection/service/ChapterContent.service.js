import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { BookReadQuery } from '../constants/query.address'
import { create } from 'zustand'
import { useSnackbar } from 'notistack'

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

export const useChapterContentService = ({ bookId }) => {
  const queryClient = useQueryClient()
  const { chapterContentCache, setChapterContentInCacheByChapterId } = useChapterContentCacheStore()
  const { enqueueSnackbar } = useSnackbar()

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: async ({ chapterId }) => {
      if (chapterContentCache?.[chapterId]) {
        return chapterContentCache?.[chapterId]
      } else {
        const response = await fetchChapterContentAPI({ bookId, chapterId })

        return response
      }
    },
    onSuccess: data => {
      setChapterContentInCacheByChapterId({
        chapterId: data.chapterId,
        chapterContent: data,
      })
      queryClient.setQueryData([BookReadQuery.CHAPTER_LIST, { bookId }], preData => {
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
    onError: error => {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  return { isLoading, isSuccess, mutateAsync }
}

export const useBookChapterContentFCService = () => {
  const queryClient = useQueryClient()
  const { setChapterContentInCacheByChapterId } = useChapterContentCacheStore()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async ({ chapterId, bookId }) => {
      const response = await fetchChapterContentAPI({ bookId, chapterId })

      return response
    },
    onSuccess: data => {
      setChapterContentInCacheByChapterId({
        chapterId: data.chapterId,
        chapterContent: data,
      })
      queryClient.setQueryData([BookReadQuery.CHAPTER_LIST, { bookId: data?.bookId }], preData => {
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
    onError: error => {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  return { isLoading, isSuccess, mutate }
}

const fetchChapterContentAPI = async ({ bookId, chapterId }) => {
  const response = await APIInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const chapter = response.data?.data?.[0]

  if (chapter)
    return {
      bookId: parseInt(chapter?.book_id_id),
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
      message: response?.data?.info?.visible?.message || '',
      isMessageVisible: !!response?.data?.info?.visible?.message,
    }

  throw new Error('Something went wrong')
}
