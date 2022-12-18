import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import { laptop, laptopM, laptopS, mobileL, mobileM, tablet, tabletS } from '../../../styles/mediaQuery/breakPoints'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined'

export const BannerContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 271px;
  display: flex;
  justify-content: center;
`

export const BannerImageContainer = styled.div`
  width: 100%;
  min-height: 271px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`

export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`
export const BannerHeading = styled.h1`
  position: absolute;
  color: #2f2d5c;
`

export const Wrapper = styled(Box)`
  /* padding-left: var(--main-side-spacing); */
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  box-shadow: 0px 13px 11px 13px rgba(0, 0, 0, 0.2);
`

export const SubWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 30px 15px;
  max-width: 1920px;
  padding-top: 105px;

  @media ${mobileM} {
    padding: 30px 20px;
    padding-top: 105px;
  }
  @media ${tabletS} {
    padding: 30px 40px;
    padding-top: 105px;
  }
  @media ${laptopS} {
    padding: 40px 80px;
    padding-top: 105px;
  }
  @media ${laptopM} {
    padding: 40px 106px;
    padding-top: 105px;
  }
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`

export const GenreMenuBar = styled(Box)`
  background-color: #673ccc;
  border: 2px solid #673ccc;
  border-radius: 37.5px;
  position: absolute;
  bottom: -28px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 95%;
  padding: 20px 17px;
  height: 60px;
  @media ${mobileM} {
    width: 89%;
    height: 60px;
    padding: 22px 20px;
  }
  @media ${tabletS} {
    width: 92%;
    padding: 12px 20px;
    height: 60px;
  }
  @media ${laptopS} {
    padding: 25px 49px;
    width: 85%;
    height: 75px;
  }
`

export const LeftSideGenreMenuBar = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media ${tablet} {
    width: 75%;
  }
  @media ${laptopM} {
    width: 80%;
  }
`
export const RightSideGenreMenuBar = styled(Box)`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  display: none;
  @media ${tablet} {
    display: block;
    display: flex;
  }
  gap: 20px;
  @media ${laptop} {
    justify-content: flex-end;
    gap: 35px;
  }
`

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  padding-bottom: 5px;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  opacity: 0.5;
  border: 2px solid transparent;
  &.genre {
    border-bottom: 2px solid white;
    opacity: 1;
  }
`

export const GenreTitle = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  @media ${mobileM} {
    font-size: 19px;
    line-height: 20px;
  }
  @media ${mobileL} {
    font-size: 22px;
    line-height: 26px;
  }
  @media ${tabletS} {
    font-size: 19px;
    line-height: 20px;
  }
  @media ${laptop} {
    font-size: 22px;
    line-height: 26px;
  }
`

export const FilterText = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  @media ${tabletS} {
    font-size: 16px;
    line-height: 17px;
  }
  @media ${laptop} {
    font-size: 19px;
    line-height: 22px;
  }
  color: #ffffff;
`
export const ContentType = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  width: 29%;
  padding-bottom: 25px;
`
export const ContentTypeText = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  @media ${tabletS} {
    font-size: 12px;
    line-height: 15px;
  }
  @media ${laptop} {
    font-size: 15px;
    line-height: 18px;
  }
  color: #ffffff;
`

export const MainContentWrapper = styled(Box)`
  margin: 40px 0px;
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 33px;
  @media ${mobileM} {
    gap: 45px;
  }
  @media ${laptopS} {
    gap: 60px;
  }
  @media ${laptopM} {
    gap: 88px;
  }
`

export const GenreAccordionContainer = styled(Box)`
  width: 22%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  justify-content: start;
  display: none;
  @media ${laptop} {
    width: 25%;
    display: block;
    display: flex;
  }
  @media (min-width: 1250px) {
    width: 19%;
    display: block;
    display: flex;
  }
  @media ${laptopM} {
    width: 18%;
    display: block;
    display: flex;
  }
`
export const MaleAndFemaleLeadContainer = styled(Box)`
  width: 120%;
  @media ${laptopS} {
    width: 110%;
  }
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edefff;
`

export const GenderBox = styled(Box)`
  width: 40%;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #673ccc;
  border-radius: 3px;
  color: #5426c3;
`

export const ShowQueryContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-top: -30px;
  @media ${laptop} {
    margin-top: 0px;
    width: 72%;
  }
`
export const SortByWrapper = styled(Box)`
  width: 100%;

  @media ${laptop} {
    display: none;
  }
`
export const SortByHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.1em;
  color: #717174;
  display: none;
  @media ${laptop} {
    display: block;
  }
`

export const HorizontalRule = styled.div`
  border-top: 1px solid #e7e7e7;
  width: 80%;
  display: none;
  @media ${laptop} {
    display: block;
  }
`
export const CardsWrapper = styled(Box)`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  @media ${mobileL} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

export const CardsSubWrapper = styled(Box)`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 16px 0px;
  @media ${mobileL} {
    width: 50%;
  }
  @media ${laptopM} {
    margin: 16px 0px;
  }
  cursor: pointer;
`
export const Cards = styled(Box)`
  height: 100%;
  gap: 20px;

  @media ${mobileL} {
    gap: 30px;
    width: 93%;
  }

  @media ${tabletS} {
    width: 83%;
  }
  @media ${tablet} {
    width: 82%;
  }

  @media ${laptopS} {
    width: 75%;
  }
  @media ${laptopM} {
    width: 65%;
  }
  display: flex;
  justify-content: start;
  align-items: center;
`
export const CardLeftSideContent = styled(Box)`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  @media ${mobileM} {
    width: 20%;
  }
  @media ${mobileL} {
    width: 30%;
  }
`
export const CardRightSideContent = styled(Box)`
  height: 100%;
  width: 70%;
  @media ${mobileL} {
    width: 55%;
  }
  @media ${mobileL} {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
`

export const Img = styled.img`
  width: 91.9px;
  height: 128px;
  object-fit: cover;
  border-radius: 5px;
`

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  @media ${mobileL} {
    font-size: 14px;
    line-height: 16px;
  }
  color: #fc9404;
`
export const ButtonContainer = styled(Box)`
  min-height: 10%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
  @media ${mobileL} {
    gap: 13px;
  }
`

export const ParagraphText = styled(Typography)`
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  @media ${mobileL} {
    font-size: 13px;
    line-height: 15px;
  }
  letter-spacing: 0.1em;
  color: #000000;
`
export const Buttons = styled(Button)`
  font-weight: 300;
  min-width: 90px;

  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  border-radius: 16px;
  padding: 5px 12px;
  border: 1px solid #e7e7e7;
  &.genre {
    background-color: #673ccb;
    color: white;
  }

  &.genre:hover {
    background-color: #673ccb;
  }
  &:hover {
    background-color: transparent;
  }
`

export const HashTagComp = styled(Typography)`
  color: #673ccc;
  font-size: 13px;
`

export const NovelIcon = styled(MenuBookRoundedIcon)`
  color: white;
`
export const PoemIcon = styled(DriveFileRenameOutlineOutlinedIcon)`
  color: white;
`
