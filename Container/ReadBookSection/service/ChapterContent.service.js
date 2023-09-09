import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { BookReadQuery } from '../constants/query.address'
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

export const useChapterContentService = ({ bookId }) => {
  const queryClient = useQueryClient()
  const { chapterContentCache, setChapterContentInCacheByChapterId } = useChapterContentCacheStore()

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: ({ chapterId }) => {
      if (chapterContentCache?.[chapterId]) {
        return chapterContentCache?.[chapterId]
      } else {
        return fetchChapterContentAPI({ bookId, chapterId })
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
  })

  return { isLoading, isSuccess, mutateAsync }
}

const fetchChapterContentAPI = async ({ bookId, chapterId }) => {
  const res = await APIInstance({
    url: `/book/${bookId}/chapter/${chapterId}`,
    method: 'GET',
  })

  const chapter = res.data?.data?.[0]

  return {
    bookId: parseInt(chapter.book_id_id),
    chapterId: parseInt(chapter.id),
    authorNote: chapter.author_note,
    chapterTitle: chapter.chapter_title,
    chapterSequence: chapter.chapter_sequence,
    chapterContent: chapter.chapter_content,
    isPublished: chapter.is_published,
    publishDate: chapter.publish_date,
    userId: chapter.user_id,
    coinRequired: 0,
    isLocked: false,
    isPaid: false,
    isAvailableInSubscription: false,
    isLoaded: false,
  }
}
