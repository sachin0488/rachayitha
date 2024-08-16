import { useQuery } from '@tanstack/react-query'

import { PaymentQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import i18n from 'i18next'

const useVotePlanListService = () => {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: [PaymentQuery.VOTE_PLAN_LIST],
    queryFn: fetchVotePlanListAPI,
  })

  return {
    isError,
    isLoading,
    refetch,
    data: data?.data || [],
  }
}

const fetchVotePlanListAPI = async () => {
  const res = await APIInstance({
    url: '/votetokenplan/',
    method: 'GET',
    paraams:{
      lang:i18n.language
    },
  })

  return {
    data: res?.data?.data?.map(item => ({
      id: item?.id,
      name: item?.name,
      shortDetails: item?.short_details,
      details: item?.details,
      amount: item?.price,
      voteToken: item?.amount,
    })),
    message: res?.data?.info?.visible?.message,
  }
}

export default useVotePlanListService
