import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { UserProfileQuery } from '../constants/query.address'
import { ContentType } from '../constants/common.constants'

export const toggleToLibraryAPI = ({ contentId, addToLibrary, contentType }) => {
  return APIInstance({
    url: contentType === ContentType.BOOK ? '/userbooklibrary/' : '/userpoemlibrary/',
    method: addToLibrary ? 'POST' : 'DELETE',
    data: { book_id: contentId },
  })
}

export const useToggleToLibraryService = ({ contentId, contentType }) => {
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
        queryClient.setQueryData([UserProfileQuery.LIBRARY_LIST, { contentType }], oldData => {
          return {
            ...oldData,
            pages: oldData?.pages?.map(group => {
              return {
                ...group,
                data: group?.data?.map(item => {
                  if (item?.contentId !== contentId) return item

                  const message = item?.libraryAdded ? 'Removed from Library!' : 'Added to Library!'

                  enqueueSnackbar(message, {
                    variant: 'success',
                  })

                  return {
                    ...item,
                    libraryAdded: !item?.libraryAdded,
                  }
                }),
              }
            }),
          }
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
