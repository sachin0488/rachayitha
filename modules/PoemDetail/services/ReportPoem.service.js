import { APIInstance } from 'services/global.service'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { PoemDetailsQuery } from '../constants/query.address'

export const useReportPoemService = ({ poemId }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    async mutationFn({ categoryId }) {
      const form = new FormData()

      if (poemId) form.append('poem_id', poemId)
      else throw new Error('Poem id is required!')
      if (categoryId) form.append('poemreportcategory_id', categoryId)
      else throw new Error('Category id is required!')

      const response = await APIInstance({
        url: `/poemreport`,
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

export const useReportCategoryService = ({ enabled }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: [PoemDetailsQuery.POEM_REPORT_CATEGORY],
    enabled: enabled,
    queryFn: async () => {
      const response = await APIInstance({
        url: `/poemreport/category`,
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
