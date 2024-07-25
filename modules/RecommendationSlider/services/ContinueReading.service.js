import { APIInstance } from 'services/global.service'
import { RecommendationSliderQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import { ContentType } from '../constants/common.constants'
import slugUtility from 'utility/slug.utility'
import encodeImgURI from 'utility/encodeImgURI'

const fetchContinueReading = async ({ contentType }) => {
  const res = await APIInstance({
    url: contentType === ContentType.BOOK ? `/incompletebookwatch/` : `/incompletepoemwatch/`,
    method: 'GET',
  })

  const list = res?.data?.data

  return list.map(item => {
    return {
      contentId: item?.[`${contentType}_id`],
      contentName: item?.[`${contentType}_name`],
      authorName: item?.author_name,
      slug: slugUtility.create(item?.[`${contentType}_name`]),
      // contentRank: item?.[`${contentType}_rank`],
      // totalVote: item?.total_vote,

      // TotalContentVotes: item?.total_vote,
      // viewCount: item?.view_count,

      category: item?.category,
      // chapter: item?.chapter,
      chapterCount: item?.chapter_count,
      chapterReadPercentage: item?.chapter_read_percent,

      commentCount: item?.comment_count,

      avgRatingValue: item?.rating?.rate__avg,
      totalRatingCount: item?.rating?.rate__count,

      likeCount: item?.like_count,
      // isLiked: item?.is_liked,

      libraryAdded: item?.library_added,

      status: item?.status,
      tags: item?.tags,
      synopsis: item?.synopsis,
      // contentRatingByUser: item?.[`user_${contentType}_rate`],

      coverImage: encodeImgURI(item?.cover_img),
      coverImage2: encodeImgURI(item?.cover_img2),
      coverImage3: encodeImgURI(item?.cover_img3),
      coverImage4: encodeImgURI(item?.cover_img4),
    }
  })
}

export const useContinueReadingService = ({ contentType }) => {
  const queryKey = [RecommendationSliderQuery.CONTINUE_READING_CONTENTS, { contentType }]

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey,
    queryFn: () => fetchContinueReading({ contentType }),
    staleTime: 5000,
  })

  return { List: data || [], isLoading, isError, error, isFetching, queryKey }
}
