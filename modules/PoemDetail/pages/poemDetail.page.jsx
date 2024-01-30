import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import VoteSection from '../Section/VoteSection'
import { usePoemDetailsService } from '../services/PoemDetails.service'
import RecommendationSection from 'modules/RecommendationSlider/sliders/RecommendationSlider'

const PoemDetail = () => {
  const { query } = useRouter()
  const { error } = usePoemDetailsService({ poemId: query?.poemId, slug: query?.slug })

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

export default PoemDetail