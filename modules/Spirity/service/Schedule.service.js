import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { ContestQuery } from '../constants/query.address';
import { useRouter } from 'next/router';
export const useContestDetailService = () => {
    const router=useRouter();
    const contest_id=router.query?.contest_id||1;
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.SUBMISSION_TIMELINE, contest_id],
    queryFn: () => fetchSubmissionTimelineAPI(contest_id),
    enabled: !!contest_id,
  });

  return {
    data: data?.data || null, 
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  };
};

const fetchSubmissionTimelineAPI = async (contest_id) => {
  const response = await APIInstance({
    url: '/contest/list',
    method: 'GET',
  });
  
  const contests = response?.data?.data || [];

  const contest = contests.find(item => item.id == contest_id) || null;
  return {
    data: contest ? {
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
    } : null,
  };
};


export const useJudgingTimelineService = () => {
    const router=useRouter();
    const contest_id=router.query?.contest_id||1;
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.JUDGING_TIMELINE, contest_id],
    queryFn: () => fetchJudgingTimelineAPI(contest_id),
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

const fetchJudgingTimelineAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/judgingtimeline?contest_id=${contest_id}`,
    method: 'GET',
  });

  const data = response?.data?.data || [];
  return {
    data: data.map((item) => ({
      id: item.id,
      user_id: item.user_id,
      contest_id: item.contest_id,
      judging_name: item.judging_name,
      judging_description: item.judging_description,
      judging_date: item.judging_date,
    })),
  };
};


