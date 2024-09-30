import { useQuery } from '@tanstack/react-query';
import { APIInstance } from 'services/global.service';
import { ContestQuery } from '../constants/query.address';
import { useRouter } from 'next/router';

const formatKeywords = (keywords) => {
    return keywords
      .split(',')
      .map((keyword) => `#${keyword.trim()}`)
      .join(' ');
  };

export const useThemeListService = () => {
     const router=useRouter();
    const contest_id=router.query?.contest_id||1;
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.THEME_LIST, contest_id],
    queryFn: () => fetchThemeListAPI(contest_id),
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

const fetchThemeListAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/theme?contest_id=${contest_id}`,
    method: 'GET',
  });

  const data = response?.data?.data || [];


  return {
    data: data.map((item) => ({
      id: item.id,
      user_id: item.user_id,
      contest_id: item.contest_id,
      theme_id: item.theme_id,
      theme_name: item.theme_name,
      theme_description: item.theme_description,
      theme_keywords:formatKeywords(item.theme_keywords),
      theme_backgroundimg: item.theme_backgroundimg,
      theme_example1: item.theme_example1,
      theme_example2: item.theme_example2,
      theme_example3: item.theme_example3,
      theme_booksample1: item.theme_booksample1,
      theme_booksample2: item.theme_booksample2,
      theme_booksample3: item.theme_booksample3,
    })),
  };
};
