import { APIInstance } from 'api/global.api'
import { NovelDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'

const fetchVoteDetail = async bookId => {
  const res = await APIInstance({
    url: `/bookvote/${bookId}`,
    method: 'GET',
  })

  const List = await res?.data?.data

  const voteList = await List.map(item => {
    return {
      purpose: item?.purpose,
      transactionGroup: item?.transaction_group,
      amount: parseInt(item?.amount),
      bookId: parseInt(item?.book_id_id),
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

export const useFetchVoteService = ({ bookId }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    [NovelDetailsQuery.NOVEL_VOTE, { bookId: parseInt(bookId) }],
    () => fetchVoteDetail(bookId),
    {
      enabled: Boolean(bookId),
    },
  )

  return { Data: data, isLoading, isError, error, isFetching }
}
