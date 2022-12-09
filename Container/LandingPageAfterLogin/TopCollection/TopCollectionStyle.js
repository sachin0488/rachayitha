import React from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import { laptop, laptopM, laptopS, mobileL, mobileS, tablet, tabletS } from '../../../styles/mediaQuery/breakPoints'

export const TopCollectionWrapper = styled(Box)`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 90px 50px 30px 50px;
  @media ${laptopS} {
    padding: 90px 110px 30px 110px;
  }
  gap: 22px;
`

export const WeeklyCardSectionWrapper = styled(Box)`
  width: 100%;
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
    margin-bottom: 40px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
    margin-bottom: 40px;
  }
  @media ${tabletS} {
    padding: 0px 10px 0px 40px;
    margin-bottom: 40px;
  }
  /* @media ${tablet} {
    padding: 0px 30px 0px 70px;
    margin: 30px 0px 50px 0px;
  } */
  @media ${laptop} {
    padding: 0px 30px 0px 53px;
  }
  @media ${laptopS} {
    padding: 0px 20px 0 99px;
  }
  @media ${laptopM} {
    padding: 0px 0px 0px 60px;
  }
`

export const SectionWrapper = styled(Box)`
  width: 100%;

  /* padding: 40px 0px; */
  @media ${mobileS} {
    padding: 0px 10px 0px 30px;
    margin-bottom: 40px;
  }
  @media ${mobileL} {
    padding: 0px 20px 0px 45px;
    margin-bottom: 40px;
  }
  @media ${tabletS} {
    padding: 0px 10px 0px 40px;
    height: 520px;
    margin-bottom: 40px;
  }
  /* @media ${tablet} {
    padding: 0px 30px 0px 70px;
  } */
  @media ${laptop} {
    padding: 0px 30px 0px 50px;
  }
  @media ${laptopS} {
    padding: 0px 20px 0px 69px;
  }
  @media ${laptopM} {
    padding: 0px 5px;
  }
`

export const TopCollectionList = styled(Box)`
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CollectionName = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  padding: 20px 0px;
  color: ${props => props.theme.palette.primary.main};
`

export const IndividualCollection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 33%;
  height: 100%;
`

export const Heading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
`
export const HighlightedHeading = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
  color: ${props => props.theme.palette.primary.main};
`
export const IndividualCard = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 18px;
  @media ${laptopS} {
    gap: 48px;
  }
  width: 100%;
  min-height: 140px;

  &:hover {
    border: 2px solid #562ac5;
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
  }
`

export const IndividualCardLeftSection = styled(Box)`
  width: 30%;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IndividualCardRightSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 0px 5px;
  justify-content: center;
  gap: 4px;
`

export const Title = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
`
export const Fantasy = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  color: #888994;
`
export const Rating = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: #148544;
`
