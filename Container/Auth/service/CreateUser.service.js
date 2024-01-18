import { APIInstance, AUTHORIZATION } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import moment from 'moment'
import { getFormErrorMessage } from 'hooks/useFormError'

const { setAccess, setRefresh } = AuthTokenStore()

export const useCreateAccountService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: createAccountAPI,
    onSuccess({ tokens }) {
      setAccess(tokens?.access)
      setRefresh(tokens?.refresh)

      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      enqueueSnackbar('Your Account has been Created Successfully !', {
        variant: 'success',
      })
    },
    onError: error => {
      if (error.response?.data?.errors)
        enqueueSnackbar(getFormErrorMessage(error.response?.data?.errors), {
          variant: 'error',
        })

      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
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

  return {
    // message: ,
    tokens: {
      access: response?.data?.user?.tokens?.access,
      refresh: response?.data?.user?.tokens?.refresh,
    },
  }
}
