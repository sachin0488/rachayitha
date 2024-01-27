import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'

const fetchPoemDetail = async ({ poemId, slug }) => {
  const res = await APIInstance({
    url: `poem/${poemId}`,
    method: 'GET',
    params: {
      slug,
    },
  })

  const item = await res?.data?.data?.[0]

  return await {
    poemId: item?.id,
    poemName: item?.poem_name,
    authorName: item?.author_name,

    poemRank: item?.poem_rank,
    totalVote: item?.total_vote,

    TotalPoemVotes: item?.total_vote,
    viewCount: item?.view_count,

    category: item?.category,

    chapterList: item?.chapter?.map(chapter => ({
      poemId: parseInt(chapter?.poem_id_id),
      chapterId: parseInt(chapter?.id),
      authorNote: chapter?.author_note,
      chapterTitle: chapter?.chapter_title,
      chapterSequence: chapter?.chapter_sequence,
      chapterContent: '',
      isPublished: chapter?.is_published,
      publishDate: chapter?.publish_date,
      userId: chapter?.user_id_id,
      isLocked: chapter.lock_status,
      isPaid: !!chapter?.is_lock,
      isAvailableInSubscription: false,
      coinRequired: chapter?.price || 0,
    })),
    chapter: item?.chapter,

    chapterCount: item?.chapter_count,

    commentCount: item?.comment_count,

    avgRatingValue: item?.rating?.rate__avg,
    totalRatingCount: item?.rating?.rate__count,
    ratingParams: [
      {
        label: 'Writing Quality',
        value: item?.rating_parameter1?.parameter1__avg,
      },
      {
        label: 'Stability of Updates',
        value: item?.rating_parameter2?.parameter2__avg,
      },
      {
        label: 'Story Development',
        value: item?.rating_parameter3?.parameter3__avg,
      },
      {
        label: 'Character Design',
        value: item?.rating_parameter4?.parameter4__avg,
      },
      {
        label: 'World Background',
        value: item?.rating_parameter5?.parameter5__avg,
      },
    ],

    likeCount: item?.like_count,
    isLiked: item?.is_liked,

    libraryAdded: item?.library_added,

    status: item?.status,
    tags: item?.tags,
    synopsis: item?.synopsis,
    poemRatingByUser: item?.user_poem_rate,
    price: item?.price,
    isPurchased: item?.ispurchased,

    coverImage: item?.cover_img,
    coverImage2: item?.cover_img2,
    coverImage3: item?.cover_img3,
    coverImage4: item?.cover_img4,
  }
}

export const usePoemDetailsService = ({ poemId, slug }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }],
    queryFn: () => fetchPoemDetail({ poemId, slug }),
    enabled: Boolean(poemId && slug),
  })
  return { Data: data, isLoading, isError, error, isFetching }
}
