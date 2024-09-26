import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

export const useWinnerListService = (contest_id) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.WINNER_LIST, contest_id],
    queryFn: () => fetchWinnerListAPI(contest_id),
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

const fetchWinnerListAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/winner?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []
   console.log(data)
  return {
    data: data?.map(item => {
      return {
        winner_name: item?.winner_name,
        position: item?.position,
        prize: item?.prize,
        user_id: item?.user_id,
      }
    }),
  }
}
