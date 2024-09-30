import moment from 'moment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthQuery } from 'modules/Auth/constants/query.address'
import { i18n } from 'next-i18next'

export const useUpdateProfileService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const isUserFetching = queryClient.isFetching

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: updateUserProfileAPI,
    onSuccess({ message, isMessageVisible }) {
      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      if (isMessageVisible) {
        enqueueSnackbar(message || 'Profile Updated Successfully!', {
          variant: 'success',
        })
      }
    },
    onError: error => {
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

  return { mutate, isLoading, isSuccess, isUserFetching }
}

const updateUserProfileAPI = async data => {
  const form = new FormData()

  if (
    data?.profilePic?.length &&
    typeof data?.profilePic[0] !== 'string' &&
    data?.profilePic[0] !== null &&
    data?.profilePic[0] !== undefined
  )
    form.append('profile_pic', data.profilePic[0])

  if (
    data?.profileBanner?.length &&
    typeof data?.profileBanner[0] !== 'string' &&
    data?.profileBanner[0] !== null &&
    data?.profileBanner[0] !== undefined
  )
    form.append('profile_banner', data.profileBanner[0])

  if (data?.fullName) form.append('full_name', data?.fullName)
  if (data?.username) form.append('username', data?.username)
  if (data?.email) form.append('email', data?.email)
  if (data?.birthDate) form.append('birth_date', moment(data?.birthDate).format('YYYY-MM-DD'))
  if (data?.bio) form.append('bio', data?.bio)
  if (data?.gender) form.append('gender', data?.gender)

  const response = await APIInstance({
    url: '/user/',
    method: 'PUT',
    data: form,
    params: {
      lang: i18n.language,
    },
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return {
    message: response?.data?.info?.visible?.message || '',
    isMessageVisible: !!response?.data?.info?.visible?.message,
  }
}
