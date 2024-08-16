import React from 'react'
import { Toolbar } from '@mui/material'
import { BodyContainer, MainContainer, RootContainer } from 'modules/Explore/common/styles'

import BannerSection from '../section/BannerSection'
import CategorySection from '../section/CategorySection'
import ContentSection from '../section/ContentSection'
import TabSection from '../section/TabSection'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}