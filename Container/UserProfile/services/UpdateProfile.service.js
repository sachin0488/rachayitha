import moment from 'moment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthQuery } from 'Container/Auth/constants/query.address'

export const useUpdateProfileService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()
  const isUserFetching = queryClient.isFetching

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: UpdateUserProfileAPI,
    onSuccess({ data }) {
      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      enqueueSnackbar('Profile Updated Successfully!', {
        variant: 'success',
      })
    },
    onError: error => {
      console.log(error)
      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  return { mutate, isLoading, isSuccess, isUserFetching }
}

const UpdateUserProfileAPI = async data => {
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

  const res = await APIInstance({
    url: '/user/',
    method: 'PUT',
    data: form,
  })

  return {
    ...res?.data?.data,
  }
}
