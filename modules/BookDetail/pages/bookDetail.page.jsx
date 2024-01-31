import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import VoteSection from '../Section/VoteSection'
import { useBookDetailsService } from '../services/BookDetails.service'
import RecommendationSection from 'modules/RecommendationSlider/sliders/RecommendationSlider'
import Head from 'next/head'

const BookDetail = () => {
  const { query } = useRouter()
  const { error, Data } = useBookDetailsService({ bookId: query?.bookId, slug: query?.slug })

  if (error) return <div>Something went wrong!</div>

  return (
    <RootContainer>
      <MainContainer>
        <Head>
          <title>Rachayitha | {Data?.bookName}</title>
          <meta
            name="keywords"
            content={['Rachayitha', 'rachayitha', ...(Data?.tags || []), ...(Data?.category?.map(item => item?.name) || [])].join()}
          />
          <meta name="author" content={Data?.authorName} />
        </Head>
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
