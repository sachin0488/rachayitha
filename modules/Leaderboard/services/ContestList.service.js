import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

export const useContestListService = () => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.CONTEST_LIST],
    queryFn: fetchContestListAPI,
  })
  
  // console.log("hdga",data)
  return {
    data: {
      data: data,
    },
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchContestListAPI = async () => {
  const response = await APIInstance({
    url: '/contest/list',
    method: 'GET',
  })

//   console.log('fxnresponse', response)
  const data = response?.data?.data || {}
//   console.log('fxndata', data)
  return {
    data: data?.map(item => {
      return {
        contest_description: item?.contest_description,
        contest_name: item?.contest_name,
        result_date: item?.result_date,
        start_date: item?.start_date,
        user_id: item?.user_id,
        id: item?.id,
      }
    }),
  }
}
