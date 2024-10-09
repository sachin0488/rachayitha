import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'

export const useBookListService = () => {
  const contest_id=useRouter().query?.contest_id||1;

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.BOOK_LIST, contest_id],
    queryFn: () => fetchBookListAPI(contest_id),
    enabled: !!contest_id,
  })
  
  return {
    data: {
      data: data?.data || [],
    },
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchBookListAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/booklist?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []
  
  return {
    data: data?.map(item => {
      return {
        book_id: item?.book_id,
        book_name: item?.book_name,
        book_cover_img: item?.book_cover_img,
        book_synopsis: item?.book_synopsis,
        book_comment_count: item?.book_comment_count,
        book_like_count: item?.book_like_count,
        author_name: item?.author_name,
        book_view_count: item?.book_view_count,
        book_rating_avg: item?.book_rating?.rate__avg,
        book_rating_count: item?.book_rating?.rate__count,
        book_publish_date: item?.book_publish_date,
        book_category: item?.book_category?.book_category?.map(category => ({
          id: category?.id,
          name: category?.name
        })),
      }
    }),
  }
}