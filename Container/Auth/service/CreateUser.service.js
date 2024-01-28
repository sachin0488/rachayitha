import moment from 'moment'
import { APIInstance } from 'services/global.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { getFormErrorMessage } from 'hooks/useFormError'
import { useEmailVerificationStatusService } from './EmailVerificationStatus.service'

const { setAccess, setRefresh } = AuthTokenStore()

export const useCreateAccountService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const { isEmailVerified, mutate: checkVerificationStatus, setAuthAdopter } = useEmailVerificationStatusService()

  const { mutate, isLoading, isSuccess, data } = useMutation({
    mutationFn: createAccountAPI,
    onSuccess({ tokens, user, message, isEmailVerified }) {
      if (isEmailVerified) {
        setAccess(tokens?.access)
        setRefresh(tokens?.refresh)

        queryClient.invalidateQueries([AuthQuery.USER_DATA])

        enqueueSnackbar(message || 'Your Account has been Created Successfully !', {
          variant: 'success',
        })
      } else {
        setAuthAdopter({
          email: user?.email,
          password: user?.password,
          rememberMe: true,
        })
        setTimeout(() => {
          checkVerificationStatus()
        }, 50)
        enqueueSnackbar(message || 'Please verify your email to login', {
          variant: 'error',
        })
      }
    },
    onError: error => {
      if (error?.response?.data?.errors)
        enqueueSnackbar(getFormErrorMessage(error?.response?.data?.errors), {
          variant: 'error',
        })
      else if (error?.response?.data?.message)
        enqueueSnackbar(error?.response?.data?.message, {
          variant: 'error',
        })
      else {
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
      }
    },
  })

  const handleCreateAccount = mutate

  return {
    handleCreateAccount,
    isLoading,
    isSuccess,
    isEmailVerified: isEmailVerified,
    user: data?.user,
    checkVerificationStatus,
  }
}

const createAccountAPI = async data => {
  const response = await APIInstance({
    url: '/register/',
    method: 'POST',
    data: {
      user: {
        username: data?.username,
        email: data?.email,
        password: data?.password,
        bio: data?.bio,
        full_name: data?.fullName,
        birth_date: moment(data?.birthDate).format('YYYY-MM-DD'),
        gender: data?.gender,
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
    isEmailVerified: !!user?.is_active,
    tokens: {
      access: user?.tokens?.access,
      refresh: user?.tokens?.refresh,
    },
    user: {
      fullName: user?.full_name || '',
      email: data?.email,
      password: data?.password,
    },
  }
}
