import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopS,
  laptopM,
  laptopL,
  desktop,
  tabletS,
} from "../../../styles/mediaQuery/breakPoints";

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 520px;
  display: flex;

  align-items: start;
  justify-content: space-between;
  gap: 20px;
  @media ${mobileS} {
    padding: 40px 25px;
    flex-direction: column;
    align-items: center;
  }
  @media ${mobileL} {
    padding: 70px 50px;
  }
  @media ${tabletS} {
    padding: 50px 30px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media ${tablet} {
    padding: 70px 40px;
  }
  @media ${laptop} {
    padding: 80px 107px;
  }
  @media ${laptopS} {
    padding: 100px 157px;
  }
  @media ${laptopM} {
    padding: 100px 157px;
  }

  background-color: #f6f3ff;
`;

const ImpSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 13px;
`;
const Heading = styled(Typography)`
  font-family: "Roboto";
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding: 15px 0px;
  color: black;
`;

const ImpSectionButton = styled(Button)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: none;

  @media ${tabletS} {
    display: block;
  }

  color: #000000;
`;

const SocialMediaIconContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
`;

const FooterStyle = () => {
  return {
    Wrapper,
    ImpSectionButton,
    ImpSection,
    Heading,
    SocialMediaIconContainer,
  };
};

export default FooterStyle;
