import { useRouter } from 'next/router'
import React from 'react'
import useBookDetail, { useAddToLibraryAPI } from '../api/bookDetail.hook'
import { Wrapper, SubWrapper } from '../Common/BookDetailStyle'
import ReviewSectionCom from '../Section/ReviewSectionCom'
import UpperSection from '../Section/UpperSection'
import RecommendationSection from '../Section/RecommendationSection'

const BookDetail = () => {
  const router = useRouter()
  const { data, isLoading, isError, error, isFetching } = useBookDetail(router.query.book)

  if (isLoading) {
    return <h1>LOADING ... </h1>
  }

  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <>
      {data?.data?.data.map((item, index) => (
        <Wrapper key={index}>
          <SubWrapper>
            <UpperSection item={item} />

            <RecommendationSection />

            <ReviewSectionCom />
          </SubWrapper>
        </Wrapper>
      ))}
    </>
  )
}

export default BookDetail
