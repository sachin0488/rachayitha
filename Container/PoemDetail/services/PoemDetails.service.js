import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'

const fetchPoemDetail = async poemId => {
  const res = await APIInstance({
    url: `poem/${poemId}`,
    method: 'GET',
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

    coverImage: item?.cover_img,
    coverImage2: item?.cover_img2,
    coverImage3: item?.cover_img3,
    coverImage4: item?.cover_img4,
  }
}

export const usePoemDetailsService = ({ poemId }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }],
    queryFn: () => fetchPoemDetail(poemId),
    enabled: Boolean(poemId),
  })

  return { Data: data, isLoading, isError, error, isFetching }
}
