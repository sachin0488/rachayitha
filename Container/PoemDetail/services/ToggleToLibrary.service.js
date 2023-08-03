import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useSnackbar } from 'notistack'
import { PoemDetailsQuery } from '../constants/query.address'

export const toggleToLibraryAPI = ({ poemId, addToLibrary }) => {
  if (addToLibrary)
    return APIInstance({
      url: '/userpoemlibrary/',
      method: 'POST',
      data: { poem_id: poemId },
    })
  else
    return APIInstance({
      url: '/userpoemlibrary/',
      method: 'DELETE',
      data: { poem_id: poemId },
    })
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
    onSuccess({ data }) {
      queryClient.setQueryData(queryKey, oldData => {
        const message = oldData?.libraryAdded
          ? 'Your Poem has been added to Library!'
          : 'Your Poem has been removed from Library!'

        enqueueSnackbar(message, {
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
