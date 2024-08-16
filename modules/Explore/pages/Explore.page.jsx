import React from 'react'
import { Toolbar, useMediaQuery } from '@mui/material'
import { BodyContainer, MainContainer, RootContainer } from 'modules/Explore/common/styles'

import BannerSection from '../section/BannerSection'
import CategorySection from '../section/CategorySection'
import ContentSection from '../section/ContentSection'
import FilterSection from '../section/FilterSection'
import TabSection from '../section/TabSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}