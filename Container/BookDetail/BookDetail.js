import { useQuery } from "@tanstack/react-query";
import { styles } from "./MuiTabStyles";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper, SubWrapper } from "../Explore/ExploreStyle";
import Header from "../LandingPageAfterLogin/Header/Header";
import Footer from "../LandingPageWithoutLogin/Footer/Footer";
import { GrFormView } from "react-icons/gr";
import Chapter from "../../public/chapter.png";
import useBookDetail from "./api/bookDetail.hook";
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
  RatingSectionComp,
  StarText,
  Author,
  StyledTabs,
  StyledTab,
  TabSection,
  TabDisplayRoot,
  MuiTabWrapper,
} from "./BookDetailStyle";
import Image from "next/image";
import { IoIosAddCircle } from "react-icons/io";
import RatingStar from "../../Components/RatingComp/Rating";
import { Box, Typography } from "@mui/material";
import RecommendedCards from "./RecommendedCards";
import ReviewSectionCom from "./ReviewSectionCom";
import MuiTabs from "../../Components/MuiTabs/MuiTabs";
import { bookAboutAndContentDetailMuiTabList } from "../../hooks/useMuiTabComp";
import NavLayout from "../../Components/Layouts/NavLayout";

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
    <NavLayout>
      <Wrapper>
       <SubWrapper>
          <BookDetailCard>
            <BookDetailCardLeftSection>
              <Img src={data?.img} />
            </BookDetailCardLeftSection>
            <BookDetailCardRightSection>
              <TitleFantasyViewSection>
                <Title>{data.title}</Title>
                <FantasyAndViewSection>
                  <Text>Eastern Fantasy</Text>
                  <Text>
                    <Image src={Chapter} /> Chapters
                  </Text>
                  <Text>
                    <GrFormView /> 2.1 M Views
                  </Text>
                </FantasyAndViewSection>
              </TitleFantasyViewSection>
              <TitleFantasyViewSection>
                <FantasyAndViewSection>
                  <Author>Author :</Author>
                  <AuthorText>Fruit of Chaos</AuthorText>
                </FantasyAndViewSection>
                <FantasyAndViewSection>
                  <RatingStar value="3" size="large" />
                  <StarText>4.0</StarText>
                  <RatingSectionComp>(300 rating)</RatingSectionComp>
                </FantasyAndViewSection>
              </TitleFantasyViewSection>

              <FantasyAndViewSection>
                <ReadButton>READ</ReadButton>
                <AddToLibraryButton>
                  <IoIosAddCircle size="30" />
                  ADD TO LIBRARY
                </AddToLibraryButton>
              </FantasyAndViewSection>
              <MuiTabWrapper>
                <MuiTabs
                  muiTab={bookAboutAndContentDetailMuiTabList}
                  styles={styles}
                />
              </MuiTabWrapper>
            </BookDetailCardRightSection>
          </BookDetailCard>
        </SubWrapper>
        <RecommendedCards />
        <SubWrapper>
          <FantasyAndViewSection>
            <RecommendedCardsHeading>139 Reviews</RecommendedCardsHeading>
            <RatingStar value="4" />
            <Typography sx={{ color: "black" }}>4.0</Typography>
          </FantasyAndViewSection>
          <ReviewSectionCom />
        </SubWrapper>
     </Wrapper>
     </NavLayout>
    </>
  );
};

export default BookDetail;
