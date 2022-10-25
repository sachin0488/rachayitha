import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const RegisterWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`;

const LeftSideRegisterSubWrapper = styled(Box)`
  width: 63%;
  height: 100%;
  padding: 24px 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RightSideRegisterSubWrapper = styled(Box)`
  width: 37%;
  height: 100%;
  position: relative;
`;
const RightSideRegisterUpperSubWrapper = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
`;
const RegisterContainer = styled(Box)`
  margin-top: 30px;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  align-items: flex-start;
  gap: 95px;
`;

const RegisterUpperContainer = styled(Box)`
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 29px;
`;

const RegisterLowerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
`;
const Heading = styled(Typography)`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;

  color: #000000;
`;

const ParagraphText = styled(Typography)`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;
const RegisterButton = styled(Button)`
  width: 447px;
  height: 90px;
  background-color: #673ccc;
  border-radius: 10px;
  font-size: 25px;
  line-height: 140%;
  color: white;
  &:hover {
    color: #673ccc;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  }
`;
const Img = styled.img`
  width: 100%;
  min-height: 100vh;
  object-fit: fill;
`;

const RegisterPageStyle = () => {
  return {
    ParagraphText,
    Heading,
    RegisterContainer,
    RegisterLowerContainer,
    RegisterUpperContainer,
    LeftSideRegisterSubWrapper,
    RegisterWrapper,
    RegisterButton,
    RightSideRegisterSubWrapper,
    RightSideRegisterUpperSubWrapper,
    Img,
  };
};

export default RegisterPageStyle;
