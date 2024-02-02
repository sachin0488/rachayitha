import React from 'react'
import { useRouter } from 'next/router'

import { RootContainer, MainContainer } from '../common/styles'

import DetailsSection from '../Section/DetailsSection'
import ReviewSection from '../Section/ReviewSection'
import CommentSection from '../Section/CommentSection'

import VoteSection from '../Section/VoteSection'
import { useContentDetailsService } from '../services/ContentDetails.service'
import RecommendationSection from 'modules/RecommendationSlider/sliders/RecommendationSlider'
import Head from 'next/head'

const ContentDetail = ({ contentType, contentId, slug }) => {
  const { error, Data } = useContentDetailsService({ contentId: contentId, slug: slug, contentType })

  if (error) return <div>Something went wrong!</div>

  return (
    <RootContainer>
      <MainContainer>
        <Head>
          <title>Rachayitha | {Data?.contentName}</title>
          <meta
            name="keywords"
            content={['Rachayitha', 'rachayitha', ...(Data?.tags || []), ...(Data?.category?.map(item => item?.name) || [])].join()}
          />
          <meta name="author" content={Data?.authorName} />
        </Head>
        <DetailsSection contentType={contentType} contentId={contentId} slug={slug} />
        <RecommendationSection contentType={contentType} />
        <VoteSection contentType={contentType} contentId={contentId} slug={slug} />
        <ReviewSection contentType={contentType} contentId={contentId} slug={slug} />
        <CommentSection contentType={contentType} contentId={contentId} />
      </MainContainer>
    </RootContainer>
  )
}

export default ContentDetail
