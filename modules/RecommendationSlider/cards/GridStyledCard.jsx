import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ButtonBase, Tooltip, Typography } from '@mui/material'

import ToggleToLibraryButton from './components/ToggleToLibraryButton'
import { useUserService } from 'modules/Auth/service/User.service'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

const GridStyledCard = ({ item, queryKey, contentType }) => {
  const { isLoggedIn } = useUserService()
  const coverImage = item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'

  return (
    <Root>
      <Main>
        {isLoggedIn ? (
          <ToggleToLibraryButton
            contentId={item?.contentId}
            libraryAdded={item?.libraryAdded}
            queryKey={queryKey}
            contentType={contentType}
          />
        ) : (
          <></>
        )}

        <ImageSection>
          <Image alt="Cover Image" src={coverImage} />
          <SmallImageList>
            <SmallImage alt="Cover Image" src={item?.coverImage2 && item?.coverImage2.includes('http') ? item?.coverImage2 : coverImage} />
            <SmallImage alt="Cover Image" src={item?.coverImage3 && item?.coverImage3.includes('http') ? item?.coverImage3 : coverImage} />
            <SmallImage alt="Cover Image" src={item?.coverImage4 && item?.coverImage4.includes('http') ? item?.coverImage4 : coverImage} />
          </SmallImageList>
        </ImageSection>

        <InfoSection>
          <InfoLeft>
            <TitleName variant="h6" component="div" noWrap>
              {item?.contentName}
            </TitleName>

            <CategoryName variant="subtitle2" noWrap>
              {item?.category?.map(({ name }) => name).join(', ') || 'N/A'}
            </CategoryName>
          </InfoLeft>

          <InfoRight>
            <Rating variant="subtitle2" color="secondary">
              {item?.avgRatingValue ? parseFloat(item?.avgRatingValue).toFixed(1) : 0}
              <StarRateRoundedIcon sx={{ fontSize: 21, color: theme => theme.palette.primary.light }} />
            </Rating>{' '}
          </InfoRight>
        </InfoSection>
      </Main>
      <Link href={`/${contentType}/${item.contentId}/${item?.slug}`}>
        <a>
          <Tooltip title={item?.contentName} placement="bottom-end">
            <StyledButton color="primary" />
          </Tooltip>
        </a>
      </Link>
    </Root>
  )
}

export default GridStyledCard

const Root = styled.div`
  position: relative;
  padding: 15px;
  box-shadow: 5px 6px 35px 0px ${({ theme }) => theme.palette.primary.shadowLevel01};
  border-radius: 18px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  border: 2px solid transparent;
  background-image: ${({ theme }) => theme.palette.background.paperImage};
  :hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 5px 4px 25px 0px ${({ theme }) => theme.palette.primary.shadowLevel02};
    transform: scale(1.02);
  }
  min-width: 324px;
`

const StyledButton = styled(ButtonBase)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 18px;
  background-color: transparent;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
`

const Image = styled.img`
  width: 100%;
  height: 281.25px;
  object-fit: cover;
  border-radius: 10px;
  aspect-ratio: 355/466;
`

const SmallImageList = styled.div`
  display: flex;
  flex-direction: column;
  height: 285px;
  width: 66px;
  gap: 10px;
`

const SmallImage = styled.img`
  object-fit: cover;
  border-radius: 6px;
  aspect-ratio: 355/466;
  border: 0px;
`

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 45.5px);
`

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleName = styled(Typography)`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const CategoryName = styled(Typography)`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

const Rating = styled(Typography)`
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 1.2;
  gap: 2px;
`
