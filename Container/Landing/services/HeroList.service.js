import { useQuery } from '@tanstack/react-query'
import { LandingQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

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
  //   const res = await APIInstance({
  //     url: '/topbooklist/',
  //     method: 'GET',
  //   })

  return {
    first: [
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_2.jpeg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_3.jpg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
    ],
    second: [
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_2.jpeg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_3.jpg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
    ],
    third: [
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_2.jpeg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_3.jpg' },
      { id: 1, name: 'Book 1', contentType: 'book', coverImage: '/temp/IMG_1.png' },
    ],
    // first: res?.data?.data?.first || [],
    // second: res?.data?.data?.second || [],
    // third: res?.data?.data?.third || [],
  }
}
