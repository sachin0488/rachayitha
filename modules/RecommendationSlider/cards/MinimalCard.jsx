import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Button, ButtonBase, Tooltip, Typography } from '@mui/material'

import ToggleToLibraryButton from './components/ToggleToLibraryButton'
import { useUserService } from 'modules/Auth/service/User.service'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

const MinimalCard = ({ item, queryKey, contentType }) => {
  const { isLoggedIn } = useUserService()

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

        <Image alt="Cover Image" src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'} />

        <InfoSection>
          <InfoTop>
            <TitleName component="div">
              {item?.contentName}
            </TitleName>
          </InfoTop>

          <InfoBottom>
            <InfoLeft>
            <CategoryName variant="subtitle2" noWrap>
              {item?.category?.map(({ name }) => name).join(', ') || 'N/A'}
            </CategoryName>
            </InfoLeft>
            <InfoRight>
            <Rating variant="subtitle2" color="secondary">
              {item?.avgRatingValue ? parseFloat(item?.avgRatingValue).toFixed(1) : 0}
              <StarRateRoundedIcon sx={{ fontSize: 21, color: theme => theme.palette.primary.light }} />
            </Rating>
            </InfoRight>
          </InfoBottom>
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

export default MinimalCard

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
  min-width: 150px;
  max-width: 312.75px;
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
  flex-direction: column;
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

const InfoTop = styled.div`
  display: flex;
`

const InfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
`

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 45.5px);
`

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
`

const TitleName = styled(Typography)`
  font-weight: 600;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2em;
  max-height: calc(2 * 1.2em);
`

const CategoryName = styled(Typography)`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
`

const Rating = styled(Typography)`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  line-height: 1.2;
  gap: 2px;
`

const AddIcon = styled(Button)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0px;
  right: 0px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  z-index: 10;
  padding: 0px;
  min-width: 35px;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`
