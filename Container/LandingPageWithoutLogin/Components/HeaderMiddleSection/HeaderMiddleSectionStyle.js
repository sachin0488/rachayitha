import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography, TextField, Button } from '@mui/material'
import { laptop, mobileL, mobileM, mobileS, tablet, tabletS } from '../../../../styles/mediaQuery/breakPoints'

export const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1636px;
  @media ${mobileS} {
    padding: 42px 22px;
  }
  @media ${mobileM} {
    padding: 42px 25px;
  }

  @media ${mobileL} {
    padding: 50px 30px;
  }

  @media ${tabletS} {
    padding: 65px 40px;
  }
  @media ${tablet} {
    padding: 65px 70px;
  }
  @media ${laptop} {
    padding: 65px 106px;
  }

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 35px;
`
export const Heading = styled(Typography)`
  font-style: normal;

  text-align: center;
  color: ${props => props.theme.palette.headingColor.main};
  @media ${mobileS} {
    font-weight: 900;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: 0.05em;
  }
  @media ${mobileM} {
    min-width: 400px;
    font-weight: 600;
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 0.05em;
  }
  @media ${mobileL} {
    min-width: 570px;
    font-weight: 700;
    font-size: 65px;
    line-height: 80px;
  }
  @media ${tabletS} {
    min-width: 650px;
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
  }
  @media ${tablet} {
    min-width: 700px;
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
  }
  @media ${laptop} {
    max-width: 800px;
    font-weight: 900;
    font-size: 80px;
    line-height: 88px;
  }
`

export const SubHeading = styled(Typography)`
  font-style: normal;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  @media ${mobileL} {
    font-size: 25px;
    line-height: 29px;
    text-align: center;
  }
  color: ${props => props.theme.palette.headingColor.main};
`

export const GetStartedInputField = styled(Box)`
  height: 40px;
  border-radius: 4px;

  flex-direction: column;
  gap: 30px;

  @media ${mobileM} {
    flex-direction: row;
    width: 460px;
    gap: 0px;
    height: 56px;
    border-radius: 10px;
  }
  @media ${mobileL} {
    width: 560px;
  }

  @media ${tabletS} {
    width: 642px;
  }

  border: 1px solid #5624c1;

  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputField = styled.input`
  width: 200px;
  padding-top: 9px;
  font-weight: 300;
  font-size: 11px;
  line-height: 15px;
  @media ${mobileL} {
    width: 400px;
    padding: 0 15px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
  }
  height: 100%;

  background-color: transparent;
  border: 0px;

  font-size: 18px;
  color: gray;
  outline: 0;
`

export const GetStartedButton = styled(Button)`
  height: 100%;
  font-style: normal;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 8px;
  font-weight: 400;
  width: 150px;
  border-radius: 4px;
  @media ${mobileL} {
    font-size: 19px;
    line-height: 1.5;
    padding-top: 8px;
    font-weight: 500;
    width: 200px;
    border-radius: 0px 10px 10px 0px;
  }
`
