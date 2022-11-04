import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper, SubWrapper } from "../Explore/ExploreStyle";
import Header from "../LandingPageAfterLogin/Header/Header";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import { GrFormView } from "react-icons/gr";
import Chapter from "../../public/chapter.png";
import useBookDetail from "./api/bookDetail.hook";
import BookAboutContent from "./BookAboutContent";
import BookTableOfContent from "./BookTableOfContent";
import {
  BookDetailCard,
  BookDetailCardLeftSection,
  BookDetailCardRightSection,
  TitleFantasyViewSection,
  Title,
  FantasyAndViewSection,
  Text,
  Img,
  AuthorText,
  ReadButton,
  AddToLibraryButton,
  RecommendedCardsHeading,
} from "./BookDetailStyle";
import Image from "next/image";
import { IoIosAddCircle } from "react-icons/io";
import RatingStar from "../../Components/RatingComp/Rating";
import { Box, Typography } from "@mui/material";
import MuiTab from "./MuiTab";
import RecommendedCards from "./RecommendedCards";
import ReviewSectionCom from "./ReviewSectionCom";

const BookDetail = () => {
  const router = useRouter();
  const { data, isLoading, isError, error, isFetching } = useBookDetail(
    router.query.book
  );

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
          <BookDetailCard>
            <BookDetailCardLeftSection>
              <Img src={data?.img} />
            </BookDetailCardLeftSection>
            <BookDetailCardRightSection>
              <TitleFantasyViewSection style={{ gap: "14px" }}>
                <Title>{data.title}</Title>
                <FantasyAndViewSection style={{ gap: "15px" }}>
                  <Text>Eastern Fantasy</Text>
                  <Text>
                    <Image src={Chapter} /> Chapters
                  </Text>
                  <Text>
                    <GrFormView /> 2.1 M Views
                  </Text>
                </FantasyAndViewSection>
              </TitleFantasyViewSection>
              <TitleFantasyViewSection style={{ gap: "18px" }}>
                <FantasyAndViewSection style={{ gap: "15px" }}>
                  <AuthorText style={{ color: "black" }}>Author :</AuthorText>
                  <AuthorText style={{ color: "#5a2cc6" }}>
                    Fruit of Chaos
                  </AuthorText>
                </FantasyAndViewSection>
                <FantasyAndViewSection style={{ gap: "17px" }}>
                  <RatingStar value="3" size="large" />
                  <Typography color="#FC9404" fontSize="21px" fontWeight="400">
                    4.0
                  </Typography>
                  <Typography color="#656565" fontSize="11px" fontWeight="200">
                    (300 rating)
                  </Typography>
                </FantasyAndViewSection>
              </TitleFantasyViewSection>

              <FantasyAndViewSection style={{ gap: "16px" }}>
                <ReadButton>READ</ReadButton>
                <AddToLibraryButton color="#5b2ec7">
                  <IoIosAddCircle size="30" />
                  ADD TO LIBRARY
                </AddToLibraryButton>
              </FantasyAndViewSection>
              <Box style={{ width: "100%", height: "330px" }}>
                <MuiTab
                  label1="About"
                  label2="Table of Content"
                  comp1={<BookAboutContent />}
                  comp2={<BookTableOfContent />}
                />
              </Box>
            </BookDetailCardRightSection>
          </BookDetailCard>
        </SubWrapper>
        <RecommendedCards />
        <SubWrapper>
          <FantasyAndViewSection gap="15px">
            <RecommendedCardsHeading>139 Reviews</RecommendedCardsHeading>
            <RatingStar value="4" />
            <Typography sx={{ color: "black" }}>4.0</Typography>
          </FantasyAndViewSection>
          <ReviewSectionCom />
        </SubWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default BookDetail;
