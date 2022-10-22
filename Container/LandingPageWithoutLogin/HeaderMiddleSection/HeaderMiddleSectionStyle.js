import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, TextField, Button } from "@mui/material";

const Wrapper = styled(Box)`
  width: 100%;
  padding: 65px 106px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 35px;
`;
const Heading = styled(Typography)`
  font-style: normal;
  font-weight: 900;
  font-size: 80px;
  line-height: 88px;
  text-align: center;
  color: ${(props) => props.theme.palette.headingColor.main};
  max-width: 800px;
`;

const SubHeading = styled(Typography)`
  font-style: normal;
  font-family: "Roboto";
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: ${(props) => props.theme.palette.headingColor.main};
`;

const GetStartedInputField = styled(Box)`
  width: 642px;
  height: 56px;
  border: 1px solid #5624c1;
  border-radius: 10px;
  padding: 0px 0px 0px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputField = styled(TextField)`
  width: 400px;
  height: 100%;
  padding: 0 15px;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
`;
const GetStartedButton = styled(Button)`
  width: 200px;
  border-radius: 0px 10px 10px 0px;
  height: 100%;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: white;
  background-color: ${(props) => props.theme.palette.secondary.main};
  &:hover {
    pointer-events: none;
  }
`;

const HeaderMiddleSectionStyle = () => {
  return {
    Wrapper,
    Heading,
    SubHeading,
    GetStartedInputField,
    InputField,
    GetStartedButton,
  };
};

export default HeaderMiddleSectionStyle;
