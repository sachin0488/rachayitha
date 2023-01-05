import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export const RegisterWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const LeftSideRegisterSubWrapper = styled(Box)`
  width: 63%;
  height: 100%;
  padding: 24px 100px;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const RightSideRegisterSubWrapper = styled(Box)`
  width: 37%;
  height: 100%;
  position: relative;
`
export const RightSideRegisterUpperSubWrapper = styled(Box)`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0.7;
`
export const RightSideRegisterText = styled(Typography)`
  top: 692px;
  left: 81px;
  position: absolute;
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 42px;
  text-align: center;
`
export const RegisterContainer = styled(Box)`
  margin-top: 30px;
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  align-items: flex-start;
  gap: 95px;
`

export const RegisterFooter = styled(Box)`
  width: 499px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`

export const FooterText = styled(Typography)`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 14px;
  color: #6b6b6b;
`

export const RegisterUpperContainer = styled(Box)`
  display: flex;
  width: 100%;

  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 29px;
`

export const RegisterLowerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 0px 80px 0px;
`
export const Heading = styled(Typography)`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;

  color: ${({ theme }) => theme.palette.primary.main};
`

export const ParagraphText = styled(Typography)`
  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: ${({ theme }) => theme.palette.primary.main};
`
export const RegisterButton = styled(Button)`
  width: 447px;
  height: 90px;
  background-color: #673ccc;
  border-radius: 10px;
  font-size: 25px;
  line-height: 140%;
  color: white;
  &:hover {
    color: #673ccc;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
  }
`
export const Img = styled.img`
  width: 100%;
  min-height: 99.1vh;
  object-fit: cover;
`
