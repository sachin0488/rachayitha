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
          placeholder="Write your email here.."
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <GetStartedButton color="primary" variant="contained">GET STARTED</GetStartedButton>
      </GetStartedInputField>
    </Wrapper>
  );
};

export default HeaderMiddleSection;
