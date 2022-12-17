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
} from '../LoginPageStyle'
import { MdEmail } from 'react-icons/md'
import { FaKey } from 'react-icons/fa'
import { useForm, FormProvider } from 'react-hook-form'
import Schema from '../Schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginAPI } from '../../api/auth.hook'
import useFormError from '../../../../hooks/useFormError'

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(Schema),
  })
  const { handleLogin, isLoading } = useLoginAPI()
  const { handleFormError } = useFormError()
  return (
    <Form onSubmit={methods.handleSubmit(handleLogin, handleFormError)}>
      <FormProvider {...methods}>
        <LoginProviderWrapper>
          {/* <Divider>
            <DividerSidePart />
            <DividerMiddlePart>OR</DividerMiddlePart>
            <DividerSidePart />
          </Divider> */}
          <LoginThroughEmailAndPassword>
            <MdEmail color="black" size={38} />
            <EmailPasswordLabelAndInput>
              <Label>Email</Label>

              <InputField
                type="email"
                placeholder="example@gmail.com"
                name="email"
                {...methods.register('email')}
                required
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
                required
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
          <LoginButton variant="contained" type="submit">
            Login
          </LoginButton>
        </LoginProviderWrapper>
      </FormProvider>{' '}
    </Form>
  )
}

export default LoginForm
