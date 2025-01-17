import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContentReadQuery } from '../constants/query.address'
import { create } from 'zustand'
import { useSnackbar } from 'notistack'
import slugUtility from 'utility/slug.utility'
import i18n from 'i18next'

const useRerender = create(set => ({
  rerender() {
    set(state => ({ ...state }))
  },
}))

export const useChapterContentService = ({ contentId, contentType }) => {
  const queryClient = useQueryClient()
  const { rerender } = useRerender()
  const { enqueueSnackbar } = useSnackbar()

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: async ({ chapterId }) => {
      const response = await fetchChapterContentAPI({ contentId, chapterId, contentType })

      return response
    },

    onSuccess: data => {
      rerender({})

      queryClient.setQueryData([ContentReadQuery.CHAPTER_LIST, { contentId, contentType }], preData => {
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

export const useChapterContentFCService = () => {
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: async ({ chapterId, contentId, contentType }) => {
      return await fetchChapterContentAPI({ contentId, chapterId, contentType })
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        [ContentReadQuery.CHAPTER_LIST, { contentId: variables?.contentId, contentType: variables.contentType }],
        preData => {
          return {
            ChapterList: preData?.ChapterList?.map(chapter => {
              if (chapter.chapterId !== data.chapterId) return chapter
              return {
                ...data,
              }
            }),
          }
        },
      )
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

const fetchChapterContentAPI = async ({ contentId, chapterId, contentType }) => {
  const response = await APIInstance({
    url: `/${contentType}/${contentId}/chapter/${chapterId}`,
    method: 'GET',
    params:{
      lang:i18n.language
    }
  })

  const chapter = response.data?.data?.[0]

  if (chapter)
    return {
      contentId: parseInt(chapter?.book_id),
      chapterId: parseInt(chapter.id),
      authorNote: chapter.author_note,
      chapterTitle: chapter.chapter_title,
      chapterSlug: slugUtility.create(chapter.chapter_title),
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
