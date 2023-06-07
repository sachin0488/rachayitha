import { APIInstance } from 'api/global.api'
import { NovelDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'

const fetchBookDetail = async bookId => {
  const res = await APIInstance({
    url: `book/${bookId}`,
    method: 'GET',
  })

  const item = await res?.data?.data?.[0]

  return await {
    bookId: item?.id,
    bookName: item?.book_name,
    authorName: item?.author_name,

    bookRank: item?.book_rank,
    totalVote: item?.total_vote,

    TotalBookVotes: item?.total_vote,
    viewCount: item?.view_count,

    category: item?.category,

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
    bookRatingByUser: item?.user_book_rate,

    coverImage: item?.cover_img,
    coverImage2: item?.cover_img2,
    coverImage3: item?.cover_img3,
    coverImage4: item?.cover_img4,
  }
}

export const useNovelDetailsService = ({ bookId }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    [NovelDetailsQuery.NOVEL_DETAILS, { bookId: parseInt(bookId) }],
    () => fetchBookDetail(bookId),
    {
      enabled: Boolean(bookId),
    },
  )

  return { Data: data, isLoading, isError, error, isFetching }
}
