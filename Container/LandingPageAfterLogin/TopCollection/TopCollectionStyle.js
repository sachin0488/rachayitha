import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import {
  laptop,
  laptopM,
  laptopS,
  mobileL,
  mobileS,
  tablet,
  tabletS,
} from "../../../styles/mediaQuery/breakPoints";

const TopCollectionWrapper = styled(Box)`
  width: 100%;
  height: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 90px 50px 30px 50px;
  @media ${laptopS} {
    padding: 90px 110px 30px 110px;
  }
  gap: 22px;
`;

const SectionWrapper = styled(Box)`
  width: 100%;

  /* padding: 40px 0px; */
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
    margin-bottom: 40px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
    margin-bottom: 40px;
  }
  @media ${tabletS} {
    padding: 0px 30px 0px 60px;
    height: 520px;
    margin-bottom: 40px;
  }
  @media ${tablet} {
    padding: 0px 30px 0px 70px;
  }
  @media ${laptop} {
    padding: 0px 30px 0px 70px;
  }
  @media ${laptopS} {
    padding: 0px 20px 0 50px;
  }
  @media ${laptopM} {
    padding: 0px 40px;
  }
`;

const TopCollectionList = styled(Box)`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CollectionName = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  padding: 20px 0px;
  color: ${(props) => props.theme.palette.primary.main};
`;

const IndividualCollection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 33%;
  height: 100%;
`;

const Heading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
`;
const HighlightedHeading = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
  color: ${(props) => props.theme.palette.primary.main};
`;
const IndividualCard = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 18px;
  @media ${laptopS} {
    gap: 48px;
  }
  width: 100%;
  min-height: 140px;

  &:hover {
    border: 2px solid #562ac5;
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }
`;

const IndividualCardLeftSection = styled(Box)`
  width: 30%;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IndividualCardRightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 0px 5px;
  justify-content: center;
  gap: 4px;
`;

const Title = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`;
const Fantasy = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  color: #888994;
`;
const Rating = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: #148544;
`;

const TopCollectionStyle = () => {
  return {
    TopCollectionWrapper,
    CollectionName,
    TopCollectionList,
    IndividualCollection,
    Heading,
    HighlightedHeading,
    Rating,
    Title,
    Fantasy,
    IndividualCard,
    IndividualCardLeftSection,
    IndividualCardRightSection,
    SectionWrapper,
  };
};

export default TopCollectionStyle;
