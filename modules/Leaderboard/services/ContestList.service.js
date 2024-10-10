import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import slugUtility from 'utility/slug.utility'

export const useContestListService = () => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.CONTEST_LIST],
    queryFn: fetchContestListAPI,
  })

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

  const data = response?.data?.data || {}

  return {
    data: data?.map(item => {
      return {
        contest_description: item?.contest_description,
        contest_name: item?.contest_name,
        contest_img: item?.contest_img,
        contest_type: item?.contest_type,
        result_date: item?.result_date,
        start_date: item?.start_date,
        user_id: item?.user_id,
        id: item?.id,
        slug: slugUtility.create(item?.contest_name),
      }
    }),
  }
}
