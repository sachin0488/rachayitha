import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  width: 100%;
  min-height: 520px;
  display: flex;

  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 157px;
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
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding: 15px 0px;
`;

const ImpSectionButton = styled(Button)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

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
