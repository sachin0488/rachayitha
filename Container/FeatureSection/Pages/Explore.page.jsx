import { Toolbar, useMediaQuery } from '@mui/material'
import React from 'react'
import { BodyContainer, MainContainer, RootContainer } from '../common/common.styles'
import BannerSection from '../Section/BannerSection'
import CategorySection from '../Section/CategorySection'
import ContentSection from '../Section/ContentSection'
import FilterSection from '../Section/FilterSection'
import TabSection from '../Section/TabSection'

const ExplorePage = () => {
  const isTablet = useMediaQuery('(max-width: 800px)')

  return (
    <RootContainer>
      <Toolbar />
      <BannerSection text="Explore" />
      <TabSection />
      <MainContainer>
        {isTablet ? <FilterSection /> : <CategorySection />}
        <BodyContainer>
          {isTablet ? <CategorySection /> : <FilterSection />}

          <ContentSection />
        </BodyContainer>
      </MainContainer>
    </RootContainer>
  )
}

export default ExplorePage
