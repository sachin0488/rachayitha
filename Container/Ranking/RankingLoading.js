import React from "react";

import {
  Wrapper,
  SubWrapper,
  ExploreBannerImageContainer,
  GenreMenuBar,
  RightSideGenreMenuBar,
  LeftSideGenreMenuBar,
  GenreTitle,
  FilterText,
  ContentType,
  ContentTypeText,
  ExploreBannerContainer,
  MenuItem,
  MainContentWrapper,
  GenreAccordionContainer,
  ShowQueryContainer,
  SortByHeading,
  HorizontalRule,
  Img,
  Title,
  ParagraphText,
  ButtonContainer,
  Button,
  MaleAndFemaleLeadContainer,
  GenderBox,
} from "../Explore/ExploreStyle";
import NovelImg from "../../public/novel.svg";
import PoemImg from "../../public/poem.svg";
import ShortImg from "../../public/shorts.svg";
import Image from "next/image";
import Link from "next/link";
import {
  ExploreBannerImg,
  Cards,
  CardsWrapper,
  LeftSideCardPart,
  RightSideCardPart,
  HashtagAndButtonSection,
  ButtonSection,
  ReadButton,
  AddButton,
  RatingContainer,
  RatingGenreAuthorContainer,
} from "./RankingStyle";
import Header from "../LandingPageAfterLogin/Header/Header";
import { AiFillCaretDown, AiOutlineLike } from "react-icons/ai";
import SimpleAccordion from "../Explore/AccordionComp";
import { Skeleton, Typography } from "@mui/material";
import { useRanking } from "./api/ranking.hook";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import { IoIosAddCircle } from "react-icons/io";
const RankingLoading = () => {
  const { data, isLoading, isError, error, isFetching } = useRanking();
  return (
    <>
      <Wrapper>
        <Header />
        <SubWrapper>
          <ExploreBannerContainer>
            <ExploreBannerImageContainer>
              <ExploreBannerImg src="https://res.cloudinary.com/dk6twrko6/image/upload/v1667386473/Rectangle_219_1_ylt2yp.png" />
              <h1 style={{ position: "absolute", color: "#2F2D5C" }}>
                Hot Ranking
              </h1>
            </ExploreBannerImageContainer>
            <GenreMenuBar>
              <LeftSideGenreMenuBar>
                <Link href="/ranking/novel">
                  <MenuItem>
                    <Image src={NovelImg} />
                    <GenreTitle>Novels</GenreTitle>
                  </MenuItem>
                </Link>

                <Link href="/ranking/short">
                  <MenuItem>
                    <Image src={ShortImg} />
                    <GenreTitle>Shorts</GenreTitle>
                  </MenuItem>
                </Link>
                <Link href="/ranking/poem">
                  <MenuItem>
                    <Image src={PoemImg} />
                    <GenreTitle>Poems</GenreTitle>
                  </MenuItem>
                </Link>
              </LeftSideGenreMenuBar>
              <RightSideGenreMenuBar>
                <FilterText>Filter by</FilterText>
                <ContentType>
                  <ContentTypeText>Content Type</ContentTypeText>
                  <AiFillCaretDown />
                </ContentType>
                <ContentType>
                  <ContentTypeText>Content Status</ContentTypeText>
                  <AiFillCaretDown />
                </ContentType>
              </RightSideGenreMenuBar>
            </GenreMenuBar>
          </ExploreBannerContainer>
          <MainContentWrapper>
            <GenreAccordionContainer>
              <MaleAndFemaleLeadContainer>
                <GenderBox>MALE LEAD</GenderBox>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "13px",
                    "@media (min-width: 1100px)": {
                      fontSize: "15px",
                      fontWeight: "300",
                    },
                    "@media (min-width: 1500px)": { fontSize: "15px" },
                  }}
                >
                  FEMALE LEAD
                </Typography>
              </MaleAndFemaleLeadContainer>
              <SimpleAccordion text="Novel Ranking" />
              <SimpleAccordion text="Poems Ranking" />
              <SimpleAccordion text="Shorts Ranking" />
            </GenreAccordionContainer>
            <ShowQueryContainer>
              <SortByHeading>Power Ranking</SortByHeading>
              <HorizontalRule style={{ width: "100%" }} />
              <CardsWrapper>
                {" "}
                {data?.map((card) => (
                  <Cards>
                    <LeftSideCardPart>
                      <Skeleton sx={{ width: "100%", height: "120%" }} />
                    </LeftSideCardPart>
                    <RightSideCardPart>
                      <HashtagAndButtonSection>
                        <ButtonContainer>
                          {card.hashtag.map((hash) => (
                            <Skeleton sx={{ fontSize: "17px", width: "17%" }} />
                          ))}
                        </ButtonContainer>
                        <ButtonSection>
                          <Skeleton
                            sx={{
                              fontSize: "30px",
                              width: "30%",
                              borderRadius: "19px",
                            }}
                          />

                          <Skeleton
                            sx={{
                              fontSize: "30px",
                              width: "30%",
                              borderRadius: "19px",
                            }}
                          />
                        </ButtonSection>
                      </HashtagAndButtonSection>
                      <Skeleton
                        sx={{
                          fontSize: "23px",
                          width: "30%",
                        }}
                      />
                      <Skeleton
                        sx={{
                          fontSize: "15px",
                          width: "70%",
                        }}
                      />
                      <RatingGenreAuthorContainer>
                        <RatingContainer width="5%">
                          <Skeleton
                            sx={{
                              fontSize: "15px",
                              width: "100%",
                            }}
                          />
                        </RatingContainer>
                        <Skeleton
                          sx={{
                            fontSize: "15px",
                            width: "10%",
                          }}
                        />
                        <Skeleton
                          sx={{
                            fontSize: "15px",
                            width: "10%",
                          }}
                        />
                      </RatingGenreAuthorContainer>
                    </RightSideCardPart>
                  </Cards>
                ))}
              </CardsWrapper>
            </ShowQueryContainer>
          </MainContentWrapper>
        </SubWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default RankingLoading;
