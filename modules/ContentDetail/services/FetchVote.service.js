import { APIInstance } from 'services/global.service'
import { ContentDetailsQuery } from '../constants/query.address'
import { useQuery } from '@tanstack/react-query'
import i18n from 'i18next'

const fetchVoteDetail = async ({ contentType, contentId }) => {
  const res = await APIInstance({
    url: `/${contentType}vote/${contentId}`,
    method: 'GET',
    params:{
      lang : i18n.language
    }
  })

  const List = await res?.data?.data

  const voteList = await List.map(item => {
    return {
      purpose: item?.purpose,
      transactionGroup: item?.transaction_group,
      amount: parseInt(item?.amount),
      contentId: parseInt(item?.[`${contentType}_id_id`]),
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

export const useFetchVoteService = ({ contentId, contentType }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [ContentDetailsQuery.CONTENT_VOTE, { contentId: parseInt(contentId), contentType }],
    queryFn: () => fetchVoteDetail({ contentId, contentType }),
    enabled: Boolean(contentId && contentType),
  })

  return { Data: data, isLoading, isError, error, isFetching }
}
