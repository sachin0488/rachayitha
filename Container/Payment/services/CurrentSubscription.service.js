import { useQuery } from '@tanstack/react-query'

import { PaymentQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'

const useCurrentSubscriptionService = () => {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: [PaymentQuery.CURRENT_SUBSCRIPTION],
    queryFn: fetchSubscriptionListAPI,
    staleTime: 3000,
  })

  return {
    isError,
    isLoading,
    refetch,
    data: data?.data || [],
    validityTill: data?.validityTill || '',
    isSubscribed: Boolean(data?.data?.length),
  }
}

const fetchSubscriptionListAPI = async () => {
  const res = await APIInstance({
    url: '/usersubscription/',
    method: 'GET',
  })

  const subscriptionList = res?.data?.data?.map(item => ({
    id: item?.id,
    finalAmount: item?.final_amount,
    validity: item?.validity,
    subscriptionId: item?.subscription_id_id,
    startDate: item?.start_date,
    endDate: item?.end_date,
  }))

  return {
    data: subscriptionList,
    message: res?.data?.info?.visible?.message,
    validityTill: subscriptionList?.[subscriptionList?.length - 1]?.endDate,
  }
}

export default useCurrentSubscriptionService
