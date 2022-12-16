import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { potentialStarletApi, fakePotentialStarletApi } from './potentialStarletCard.api'

const potentialStartletCardHook = ({ isReal }) => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['use-potential'],
    isReal ? potentialStarletApi : fakePotentialStarletApi,
  )
  return { data, isLoading, isError, error, isFetching }
}

export default potentialStartletCardHook
