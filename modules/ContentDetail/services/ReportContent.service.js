import { APIInstance } from 'services/global.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { ContentDetailsQuery } from '../constants/query.address'

export const useReportContentService = ({ contentId, contentType }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    async mutationFn({ categoryId }) {
      const form = new FormData()

      if (contentId) form.append(`${contentType}_id`, contentId)
      else throw new Error('Content id is required!')
      if (categoryId) form.append(`${contentType}reportcategory_id`, categoryId)
      else throw new Error('Category id is required!')

      const response = await APIInstance({
        url: `/${contentType}report`,
        method: 'POST',
        data: form,
        header: {
          'Content-Type': 'multipart/form-data',
        },
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

export const useReportCategoryService = ({ enabled, contentType }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [ContentDetailsQuery.CONTENT_REPORT_CATEGORY],
    enabled: enabled && contentType ? true : false,
    queryFn: async () => {
      const response = await APIInstance({
        url: `/${contentType}report/category`,
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
