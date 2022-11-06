import { Box, Skeleton, Typography } from "@mui/material";
import { genreName } from "../../hooks/useGenreButton";
import {
  Wrapper,
  ExploreBannerContainer,
  SubWrapper,
  ExploreBannerImageContainer,
  GenreMenuBar,
  RightSideGenreMenuBar,
  LeftSideGenreMenuBar,
  GenreTitle,
  FilterText,
  ContentType,
  ContentTypeText,
  MainContentWrapper,
  GenreAccordionContainer,
  ShowQueryContainer,
  SortByHeading,
  HorizontalRule,
  Cards,
  CardsSubWrapper,
  CardsWrapper,
  CardLeftSideContent,
  CardRightSideContent,
  Img,
  Title,
  ParagraphText,
  ButtonContainer,
  Button,
  MaleAndFemaleLeadContainer,
  GenderBox,
  ExploreBannerImg,
  MenuItem,
} from "./ExploreStyle";
import React from "react";
import { useExplore } from "./api/explore.hook";

import Header from "../LandingPageAfterLogin/Header/Header";
import ExploreBannerImgs from "../../public/exploreBanner.svg";
import Image from "next/image";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";

import NovelImg from "../../public/novel.svg";
import PoemImg from "../../public/poem.svg";
import ShortImg from "../../public/shorts.svg";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import SimpleAccordion from "./AccordionComp";
import GenreButton from "../../Components/GenreButton/GenreButton";

import { useRouter } from "next/router";

const Loading = () => {
  const { data, isLoading, isError, error, isFetching } = useExplore();
  return (
    <>
      <Wrapper>
        <Header />
        <SubWrapper>
          <ExploreBannerContainer>
            <ExploreBannerImageContainer>
              <ExploreBannerImg src="https://res.cloudinary.com/dk6twrko6/image/upload/v1667379183/Rectangle_219_ulz5td.png" />
              <h1 style={{ position: "absolute", color: "#2F2D5C" }}>
                Explore
              </h1>
            </ExploreBannerImageContainer>
            <GenreMenuBar>
              <LeftSideGenreMenuBar>
                <Link href="/explore/novel">
                  <MenuItem>
                    <Image src={NovelImg} />
                    <GenreTitle>Novels</GenreTitle>
                  </MenuItem>
                </Link>

                <Link href="/explore/short">
                  <MenuItem>
                    <Image src={ShortImg} />
                    <GenreTitle>Shorts</GenreTitle>
                  </MenuItem>
                </Link>
                <Link href="/explore/poem">
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
              <SimpleAccordion text="Genre of Novels" high="450px" />
              <SimpleAccordion text="Genre of Poems" high="450px" />
              <SimpleAccordion text="Genre of Shorts" high="450px" />
            </GenreAccordionContainer>
            <ShowQueryContainer>
              <SortByHeading>Sort By</SortByHeading>
              <HorizontalRule style={{ width: "80%" }} />
              <ButtonContainer>
                {genreName?.map((button) => (
                  <Button style={{ color: "black" }}>
                    {button.buttonName}
                  </Button>
                ))}
              </ButtonContainer>
              <CardsWrapper>
                {data?.map((card) => (
                  <CardsSubWrapper>
                    <Cards style={{ width: "100%" }}>
                      <CardLeftSideContent>
                        <Skeleton sx={{ width: "100%", height: "120%" }} />
                      </CardLeftSideContent>
                      <CardRightSideContent>
                        <ButtonContainer>
                          {card.hashtag.map((hash) => (
                            <Skeleton sx={{ fontSize: "16px", width: "30%" }} />
                          ))}
                        </ButtonContainer>
                        <Skeleton sx={{ fontSize: "19px", width: "60%" }} />
                        <Skeleton
                          sx={{
                            fontSize: "19px",
                            width: "70%",
                            height: "220px",
                          }}
                        />
                      </CardRightSideContent>
                    </Cards>
                  </CardsSubWrapper>
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

export default Loading;
