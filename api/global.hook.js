import useLocalStorage from '../hooks/useLocalStorage'

const access = 'access'
const refresh = 'refresh'

export const useAuthTokens = () => {
  const [access, setAccess] = useLocalStorage(access, '', true)
  const [refresh, setRefresh] = useLocalStorage(refresh, '', true)

  return { access, refresh, setAccess, setRefresh }
}

export const authTokenHandles = () => {
  const getAccess =
    typeof window !== 'undefined'
      ? window.localStorage.getItem(access) || window.sessionStorage.getItem(access) || ''
      : ''
  const getRefresh =
    typeof window !== 'undefined'
      ? window.localStorage.getItem(refresh) || window.sessionStorage.getItem(refresh) || ''
      : ''

  const setAccess = (token, storageType = 'local') => {
    if (storageType === 'session') {
      window.sessionStorage.setItem(access, token)
      return
    }
    window.localStorage.setItem(access, token)
  }

  const setRefresh = (token, storageType = 'local') => {
    if (storageType === 'session') {
      window.sessionStorage.setItem(refresh, token)
      return
    }
    window.localStorage.setItem(refresh, token)
  }

  return { getAccess, getRefresh, setAccess, setRefresh }
}
