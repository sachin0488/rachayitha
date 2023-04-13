import { useQuery } from '@tanstack/react-query'
import { fetchExploreApi } from './explore.api'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addContentToFeaturedList,
  resetFeaturedList,
  selectFeaturedList,
  setFeaturedList,
  setFeaturedListPage,
} from '../slices/featured.slice'

const useExplore = ({ categoryId, contentType, sortBy }) => {
  const featured = useSelector(selectFeaturedList)
  const page = featured?.page
  const dispatch = useDispatch()

  const { isLoading, isError, error, isFetching, refetch } = useQuery(
    ['explore-list', categoryId, contentType, sortBy, page],
    () => fetchExploreApi({ categoryId, contentType, page, sortBy }),
    {
      enabled: false,
      onSuccess: ({ data }) => {
        const address = `${categoryId}/${contentType}/${sortBy}`
        if (featured?.address !== address || featured?.v === 0 || featured?.v === undefined) {
          dispatch(
            setFeaturedList({
              address: `${categoryId}/${contentType}/${sortBy}`,
              list: data?.resources?.data || [],
              page,
              next_page: data?.resources?.next_page,
              previous_page: data?.resources?.previous_page,
            }),
          )
        } else {
          dispatch(
            addContentToFeaturedList({
              page,
              address: `${categoryId}/${contentType}/${sortBy}`,
              list: data?.resources?.data || [],
              next_page: data?.resources?.next_page,
              previous_page: data?.resources?.previous_page,
            }),
          )
        }
      },
    },
  )

  useEffect(() => {
    if (categoryId && contentType && sortBy) refetch()
  }, [categoryId, contentType, sortBy, page, refetch])

  const handleNextPage = () => {
    if (!featured?.next_page) return
    dispatch(setFeaturedListPage(featured?.next_page))
  }

  const handlePrevPage = () => {
    if (!featured?.previous_page) return
    dispatch(setFeaturedListPage(featured?.previous_page))
  }

  return {
    ContentList: featured?.list || [],
    handleNextPage,
    handlePrevPage,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  }
}

export default useExplore
