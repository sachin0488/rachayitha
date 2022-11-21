import React from 'react'
import {
  Wrapper,
  ExploreBannerContainer,
  SubWrapper,
  ExploreBannerImageContainer,
  MainContentWrapper,
  GenreAccordionContainer,
  ShowQueryContainer,
  SortByHeading,
  HorizontalRule,
  CardsWrapper,
  ExploreBannerHeading,
  ExploreBannerImg,
  SortByWrapper,
} from './ExploreStyle'
import { useExplore } from './api/explore.hook'
import Loading from './Loading'
import ExploreCard from './ExploreCard'
import RankingAccordionContainer, { ExploreTextAndNestedRoute } from '../Ranking/RankingAccordionContainer'
import SubGenreButton from '../../Components/SubGenreButton/SubGenreButton'
import { ExploreLinkList } from '../Ranking/RankingLinksContainer'
import GenreMenuBarComp from '../../Components/GenreMenuBarComp/GenreMenuBarComp'
import MuiAccordion from '../../Components/MuiAccordion/MuiAccordion'
import { Typography } from '@mui/material'
import GenreButtonLIstMobile from '../../Components/GenreButtonList/GenreButtonLIstMobile'
import NavLayout from '../../Components/Layouts/NavLayout'
const Explore = () => {
  const { data, isLoading, isError, error } = useExplore()
  const bannerImg = 'https://res.cloudinary.com/dk6twrko6/image/upload/v1667379183/Rectangle_219_ulz5td.png'
  if (isError) {
    return <h1>{error?.message}</h1>
  }

  return (
    <NavLayout header={true} footer={true}>
      <Wrapper>
        <SubWrapper>
          <ExploreBannerContainer>
            <ExploreBannerImageContainer>
              <ExploreBannerImg src={bannerImg} alt="bannerImg" />
              <ExploreBannerHeading>Explore</ExploreBannerHeading>
            </ExploreBannerImageContainer>
            <GenreMenuBarComp sectionName={ExploreLinkList} />
          </ExploreBannerContainer>
          <MainContentWrapper>
            <GenreAccordionContainer>
              {ExploreTextAndNestedRoute.map(comp => (
                <RankingAccordionContainer
                  text={comp.text}
                  explore={comp.explore}
                  section={comp.section}
                  high={comp.high}
                />
              ))}
            </GenreAccordionContainer>
            <ShowQueryContainer>
              <SortByWrapper>
                <MuiAccordion text="Sort By" high="300px">
                  {ExploreTextAndNestedRoute.map(comp => (
                    <>
                      <Typography marginBottom="15px" fontSize="20px">
                        {comp.text}
                      </Typography>
                      <GenreButtonLIstMobile explore={comp.explore} section={comp.section} />
                    </>
                  ))}
                </MuiAccordion>
              </SortByWrapper>
              <SortByHeading>Sort By</SortByHeading>
              <HorizontalRule />
              <SubGenreButton sectionName="novel" />

              <CardsWrapper>
                {data?.map((card, index) =>
                  isLoading ? <Loading card={card} index={index} /> : <ExploreCard card={card} index={index} />,
                )}
              </CardsWrapper>
            </ShowQueryContainer>
          </MainContentWrapper>
        </SubWrapper>
      </Wrapper>
    </NavLayout>
  )
}

export default Explore
