import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const toggleToLibraryAPI = async ({ poemId, addToLibrary }) => {
  const response = await APIInstance({
    url: '/userpoemlibrary/',
    method: addToLibrary ? 'POST' : 'DELETE',
    data: { poem_id: poemId },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useToggleToLibraryService = ({ poemId, queryKey }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ addToLibrary }) {
      return toggleToLibraryAPI({
        poemId,
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
            return poemId === item?.poemId
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
