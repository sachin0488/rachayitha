import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'

export const toggleToLibraryAPI = ({ contentId, contentType, addToLibrary }) => {
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

  if (addToLibrary)
    return APIInstance({
      url: URL,
      method: 'POST',
      data: {
        book_id: contentId,
      },
    })
  else
    return APIInstance({
      url: URL,
      method: 'DELETE',
      data: { book_id: contentId },
    })
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
    onSuccess({ data }) {
      queryClient.setQueryData(queryKey, oldData => {
        // let message

        // if (contentType?.toLocaleLowerCase() === 'book')
        //   message = oldData?.libraryAdded
        //     ? 'Your Book has been added to Library!'
        //     : 'Your Book has been removed from Library!'

        // if (contentType?.toLocaleLowerCase() === 'poem')
        //   message = oldData?.libraryAdded
        //     ? 'Your Poem has been added to Library!'
        //     : 'Your Poem has been removed from Library!'

        const message = data?.info?.visible?.message
        const status = message?.includes('already') ? 'warn' : 'success'

        enqueueSnackbar(data?.info?.visible?.message, {
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
      enqueueSnackbar('Unable to perform requested action!', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
