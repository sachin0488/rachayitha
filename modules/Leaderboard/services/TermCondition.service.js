import { useQuery } from '@tanstack/react-query'
import { ContestQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

export const useTermConditionService = (contest_id) => {
  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.TERM_CONDITION, contest_id],
    queryFn: () => fetchTermConditionAPI(contest_id),
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

const fetchTermConditionAPI = async (contest_id) => {
  const response = await APIInstance({
    url: `/contest/termconditions?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []
  
  return {
    data: data?.map(item => {
      return {
        id: item?.id,
        user_id: item?.user_id,
        contest_id: item?.contest_id,
        term_name: item?.term_name,
        term_description: item?.term_description,
        term_doc_link: item?.term_doc_link,
      }
    }),
  }
}
