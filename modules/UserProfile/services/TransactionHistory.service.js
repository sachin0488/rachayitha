import { useInfiniteQuery } from '@tanstack/react-query'

import { UserProfileQuery } from '../constants/query.address'
import { APIInstance } from 'services/global.service'
import i18n from 'next-i18next'

const useTransactionHistoryListService = () => {
  const { data, isError, fetchNextPage, refetch, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [UserProfileQuery.TRANSACTION_HISTORY_LIST],
    staleTime: 3000,
    queryFn: ({ pageParam = 1 }) => fetchTransactionHistoryListAPI({ page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.nextCursor
    },
  })

  return {
    transactionList: data?.pages?.map(group => group?.transactionList)?.flat() || [],
    isError,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
  }
}

export const TransactionTypes = {
  CREDIT: 'credit',
  DEBIT: 'debit',
}

export const StatusTypes = {
  SUCCESS: 'success',
  FAIL: 'fail',
}

const fetchTransactionHistoryListAPI = async ({ page }) => {
  const res = await APIInstance({
    url: '/usertransactionhistory/',
    method: 'GET',
    params: {
      page,
      lang: i18n.language,
    },
  })

  return {
    transactionList: res?.data?.data?.map(item => {
      return {
        amount: item?.amount,
        createdAt: item?.created_at,
        purpose: item?.purpose,
        status: item?.status === StatusTypes.SUCCESS ? StatusTypes.SUCCESS : StatusTypes.FAIL,
        transactionGroup: item?.transaction_group,
        transactionType:
          item?.transaction_type.toLocaleLowerCase() === TransactionTypes.CREDIT ? TransactionTypes.CREDIT : TransactionTypes.DEBIT,
        userId: item?.user_id_id,
      }
    }),
    nextCursor: res?.data?.next_page || undefined,
    previousCursor: res?.data?.previous_page || undefined,
  }
}

export default useTransactionHistoryListService
