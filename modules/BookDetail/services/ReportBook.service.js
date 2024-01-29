import { APIInstance } from 'services/global.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { BookDetailsQuery } from '../constants/query.address'

export const useReportBookService = ({ bookId }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    async mutationFn({ categoryId }) {
      const form = new FormData()

      if (bookId) form.append('book_id', bookId)
      else throw new Error('Book id is required!')
      if (categoryId) form.append('bookreportcategory_id', categoryId)
      else throw new Error('Category id is required!')

      const response = await APIInstance({
        url: `/bookreport`,
        method: 'POST',
        data: form,
      })

      return {
        message: response?.data?.info?.visible?.message || '',
        isMessageVisible: !!response?.data?.info?.visible?.message,
      }
    },
    onSuccess({ isMessageVisible, message }) {
      if (isMessageVisible)
        enqueueSnackbar(message, {
          variant: 'success',
        })
    },
    onError(error) {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Unable to perform requested action!', {
          variant: 'error',
        })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}

export const useReportCategoryService = ({ enabled }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [BookDetailsQuery.BOOK_REPORT_CATEGORY],
    enabled: enabled,
    queryFn: async () => {
      const response = await APIInstance({
        url: `/bookreport/category`,
        method: 'GET',
      })

      return {
        data: response?.data?.data?.map(item => ({
          id: item.id,
          name: item.name,
          shortDetails: item.short_details,
          details: item.details,
        })),
        message: response?.data?.info?.visible?.message,
      }
    },
  })

  return { Data: data?.data, isLoading, isError, error, isFetching }
}
