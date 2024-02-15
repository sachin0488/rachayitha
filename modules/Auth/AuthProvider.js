import { useRouter } from 'next/router'
import { useUserService } from './service/User.service'
import { useQuery } from '@tanstack/react-query'
import { AuthQuery } from './constants/query.address'
import styled from '@emotion/styled'
import { LinearProgress } from '@mui/material'

const blockList = ['/payment-plan', '/payment-success', '/subscription-plan', '/coin-plan', '/payment-plan', '/profile']

const blockListForLoggedIn = ['/login', '/create-account', '/forgot-password']

const AuthProvider = ({ children }) => {
  const { push, pathname, isReady, query } = useRouter()

  const { isLoading, isLoggedIn, isSuccess } = useUserService()

  const { isLoading: isFetching } = useQuery({
    queryKey: [AuthQuery.AUTH_PROVIDER, { pathname, isLoggedIn }],
    queryFn: () => {
      if (isLoggedIn) {
        for (const path of blockListForLoggedIn) {
          if (pathname.includes(path)) {
            if (query?.from) {
              push(decodeURIComponent(query.from))
            } else {
              push('/')
            }
            break
          }
        }
      } else {
        for (const path of blockList) {
          if (pathname.includes(path)) {
            push('/login')
            break
          }
        }
      }
      return null
    },
    staleTime: 0,
    enabled: isSuccess,
  })

  return (
    <>
      <Root className={isFetching || isLoading ? 'display' : ''}>
        <LogoImage src="/rachayitha_logo_500.svg" />
        <StyledLinearProgress />
      </Root>
      {children}
    </>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 30px;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffffd4;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  display: none;
  &.display {
    opacity: 1;
    display: flex;
  }
`

const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  width: 200px;
  max-width: 75%;
  border-radius: 4px;
  height: 7px;
`

const LogoImage = styled.img`
  height: auto;
  width: 250px;
  max-width: 70%;
  margin-bottom: -4px;
  user-select: none;
`
export default AuthProvider
