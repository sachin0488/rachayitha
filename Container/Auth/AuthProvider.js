import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUserService } from './service/User.service'

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

const AuthProvider = () => {
  const { push, pathname } = useRouter()

  const { isLoading, isLoggedIn, user, status, tokens } = useUserService()

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      blockList.forEach(path => {
        if (pathname.includes(path)) {
          push('/login')
        }
      })
    } else if (!isLoading && isLoggedIn) {
      blockListForLoggedIn.forEach(path => {
        if (pathname.includes(path)) {
          push('/')
        }
      })
    }
  }, [pathname, push, isLoggedIn, isLoading])

  return null
}

export default AuthProvider
