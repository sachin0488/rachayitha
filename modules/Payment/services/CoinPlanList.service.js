import { useQuery } from '@tanstack/react-query'

import { PaymentQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import i18n from 'i18next'

const useCoinPlanListService = () => {
  const { data, isError, refetch, isLoading } = useQuery({
    queryKey: [PaymentQuery.COIN_PLAN_LIST],
    queryFn: fetchCoinPlanListAPI,
  })

  return {
    isError,
    isLoading,
    refetch,
    data: data?.data || [],
  }
}

const fetchCoinPlanListAPI = async () => {
  const res = await APIInstance({
    url: '/coinplan/',
    method: 'GET',
    params:{
      lang:i18n.language
    }
  })

  return {
    data: res?.data?.data?.map(item => ({
      id: item?.id,
      name: item?.name,
      shortDetails: item?.short_details,
      details: item?.details,
      amount: item?.price,
      coinQuantity: item?.coin_qty,
    })),
    message: res?.data?.info?.visible?.message,
  }
}

export default useCoinPlanListService
