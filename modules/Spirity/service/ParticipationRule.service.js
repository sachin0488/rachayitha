import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContestQuery } from '../constants/query.address'
import { useRouter } from 'next/router'

export const useParticipationRuleService = () => {
  const router = useRouter()
  const contest_id = Number(router.query?.contest_id || 1)

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.PARTICIPATION_RULE, contest_id],
    queryFn: () => fetchParticipationRuleAPI(contest_id),
    enabled: !!contest_id,
  })

  return {
    data: data?.data || [],
    refetch,
    isLoading,
    isFetching,
    isSuccess,
    isError,
  }
}

const fetchParticipationRuleAPI = async contest_id => {
  const response = await APIInstance({
    url: `/contest/participationrule?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []

  return {
    data: data?.map(item => {
      return {
        id: item?.id,
        user_id: item?.user_id,
        contest_id: item?.contest_id,
        participation_rule_name: item?.participation_rule_name,
        participation_rule_description: item?.participation_rule_description,
      }
    }),
  }
}
