import React from 'react'
import styled from '@emotion/styled'

import { Button, ButtonBase, Rating, Typography, useMediaQuery } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded'

import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'

const RankingContentCard = ({ item, index }) => {
  const isMobile = useMediaQuery('(max-width: 465px)')

  return (
    <Root>
      <DeignsIcon />
      <Main>
        <RankingRoot>
          <RankingNumber variant="subtitle2">
            <RankingPlaceholder>{index + 1 <= 9 ? '00' : index + 1 <= 99 ? '0' : ''}</RankingPlaceholder>
            {index + 1}
          </RankingNumber>
        </RankingRoot>
        <Image alt={item?.book_name + ' Image'} src={cloudinary} />
        <InfoSection>
          <HashtagList>
            <Hashtag>#Adventure</Hashtag>
            <Hashtag>#Action</Hashtag>
          </HashtagList>

          <TitleName variant="subtitle2">
            {item?.book_name} <Status variant="caption">{item?.status}</Status>
          </TitleName>
          <ParagraphText variant="subtitle2">
            The human Race is at war with the Vicious Dalki and when they needed the Vicious Dalki and when they needed
            the Vicious ...
          </ParagraphText>

          {!isMobile && (
            <InfoNav>
              <RatingRoot>
                <Rating
                  color="primary"
                  sx={{ color: theme => theme.palette.primary.main }}
                  value={3.5}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon sx={{ color: '#000000' + '39' }} />}
                />
              </RatingRoot>
              <VoteCount variant="subtitle2">
                6
                <ArrowDropUpRoundedIcon
                  sx={{ color: theme => theme.palette.primary.main, fontSize: 42, mt: -1, mb: -1, ml: -1, mr: -1 }}
                />
              </VoteCount>
              <CommentCount variant="subtitle2">
                6
                <ModeCommentRoundedIcon
                  sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 0.7, mb: -0.15 }}
                />
              </CommentCount>
            </InfoNav>
          )}
        </InfoSection>
        <AddIcon variant="contained">
          <AddOutlinedIcon />
        </AddIcon>
      </Main>
      {isMobile && (
        <InfoNav>
          <RatingRoot>
            <Rating
              color="primary"
              sx={{ color: theme => theme.palette.primary.main }}
              value={3.5}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon sx={{ color: '#000000' + '39' }} />}
            />
          </RatingRoot>
          <VoteCount variant="subtitle2">
            6
            <ArrowDropUpRoundedIcon
              sx={{ color: theme => theme.palette.primary.main, fontSize: 42, mt: -1, mb: -1, ml: -1, mr: -1 }}
            />
          </VoteCount>
          <CommentCount variant="subtitle2">
            6
            <ModeCommentRoundedIcon
              sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 0.7, mb: -0.15 }}
            />
          </CommentCount>
        </InfoNav>
      )}
      {/* <Link href={`/book/${item?.id}`}> */}
      <a>
        <StyledButton color="primary" />
      </a>
      {/* </Link> */}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 16px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  border: 2px solid ${({ theme }) => theme.palette.primary.main}18;
  :hover {
    border: 2px solid #562ac5;
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  max-width: 700px;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`

const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 16px;
  background-color: transparent;
`
const Main = styled.div`
  display: flex;
  gap: 15px;
  height: 160px;
  @media (max-width: 465px) {
    height: 120px;
  }
  @media (max-width: 340px) {
    height: 110px;
  }
`

const RankingRoot = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  background: linear-gradient(141deg, rgba(81, 34, 192, 1) 0%, rgba(142, 95, 254, 1) 100%);
  width:290px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RankingNumber = styled(Typography)`
  color: #fff;
  font-weight: 700;
  font-size: 3rem;
`

const RankingPlaceholder = styled(Typography)`
  display: inline;
  color: #fff;
  // text border
  -webkit-text-stroke: 2px #fff;
  -webkit-text-fill-color: transparent;

  font-weight: 700;
  font-size: 3rem;
`

const Image = styled.img``

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const HashtagList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Hashtag = styled(Typography)`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.primary.main};
`
const TitleName = styled(Typography)`
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 7px;
  @media (max-width: 340px) {
    font-size: 1.1rem;
  }
`

const ParagraphText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  color: #000;
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 340px) {
    font-size: 0.85rem;
    letter-spacing: 0.1px;
    line-height: 1.45;
  }
`

const InfoNav = styled.div`
  margin-top: auto;
  margin-bottom: 2px;
  display: flex;
  gap: 14px;
  @media (max-width: 465px) {
    margin-top: 9px;
    margin-bottom: -3px;
  }
`

const RatingRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  @media (max-width: 465px) {
    flex: 1;
    justify-content: flex-start;
  }
`

const VoteCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 2px 2px 8px;
  border-radius: 6px;
  color: #000;
  background: ${({ theme }) => theme.palette.primary.main}20;
`

const CommentCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 8px 3px 8px;
  border-radius: 6px;
  color: #000;
  background: ${({ theme }) => theme.palette.primary.main}20;
`

const Status = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 7px;
  border-radius: 13px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.main};
  color: #fff;
  background: ${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
`

const DeignsIcon = styled(MenuBookOutlinedIcon)`
  color: ${({ theme }) => theme.palette.primary.main}20;
  font-size: 200px;
  position: absolute;
  top: -50px;
  right: -20px;
  transform: rotate(-45deg);
  @media (max-width: 465px) {
    font-size: 150px;
    color: ${({ theme }) => theme.palette.primary.main}15;
  }
`

const AddIcon = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 13px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 34px;
  min-height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 340px) {
    min-width: 30px;
    min-height: 30px;
    .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  }
`

export default RankingContentCard
