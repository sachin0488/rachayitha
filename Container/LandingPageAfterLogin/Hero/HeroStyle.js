import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { laptopS, tabletS } from '../../../styles/mediaQuery/breakPoints'

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
export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  @media ${tabletS} {
    align-items: flex-start;
  }
  gap: 18px;
`

export const Heading = styled(Typography)`
  font-weight: 700;
  font-size: 44px;
  line-height: 1.43;
  text-align: center;
  @media ${tabletS} {
    text-align: start;
  }
  @media (max-width: ) {
    font-size: 50px;
  }
  color: ${props => props.theme.palette.headingColor.main};
  max-width: 540px;
`

export const SubHeading = styled(Typography)`
  font-weight: 300;
  font-size: 20px;
  color: ${props => props.theme.palette.primary.main};
  @media ${laptopS} {
    font-size: 25px;
  }
  text-align: center;
  @media ${tabletS} {
    text-align: start;
  }
`
export const ParagraphText = styled(Typography)`
  font-weight: 300;
  font-size: 17px;
  color: #000000;
  text-align: center;
  @media ${tabletS} {
    text-align: start;
  }
`

export const StyledButton = styled(Button)`
  border-radius: 14px;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 16px;
  padding: 6px 45px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
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
