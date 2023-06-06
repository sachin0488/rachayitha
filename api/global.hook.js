import useLocalStorage from '../hooks/useLocalStorage'

export const useAuthTokens = () => {
  const [access, setAccess] = useLocalStorage('access', '', true)
  const [refresh, setRefresh] = useLocalStorage('refresh', '', true)

  return { access, refresh, setAccess, setRefresh }
}


export const authTokenHandles = () => {
  const access = 'access'
  const refresh = 'refresh'

  const getAccess = typeof window !== 'undefined' ? window.localStorage.getItem(access) || '' : ''
  const getRefresh = typeof window !== 'undefined' ? window.localStorage.getItem(refresh) || '' : ''

  const setAccess = token => {
    window.localStorage.setItem(access, token)
  }

  const setRefresh = token => {
    window.localStorage.setItem(refresh, token)
  }

  return { getAccess, getRefresh, setAccess, setRefresh }
}
