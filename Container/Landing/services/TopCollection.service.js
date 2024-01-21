import { useQuery } from '@tanstack/react-query'
import { LandingQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import slugUtility from 'utility/slug.utility'

export const useTopCollectionService = ({ startDate, endDate }) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [LandingQuery?.TOP_COLLECTION, { startDate, endDate }],
    queryFn: () => fetchTopCollectionAPI({ startDate, endDate }),
  })

  return {
    data: {
      books: data?.books,
      poems: data?.poems,
      shorts: data?.shorts,
    },
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchTopCollectionAPI = async ({ startDate, endDate }) => {
  const res = await APIInstance({
    url: '/topbooklist/',
    params: {
      startDate,
      endDate,
    },
    method: 'GET',
  })

  return {
    books:
      res?.data?.data?.novels?.map(item => ({
        id: item?.id,
        name: item?.book_name,
        authorName: item?.author_name,
        slug: slugUtility.create(item?.book_name),
        contentType: 'book',
        category: item?.category,

        avgRatingValue: item?.rating?.rate__avg,
        totalRatingCount: item?.rating?.rate__count,

        status: item?.status,

        coverImage: item?.cover_img,
        coverImage2: item?.cover_img2,
        coverImage3: item?.cover_img3,
        coverImage4: item?.cover_img4,
      })) || [],
    poems:
      res?.data?.data?.poems?.map(item => ({
        id: item?.id,
        name: item?.poem_name,
        authorName: item?.author_name,
        slug: slugUtility.create(item?.poem_name),
        contentType: 'poem',
        category: item?.category,

        avgRatingValue: item?.rating?.rate__avg,
        totalRatingCount: item?.rating?.rate__count,

        status: item?.status,

        coverImage: item?.cover_img,
        coverImage2: item?.cover_img2,
        coverImage3: item?.cover_img3,
        coverImage4: item?.cover_img4,
      })) || [],
    // shorts: res?.data?.data?.shorts || [],
  }
}
