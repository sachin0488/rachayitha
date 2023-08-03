import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useSnackbar } from 'notistack'
import { BookDetailsQuery } from '../constants/query.address'

export const toggleToLibraryAPI = ({ bookId, addToLibrary }) => {
  if (addToLibrary)
    return APIInstance({
      url: '/userbooklibrary/',
      method: 'POST',
      data: { book_id: bookId },
    })
  else
    return APIInstance({
      url: '/userbooklibrary/',
      method: 'DELETE',
      data: { book_id: bookId },
    })
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
    onSuccess({ data }) {
      queryClient.setQueryData(queryKey, oldData => {
        const message = oldData?.libraryAdded
          ? 'Your Book has been added to Library!'
          : 'Your Book has been removed from Library!'

        enqueueSnackbar(message, {
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

        console.log('oldData', oldData)

        return oldData
          ? {
              ...oldData,
              libraryAdded: !oldData?.libraryAdded,
            }
          : oldData
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to perform requested action!', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
