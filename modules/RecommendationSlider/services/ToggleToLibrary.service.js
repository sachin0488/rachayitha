import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { ContentType } from '../constants/common.constants'

export const toggleToLibraryAPI = async ({ contentId, addToLibrary, contentType }) => {
  const response = await APIInstance({
    url: contentType === ContentType.BOOK ? `/userbooklibrary/` : `/userpoemlibrary/`,
    method: addToLibrary ? 'POST' : 'DELETE',
    data: contentType === ContentType.BOOK ? { book_id: contentId } : { poem_id: contentId },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useToggleToLibraryService = ({ contentId, queryKey, contentType }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ addToLibrary }) {
      return toggleToLibraryAPI({
        contentId,
        addToLibrary,
        contentType,
      })
    },
    onSuccess({ message }) {
      try {
        queryClient.setQueryData(queryKey, oldData => {
          return oldData?.map(item => {
            if (contentId !== item?.contentId) return item

            const messageAlternative = item?.libraryAdded ? 'Added to Library!' : 'Removed from Library!'

            enqueueSnackbar(message || messageAlternative, {
              variant: 'success',
            })

            return {
              ...item,
              libraryAdded: !item?.libraryAdded,
            }
          })
        })
      } catch (err) {
        console.log(err)
      }
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