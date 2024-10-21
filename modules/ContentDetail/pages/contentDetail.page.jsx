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
import { useTranslation } from 'react-i18next'

const ContentDetail = ({ contentType, contentId, slug, serverData }) => {
  const { t } = useTranslation()
  const { error, Data } = useContentDetailsService({ contentId: contentId, slug: slug, contentType, serverData })

  if (error) return <div>{t('somethingWrong')}</div>

  return (
    <RootContainer>
      <MainContainer>
        <Head>
          <title>
            {t('Rachayitha')} | {Data?.contentName}
          </title>
          <meta
            name="keywords"
            content={['Rachayitha', 'rachayitha', ...(Data?.tags || []), ...(Data?.category?.map(item => item?.name) || [])].join()}
          />
          <meta name="author" content={Data?.authorName} />
          <meta name="title" content={Data?.contentName} />
          <meta name="description" content={Data?.synopsis} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.rachayitha.com/" />
          <meta property="og:title" content={Data?.contentName} />
          <meta property="og:description" content={Data?.synopsis} />
          <meta property="og:image" content={Data?.coverImage} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://www.rachayitha.com/${contentType}/${contentId}/${slug}`} />
          <meta property="twitter:title" content={Data?.contentName} />
          <meta property="twitter:description" content={Data?.synopsis} />
          <meta property="twitter:image" content={Data?.coverImage} />
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
