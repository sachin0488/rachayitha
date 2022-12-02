import axios from 'axios'

import { MutationCache, QueryCache } from '@tanstack/react-query'

const API_URL = 'http://rachayitha.com/api/v1/'

export const ApiInstance = axios.create({
  baseURL: `${API_URL}`,
})

// const handleLogout = () => {
//   const isSuperAdmin = localStorage.getItem("isSuperAdmin") === "true";
//   window.localStorage.clear();
//   window.location.replace(isSuperAdmin ? "/superadmin/login" : "/login");
// };

// const handleToken = (res) => {
//   localStorage.setItem("jwtRefreshToken", res.data.data.refreshToken);
//   localStorage.setItem("awtToken", res.data.data.token);
// };

// export const mutationCache = new MutationCache({
//   onError: async (error, variables, context, mutation) => {
//     if (error.response.data.status === 401) {
//       try {
//         const res = await silentRenewalAPI();

//         if (res.status === 200) {
//           handleToken(res);

//           mutation.execute();

//           // enqueueSnackbar('Token has been updated  mutation!', {
//           // 	variant: 'success',
//           // })
//         }
//       } catch (error) {
//         if (error?.response?.data?.status === 401) handleLogout();
//       }
//     }
//   },
// });

// export const queryCache = new QueryCache({
//   onError: async (error, query) => {
//     if (error.response.data.status === 401) {
//       try {
//         const res = await silentRenewalAPI();

//         if (res.status === 200) {
//           handleToken(res);

//           query.fetch();

//           // enqueueSnackbar('Token has been updated !', {
//           // 	variant: 'success',
//           // })
//         }
//       } catch (error) {
//         if (error?.response?.data?.status === 401) handleLogout();
//       }
//     }
//   },
// });

export async function setAuthToken(token) {
  console.log(token, 'token')
  const AUTHORIZATION = 'Authorization'

  const instances = await [axios, ApiInstance]

  instances.forEach(item => {
    item.defaults.headers.common[AUTHORIZATION] = `Bearer ${token}`
  })

  instances.forEach(item => {
    if (item === 'instance') {
      item.interceptors.request.use(
        config => {
          return config
        },
        error => {
          return Promise.reject(error)
        },
      )
      item.interceptors.response.use(
        config => {
          return config
        },
        error => {
          return Promise.reject(error)
        },
      )
    }
  })
}
