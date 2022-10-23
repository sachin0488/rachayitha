import React from "react";
import HeaderMiddleSectionStyle from "./HeaderMiddleSectionStyle";

const HeaderMiddleSection = () => {
  const {
    Wrapper,
    Heading,
    SubHeading,
    GetStartedInputField,
    InputField,
    GetStartedButton,
  } = HeaderMiddleSectionStyle();
  return (
    <Wrapper>
      <Heading>Expand your Vision of Knowledge Here</Heading>
      <SubHeading>India’s Largest online Reading Platform</SubHeading>
      <GetStartedInputField>
        <InputField
          id="outlined-basic"
          label="Write your email here.."
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <GetStartedButton>GET STARTED</GetStartedButton>
      </GetStartedInputField>
    </Wrapper>
  );
};

export default HeaderMiddleSection;
