import React from 'react'
import styled from '@emotion/styled'

import { ButtonBase, Rating, Tooltip, Typography, useMediaQuery } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded'

import Link from 'next/link'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'
import Synopsis from 'modules/ContentDetail/components/Synopsis'

const ContentCard = ({ item, contentType, onClick }) => {
  const isMobile = useMediaQuery('(max-width: 465px)')

  return (
    <Root>
      <Main>
        <Image alt="Cover Image" src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'} />
        <InfoSection>
          <TitleName variant="subtitle2">{item?.contentName}</TitleName>

          {/* <ParagraphText variant="subtitle2" dangerouslySetInnerHTML={{ __html: item?.synopsis }}></ParagraphText> */}
          <Synopsis
            variant="subtitle2"
            maxLine={2}
            fontSize={12.5}
            style={{
              lineHeight: '1.35',
            }}>
            {item?.synopsis}
          </Synopsis>
          {/* <HashtagList>
            {item?.tags?.map(name => {
              return <Hashtag key={name} variant='caption'>#{name}</Hashtag>
            })}
          </HashtagList> */}
          {!isMobile && (
            <InfoNav>
              <RatingRoot>
                <Rating
                  color="primary"
                  size="small"
                  sx={{ color: theme => theme.palette.primary.main }}
                  value={Number(Number(item?.avgRatingValue).toFixed(1)) || 0}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
                />
              </RatingRoot>
              <Status variant="caption">{item?.status}</Status>
              <InfoCount variant="subtitle2">
                {item?.likeCount}
                <ThumbUpRoundedIcon fontSize="small" color="primary" sx={{ fontSize: 15, ml: 1, mr: 1 }} />
              </InfoCount>

              <InfoCount variant="subtitle2">
                {item?.commentCount}
                <ForumRoundedIcon fontSize="small" color="primary" sx={{ fontSize: 15, ml: 0.7, mb: -0.15 }} />
              </InfoCount>
            </InfoNav>
          )}
        </InfoSection>
      </Main>
      {isMobile && (
        <InfoNav>
          <RatingRoot>
            <Rating
              size="small"
              color="primary"
              sx={{ color: theme => theme.palette.primary.main }}
              value={Number(Number(item?.avgRatingValue).toFixed(1)) || 0}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
            />{' '}
          </RatingRoot>
          <Status variant="caption">{item?.status}</Status>
          <InfoCount variant="subtitle2">
            {item?.likeCount}
            <ThumbUpRoundedIcon fontSize="small" color="primary" sx={{ fontSize: 15, ml: 1, mr: 1 }} />
          </InfoCount>

          <InfoCount variant="subtitle2">
            {item?.commentCount}
            <ForumRoundedIcon fontSize="small" color="primary" sx={{ fontSize: 15, ml: 0.7, mb: -0.15 }} />
          </InfoCount>
        </InfoNav>
      )}
      <Link href={`/${contentType}/${item?.contentId}/${item?.slug}`}>
        <a>
          <Tooltip title={item?.contentName} placement="top">
            <StyledButton color="primary" onClick={onClick} />
          </Tooltip>
        </a>
      </Link>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  padding: 6px;
  padding-right: 10px;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  :hover {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.02);
  }
  max-width: 550px;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    padding: 10px;
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
  gap: 12px;
  height: 100px;
  @media (max-width: 465px) {
    height: 90px;
  }
  @media (max-width: 400px) {
    height: 90px;
  }
`
const InfoCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border-radius: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Image = styled.img`
  object-fit: cover;
  border-radius: 7px;
  aspect-ratio: 350/466;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  @media (max-width: 400px) {
    gap: 2px;
  }

  flex: 1;
`
const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
`

const HashtagList = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const Hashtag = styled(Typography)`
  font-weight: 500;
  color: ${({ theme }) => theme.palette.primary.main};
`
const TitleName = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 7px;
  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
`

const ParagraphText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  @media (max-width: 400px) {
    letter-spacing: 0.15px;
    font-size: 0.69rem;
    line-height: 1.37;
    && {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* number of lines to show */
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`

const InfoNav = styled.div`
  margin-top: auto;
  margin-bottom: 2px;
  display: flex;
  width: 100%;
  gap: 14px;
  @media (max-width: 465px) {
    margin-top: 9px;
    margin-bottom: -3px;
  }

  @media (max-width: 400px) {
    margin-bottom: -1px;
  }
  align-items: center;
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

const Status = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 7px;
  border-radius: 13px;
  border-radius: 6px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.paper};
  background: ${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 0.65rem;
  /* margin-left: auto; */
  margin-right: auto;
  position: relative;
  /* top: -6px; */
`

const RankingRoot = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  background: linear-gradient(141deg, rgba(81, 34, 192, 1) 0%, #966afc 100%);
  width: 180px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;
  bottom: 5px;
  left: 5px;
  @media (max-width: 465px) {
    bottom: 40px;
    border-radius: 9px;

    padding: 5px 6px;
  }
`

const RankingNumber = styled(Typography)`
  color: ${({ theme }) => theme.palette.background.paper};
  font-weight: 700;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 2px;
  margin-right: -2px;
  line-height: 1;
  @media (max-width: 465px) {
    font-size: 1.9rem;
    margin-bottom: -1px;
    letter-spacing: 2px;
  }
`

const RankingPlaceholder = styled(Typography)`
  display: inline;
  color: ${({ theme }) => theme.palette.background.paper};
  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.background.paper};
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1;
  @media (max-width: 465px) {
    font-size: 1.9rem;
  }
`

export default ContentCard
