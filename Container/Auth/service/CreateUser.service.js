import { APIInstance, AUTHORIZATION } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'

const { setAccess, setRefresh } = AuthTokenStore()

export const useCreateAccountService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: createAccountAPI,
    onSuccess({ data }) {
      setAccess(data?.user?.tokens?.access)
      setRefresh(data?.user?.tokens?.refresh)

      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      enqueueSnackbar("Your Account has been Created Successfully !", {
        variant: 'success',
      })
    },
    onError: error => {
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

const createAccountAPI = ({ username, email, password, bio, fullName, birthDate, gender }) => {
  return APIInstance({
    url: '/register/',
    method: 'POST',
    data: {
      user: {
        username,
        email,
        password,
        bio,
        full_name: fullName,
        birth_date: birthDate,
        gender,
      },
    },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })
}
