import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { ContestQuery } from '../constants/query.address';
export const useLeaderListService = (contest_id) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.LEADERBOARD_LIST, contest_id],
    queryFn: () => fetchLeaderListAPI(contest_id),
    enabled: !!contest_id,
  });

  return {
    data: data?.data || [],
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  };
};

const fetchLeaderListAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/leadership?contest_id=${contest_id}`,
    method: 'GET',
  });

  const data = response?.data?.data || [];

  return {
    data: data.map((item) => ({
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
  };
};
