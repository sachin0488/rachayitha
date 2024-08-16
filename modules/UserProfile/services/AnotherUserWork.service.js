import { useInfiniteQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { UserProfileQuery } from '../constants/query.address'
import slugUtility from 'utility/slug.utility'
import encodeImgURI from 'utility/encodeImgURI'
import i18n from 'next-i18next'

const fetchOriginalWorkListAPI = async ({ pageParam = 1 }, { contentType, authorId }) => {
  const res = await APIInstance({
    url: `${contentType?.toLowerCase()}/author/${authorId}`,
    method: 'GET',
    params: {
      page: pageParam,
      tab: 'published',
      lang: i18n.language,
    },
  })

  return await {
    data: res?.data?.data?.map(item => {
      return {
        contentType,
        contentId: item?.id,
        contentName: item?.[`${contentType}_name`],
        slug: slugUtility.create(item?.[`${contentType}_name`]),
        authorName: item?.author_name,
        category: item?.category?.category,
        commentCount: item?.comment_count,
        avgRatingValue: item?.rating?.rate__avg,
        totalRatingCount: item?.rating?.rate__count,
        likeCount: item?.like_count,
        originalWorkAdded: true,
        status: item?.status,
        tags: item?.tags,
        synopsis: item?.synopsis,
        coverImage: encodeImgURI(item?.cover_img),
        coverImage2: encodeImgURI(item?.cover_img2),
        coverImage3: encodeImgURI(item?.cover_img3),
        coverImage4: encodeImgURI(item?.cover_img4),
        libraryAdded: !!item?.library_added,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

const useAnotherUserWorkService = ({ contentType, authorId }) => {
  const { data, error, isError, fetchNextPage, refetch, hasNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [UserProfileQuery.AUTHOR_WORKS, { contentType, authorId }],
    queryFn: params => fetchOriginalWorkListAPI(params, { contentType, authorId }),
    getNextPageParam: lastPage => {
      return lastPage.nextCursor
    },
    staleTime: 1000,
    enabled: !!authorId && !!contentType,
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

export default useAnotherUserWorkService
