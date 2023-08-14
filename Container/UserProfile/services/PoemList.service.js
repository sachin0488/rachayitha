import { useInfiniteQuery } from '@tanstack/react-query'

import { PoemQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

const usePoemListService = ({ filter }) => {
  const { data, isError, fetchNextPage, refetch, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [PoemQuery.POEM_LIST, { filter }],
    enabled: !!filter,
    staleTime: 3000,
    queryFn: ({ pageParam = 1 }) => fetchPoemListAPI({ page: pageParam, filter }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor
    },
  })

  return {
    ContentList: data?.pages?.map(group => group?.poemList)?.flat() || [],
    isError,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
  }
}

const fetchPoemListAPI = async ({ page, filter }) => {
  const res = await APIInstance({
    url: '/mypoem/',
    method: 'GET',
    params: {
      page,
      tab: filter,
    },
  })

  return {
    poemList: res?.data?.data?.map(item => {
      return {
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
        tags: item?.tags?.tags?.map(name => name) || [],
        synopsis: item?.synopsis,
        poemRatingByUser: item?.user_poem_rate,

        coverImage: item?.cover_img,
        coverImage2: item?.cover_img2,
        coverImage3: item?.cover_img3,
        coverImage4: item?.cover_img4,

        isPublished: item?.is_published,
        ChapterCount: item?.chapter_count || 0,
        WordCount: item?.word_count || 0,
        publishedAt: item?.publish_date,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

export default usePoemListService
