import React, { useEffect } from "react";
import { genreName } from "../../hooks/useGenreButton";
import { css } from "@emotion/react";
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
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
const Explore = () => {
  const { data, isLoading, isError, error, isFetching } = useExplore();

  if (isLoading) {
    return <h1>LOADING ... </h1>;
  }

  if (isError) {
    return <h1>{error?.message}</h1>;
  }

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
                  <Link href={`/book/${card.id}`}>
                    <CardsSubWrapper>
                      <Cards>
                        <CardLeftSideContent>
                          <Img src={card.img} />
                        </CardLeftSideContent>
                        <CardRightSideContent>
                          <ButtonContainer>
                            {card.hashtag.map((hash) => (
                              <Typography
                                style={{ color: "#673CCC", fontSize: "13px" }}
                              >
                                {hash}
                              </Typography>
                            ))}
                          </ButtonContainer>
                          <Title>{card.title}</Title>
                          <ParagraphText>{card.paragraph}</ParagraphText>
                        </CardRightSideContent>
                      </Cards>
                    </CardsSubWrapper>
                  </Link>
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

export default Explore;
