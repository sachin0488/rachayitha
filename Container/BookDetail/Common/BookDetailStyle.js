import styled from '@emotion/styled'
import { Box, Button, Tab, Tabs, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import {
  laptop,
  laptopM,
  laptopS,
  mobileL,
  mobileM,
  mobileS,
  tablet,
  tabletS,
} from '../../../styles/mediaQuery/breakPoints'

export const Wrapper = styled(Box)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  box-shadow: 0px 13px 11px 13px rgba(0, 0, 0, 0.2);
  padding-top: 80px;
`

export const SubWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 30px 25px;
  max-width: 1926px;
  @media ${mobileM} {
    padding: 30px 40px;
  }
  @media ${laptopS} {
    padding: 40px 80px;
  }
  @media ${laptopM} {
    padding: 40px 106px;
  }
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 42px;
`

export const BookDetailCard = styled(Box)`
  width: 100%;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;
  flex-direction: column;
  padding: 30px 0px 0px 0px;

  @media ${mobileM} {
    height: 1250px;
  }
  @media ${tabletS} {
    height: 650px;
    flex-direction: row;
    padding: 0px 0px;
  }
  @media ${tablet} {
    gap: 60px;
  }
`
export const BookDetailCardLeftSection = styled(Box)`
  @media ${mobileS} {
    width: 70%;
    min-height: 30%;
  }
  @media ${mobileM} {
    width: 70%;
    min-height: 40%;
  }
  @media ${mobileL} {
    width: 55%;
    min-height: 40%;
  }
  @media ${tabletS} {
    width: 45%;
    height: 84%;
  }
  @media ${tablet} {
    width: 40%;
    height: 90%;
  }
  @media ${laptop} {
    width: 32%;
    height: 95%;
  }
  @media ${laptopS} {
    height: 100%;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const BookDetailCardRightSection = styled(Box)`
  height: 100%;
  width: 100%;
  @media ${tabletS} {
    height: 100%;
    width: 50%;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 35px;
  padding: 10px 0px;
`
export const TitleFantasyViewSection = styled(Box)`
  min-height: 80px;
  width: 100%;
  gap: 16px;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
`

export const Title = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #2c2b5b;
`
export const Text = styled(Box)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  border: 1px solid #5a2cc6;
  border-radius: 5px;
  padding: 3px 4px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 3px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`
export const FantasyAndViewSection = styled(Box)`
  display: flex;
  justify-content: start;
  gap: 15px;
  align-items: center;
  width: 100%;
  height: 23px;
`

export const AuthorText = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #5a2cc6;
`

export const ReadButton = styled(Button)`
  background: #5a2cc6;
  border: 1px solid #5a2cc6;
  border-radius: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-transform: uppercase;
  &:hover {
    background-color: #5a2cc6;
    color: white;
  }
  color: #ffffff;
  cursor: pointer;
  padding: 6px 18px;
  @media ${tablet} {
    padding: 7px 20px;
  }
  @media ${laptop} {
    padding: 9px 26px;
  }
  @media ${laptopS} {
    padding: 10px 35px;
  }
`
export const AddToLibraryButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5b2ec7;
  /* padding: 9px 15px; */
  gap: -3px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  text-transform: uppercase;
  border: 1px solid #5b2ec7;
  border-radius: 23px;

  padding: 4px 13px;
  font-size: 16px;
  line-height: 18px;

  @media ${tablet} {
    padding: 4px 13px;
    font-size: 16px;
    line-height: 18px;
  }
  @media ${laptop} {
    padding: 10px 15px;
    font-size: 18px;
    line-height: 20px;
  }
  @media ${laptopS} {
    padding: 10px 18px;
    font-size: 20px;
    line-height: 23px;
  }

  cursor: pointer;
`

export const StarText = styled(Box)`
  color: #fc9404;
  font-size: 21px;
  font-weight: 400;
`

export const Author = styled(Typography)`
  color: black;
`

export const RatingSectionComp = styled(Box)`
  color: #656565;
  font-size: 11px;
  font-weight: 200;
`

export const ReviewSectionAddToLibraryButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  color: white;
  background-color: #5b2ec7;
  text-transform: uppercase;
  border: 1px solid #5b2ec7;
  border-radius: 23px;

  padding: 4px 13px;
  font-size: 16px;
  line-height: 18px;

  @media ${tablet} {
    padding: 4px 13px;
    font-size: 16px;
    line-height: 18px;
  }
  @media ${laptop} {
    padding: 5px 15px;
    font-size: 16px;
    line-height: 20px;
  }
  @media ${laptopS} {
    padding: 6px 18px;
    font-size: 20px;
    line-height: 23px;
  }

  cursor: pointer;
`

export const RecommendedCardsWrapper = styled(Box)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 11px;
  margin: 20px 0px 10px 0px;
`
export const RecommendedCardsHeading = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;

  color: #000000;
`
export const RecommendedCardsContainer = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px;
  gap: 36px;

  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const IndividualRecommendedCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: start;
  align-items: flex-start;
  gap: 8px;
  height: 98%;
  min-width: 175px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 0px 0px 5px 0px;
  border: 2px solid transparent;
  &:hover {
    border-color: #582ac5;
    transform: scale(1.03, 1.03);
    transition-duration: 0.7s;
  }
`
export const CardImg = styled.img`
  padding: 11px 13px;
  width: 100%;
  height: 68%;
`
export const IndividualRecommendedCardTitle = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding: 0px 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const Fantasy = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 200;
  font-size: 11px;
  line-height: 13px;
  padding: 0px 13px;
  color: #4f4f4f;
`
export const RatingSection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 0px 13px 10px 13px;
`
export const AllCategoryRatingSection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 170px;
  border-top: 1px solid #cecccc;
  border-bottom: 1px solid #cecccc;
  @media ${mobileL} {
    flex-direction: row;
  }
`
export const AllCategoryRatingLeftSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${mobileS} {
    width: 100%;
    padding: 18px 13px 0px 8px;
    border-bottom: 1px solid #cecccc;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  @media ${mobileL} {
    width: 52%;
    padding: 18px 13px 20px 8px;
    border-right: 1px solid #cecccc;
    border-bottom: none;
    margin: 0px;
  }
  @media ${tabletS} {
    width: 48%;
    padding: 18px 33px 20px 8px;
  }
  @media ${tablet} {
    width: 40%;
  }
  @media ${laptop} {
    width: 38%;
  }
  @media ${laptopS} {
    width: 32%;
  }
  @media ${laptopM} {
    width: 25%;
  }
  height: 100%;
`

export const AllCategoryRatingLeftSectionFirstPart = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-top: 3px;
  justify-content: start;

  @media ${mobileL} {
    gap: 12px;
    padding-top: 0px;
  }

  width: 50%;
  height: 100%;
`

export const AllCategoryRatingLeftSectionSecondPart = styled(Box)`
  justify-content: start;
  align-items: center;
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`
export const AllCategoryRatingLeftSectionThirdPart = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;

  height: 100%;
`

export const AllCategoryRatingFont = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  @media ${mobileM} {
    font-size: 17px;
    line-height: 19px;
  }
  @media ${mobileL} {
    font-size: 15px;
    line-height: 18px;
  }
`

export const AllCategoryRatingRightSection = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 100%;
  height: 100%;
  padding: 0px 0px 37px 0px;
  @media ${mobileL} {
    min-width: 48%;
    height: 100%;
    padding: 0px 0px;
  }
  @media ${tabletS} {
    width: 60%;
    height: 100%;
  }
`

export const ShareFontSize = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-align: start;

  color: #000000;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  /* width: 100%;
  max-width: 800px; */
`

export const CommentSectionWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;

  width: 100%;
  min-height: 510px;
  margin: 0px 0px 20px 0px;
`

export const CommentSectionSubWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 7px;
  width: 100%;
  min-height: 230px;
  height: 100%;
  border-bottom: 1px solid #747474;
  margin-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 500px) {
    padding-bottom: 15px;
  }
  /* margin-bottom: 20px; */
`

export const CommentSectionSubWrapperRightSideContent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  gap: 14px;
  height: 100%;
  width: 93%;
  padding-top: 5px;
`

export const ReplyLikeAndCommentSection = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`
export const RepliesSection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  width: 50%;
`

export const LikeAndCommentSection = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;
  width: 50%;
  padding-right: 20px;
`

export const AboutSectionWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  /* padding: 25px 0px; */
  width: 100%;
  min-height: 240px;
`

export const AboutSectionUpperContent = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`

export const MuiTabWrapper = styled(Box)`
  width: 100%;
  height: 330px;
`

export const Months = styled(Typography)`
  color: #656565;
  font-size: 11px;
  font-weight: 200;
`
export const Replies = styled(Typography)`
  color: #5a2cc6;
  font-size: 11px;
  font-weight: 200;
`

export const UserName = styled(Typography)`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
`
export const CardRatingText = styled(Typography)`
  color: #4f4f4f;
`

export const WriteReviewModalWrapper = styled(Box)`
  width: 100%;
  height: 100%;
`

export const PostCommentText = styled(TextareaAutosize)`
  width: 100%;
  background-color: transparent;
  padding: 0px 16px;
  margin-top: 14px;
  min-height: 300px;
  border: none;
  font-size: 20px;
  outline: none;
  color: black;
  font-size: 17px;
  @media ${mobileM} {
    font-size: 18px;
  }
  @media ${tabletS} {
    font-size: 20px;
  }
`
