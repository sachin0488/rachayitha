import axios from 'axios'

import { MutationCache, QueryCache } from '@tanstack/react-query'
import { isBrowser } from 'utility/ssr.utility'
import { AuthTokenStore } from 'utility/authTokenStore'

const API_URL = 'https://rachayitha.com/api/v1/'

export const AUTHORIZATION = 'Authorization'

const { setAccess, setRefresh, getRefresh, getAccess } = AuthTokenStore()

export const APIInstance = axios.create({
  baseURL: `${API_URL}`,
})

APIInstance.defaults.headers.common['Content-Type'] = 'application/json'

export const silentRenewalAPI = data => {
  return APIInstance({
    url: '/token/refresh/',
    method: 'POST',
    data,
  })
}

const handleLogout = () => {
  window.localStorage.clear()
  window.location.replace('/login')
}

const handleToken = res => {
  setRefresh(res.data.refresh)
  setAccess(res.data.access)
}

export const mutationCache = new MutationCache({
  onError: async (error, variables, context, mutation) => {
    if (error?.response?.status === 401) {
      try {
        const res = await silentRenewalAPI({ refresh: getRefresh() })

        if (res.status === 200) {
          handleToken(res)

          mutation.execute()

          // enqueueSnackbar('Token has been updated  mutation!', {
          //   variant: 'success',
          // })
        }
      } catch (error) {
        if (parseInt(error?.response?.status) === 400) handleLogout()
        if (parseInt(error?.response?.status) === 401) handleLogout()
      }
    }
  },
})

export const queryCache = new QueryCache({
  onError: async (error, query) => {
    if (error?.response?.status === 401) {
      try {
        const res = await silentRenewalAPI({ refresh: getRefresh() })

        if (res.status === 200) {
          handleToken(res)

          query.fetch()

          // enqueueSnackbar('Token has been updated !', {
          //   variant: 'success',
          // })
        }
      } catch (error) {
        if (parseInt(error?.response?.status) === 400) handleLogout()
        if (parseInt(error?.response?.status) === 401) handleLogout()
      }
    }
  },
})

APIInstance.interceptors.request.use(
  config => {
    try {
      const isExternal = !!config?.url?.startsWith('http')
      const accessToken = isBrowser ? getAccess() : null

      if (accessToken && !isExternal) {
        config.headers[AUTHORIZATION] = `Bearer ${accessToken}`
      }
      return config
    } catch (error) {
      console.log(error)
    }
  },
  error => Promise.reject(error),
)
