import { Toolbar } from '@mui/material'
import React from 'react'
import { BodyContainer, MainContainer, RootContainer } from '../Common/Common.styles'
import BannerSection from '../Section/BannerSection'
import CategorySection from '../Section/CategorySection'
import ContentSection from '../Section/ContentSection'
import FilterSection from '../Section/FilterSection'
import TabSection from '../Section/TabSection'

const ExplorePage = () => {
  return (
    <RootContainer>
      <Toolbar />
      <BannerSection text="Explore" />
      <TabSection />
      <MainContainer>
        <CategorySection />
        <BodyContainer>
          <FilterSection />
          <ContentSection />
        </BodyContainer>
      </MainContainer>
    </RootContainer>
  )
}

export default ExplorePage
