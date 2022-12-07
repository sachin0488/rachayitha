import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import Footer from '../LandingPageWithoutLogin/Components/Footer/Footer'
import { MainContainer } from '../LandingPageWithoutLogin/LandingPageWithoutLoginStyle'
import NewArrivalCardMiniComp from '../LandingPageWithoutLogin/Components/NewArrivalsCards/NewArrivalCardMiniComp'
import NewArrivalsCards from '../LandingPageWithoutLogin/Components/NewArrivalsCards/NewArrivalsCards'
import PotentialStarletCards from '../LandingPageWithoutLogin/Components/PotentialStarletCards/PotentialStarletCards'
import WeeklyFeaturedCards from '../LandingPageWithoutLogin/Components/WeeklyFeaturedCards/WeeklyFeaturedCards'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import { SubMainContainer } from './LandingPageAfterLoginStyled'
import TopCollection from './TopCollection/TopCollection'
import { SectionWrapper, WeeklyCardSectionWrapper } from './TopCollection/TopCollectionStyle'
import NavLayout from '../../Components/Layouts/NavLayout'

const LandingPageAfterLogin = () => {
  return (
    <>
      <>
        <MainContainer>
          <Hero />

          <SubMainContainer>
            <TopCollection />

            <WeeklyCardSectionWrapper>
              <WeeklyFeaturedCards />
            </WeeklyCardSectionWrapper>

            <SectionWrapper>
              <PotentialStarletCards />
            </SectionWrapper>

            <SectionWrapper>
              <NewArrivalsCards />
            </SectionWrapper>

            <SectionWrapper sx={{ margin: '-40px 0px 0px 0px' }}>
              <NewArrivalCardMiniComp />
            </SectionWrapper>
          </SubMainContainer>
        </MainContainer>
      </>
    </>
  )
}

export default LandingPageAfterLogin
