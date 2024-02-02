import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const toggleToLibraryAPI = async ({ contentId, addToLibrary, contentType }) => {
  const response = await APIInstance({
    url: `/user${contentType}library/`,
    method: addToLibrary ? 'POST' : 'DELETE',
    data: { [`${contentType}_id`]: contentId },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
    addToLibrary,
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
    onSuccess({ message, addToLibrary }) {
      queryClient.setQueryData(queryKey, oldData => {
        const messageAlternative = addToLibrary ? 'Added to Library!' : 'Removed from Library!'

        enqueueSnackbar(message || messageAlternative, {
          variant: 'success',
        })

        if (Array.isArray(oldData))
          return oldData.map(item => {
            return contentId === item?.contentId
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
