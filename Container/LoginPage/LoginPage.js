import React from "react";
import LoginPageStyle from "./LoginPageStyle";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const {
    LoginWrapper,
    SubWrapper,
    Heading,
    HighlightedHeading,
    LoginProviderCard,
    LoginProviderName,
    LoginProviderWrapper,

    RegisterContainer,
    RegisterButton,
  } = LoginPageStyle();

  return (
    <>
      <LoginWrapper>
        <SubWrapper>
          <Heading>
            Welcome to <HighlightedHeading>E-BOOK</HighlightedHeading>
          </Heading>
          <LoginProviderWrapper>
            <LoginProviderCard>
              <FcGoogle size={35} />
              <LoginProviderName sx={{ color: "#2f2f2f" }}>
                Login with Google
              </LoginProviderName>
            </LoginProviderCard>
            <LoginProviderCard>
              <ImFacebook color="#3B5999" size={35} />
              <LoginProviderName sx={{ color: "#2f2f2f" }}>
                Login with Facebook
              </LoginProviderName>
            </LoginProviderCard>
          </LoginProviderWrapper>
          <LoginForm />
          <LoginProviderWrapper>
            <RegisterContainer>
              <h1
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "16px",
                  color: "black",
                }}
              >
                Don’t have an account?{" "}
              </h1>
              <RegisterButton>Register</RegisterButton>
            </RegisterContainer>
          </LoginProviderWrapper>
        </SubWrapper>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;
