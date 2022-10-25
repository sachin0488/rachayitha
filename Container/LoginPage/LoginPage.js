import React from "react";
import LoginPageStyle from "./LoginPageStyle";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const LoginPage = () => {
  const {
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
          <LoginProviderWrapper>
            <Divider>
              <DividerSidePart />
              <DividerMiddlePart>OR</DividerMiddlePart>
              <DividerSidePart />
            </Divider>
            <LoginThroughEmailAndPassword>
              <MdEmail color="black" size={38} />
              <EmailPasswordLabelAndInput>
                <Label>Email</Label>

                <InputField type="email" placeholder="example@gmail.com" />
              </EmailPasswordLabelAndInput>
            </LoginThroughEmailAndPassword>
            <LoginThroughEmailAndPassword>
              <FaKey color="black" size={38} />
              <EmailPasswordLabelAndInput>
                <Label>Password</Label>

                <InputField type="password" placeholder="*********" />
              </EmailPasswordLabelAndInput>
            </LoginThroughEmailAndPassword>
          </LoginProviderWrapper>
          <LoginProviderWrapper padding="22px 0px">
            <CheckboxAndForgetPass>
              <RememberMeContainer>
                <RememberMeCheckbox />
                <RememberMeText>Remember me</RememberMeText>
              </RememberMeContainer>
              <ForgetPasswordButton variant="text">
                Forgot Password?
              </ForgetPasswordButton>
            </CheckboxAndForgetPass>
            <LoginProviderCard sx={{ backgroundColor: "#683DCC" }}>
              <h1
                style={{
                  color: "white",
                  fontWeight: "400",
                  fontSize: "22px",
                  lineHeight: "139%",
                  cursor: "pointer",
                }}
              >
                Login
              </h1>
            </LoginProviderCard>
          </LoginProviderWrapper>
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
