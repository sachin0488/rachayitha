import moment from 'moment'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'api/global.api'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { setUserData } from 'store/slices/global/user.slice'
import { AuthQuery } from 'Container/Auth/constants/query.address'

export const useUpdateProfileService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const isUserFetching = queryClient.isFetching

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: UpdateUserProfileAPI,
    onSuccess({ data }) {
      queryClient.invalidateQueries([AuthQuery.USER_DATA])

      enqueueSnackbar('Profile Updated Successfully!', {
        variant: 'success',
      })

      dispatch(setUserData(data?.user))
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
    data?.profile_pic?.length &&
    typeof data?.profile_pic[0] !== 'string' &&
    data?.profile_pic[0] !== null &&
    data?.profile_pic[0] !== undefined
  )
    form.append('profile_pic', data.profile_pic[0])

  if (data?.profile_banner?.length) form.append('profile_banner', data.profile_banner[0])

  if (data?.full_name) form.append('full_name', data?.full_name)
  if (data?.username) form.append('username', data?.username)
  if (data?.email) form.append('email', data?.email)
  if (data?.birth_date) form.append('birth_date', moment(data?.birth_date).format('YYYY-MM-DD'))
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
