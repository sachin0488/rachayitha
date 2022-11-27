import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { laptop, laptopS, mobileL, tabletS } from '../../../styles/mediaQuery/breakPoints'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 2100px;
  height: 500px;
  background: linear-gradient(180deg, rgba(102, 59, 203, 0.1) 0%, rgba(102, 59, 203, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media ${tabletS} {
    height: 790px;
    justify-content: start;
  }
`

export const HeroLeftSideSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  padding: 0px 50px;
  @media ${tabletS} {
    align-items: start;
    padding: 0px 50px;
    width: 50%;
  }
  @media ${laptopS} {
    padding: 0px 100px;
    width: 45%;
  }
`

export const Heading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 55px;
  text-align: center;
  @media ${tabletS} {
    text-align: start;
  }
  @media ${laptopS} {
    font-weight: 900;
    font-size: 55px;
    line-height: 64px;
  }
  color: ${props => props.theme.palette.headingColor.main};
  max-width: 540px;
`

export const SubHeading = styled(Typography)`
  font-style: normal;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: start;
  @media ${laptopS} {
    font-size: 25px;
    line-height: 29px;
  }
  text-align: center;
  color: ${props => props.theme.palette.primary.main};
`
export const ParagraphText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 20px;
  color: black;
  text-align: start;
`

export const ExploreButton = styled.button`
  width: 160px;
  height: 41px;
  border: 1px solid #5624c1;
  border-radius: 20.5px;
  background-color: #5326c3;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
export const CreateButton = styled.button`
  width: 160px;
  height: 41px;
  border: 1px solid #5624c1;
  border-radius: 20.5px;
  background-color: #fdfcfe;
  color: ${props => props.theme.palette.primary.main};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`

export const HeroRightSideSection = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 15px;
  align-items: center;

  height: 100%;
  overflow: hidden;

  @media ${tabletS} {
    width: 50%;
  }
  @media ${laptopS} {
    width: 55%;
  }
`

export const BannerImgContainer = styled(Box)`
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  align-items: flex-start;
  width: 215px;
  display: none;
  @media ${tabletS} {
    display: block;
    display: flex;
  }
`

export const ImgContainer = styled(Box)`
  width: 218px;
  height: 253px;
  box-shadow: 0rem 0.4rem 0.45rem 0rem rgba(0, 0, 30, 0.5);

  border-radius: 15px;
`
