import { useQuery } from '@tanstack/react-query'

import { PaymentQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

const useSubscriptionListService = () => {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: [PaymentQuery.SUBSCRIPTION_LIST],
    queryFn: fetchSubscriptionListAPI,
  })

  return {
    isError,
    isLoading,
    refetch,
    data: data?.data || [],
  }
}

const fetchSubscriptionListAPI = async () => {
  const res = await APIInstance({
    url: '/subscription/',
    method: 'GET',
  })

  return {
    data: res?.data?.data?.map(item => ({
      id: item?.id,
      name: item?.name,
      shortDetails: item?.short_details,
      details: item?.details,
      amount: item?.amount,
      validity: item?.validity,
    })),
    message: res?.data?.info?.visible?.message,
  }
}

export default useSubscriptionListService
