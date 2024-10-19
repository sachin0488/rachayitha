import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import slugUtility from 'utility/slug.utility'

export const useBookListService = ({ contentType }) => {
  const contest_id = useRouter().query?.contest_id

  const { refetch, data, isLoading, isFetching, isError, isSuccess, error } = useQuery({
    queryKey: [ContestQuery?.BOOK_LIST, { contest_id, contentType }],
    queryFn: () => fetchBookListAPI({ contest_id, contentType }),
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

const fetchBookListAPI = async ({ contest_id, contentType }) => {
  const response = await APIInstance({
    url: `/contest/${contentType === 'book' ? 'booklist' : 'poemlist'}?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []

  console.log(data)

  if (contentType === 'book') {
    return {
      data: data?.map(item => {
        return {
          contentType: 'book',
          id: item?.book_id,
          name: item?.book_name,
          cover_img: item?.book_cover_img,
          synopsis: item?.book_synopsis,
          comment_count: item?.book_comment_count,
          like_count: item?.book_like_count,
          author_name: item?.author_name,
          view_count: item?.book_view_count,
          rating_avg: item?.book_rating?.rate__avg,
          rating_count: item?.book_rating?.rate__count,
          publish_date: item?.book_publish_date,
          category: item?.book_category?.book_category?.map(category => ({
            id: category?.id,
            name: category?.name,
          })),
          slug: slugUtility.create(item?.book_name || ''),
        }
      }),
    }
  }

  return {
    data: data?.map(item => {
      return {
        contentType: 'poem',
        id: item?.poem_id,
        name: item?.poem_name,
        cover_img: item?.poem_cover_img,
        synopsis: item?.poem_synopsis,
        comment_count: item?.poem_comment_count,
        like_count: item?.poem_like_count,
        author_name: item?.author_name,
        view_count: item?.poem_view_count,
        rating_avg: item?.poem_rating?.rate__avg,
        rating_count: item?.poem_rating?.rate__count,
        publish_date: item?.poem_publish_date,
        category: item?.poem_category?.poem_category?.map(category => ({
          id: category?.id,
          name: category?.name,
        })),
        slug: slugUtility.create(item?.poem_name || ''),
      }
    }),
  }
}
