import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContestQuery } from '../constants/query.address'
import { useRouter } from 'next/router'

export const useLeaderListService = ({ contentType, searchTerm }) => {
  const contest_id = useRouter().query?.contest_id || 1

  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: [ContestQuery?.LEADERBOARD_LIST, { contest_id, contentType, searchTerm }],
    enabled: !!contest_id,
    queryFn: ({ pageParam = 1 }) => fetchLeaderListAPI({ contest_id, contentType, searchTerm, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor
    },
  })

  return {
    ContentList: data?.pages?.map(group => group?.data)?.flat() || [],
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isFetching,
    isError,
    hasNextPage,
  }
}

const fetchLeaderListAPI = async ({ contest_id, contentType, searchTerm, page }) => {
  const response = await APIInstance({
    url: contentType === 'book' ? `/contest/leadership` : `/contest/poem/leadership`,
    method: 'GET',
    params: {
      search_keyword: searchTerm,
      contest_id: contest_id,
      page,
    },
  })

  const data = response?.data?.data || []

  if (contentType === 'book') {
    return {
      data: data.map(item => ({
        id: item.id,
        user_id: item.user_id,
        contest_id: item.contest_id,
        ranking: item.ranking,
        book_id: item.book_id,
        book_name: item.book_name,
        book_cover_img: item.book_cover_img,
        book_synopsis: item.book_synopsis,
        book_comment_count: item.book_comment_count,
        book_like_count: item.book_like_count,
        author_name: item.author_name,
        author_img: item.author_img,
        author_user_id: item.author_user_id,
        book_view_count: item.book_view_count,
        book_rating: {
          rate_avg: item.book_rating?.rate__avg,
          rate_count: item.book_rating?.rate__count,
        },
      })),
      nextCursor: response?.data?.next_page || undefined,
      previousCursor: response?.data?.previous_page || undefined,
    }
  } else {
    return {
      data: data.map(item => ({
        id: item.id,
        user_id: item.user_id,
        contest_id: item.contest_id,
        ranking: item.ranking,
        book_id: item.poem_id,
        book_title: item.poem_title,
        book_cover_img: item.poem_cover_img,
        book_synopsis: item.poem_synopsis,
        book_comment_count: item.poem_comment_count,
        book_like_count: item.poem_like_count,
        author_name: item.author_name,
        author_img: item.author_img,
        author_user_id: item.author_user_id,
        book_view_count: item.poem_view_count,
        book_rating: {
          rate_avg: item.poem_rating?.rate__avg,
          rate_count: item.poem_rating?.rate__count,
        },
      })),
      nextCursor: response?.data?.next_page || undefined,
      previousCursor: response?.data?.previous_page || undefined,
    }
  }
}
