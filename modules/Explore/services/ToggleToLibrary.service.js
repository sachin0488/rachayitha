import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import i18n from 'i18next';
export const toggleToLibraryAPI = async ({ contentId, contentType, addToLibrary }) => {
  let URL, data

  if (contentType?.toLowerCase() === 'book') {
    URL = '/userbooklibrary/'
    data = {
      book_id: contentId,
    }
  }

  if (contentType?.toLowerCase() === 'poem') {
    URL = '/userpoemlibrary/'
    data = {
      poem_id: contentId,
    }
  }
  
  const lang=i18n.language;

  const response = await APIInstance({
    url: URL,
    method: addToLibrary ? 'POST' : 'DELETE',
    data: data,
    params: { lang },
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
                return contentId === item?.contentId
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
