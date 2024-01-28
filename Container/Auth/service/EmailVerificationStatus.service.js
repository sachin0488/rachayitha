import { useMutation, useQueryClient } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useSnackbar } from 'notistack'
import { AuthTokenStore } from 'utility/authTokenStore'
import { AuthQuery } from '../constants/query.address'
import { create } from 'zustand'

const { setAccess, setRefresh } = AuthTokenStore()

const useEmailVerificationStatusStore = create(set => ({
  authAdopter: {
    email: '',
    password: '',
    rememberMe: false,
  },
  setAuthAdopter: value =>
    set(state => ({
      ...state,
      authAdopter: {
        email: value.email,
        password: value.password,
        rememberMe: value.rememberMe,
      },
    })),
}))

export const useEmailVerificationStatusService = () => {
  const { enqueueSnackbar } = useSnackbar()

  const queryClient = useQueryClient()

  const authAdopter = useEmailVerificationStatusStore(state => state.authAdopter)
  const setAuthAdopter = useEmailVerificationStatusStore(state => state.setAuthAdopter)

  const { mutate, isLoading, isSuccess, data } = useMutation({
    mutationFn: () => emailVerificationAPI(authAdopter),
    onSuccess({ tokens, isEmailVerified, message, rememberMe }) {
      if (isEmailVerified) {
        if (rememberMe) {
          setAccess(tokens?.access)
          setRefresh(tokens?.refresh)
        } else {
          setAccess(tokens?.access, 'session')
          setRefresh(tokens?.refresh, 'session')
        }

        enqueueSnackbar(message || 'Logged in successfully !', {
          variant: 'success',
        })

        queryClient.invalidateQueries([AuthQuery.USER_DATA])
      } else {
        enqueueSnackbar(message || "Please try to resend if you don't received the email!", {
          variant: 'error',
        })
      }
    },
    onError: () => {
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      })
    },
  })

  return {
    mutate,
    setAuthAdopter,
    isLoading,
    isSuccess,
    isEmailVerified: data?.isEmailVerified,
  }
}

const emailVerificationAPI = async data => {
  try {
    const response = await APIInstance({
      url: '/token/refresh/',
      method: 'POST',
      data: {
        user: {
          email: data?.email,
          password: data?.password,
        },
      },
    })

    return {
      status: response?.status,
      user: {
        email: response?.data?.user?.email,
      },
      tokens: {
        access: response?.data?.user?.tokens?.access,
        refresh: response?.data?.user?.tokens?.refresh,
      },
      message: response?.data?.message,
      isLoggedIn: true,
      isEmailVerified: true,
    }
  } catch (error) {
    return {
      status: error?.response?.status,
      user: {
        email: data?.email,
      },
      message: "Still your email is not verified. Please try to resend if you don't received the email!",
      isLoggedIn: false,
      isEmailVerified: false,
    }
  }
}

// const userAuthAPI = async ({ accessToken, refreshToken, rememberMe }) => {
//   if (!accessToken || !refreshToken) throw new Error('No token found')

//   const [userResponse, userError] = await fetchUserDataAPI({ accessToken })

//   if (userResponse?.status === 200) return formatUserData(userResponse)

//   if (userError?.response?.status === 401) {
//     const [renewalResponse, renewalError] = await silentRenewalAPI({ refresh: refreshToken })

//     if (renewalResponse?.status === 200) {
//       setRefresh(renewalResponse?.data?.refresh)
//       setAccess(renewalResponse?.data?.access)

//       const [userResponse, userError] = await fetchUserDataAPI({ accessToken })

//       if (userResponse?.status === 200) return formatUserData(userResponse, rememberMe)

//       if (userError?.response?.status === 401) return formatUnAuthData(userError)
//     }

//     if (renewalError?.response?.status === 401) return formatUnAuthData(userError)
//   }
// }

// const fetchUserDataAPI = ({ accessToken }) => {
//   return APIInstance({
//     url: '/user/',
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   })
//     .then(res => {
//       return [res, null]
//     })
//     .catch(error => {
//       return [null, error]
//     })
// }

// const silentRenewalAPI = data => {
//   return APIInstance({
//     url: '/token/refresh/',
//     method: 'POST',
//     data,
//   })
//     .then(res => {
//       return [res, null]
//     })
//     .catch(error => {
//       return [null, error]
//     })
// }

// const formatUserData = (res, rememberMe) => {
//   const user = {
//     username: res?.data?.user?.username || '',
//     profilePic: res?.data?.user?.profile_pic || '',
//     profileBanner: res?.data?.user?.profile_banner || '',
//     isStaff: res?.data?.user?.is_staff || 0,
//     gender: res?.data?.user?.gender || '',
//     fullName: res?.data?.user?.full_name || '',
//     email: res?.data?.user?.email || '',
//     birthDate: res?.data?.user?.birth_date || '',
//     bio: res?.data?.user?.bio || '',
//     isMonetizationEnabled: res?.data?.user?.is_monetization_enabled || false,
//     isEmailVerified: !!!res?.data?.user?.is_email_verified || false,
//     coins: {
//       coin: res?.data?.user?.coins?.coin || 0,
//       voteToken: res?.data?.user?.coins?.votetoken || 0,
//     },
//   }
//   const tokens = {
//     access: res?.data?.user?.tokens?.access || '',
//     refresh: res?.data?.user?.tokens?.refresh || '',
//   }
//   const status = res.status

//   return {
//     status,
//     user,
//     tokens,
//     isLoggedIn: true,
//     rememberMe: rememberMe,
//     message: `Welcome back ${res?.data?.user?.username} !`,
//   }
// }

// export const formatUnAuthData = error => {
//   return {
//     status: error?.response?.status || 401,
//     isLoggedIn: false,
//   }
// }
