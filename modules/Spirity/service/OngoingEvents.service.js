import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { useRouter } from 'next/router';
import { ContestQuery } from '../constants/query.address';
export const useOngoingEventsService = () => {
  const router = useRouter();
  const contest_id = router.query?.contest_id || 1;
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery.ONGOING_EVENTS, contest_id],
    queryFn: () => fetchOngoingEventsAPI(contest_id),
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

const fetchOngoingEventsAPI = async (contest_id) => {
  const response = await APIInstance({
    url: '/contest/list',
    method: 'GET',
  });

  const contests = response?.data?.data || [];

  const currentDate = new Date();
 
  

  const filteredContests = contests.filter((contest) => {
    const startDate = new Date(contest.start_date);
    const endDate = new Date(contest.end_date);

    return (
      contest.id !== parseInt(contest_id) && 
      endDate >= currentDate 
    );
  });

  return {
    data: filteredContests.map((contest) => ({
      id: contest.id,
      user_id: contest.user_id,
      contest_name: contest.contest_name,
      contest_description: contest.contest_description,
      prizepool: contest.prizepool,
      contest_img: contest.contest_img,
      organiser_name: contest.organiser_name,
      organiser_logo1: contest.organiser_logo1,
      organiser_logo2: contest.organiser_logo2,
      start_date: contest.start_date,
      end_date: contest.end_date,
      result_date: contest.result_date,
    })),
  };
};
