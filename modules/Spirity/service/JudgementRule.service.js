import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { ContestQuery } from '../constants/query.address'
import { useRouter } from 'next/router'

export const useJudgementRuleListService = () => {
  const router = useRouter()
  const contest_id = router.query?.contest_id || 1

  const { refetch, data, isLoading, isFetching, isError, isSuccess } = useQuery({
    queryKey: [ContestQuery?.JUDGEMENT_RULE, contest_id],
    queryFn: () => fetchJudgementRuleListAPI(contest_id),
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

const fetchJudgementRuleListAPI = async contest_id => {
  const response = await APIInstance({
    url: `/contest/judgementrule?contest_id=${contest_id}`,
    method: 'GET',
  })

  const data = response?.data?.data || []

  return {
    data: data.map(item => ({
      id: item.id,
      user_id: item.user_id,
      contest_id: item.contest_id,
      judgement_rule_name: item.judgement_rule_name,
      judgement_rule_description: item.judgement_rule_description,
    })),
  }
}
