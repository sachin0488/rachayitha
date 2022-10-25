import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import breakPoints from "../../../styles/mediaQuery/breakPoints";

const {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  laptopM,
  laptopS,
  desktop,
} = breakPoints();

const PotentialCardWrapper = styled(Box)`
  width: 100%;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;

  padding: 0px 107px;
`;
const SubWrapper = styled(Box)`
  @media ${laptopM} {
    padding: 0px 0px 0 122px;
  }
  @media ${laptopS} {
    padding: 0px 0px 0 93px;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 10px;
  width: 95%;
  height: 100%;
`;
const PotentialStarletContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 10px;
  align-items: center;
  width: 100%;
  height: 464px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const PotentialStarletContentCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  &:hover {
    border-color: #582ac5;
    transform: scale(1.03, 1.03);
    transition-duration: 0.7s;
  }
  gap: 10px;
  padding: 10px 19px;
  min-width: 410px;
  height: 95%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #ffffff;
`;
const AlignRatingAndFantasySection = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const RatingAndFantasySection = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 70%;
  gap: 90px;
  align-items: flex-start;
  padding: 0px 5px 0px 5px;
`;
const Fantasy = styled(Box)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #8d8e99;
`;

const Rating = styled(Box)`
  color: #5225c2;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
`;

const Heading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: #18144a;
`;
const StoryHeading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  color: #000000;

  width: 100%;
  padding: 0px 6px 10px 6px;
`;
const Img = styled(Box)`
  border-radius: 10px;
  width: 100%;
  height: 330px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;
const LeftSideImgContent = styled(Box)`
  border-radius: 10px;
  width: 221px;
  height: 219px;
`;

const RightSideImgContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
// const AddIcon = styled(Box)`
//   background: #ffffff;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
//   position: absolute;
//   top: 8px;
//   right: 7px;
//   border-radius: 999px;
//   z-index: 10;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const PotentialStartletCardsStyle = () => {
  return {
    PotentialCardWrapper,
    PotentialStarletContent,
    Heading,
    SubWrapper,
    PotentialStarletContentCard,
    RatingAndFantasySection,
    StoryHeading,
    Img,
    Fantasy,
    Rating,
    RightSideImgContent,
    LeftSideImgContent,
    AlignRatingAndFantasySection,
  };
};

export default PotentialStartletCardsStyle;
