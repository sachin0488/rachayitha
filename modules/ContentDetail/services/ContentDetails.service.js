import { APIInstance } from 'services/global.service'
import { ContentDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import slugUtility from 'utility/slug.utility'

const fetchContentDetail = async ({ contentType, contentId, slug }) => {
  const res = await APIInstance({
    url: `${contentType}/${contentId}`,
    method: 'GET',
    params: {
      slug,
    },
  })

  const item = await res?.data?.data?.[0]

  return await {
    contentId: parseInt(item?.id),
    contentName: item?.[`${contentType}_name`],
    authorId: item?.author_id_id,
    authorName: item?.author_name,

    contentRank: item?.[`${contentType}_rank`],
    totalVote: item?.total_vote,

    TotalContentVotes: item?.total_vote,
    viewCount: item?.view_count,

    category: item?.category,

    chapterList: item?.chapter?.map(chapter => ({
      contentId: parseInt(item?.id),
      chapterId: parseInt(chapter?.id),
      slug: slugUtility.create(chapter?.chapter_title),
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
    contentRatingByUser: item?.[`user_${contentType}_rate`],
    price: item?.price,
    isPurchased: item?.ispurchased,

    coverImage: encodeURIComponent(item?.cover_img),
    coverImage2: encodeURIComponent(item?.cover_img2),
    coverImage3: encodeURIComponent(item?.cover_img3),
    coverImage4: encodeURIComponent(item?.cover_img4),
  }
}

export const useContentDetailsService = ({ contentId, slug, contentType }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(contentId), contentType }],
    queryFn: () => fetchContentDetail({ contentId, slug, contentType }),
    enabled: Boolean(contentId && slug && contentType),
  })
  return { Data: data, isLoading, isError, error, isFetching }
}
