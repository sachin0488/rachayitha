import { useQuery } from '@tanstack/react-query'
import { APIInstance } from 'services/global.service'
import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'

export const useVerifyEmailTokenService = ({ token }) => {
  const { enqueueSnackbar } = useSnackbar()
  const { push } = useRouter()

  const { isLoading, isSuccess, data, isError } = useQuery({
    queryFn: () => verifyEmailByTokenAPI({ token }),
    enabled: !token,
    onError: error => {
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      })
    },
  })

  return { isLoading, isSuccess, isError, isTokenVerified: !!data?.isTokenVerified, user: data?.user }
}

export const verifyEmailByTokenAPI = async data => {
  //   const response = await APIInstance({
  //     url: '',
  //     method: 'POST',
  //     data,
  //   })

  await new Promise(resolve => setTimeout(resolve, 2000))

  throw new Error('Something went wrong')

  return {
    // message: response?.data?.info?.visible?.message || '',
    // isMessageVisible: !!response?.data?.info?.visible?.message,
    // isTokenVerified: !!!response?.data?.info?.verified,
    // user: response?.data?.data || {},
    isTokenVerified: false,
    user: {
      fullName: 'Ayush Kumar Singh',
      email: 'ayush.xdr@gmail.com',
    },
  }
}
