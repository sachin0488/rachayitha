import { useRouter } from 'next/router'
import React from 'react'
import useBookDetail, { useAddToLibraryAPI } from '../api/bookDetail.hook'
import { Wrapper, SubWrapper, RootContainer, MainContainer } from '../common/common.styles'
import ReviewSectionCom from '../Section/ReviewSectionCom'
import UpperSection from '../Section/UpperSection'
import RecommendationSection from '../Section/RecommendationSection'
import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

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
        <ReviewSection />
        <CommentSection />

        {/* <ReviewSectionCom /> */}
      </MainContainer>
    </RootContainer>
  )
}

export default BookDetail
