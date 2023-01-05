import React from "react";

import HeaderStyle from "../LandingPageWithoutLogin/Header/HeaderStyle";
import LogoImage from "../../public/logo.svg";
import Image from "next/image";
import LoginPageStyle from "../LoginPage/LoginPageStyle";
import RegisterPageImg from "../../public/registerPageImg.png";
import {
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
  FooterText,
  RegisterFooter,
  RightSideRegisterText,
} from "./RegisterPageStyle";

const RegisterPage = () => {
  const { RegisterButton: Button, RegisterContainer: RegisterCont } =
    LoginPageStyle();
  const { LogoContainer, LogoTitle } = HeaderStyle();
  return (
    <>
      <RegisterWrapper>
        <LeftSideRegisterSubWrapper>
          <RegisterContainer>
            <RegisterUpperContainer>
              <LogoContainer style={{ margin: "0px 0px 0px -30px" }}>
                <Image src={LogoImage} sx={{ width: "55px", height: "55px" }} />
                <LogoTitle>E-Read</LogoTitle>
              </LogoContainer>
              <Heading>WELCOME!</Heading>
              <ParagraphText>
                adasdad- Where your dream meets reality
              </ParagraphText>
            </RegisterUpperContainer>
            <RegisterLowerContainer>
              <RegisterButton>Sign in</RegisterButton>
              <RegisterCont style={{ margin: "0px 0px 0px -70px" }}>
                <h1
                  style={{
                    fontFamily: "Inria Sans",

                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                    color: "black",
                  }}
                >
                  Don’t have an account?{" "}
                </h1>
                <Button
                  sx={{
                    fontFamily: "Inria Sans",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Sign up
                </Button>
              </RegisterCont>
            </RegisterLowerContainer>
            <RegisterFooter>
              <FooterText>ALL RIGHTS RESERVED</FooterText>
              <FooterText>TERMS OF SERVICE</FooterText>
            </RegisterFooter>
          </RegisterContainer>
        </LeftSideRegisterSubWrapper>
        <RightSideRegisterSubWrapper>
          <Img src="https://res.cloudinary.com/dk6twrko6/image/upload/v1666682387/pexels-michael-burrows-7129054_1_m7mm1b.jpg" />
          <RightSideRegisterUpperSubWrapper>
            <RightSideRegisterText>
              Writer is simply a photographer of Thoughts.
            </RightSideRegisterText>
          </RightSideRegisterUpperSubWrapper>
        </RightSideRegisterSubWrapper>
      </RegisterWrapper>
    </>
  );
};

export default RegisterPage;
