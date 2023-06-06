import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../../store'
import { selectUser, setUserLogout } from '../../store/slices/global/user.slice'
import { useFetchUserDataAPI } from './api/auth.hook'
import { useAuthTokens } from 'api/global.hook'

const blockList = [
  '/payment-plan',
  '/payment-success',
  '/subscription-plan',
  '/coin-plan',
  '/payment-plan',
  '/profile',
  '/book',
]

const blockListForLoggedIn = ['/login', '/create-account', '/forgot-password']

const LoadToken = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const { push, pathname } = useRouter()

  const { isError, refetch, status } = useFetchUserDataAPI({
    enabled: !Boolean(
      pathname.includes('/login') ||
        pathname.includes('/create-account') ||
        pathname.includes('/forgot-password') ||
        pathname.includes('/terms-and-conditions') ||
        pathname.includes('/privacy-policy') ||
        pathname.includes('/new-password') ||
        pathname.includes('/forgot-password') ||
        pathname.includes('/otp') ||
        pathname === '/',
    ),
  })

  useEffect(() => {
    if (isError && Number(status) === 401) {
      dispatch(setUserLogout())
    }
  }, [dispatch, isError, status])

  useEffect(() => {
    if (!user?.isLoggedIn) {
      blockList.forEach(path => {
        if (pathname.includes(path)) {
          push('/login')
        }
      })
    }
    if (user?.isLoggedIn) {
      blockListForLoggedIn.forEach(path => {
        if (pathname.includes(path)) {
          push('/')
        }
      })
    }
  }, [pathname, push, user?.isLoggedIn])

  return <></>
}

export default LoadToken
