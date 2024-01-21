import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PaymentQuery } from '../constants/query.address'
import { AuthQuery } from 'Container/Auth/constants/query.address'
import { useBookChapterContentFCService } from 'Container/ReadBookSection/service/ChapterContent.service'
import { BookDetailsQuery } from 'Container/BookDetail/constants/query.address'
import { PoemDetailsQuery } from 'Container/PoemDetail/constants/query.address'
import { usePoemChapterContentFCService } from 'Container/ReadPoemSection/service/ChapterContent.service'

export const InternalPurchaseOrderType = {
  CHAPTER: 'chapter',
  BOOK: 'book',
  POEM: 'poem',
  SUBSCRIPTION: 'subscription',
  VOTETOKEN: 'vote_token',
}

const createInternalPurchaseAPI = async ({ orderType, amount, subscriptionId, votePlanId, bookId, poemId, chapterId }) => {
  const form = new FormData()

  form.append('order_type', orderType)
  form.append('amount', amount)

  if (orderType === InternalPurchaseOrderType.SUBSCRIPTION) {
    form.append('subscription_id', subscriptionId)
  } else if (orderType === InternalPurchaseOrderType.VOTETOKEN) {
    form.append('vote_plan_id', votePlanId)
  } else if (orderType === InternalPurchaseOrderType.CHAPTER && bookId) {
    form.append('book_id', bookId)
    form.append('chapter_id', chapterId)
  } else if (orderType === InternalPurchaseOrderType.CHAPTER && poemId) {
    form.append('poem_id', poemId)
    form.append('chapter_id', chapterId)
  } else if (orderType === InternalPurchaseOrderType.BOOK) {
    form.append('book_id', bookId)
  } else if (orderType === InternalPurchaseOrderType.POEM) {
    form.append('poem_id', poemId)
  }

  const res = await APIInstance({
    url: '/internalpurchase/',
    method: 'POST',
    data: form,
  })

  return {
    orderType,
    subscriptionId,
    votePlanId,
    bookId,
    chapterId,
    message: res?.data?.info?.visible?.message,
  }
}

export const useInternalPurchaseService = props => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const { mutate: fetchBookChapterContent } = useBookChapterContentFCService()
  const { mutate: fetchPoemChapterContent } = usePoemChapterContentFCService()

  const { mutate, isLoading, isSuccess, isError, data, error } = useMutation({
    mutationFn({ orderType, amount, subscriptionId, votePlanId, bookId, chapterId, poemId }) {
      return createInternalPurchaseAPI({
        orderType,
        amount,
        subscriptionId,
        votePlanId,
        bookId,
        chapterId,
        poemId,
      })
    },
    onSuccess({ message, orderType, bookId, poemId, chapterId }) {
      if (orderType === InternalPurchaseOrderType.SUBSCRIPTION) {
        queryClient.invalidateQueries([PaymentQuery.CURRENT_SUBSCRIPTION])
      } else if (orderType === InternalPurchaseOrderType.VOTETOKEN) {
        queryClient.invalidateQueries([AuthQuery.USER_DATA])
      } else if (orderType === InternalPurchaseOrderType.CHAPTER && bookId) {
        fetchBookChapterContent({ bookId, chapterId })
      } else if (orderType === InternalPurchaseOrderType.CHAPTER && poemId) {
        fetchPoemChapterContent({ poemId, chapterId })
      } else if (orderType === InternalPurchaseOrderType.BOOK) {
        queryClient.invalidateQueries([BookDetailsQuery.BOOK_DETAILS, { bookId: parseInt(bookId) }])
      } else if (orderType === InternalPurchaseOrderType.POEM) {
        queryClient.invalidateQueries([PoemDetailsQuery.POEM_DETAILS, { poemId: parseInt(poemId) }])
      }
      if (props?.disableSnackbar !== true) {
        enqueueSnackbar(message ? message : 'Product Purchased Successfully!', {
          variant: 'success',
        })
      }
    },
    onError(error) {
      if (props?.disableSnackbar !== true) {
        enqueueSnackbar(error ? error?.response?.data?.error?.visible?.message : 'Unable to make payment request at this moment !', {
          variant: 'error',
        })
      }
    },
  })

  return { mutate, isLoading, isSuccess, isError, message: error ? error?.response?.data?.error?.visible?.message : data?.message }
}
