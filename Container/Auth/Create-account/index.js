import React from 'react'
import {
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
  LoginWrapper,
  SubWrapper,
  Heading,
  HighlightedHeading,
  RegisterContainer,
  RegisterButton,
} from '../Login/LoginPageStyle'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'
import { useForm, FormProvider } from 'react-hook-form'
import Schema from './Schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useCreateAccountAPI } from '../api/auth.hook'
import useFormError from '../../../hooks/useFormError'
import Link from 'next/link'

const CreateAccountCard = () => {
  const methods = useForm({
    resolver: yupResolver(Schema),
  })
  const { handleCreateAccount, isLoading } = useCreateAccountAPI()
  const { handleFormError } = useFormError()
  return (
    <LoginWrapper>
      <SubWrapper>
        <Heading>
          Welcome to <HighlightedHeading>E-BOOK</HighlightedHeading>
        </Heading>

        <Form onSubmit={methods.handleSubmit(handleCreateAccount, handleFormError)}>
          <FormProvider {...methods}>
            <LoginProviderWrapper>
              <LoginThroughEmailAndPassword>
                <FaKey color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>FullName</Label>
                  <InputField name="full_name" placeholder="fullName" {...methods.register('full_name')} />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
              <LoginThroughEmailAndPassword>
                <FaKey color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>Bio</Label>
                  <InputField name="bio" placeholder="bio" {...methods.register('bio')} />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
              <LoginThroughEmailAndPassword>
                <MdEmail color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>Username</Label>
                  <InputField placeholder="devutkarsh" name="username" {...methods.register('username')} />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
              <LoginThroughEmailAndPassword>
                <MdEmail color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>Email</Label>

                  <InputField
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    {...methods.register('email')}
                  />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
              <LoginThroughEmailAndPassword>
                <FaKey color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>Password</Label>

                  <InputField
                    type="password"
                    name="password"
                    placeholder="*********"
                    {...methods.register('password')}
                  />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
              <LoginThroughEmailAndPassword>
                <FaKey color="black" size={38} />
                <EmailPasswordLabelAndInput>
                  <Label>Password</Label>

                  <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="*********"
                    {...methods.register('confirmPassword')}
                  />
                </EmailPasswordLabelAndInput>
              </LoginThroughEmailAndPassword>
            </LoginProviderWrapper>
            <LoginProviderWrapper padding="22px 0px">
              <CheckboxAndForgetPass>
                <RememberMeContainer>
                  <RememberMeCheckbox />
                  <RememberMeText>Remember me</RememberMeText>
                </RememberMeContainer>
                <ForgetPasswordButton variant="text">Forgot Password?</ForgetPasswordButton>
              </CheckboxAndForgetPass>
              <LoginButton type="submit">Register</LoginButton>
            </LoginProviderWrapper>
          </FormProvider>{' '}
        </Form>
        <LoginProviderWrapper>
          <RegisterContainer>
            <h1
              style={{
                fontFamily: 'Poppins',
                fontWeight: '400',
                fontSize: '16px',
                color: 'black',
              }}>
              Do you have an account?{' '}
            </h1>
            <Link href={`/login`}>
              <RegisterButton>Login</RegisterButton>
            </Link>
          </RegisterContainer>
        </LoginProviderWrapper>
      </SubWrapper>
    </LoginWrapper>
  )
}

export default CreateAccountCard
