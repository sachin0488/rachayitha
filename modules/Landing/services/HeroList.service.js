import { useQuery } from '@tanstack/react-query'
import { LandingQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import slugUtility from 'utility/slug.utility'

export const useHeroListService = () => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [LandingQuery?.HERO_LIST],
    queryFn: fetchHeroListAPI,
  })

  return {
    data: {
      first: data?.first,
      second: data?.second,
      third: data?.third,
    },
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchHeroListAPI = async () => {
  const response = await APIInstance({
    url: '/homepagebanner/',
    method: 'GET',
  })

  const data = response?.data?.data || {}
  return {
    first: data?.first_row?.map(item => {
      const name = item?.content_type?.toLowerCase() === 'book' ? item?.book_name : item?.poem_name
      return {
        id: item?.id,
        name: name,
        contentType: item?.content_type,
        coverImage: 'https://' + encodeURIComponent(item?.cover_img.replace('https://', '')),
        slug: slugUtility.create(name),
      }
    }),
    second: data?.second_row?.map(item => {
      const name = item?.content_type?.toLowerCase() === 'book' ? item?.book_name : item?.poem_name
      return {
        id: item?.id,
        name: name,
        contentType: item?.content_type,
        coverImage: 'https://' + encodeURIComponent(item?.cover_img.replace('https://', '')),
        slug: slugUtility.create(name),
      }
    }),
    third: data?.third_row?.map(item => {
      const name = item?.content_type?.toLowerCase() === 'book' ? item?.book_name : item?.poem_name
      return {
        id: item?.id,
        name: name,
        contentType: item?.content_type,
        coverImage: 'https://' + encodeURIComponent(item?.cover_img.replace('https://', '')),
    
        slug: slugUtility.create(name),
      }
    }),
  }
}
