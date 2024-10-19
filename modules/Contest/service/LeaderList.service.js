import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContestQuery } from '../constants/query.address'
import { useRouter } from 'next/router'
import slugUtility from 'utility/slug.utility'

export const useLeaderListService = ({ contentType }) => {
  const contest_id = Number(useRouter().query?.contest_id || 1)

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.LEADERBOARD_LIST, { contest_id, contentType }],
    queryFn: () => fetchLeaderListAPI({ contest_id, contentType }),
    enabled: !!contest_id,
  })

  return {
    data: data?.data || [],
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchLeaderListAPI = async ({ contest_id, contentType }) => {
  const response = await APIInstance({
    url: contentType === 'book' ? `/contest/leadership` : `/contest/poem/leadership`,
    method: 'GET',
    params: {
      contest_id: contest_id,
    },
  })

  const data = response?.data?.data || []

  console.log(data[0]?.book_rating?.rate__avg)

  if (contentType === 'book') {
    return {
      data: data.map(item => ({
        id: item.id,
        user_id: item.user_id,
        contest_id: item.contest_id,
        ranking: item.ranking,
        content_id: item.book_id,
        content_name: item.book_name,
        content_cover_img: item.book_cover_img,
        content_synopsis: item.book_synopsis,
        content_comment_count: item.book_comment_count,
        content_like_count: item.book_like_count,
        author_name: item.author_name,
        author_img: item.author_img,
        author_user_id: item.author_user_id,
        content_view_count: item.book_view_count,
        content_rating: {
          rate_avg: item.book_rating?.rate__avg,
          rate_count: item.book_rating?.rate__count,
        },
        slug: slugUtility.create(item.book_name),
      })),
    }
  } else {
    return {
      data: data.map(item => ({
        id: item.id,
        user_id: item.user_id,
        contest_id: item.contest_id,
        ranking: item.ranking,
        content_id: item.poem_id,
        content_name: item.poem_name,
        content_cover_img: item.poem_cover_img,
        content_synopsis: item.poem_synopsis,
        content_comment_count: item.poem_comment_count,
        content_like_count: item.poem_like_count,
        author_name: item.author_name,
        author_img: item.author_img,
        author_user_id: item.author_user_id,
        content_view_count: item.poem_view_count,
        content_rating: {
          rate_avg: item.poem_rating?.rate__avg,
          rate_count: item.poem_rating?.rate__count,
        },
        slug: slugUtility.create(item.poem_name),
      })),
    }
  }
}
