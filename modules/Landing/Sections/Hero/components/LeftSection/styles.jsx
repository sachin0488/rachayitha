import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  gap: 18px;
  @media (max-width: 900px) {
    align-items: center;
  }
  position: relative;
  isolation: isolate;
  @media (max-width: 900px) {
    ::before {
      position: absolute;
      z-index: -1;
      top: -50px;
      filter: blur(30px);
      content: '';
      background: #ffffffbb;
      border-radius: 17px;
      width: 110%;
      height: 160%;
    }
  }
`

export const Heading = styled(Typography)`
  font-weight: 700;
  line-height: 1.43;
  color: ${props => props.theme.palette.secondary.main};
  max-width: 540px;
  text-align: start;
  font-size: 50px;
  @media (max-width: 1310px) {
    font-size: 44px;
  }
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 560px) {
    font-size: 40px;
  }
  @media (max-width: 470px) {
    font-size: 35px;
  }
  @media (max-width: 408px) {
    font-size: 33px;
  }
  @media (max-width: 370px) {
    font-size: 30px;
  }
  @media (max-width: 340px) {
    font-size: 28px;
    line-height: 1.63;
  }

  span {
    display: block;
    background: linear-gradient(50deg, rgb(37 0 124) 0%, rgb(162 122 255) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const SubHeading = styled(Typography)`
  font-weight: 300;
  font-size: 20px;
  /* color: ${props => props.theme.palette.primary.main}; */
  color: ${props => props.theme.palette.secondary.main};
  text-align: start;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 23px;
  }
  @media (max-width: 408px) {
    font-size: 23px;
  }
  @media (max-width: 390px) {
    font-size: 20px;
    margin-bottom: -10px;
  }
`
export const ParagraphText = styled(Typography)`
  font-weight: 300;
  font-weight: 400;
  font-weight: 500;
  font-size: 17px;
  color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: start;
  padding-left: 2px;
  @media (max-width: 900px) {
    text-align: center;
  }
  @media (max-width: 408px) {
    font-size: 17px;
  }
  @media (max-width: 340px) {
    font-size: 15px;
    margin-top: -12px;
  }
`

export const StyledButton = styled(Button)`
  &.MuiButton-contained {
    background: linear-gradient(100deg, #3607a3 15%, #a683f8 100%);
  }
  border-radius: 11px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  padding: 6px 45px;
  @media (max-width: 400px) {
    font-size: 13px;
    padding: 5px 30px;
  }
  @media (max-width: 500px) {
    background: #fff;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  margin-top: 0px;
`
