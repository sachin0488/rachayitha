import React from "react";
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
} from "./ExploreStyle";
import { useExplore } from "./api/explore.hook";
import Header from "../LandingPageAfterLogin/Header/Header";
import ExploreBannerImg from "../../public/exploreBanner.svg";
import Image from "next/image";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import HeaderStyle from "../LandingPageAfterLogin/Header/HeaderStyle";
import NovelImg from "../../public/novel.svg";
import PoemImg from "../../public/poem.svg";
import ShortImg from "../../public/shorts.svg";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import SimpleAccordion from "./AccordionComp";
import GenreButton from "../../Components/GenreButton/GenreButton";
import { Typography } from "@mui/material";
const Explore = () => {
  const { data, isLoading, isError, error, isFetching } = useExplore();
  const { MenuItem } = HeaderStyle();
  return (
    <>
      <Wrapper>
        <Header />
        <SubWrapper>
          <ExploreBannerContainer>
            <ExploreBannerImageContainer>
              <Image src={ExploreBannerImg} objectFit="cover" />
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
                <Typography color="black">FEMALE LEAD</Typography>
              </MaleAndFemaleLeadContainer>
              <SimpleAccordion Text="Genre of Novels" />
              <SimpleAccordion Text="Genre of Poems" />
              <SimpleAccordion Text="Genre of Shorts" />
            </GenreAccordionContainer>
            <ShowQueryContainer>
              <SortByHeading>Sort By</SortByHeading>
              <HorizontalRule />
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
                    <Cards>
                      <CardLeftSideContent>
                        <Img src={card.img} />
                      </CardLeftSideContent>
                      <CardRightSideContent>
                        {/* <ButtonContainer>
                          {card.hashtag((hash) => (
                            <h1>{hash}</h1>
                          ))}
                        </ButtonContainer> */}
                        <Title>{card.title}</Title>
                        <ParagraphText>{card.paragraph}</ParagraphText>
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

export default Explore;
