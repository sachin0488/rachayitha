import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { ContentType } from '../constants/common.constants'

export const toggleToLibraryAPI = ({ contentId, addToLibrary, contentType }) => {
  if (addToLibrary)
    return APIInstance({
      url: contentType === ContentType.BOOK ? `/userbooklibrary/` : `/userpoemlibrary/`,
      method: 'POST',
      data: contentType === ContentType.BOOK ? { book_id: contentId } : { poem_id: contentId },
    })
  else
    return APIInstance({
      url: contentType === ContentType.BOOK ? `/userbooklibrary/` : `/userpoemlibrary/`,
      method: 'DELETE',
      data: contentType === ContentType.BOOK ? { book_id: contentId } : { poem_id: contentId },
    })
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
    onSuccess({ data }) {
      try {
        queryClient.setQueryData(queryKey, oldData => {
          return oldData?.map(item => {
            if (contentId !== item?.contentId) return item

            const message = item?.libraryAdded ? 'Added to Library!' : 'Removed from Library!'

            enqueueSnackbar(message, {
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
      enqueueSnackbar('Unable to perform requested action!', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
