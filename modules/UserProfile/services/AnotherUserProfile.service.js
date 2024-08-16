import { useQuery } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'
import { APIInstance } from 'services/global.service'
import { useEffect } from 'react'
import { UserProfileQuery } from '../constants/query.address'
import i18n from 'i18next'

export const useAnotherUserProfile = ({ authorId }) => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: [UserProfileQuery.AUTHOR_DATA, { authorId }],
    queryFn: () => authorDataAPI({ authorId }),
    enabled: !!authorId,
  })

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Some thing went wrong!', {
        variant: 'error',
      })
    }
  }, [isError, enqueueSnackbar])

  return {
    isLoading: isLoading,
    isSuccess,
    isError,
    user: {
      username: data?.user?.username || '',
      profilePic: data?.user?.profilePic || '',
      profileBanner: data?.user?.profileBanner || '',
      gender: data?.user?.gender || '',
      fullName: data?.user?.fullName || '',
      bio: data?.user?.bio || '',
    },
  }
}

const authorDataAPI = async ({ authorId }) => {
  const response = await APIInstance({
    url: `/author/${authorId}`,
    method: 'GET',
    params:{
      lang:i18n.language
    }
  })

  const user = response?.data?.data?.[0]

  return {
    user: {
      username: user?.username || '',
      profilePic: user?.profile_pic || '',
      profileBanner: user?.profile_banner || '',
      gender: user?.gender,
      fullName: user?.full_name,
      bio: user?.bio,
    },
  }
}
