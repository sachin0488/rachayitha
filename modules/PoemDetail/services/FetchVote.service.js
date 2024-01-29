import { APIInstance } from 'services/global.service'
import { PoemDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'

const fetchVoteDetail = async poemId => {
  const res = await APIInstance({
    url: `/poemvote/${poemId}`,
    method: 'GET',
  })

  const List = await res?.data?.data

  const voteList = await List.map(item => {
    return {
      purpose: item?.purpose,
      transactionGroup: item?.transaction_group,
      amount: parseInt(item?.amount),
      poemId: parseInt(item?.poem_id_id),
      userId: item?.user_id_id,
      createdAt: item?.created_at,
      deletedAt: item?.deleted_at,
      updatedAt: item?.updated_at,
    }
  })

  return await {
    voteCount: voteList.filter(item => item.purpose.includes('vote') && item?.deletedAt === null).length,
    isAlreadyVoted: voteList.length > 0,
    voteList: voteList,
  }
}

export const useFetchVoteService = ({ poemId }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [PoemDetailsQuery.POEM_VOTE, { poemId: parseInt(poemId) }],
    queryFn: () => fetchVoteDetail(poemId),
    enabled: Boolean(poemId),
  })

  return { Data: data, isLoading, isError, error, isFetching }
}
