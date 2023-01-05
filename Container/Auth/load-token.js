import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../../store'
import { selectUser, setUserLogout } from '../../store/slices/global/user.slice'
import { useFetchUserDataAPI } from './api/auth.hook'

const LoadToken = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const { isError, refetch, status } = useFetchUserDataAPI()

  useEffect(() => {
    dispatch({ type: LOGIN_SUCCESS })
  }, [dispatch])

  useEffect(() => {
    if (user.token) {
      refetch()
    }
  }, [refetch, user.token])

  useEffect(() => {
    if (isError && Number(status) === 401) {
      dispatch(setUserLogout())
    }
  }, [dispatch, isError, status])

  return <></>
}

export default LoadToken
