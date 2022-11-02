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
import { Typography } from "@mui/material";
import { useRanking } from "./api/ranking.hook";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import { IoIosAddCircle } from "react-icons/io";

const ItemDetails = () => {
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
                      <Img src={card.img} />
                    </LeftSideCardPart>
                    <RightSideCardPart>
                      <HashtagAndButtonSection>
                        <ButtonContainer>
                          {card.hashtag.map((hash) => (
                            <Typography style={{ color: "#673CCC" }}>
                              {hash}
                            </Typography>
                          ))}
                        </ButtonContainer>
                        <ButtonSection>
                          <AddButton>
                            <IoIosAddCircle size={26} color="#069CF6" />
                            <Typography color="#069CF6" fontWeight="600">
                              Add
                            </Typography>
                          </AddButton>
                          <ReadButton>Read</ReadButton>
                        </ButtonSection>
                      </HashtagAndButtonSection>
                      <Title>{card.title}</Title>
                      <ParagraphText>{card.paragraph}</ParagraphText>
                      <RatingGenreAuthorContainer>
                        <RatingContainer>
                          <AiOutlineLike color="black" />
                          <Typography color="black">{card.rating}</Typography>
                        </RatingContainer>
                        <Typography color="black">{card.genre}</Typography>
                        <Typography color="black">{card.author}</Typography>
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

export default ItemDetails;
