import styled from '@emotion/styled'
import { Box, Typography, Checkbox, Button } from '@mui/material'
import { mobileL, mobileM } from 'styles/mediaQuery/breakPoints'

export const LoginWrapper = styled(Box)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`

export const SubWrapper = styled(Box)`
  width: 790px;
  min-height: 870px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: start;
  padding: 50px 20px;
  @media ${mobileM} {
    padding: 25px 40px;
  }
  @media ${mobileL} {
    padding: 45px 60px;
  }
`

export const Heading = styled(Typography)`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 135.5%;

  color: #2f2f2f;
`
export const HighlightedHeading = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 135.5%;
  color: #683dcc;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 27px;
`
export const LoginProviderWrapper = styled(Box)`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 28px;
`

export const LoginProviderCard = styled(Box)`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  cursor: pointer;
`

export const LoginButton = styled(Button)`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  background-color: ${props => props.theme.palette.primary.main};
  color: white;
  font-weight: 400;
  font-size: 22px;
  line-height: 139%;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
  @media (min-width: 500px) {
    height: 78px;
  }
`

export const LoginProviderName = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  cursor: pointer;
`

export const Divider = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DividerSidePart = styled(Box)`
  width: 45%;
  border-top: 1px solid #bfbfbf;
`

export const DividerMiddlePart = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  color: black;
`

export const LoginThroughEmailAndPassword = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 23px;
  gap: 20px;
  background-color: #ececec;
  border-radius: 8px;
  width: 100%;
  min-height: 60px;
  @media (min-width: 500px) {
    min-height: 80px;
    gap: 30px;
  }
`

export const EmailPasswordLabelAndInput = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  width: 70%;
`
export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 135.5%;
  color: #2f2f2f;
`

export const CheckboxAndForgetPass = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25px;
`

export const RememberMeContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  gap: 5px;
  @media (min-width: 500px) {
    gap: 15px;
  }
`

export const ForgetPasswordButton = styled(Button)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  color: #6358dc;
`

export const RememberMeCheckbox = styled(Checkbox)``
export const RememberMeText = styled(Typography)`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 135.5%;
  color: #2f2f2f;
  @media (min-width: 500px) {
    font-size: 16px;
  }
`

export const InputField = styled.input`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 135.5%;
  color: #2f2f2f;
  background-color: #ececec;
  border: none;
  outline: none;
  width: 100%;
`

export const RegisterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 22px;
`
export const RegisterButton = styled.button`
  background-color: white;
  color: ${props => props.theme.palette.primary.main};
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 135.5%;
  cursor: pointer;
`
