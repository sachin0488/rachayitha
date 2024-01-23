import { useQuery } from '@tanstack/react-query'
import { AuthQuery } from '../constants/query.address'
import { useSnackbar } from 'notistack'
import { APIInstance } from 'services/global.service'
import { useEffect } from 'react'
import { AuthTokenStore } from 'utility/authTokenStore'

export const useUserService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const { data, isFetching, isSuccess, refetch, isError } = useQuery({
    queryKey: [AuthQuery.USER_DATA],
    queryFn: userAuthAPI,
  })

  useEffect(() => {
    if (isError) {
      enqueueSnackbar('Some thing went wrong!', {
        variant: 'error',
      })
    }
  }, [isError, enqueueSnackbar])

  return {
    isLoading: isFetching,
    isEmailVerified: data?.user?.isEmailVerified || false,
    isSuccess,
    isError,
    refetch,
    user: {
      username: data?.user?.username || '',
      profilePic: data?.user?.profilePic || '',
      profileBanner: data?.user?.profileBanner || '',
      isStaff: Boolean(data?.user?.isStaff || 0),
      gender: data?.user?.gender || '',
      fullName: data?.user?.fullName || '',
      email: data?.user?.email || '',
      birthDate: data?.user?.birthDate || '',
      bio: data?.user?.bio || '',
      isMonetizationEnabled: data?.user?.isMonetizationEnabled || false,
      coins: {
        coin: data?.user?.coins?.coin || 0,
        voteToken: data?.user?.coins?.voteToken || 0,
      },
    },
    status: data?.status || null,
    tokens: {
      refresh: data?.tokens?.refresh || '',
      access: data?.tokens?.access || '',
    },
    isLoggedIn: Boolean(data?.isLoggedIn || false),
  }
}

const { setAccess, setRefresh, getRefresh, getAccess } = AuthTokenStore()

const userAuthAPI = async () => {
  if (!getRefresh() || !getAccess()) return formatUnAuthData()

  const [userResponse, userError] = await fetchUserDataAPI()

  if (userResponse?.status === 200) return formatUserData(userResponse)

  if (userError?.response?.status === 401) {
    const [renewalResponse, renewalError] = await silentRenewalAPI({ refresh: getRefresh })

    if (renewalResponse?.status === 200) {
      setRefresh(renewalResponse?.data?.refresh)
      setAccess(renewalResponse?.data?.access)

      const [userResponse, userError] = await fetchUserDataAPI()

      if (userResponse?.status === 200) return formatUserData(userResponse)

      if (userError?.response?.status === 401) return formatUnAuthData(userError)
    }

    if (renewalError?.response?.status === 401) return formatUnAuthData(userError)
  }
}

const fetchUserDataAPI = () => {
  return APIInstance({
    url: '/user/',
    method: 'GET',
  })
    .then(res => {
      return [res, null]
    })
    .catch(error => {
      return [null, error]
    })
}

const silentRenewalAPI = data => {
  return APIInstance({
    url: '/token/refresh/',
    method: 'POST',
    data,
  })
    .then(res => {
      return [res, null]
    })
    .catch(error => {
      return [null, error]
    })
}

const formatUserData = res => {
  const user = {
    username: res?.data?.user?.username || '',
    profilePic: res?.data?.user?.profile_pic || '',
    profileBanner: res?.data?.user?.profile_banner || '',
    isStaff: res?.data?.user?.is_staff || 0,
    gender: res?.data?.user?.gender || '',
    fullName: res?.data?.user?.full_name || '',
    email: res?.data?.user?.email || '',
    birthDate: res?.data?.user?.birth_date || '',
    bio: res?.data?.user?.bio || '',
    isMonetizationEnabled: res?.data?.user?.is_monetization_enabled || false,
    isEmailVerified: res?.data?.user?.is_email_verified || false,
    coins: {
      coin: res?.data?.user?.coins?.coin || 0,
      voteToken: res?.data?.user?.coins?.votetoken || 0,
    },
  }
  const tokens = {
    access: res?.data?.user?.tokens?.access || '',
    refresh: res?.data?.user?.tokens?.refresh || '',
  }
  const status = res.status

  return {
    status,
    user,
    tokens,
    isLoggedIn: true,
    message: `Welcome back ${res?.data?.user?.username} !`,
  }
}

export const formatUnAuthData = error => {
  return {
    status: error?.response?.status || 401,
    isLoggedIn: false,
  }
}
