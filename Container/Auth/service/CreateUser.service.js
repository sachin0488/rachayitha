import moment from 'moment'
import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { getFormErrorMessage } from 'hooks/useFormError'

const { setAccess, setRefresh } = AuthTokenStore()

export const useCreateAccountService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: createAccountAPI,
    onSuccess({ tokens, message, isMessageVisible }) {
      setAccess(tokens?.access)
      setRefresh(tokens?.refresh)

      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      enqueueSnackbar(message || 'Your Account has been Created Successfully !', {
        variant: 'success',
      })
    },
    onError: error => {
      if (error.response?.data?.errors)
        enqueueSnackbar(getFormErrorMessage(error.response?.data?.errors), {
          variant: 'error',
        })
      else if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
      else
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
    },
  })

  const handleCreateAccount = mutate

  return { handleCreateAccount, isLoading, isSuccess }
}

const createAccountAPI = async ({ username, email, password, bio, fullName, birthDate, gender }) => {
  const response = await APIInstance({
    url: '/register/',
    method: 'POST',
    data: {
      user: {
        username,
        email,
        password,
        bio,
        full_name: fullName,
        birth_date: moment(birthDate).format('YYYY-MM-DD'),
        gender,
      },
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })

  const user = response?.data?.user

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
    tokens: {
      access: user?.tokens?.access,
      refresh: user?.tokens?.refresh,
    },
  }
}
