import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { PoemReadQuery } from '../constants/query.address'

export const useChapterContentService = ({ poemId }) => {
  const queryClient = useQueryClient()

  const { mutateAsync, isLoading, isSuccess } = useMutation({
    mutationFn: ({ chapterId }) => fetchChapterContentAPI({ poemId, chapterId }),
    onSuccess: data => {
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
    coinRequired: 0,
    isLocked: false,
    isPaid: false,
    isAvailableInSubscription: false,
    isLoaded: false,
  }
}
