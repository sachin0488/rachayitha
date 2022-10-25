import styled from "@emotion/styled";
import { Box, Typography, Checkbox, Button } from "@mui/material";
import React from "react";

const LoginWrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const SubWrapper = styled(Box)`
  width: 790px;
  height: 870px;
  display: flex;
  flex-direction: column;
  gap: 46px;
  justify-content: start;
  padding: 45px 60px;
`;

const Heading = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 135.5%;

  color: #2f2f2f;
`;
const HighlightedHeading = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 135.5%;
  color: #683dcc;
`;
const LoginProviderWrapper = styled(Box)`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 28px;
`;

const LoginProviderCard = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  cursor: pointer;
`;

const LoginProviderName = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  cursor: pointer;
`;

const Divider = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DividerSidePart = styled(Box)`
  width: 45%;
  border-top: 1px solid #bfbfbf;
`;

const DividerMiddlePart = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  color: black;
`;

const LoginThroughEmailAndPassword = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 23px;
  gap: 30px;
  background-color: #ececec;
  border-radius: 8px;
  width: 100%;
  min-height: 80px;
`;

const EmailPasswordLabelAndInput = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;
const Label = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135.5%;
  color: #2f2f2f;
`;

const CheckboxAndForgetPass = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
`;

const RememberMeContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 25%;
  height: 100%;
  gap: 15px;
`;

const ForgetPasswordButton = styled(Button)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  color: #6358dc;
`;

const RememberMeCheckbox = styled(Checkbox)``;
const RememberMeText = styled(Typography)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  color: #2f2f2f;
`;

const InputField = styled.input`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 135.5%;
  color: #2f2f2f;
  background-color: #ececec;
  border: none;
  outline: none;
`;

const RegisterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22px;
`;
const RegisterButton = styled.button`
  background-color: white;
  color: ${(props) => props.theme.palette.primary.main};
  border: none;
  outline: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  cursor: pointer;
`;

const LoginPageStyle = () => {
  return {
    LoginWrapper,
    SubWrapper,
    Heading,
    HighlightedHeading,
    LoginProviderCard,
    LoginProviderName,
    LoginProviderWrapper,
    Divider,
    DividerMiddlePart,
    DividerSidePart,
    LoginThroughEmailAndPassword,
    EmailPasswordLabelAndInput,
    InputField,
    Label,
    CheckboxAndForgetPass,
    RememberMeCheckbox,
    RememberMeContainer,
    RememberMeText,
    ForgetPasswordButton,
    RegisterContainer,
    RegisterButton,
  };
};

export default LoginPageStyle;
