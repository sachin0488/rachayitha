import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { ContestQuery } from '../constants/query.address';
import { useRouter } from 'next/router';

export const usePrizeListService = () => {
  const router = useRouter();
  const contest_id = router.query?.contest_id || 1;

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.PRIZE_LIST, contest_id],
    queryFn: () => fetchPrizeListAPI(contest_id),
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

const fetchPrizeListAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/prize?contest_id=${contest_id}`,
    method: 'GET',
  });

  const data = response?.data?.data || [];

  return {
    data: data.map((item) => ({
      id: item.id,
      user_id: item.user_id,
      contest_id: item.contest_id,
      prize_name: item.prize_name,
      prize_description: item.prize_description,
      prize_money: item.prize_money,
      prize_logo: item.prize_logo,
      prize_additional_rewards_flag: item.prize_additional_rewards_flag,
    })),
  };
};
