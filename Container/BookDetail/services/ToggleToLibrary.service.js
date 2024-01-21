import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const toggleToLibraryAPI = async ({ bookId, addToLibrary }) => {
  const response = await APIInstance({
    url: '/userbooklibrary/',
    method: addToLibrary ? 'POST' : 'DELETE',
    data: { book_id: bookId },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useToggleToLibraryService = ({ bookId, queryKey }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ addToLibrary }) {
      return toggleToLibraryAPI({
        bookId,
        addToLibrary,
      })
    },
    onSuccess({ message }) {
      queryClient.setQueryData(queryKey, oldData => {
        const messageAlternative = item?.libraryAdded ? 'Added to Library!' : 'Removed from Library!'

        enqueueSnackbar(message || messageAlternative, {
          variant: 'success',
        })

        if (Array.isArray(oldData))
          return oldData.map(item => {
            return bookId === item?.bookId
              ? {
                  ...item,
                  libraryAdded: !oldData?.libraryAdded,
                }
              : item
          })

        return oldData
          ? {
              ...oldData,
              libraryAdded: !oldData?.libraryAdded,
            }
          : oldData
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
