import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 790px;
  background: linear-gradient(
    180deg,
    rgba(102, 59, 203, 0.1) 0%,
    rgba(102, 59, 203, 0) 100%
  );
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

const HeroLeftSideSection = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 23px;
  padding: 0px 100px;
`;

const Heading = styled(Typography)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 55px;
  line-height: 64px;

  color: ${(props) => props.theme.palette.headingColor.main};
  max-width: 540px;
`;

const SubHeading = styled(Typography)`
  font-style: normal;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
`;
const ParagraphText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  color: black;
`;

const ExploreButton = styled.button`
  width: 160px;
  height: 41px;
  border: 1px solid #5624c1;
  border-radius: 20.5px;
  background-color: #5326c3;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const CreateButton = styled.button`
  width: 160px;
  height: 41px;
  border: 1px solid #5624c1;
  border-radius: 20.5px;
  background-color: #fdfcfe;
  color: ${(props) => props.theme.palette.primary.main};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`;

const HeroRightSideSection = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 15px;
  align-items: center;
  width: 55%;
  height: 100%;
  overflow: hidden;
`;

const BannerImgContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  align-items: flex-start;
  height: 100%;
  width: 215px;
`;

const ImgContainer = styled(Box)`
  width: 218px;
  height: 253px;
  box-shadow: 0rem 0.4rem 0.45rem 0rem rgba(0, 0, 30, 0.5);

  border-radius: 15px;
`;
const HeroStyle = () => {
  return {
    Wrapper,
    CreateButton,
    ExploreButton,
    ParagraphText,
    SubHeading,
    Heading,
    HeroLeftSideSection,
    ButtonContainer,
    HeroRightSideSection,
    BannerImgContainer,
    ImgContainer,
  };
};

export default HeroStyle;
