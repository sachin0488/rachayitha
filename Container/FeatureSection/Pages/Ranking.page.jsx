import { Toolbar } from '@mui/material'
import React from 'react'
import { BodyContainer, MainContainer, RootContainer } from '../Common/common.styles'
import BannerSection from '../Section/BannerSection'
import CategorySection from '../Section/CategorySection'
import ContentSection from '../Section/ContentSection'
import TabSection from '../Section/TabSection'

const RankingPage = () => {
  return (
    <RootContainer>
      <Toolbar />
      <BannerSection text="Ranking" />
      <TabSection />
      <MainContainer page="ranking">
        <CategorySection />
        <BodyContainer>
          <ContentSection ranking />
        </BodyContainer>
      </MainContainer>
    </RootContainer>
  )
}

export default RankingPage
