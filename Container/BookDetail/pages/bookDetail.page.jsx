import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

// import RecommendationSection from '../Section/RecommendationSection'
import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import VoteSection from '../Section/VoteSection'
import { useNovelDetailsService } from '../services/NovelDetails.service'
import RecommendationSection from 'Container/RecommendationSlider/sliders/RecommendationSlider'

const BookDetail = () => {
  const { query } = useRouter()
  const { error } = useNovelDetailsService({ bookId: query?.bookId })

  if (error) return <div>Something went wrong!</div>

  return (
    <RootContainer>
      <MainContainer>
        <DetailsSection />
        <RecommendationSection />
        <VoteSection />
        <ReviewSection />
        <CommentSection />
      </MainContainer>
    </RootContainer>
  )
}

export default BookDetail
