import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import RecommendationSection from '../Section/RecommendationSection'
import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import useBookDetail from '../api/bookDetail.hook'

const BookDetail = () => {
  const router = useRouter()
  const { BookDetail, isLoading, isError, error } = useBookDetail(router.query.bookId)

  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <RootContainer>
      <MainContainer>
        <DetailsSection item={BookDetail} />
        <RecommendationSection />
        <ReviewSection  item={BookDetail} />
        <CommentSection item={BookDetail}/>

        {/* <ReviewSectionCom /> */}
      </MainContainer>
    </RootContainer>
  )
}

export default BookDetail
