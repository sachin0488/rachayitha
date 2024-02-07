import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { ButtonBase, Rating, Tooltip, Typography, useMediaQuery } from '@mui/material'

import StarIcon from '@mui/icons-material/Star'
import ToggleToLibraryButton from './ToggleToLibraryButton'
import { useUserService } from 'modules/Auth/service/User.service'
import Synopsis from 'modules/ContentDetail/components/Synopsis'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded'
import ForumRoundedIcon from '@mui/icons-material/ForumRounded'

const ContentCard = ({ item, index, ranking }) => {
  const { isLoggedIn } = useUserService()
  const isMobile = useMediaQuery('(max-width: 465px)')
  return (
    <Root>
      <Main>
        {ranking && (
          <RankingRoot>
            <RankingNumber variant="subtitle2">
              <RankingPlaceholder>{index + 1 <= 9 ? '0' : index + 1 <= 99 ? '' : ''}</RankingPlaceholder>
              {index + 1}
            </RankingNumber>
          </RankingRoot>
        )}
        <Image alt="Cover Image" src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'} />
        <InfoSection>
          {/* <HashtagList>
            {item?.tags?.map(name => {
              return <Hashtag key={name}>#{name}</Hashtag>
            })}
          </HashtagList> */}

          <TitleName variant="subtitle2">{item?.contentName}</TitleName>

          <CategoryName variant="subtitle2" noWrap lineHeight={1.15} margin={0}>
            {item?.category?.map(({ name }) => name).join(', ') || 'N/A'}
          </CategoryName>
          <Synopsis
            variant="subtitle2"
            maxLine={3}
            fontSize={14}
            style={{
              lineHeight: '1.55',
              marginTop: 'auto',
              marginBottom: 'auto',
            }}>
            {item?.synopsis}
          </Synopsis>
          {!isMobile && (
            <InfoNav>
              <RatingRoot>
                <Rating
                  size="small"
                  color="primary"
                  sx={{ color: theme => theme.palette.primary.main }}
                  value={parseFloat(parseFloat(item?.avgRatingValue).toFixed(1) || 0)}
                  readOnly
                  precision={0.5}
                  emptyIcon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
                  icon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />}
                />
              </RatingRoot>
              <Status variant="caption">{item?.status}</Status>
              <InfoCount variant="subtitle2">
                {item?.likeCount}
                <ThumbUpRoundedIcon color="primary" sx={{ fontSize: 17, ml: 1, mr: 1 }} />
              </InfoCount>

              <InfoCount variant="subtitle2">
                {item?.commentCount}
                <ForumRoundedIcon color="primary" sx={{ fontSize: 17, ml: 0.7, mb: -0.15 }} />
              </InfoCount>
            </InfoNav>
          )}
        </InfoSection>
        {isLoggedIn && <ToggleToLibraryButton contentId={item?.contentId} libraryAdded={item?.libraryAdded} ranking={ranking} />}
      </Main>
      {isMobile && (
        <InfoNav>
          <RatingRoot>
            <Rating
              color="primary"
              sx={{ color: theme => theme.palette.primary.main }}
              value={parseFloat(parseFloat(item?.avgRatingValue).toFixed(1) || 0)}
              readOnly
              precision={0.5}
              emptyIcon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
              icon={<StarIcon fontSize="small" sx={{ color: theme => theme.palette.primary.main }} />}
            />
          </RatingRoot>
          <Status variant="caption">{item?.status}</Status>
          <InfoCount variant="subtitle2">
            {item?.likeCount}
            <ThumbUpRoundedIcon sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 1, mr: 1 }} />
          </InfoCount>
          <InfoCount variant="subtitle2">
            {item?.commentCount}
            <ForumRoundedIcon sx={{ color: theme => theme.palette.primary.main, fontSize: 17, ml: 0.7, mb: -0.15 }} />
          </InfoCount>
        </InfoNav>
      )}
      <Link href={`/${item?.contentType}/${item?.contentId}/${item?.slug}`}>
        <a>
          <Tooltip title={item?.contentName} placement="top">
            <StyledButton color="primary" />
          </Tooltip>
        </a>
      </Link>
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
  border: 1px solid ${({ theme }) => theme.palette.primary.main}18;
  background-image: ${({ theme }) => theme.palette.background.paperImage};

  max-width: 550px;
  overflow: hidden;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`
const CategoryName = styled(Typography)`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
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
  height: 160px;
  @media (max-width: 465px) {
    height: 120px;
  }
  @media (max-width: 400px) {
    height: 110px;
  }
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
  width: auto;
`
const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3px;
  margin-right: 33px;
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

const InfoNav = styled.div`
  margin-top: auto;
  margin-bottom: 2px;
  display: flex;
  gap: 14px;
  @media (max-width: 465px) {
    margin-top: 9px;
    margin-bottom: -3px;
  }

  @media (max-width: 400px) {
    margin-bottom: -1px;
  }
  align-items: flex-end;

  /* padding-right: 5px; */
`

const RatingRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  @media (max-width: 465px) {
    flex: 1;
    justify-content: flex-start;
  }
`

const InfoCount = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  line-height: 1;
  border-radius: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Status = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 7px;
  border-radius: 13px;
  border-radius: 7px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.background.paper};
  background: ${({ theme }) => theme.palette.primary.main};
  font-weight: 400;
  letter-spacing: 0.5px;
  font-size: 0.7rem;
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
