import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { useDispatch } from 'react-redux'
import { setUserData } from 'store/slices/global/user.slice'
import { UpdateUserProfileAPI } from './userProfile.api'
import { AuthQuery } from 'Container/Auth/constants/query.address'
import { useFetchUserDataAPI } from 'Container/Auth/api/auth.hook'

const propsType = {
  handleClose: Function,
}

export const useUpdateProfileAPI = ({ handleClose } = propsType) => {
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const {
    refetch,
    isLoading: isUserFetching,
    isSuccess: isUserFetchedSuccessfully,
  } = useFetchUserDataAPI({ enabled: true })

  const { mutate, isLoading, isSuccess } = useMutation(UpdateUserProfileAPI, {
    onSuccess({ data }) {
      refetch()

      if (handleClose !== undefined) handleClose()

      enqueueSnackbar('Profile Updated Successfully!', {
        variant: 'success',
      })

      dispatch(setUserData(data?.user))
    },
    onError: error => {
      if (error.response?.data?.message)
        enqueueSnackbar(error.response?.data?.message, {
          variant: 'error',
        })
    },
  })

  const handleUpdateProfile = mutate

  return { handleUpdateProfile, isLoading, isSuccess, isUserFetchedSuccessfully, isUserFetching }
}
