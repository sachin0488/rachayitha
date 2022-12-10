import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchTopCollection } from './topCollection.api'

export const useTopCollection = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(['use-top-collection'], fetchTopCollection)
  return { data: data?.data, isLoading, isError, error, isFetching }
}
