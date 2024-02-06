import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ExploreQuery } from '../constants/query.address'
import slugUtility from 'utility/slug.utility'

const useExplore = ({ categoryId, contentType, sortBy }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: [ExploreQuery.EXPLORE_LIST, { categoryId, contentType, sortBy }],
    enabled: !!categoryId && !!contentType && !!sortBy,
    queryFn: ({ pageParam = 1 }) => fetchExploreListAPI({ categoryId, contentType, page: pageParam, sortBy }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor
    },
  })

  return {
    ContentList: data?.pages?.map(group => group?.data)?.flat() || [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isFetching,
    refetch,
  }
}

const fetchExploreListAPI = async ({ categoryId, contentType, page, sortBy }) => {
  const res = await APIInstance({
    url: contentType?.toLocaleLowerCase() === 'poem' ? `/explorepoem/` : `/explorebook/`,
    method: 'GET',
    params: {
      category_id: parseInt(categoryId) === 0 ? undefined : categoryId,
      sort_by: sortBy,
      page,
    },
  })

  return {
    data: res?.data?.data?.map(item => {
      return {
        contentId: item?.id,
        contentName: item?.[`${contentType}_name`],
        authorName: item?.author_name,
        slug: slugUtility.create(item?.[`${contentType}_name`]),

        category: item?.category?.category?.map(({ id, name }) => ({ id, name })) || [],

        contentRank: item?.[`${contentType}_rank`],
        totalVote: item?.total_vote,

        TotalContentVotes: item?.total_vote,
        viewCount: item?.view_count,

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
        contentRatingByUser: item?.[`user_${contentType}_rate`],

        coverImage: item?.cover_img,
        coverImage2: item?.cover_img2,
        coverImage3: item?.cover_img3,
        coverImage4: item?.cover_img4,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

export default useExplore
