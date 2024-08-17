import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PaymentQuery } from '../constants/query.address'
import { AuthQuery } from 'modules/Auth/constants/query.address'
import { useChapterContentFCService } from 'modules/ReaderSection/service/ChapterContent.service'
import { ContentDetailsQuery } from 'modules/ContentDetail/constants/query.address'
import i18n from 'i18next'

export const InternalPurchaseOrderType = {
  BOOK_CHAPTER: 'bookchapter',
  POEM_CHAPTER: 'poemchapter',
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
  } else if (orderType === InternalPurchaseOrderType.BOOK_CHAPTER) {
    form.append('book_id', bookId)
    form.append('chapter_id', chapterId)
  } else if (orderType === InternalPurchaseOrderType.POEM_CHAPTER) {
    form.append('poem_id', poemId)
    form.append('chapter_id', chapterId)
  } else if (orderType === InternalPurchaseOrderType.BOOK) {
    form.append('book_id', bookId)
  } else if (orderType === InternalPurchaseOrderType.POEM) {
    form.append('poem_id', poemId)
  }

  const response = await APIInstance({
    url: '/internalpurchase/',
    method: 'POST',
    data: form,
    params:{
      lang:i18n.language
    },
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    orderType,
    subscriptionId,
    votePlanId,
    bookId,
    poemId,
    chapterId,
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useInternalPurchaseService = props => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const { mutate: fetchChapterContent } = useChapterContentFCService()

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
    onSuccess({ message, isMessageVisible, orderType, bookId, poemId, chapterId }) {
      if (orderType === InternalPurchaseOrderType.SUBSCRIPTION) {
        queryClient.invalidateQueries([PaymentQuery.CURRENT_SUBSCRIPTION])
      }

      if (orderType === InternalPurchaseOrderType.VOTETOKEN) {
        queryClient.invalidateQueries([AuthQuery.USER_DATA])
      }

      if (orderType === InternalPurchaseOrderType.BOOK_CHAPTER) {
        fetchChapterContent({ contentId: bookId, chapterId, contentType: 'book' })
      }

      if (orderType === InternalPurchaseOrderType.POEM_CHAPTER) {
        fetchChapterContent({ contentId: poemId, chapterId, contentType: 'poem' })
      }

      if (orderType === InternalPurchaseOrderType.BOOK) {
        queryClient.invalidateQueries([ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(bookId), contentType: 'book' }])
      }

      if (orderType === InternalPurchaseOrderType.POEM) {
        queryClient.invalidateQueries([ContentDetailsQuery.CONTENT_DETAILS, { contentId: parseInt(poemId), contentType: 'poem' }])
      }

      if (props?.disableSnackbar !== true && isMessageVisible) {
        enqueueSnackbar(message || 'Product Purchased Successfully!', {
          variant: 'success',
        })
      }
    },
    onError(error) {
      if (props?.disableSnackbar !== true) {
        if (error?.response?.data?.error?.visible?.message)
          enqueueSnackbar(error?.response?.data?.error?.visible?.message, {
            variant: 'error',
          })
        else
          enqueueSnackbar('Something went wrong', {
            variant: 'error',
          })
      }
    },
  })

  return {
    mutate,
    isLoading,
    isSuccess,
    isError,
    message: error ? error?.response?.data?.error?.visible?.message || 'Something went wrong' : data?.message,
  }
}
