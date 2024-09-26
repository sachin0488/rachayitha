import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { ContestQuery } from '../constants/query.address';
export const useBookDetailService = (bookid) => {

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery.BOOK_DETAILS, bookid],
    queryFn: () => fetchBookDetailAPI(bookid),
    enabled: !!bookid,
  });

  return {
    data: data?.data || {},
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  };
};


const fetchBookDetailAPI = async (bookid) => {
  const response = await APIInstance({
    url: `/book/${bookid}`,
    method: 'GET',
  });

  const data = response?.data?.data || [];

  return {
    data: data.map((item) => ({
      id: item.id,
      book_name: item.book_name,
      cover_img: item.cover_img,
      author_name: item.author_name,
    })),
  };
};
