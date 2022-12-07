// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import { fetchUsers } from "./global.api";

// export const useStoryApi = () => {
//   const { data, isLoading, isError, error, isFetching } = useQuery(
//     ["use-story"],
//     fetchUsers
//   );
//   return { data, isLoading, isError, error, isFetching };
// };

import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const useAuthTokens = () => {
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

export default useAuthTokens
