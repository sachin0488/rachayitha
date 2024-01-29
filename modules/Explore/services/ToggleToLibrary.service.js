import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const toggleToLibraryAPI = async ({ contentId, contentType, addToLibrary }) => {
  const URL =
    contentType?.toLowerCase() === 'book'
      ? '/userbooklibrary/'
      : contentType?.toLowerCase() === 'poem'
      ? '/userpoemlibrary/'
      : '/userbooklibrary/'
  const data =
    contentType?.toLowerCase() === 'book'
      ? {
          book_id: contentId,
        }
      : contentType?.toLowerCase() === 'poem'
      ? {
          poem_id: contentId,
        }
      : {
          book_id: contentId,
        }

  const response = await APIInstance({
    url: URL,
    method: addToLibrary ? 'POST' : 'DELETE',
    data: data,
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}

export const useToggleToLibraryService = ({ contentId, contentType, queryKey }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ addToLibrary }) {
      return toggleToLibraryAPI({
        contentId,
        contentType,
        addToLibrary,
      })
    },
    onSuccess({ message }) {
      queryClient.setQueryData(queryKey, oldData => {
        const status = message?.includes('already') ? 'warn' : 'success'

        enqueueSnackbar(message, {
          variant: status,
        })

        return {
          ...oldData,
          pages: oldData?.pages?.map(group => {
            return {
              ...group,
              data: group?.data?.map(item => {
                if (contentType?.toLocaleLowerCase() === 'book')
                  return contentId === item?.bookId
                    ? {
                        ...item,
                        libraryAdded: item?.libraryAdded === 0 ? 1 : 0,
                      }
                    : item
                if (contentType?.toLocaleLowerCase() === 'poem')
                  return contentId === item?.poemId
                    ? {
                        ...item,
                        libraryAdded: item?.libraryAdded === 0 ? 1 : 0,
                      }
                    : item
              }),
            }
          }),
        }
      })
    },
    onError() {
      if (error.response?.data?.error?.visible?.message)
        enqueueSnackbar(error.response?.data?.error?.visible?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
