import React from "react";
import LoginPageStyle from "./LoginPageStyle";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import LoginYupSchema from "./LoginYupSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () => {
  const {
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
    Form,
    LoginButton,
  } = LoginPageStyle();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginYupSchema),
  });
  const submitForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Form onSubmit={handleSubmit(submitForm)}>
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

            <InputField
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
            />
          </EmailPasswordLabelAndInput>
          {/* <p>{errors?.email?.message}</p> */}
        </LoginThroughEmailAndPassword>
        <LoginThroughEmailAndPassword>
          <FaKey color="black" size={38} />
          <EmailPasswordLabelAndInput>
            <Label>Password</Label>

            <InputField
              type="password"
              {...register("password")}
              placeholder="*********"
            />
          </EmailPasswordLabelAndInput>
        </LoginThroughEmailAndPassword>
        {/* <p>{errors?.password?.message}</p> */}
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
        <LoginButton type="submit">Login</LoginButton>
      </LoginProviderWrapper>
    </Form>
  );
};

export default LoginForm;
