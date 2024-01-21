import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { ButtonBase, Typography, CircularProgress, Box } from '@mui/material'

import ToggleToLibraryButton from './components/ToggleToLibraryButton'
import { useUserService } from 'Container/Auth/service/User.service'

const ContinueReadingCard = ({ item, queryKey, contentType }) => {
  // const { isLoggedIn } = useUserService()
  const isLoggedIn = true
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
          <InfoLeft>
            <TitleName variant="h6" component="div">
              {item?.contentName}
            </TitleName>

            <CategoryName variant="subtitle2" noWrap>
              {item?.category?.map(({ name }) => name).join(', ') || 'N/A'}
            </CategoryName>
          </InfoLeft>

          <InfoRight>
            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgress variant="determinate" value={item?.chapterReadPercentage} size={45.5} thickness={5} color="primary" />

              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Typography variant="caption" component="div" color="text.secondary">{`${Math.round(
                  item.chapterReadPercentage,
                )}%`}</Typography>
              </Box>
            </Box>
          </InfoRight>
        </InfoSection>
      </Main>
      <Link href={`/${contentType}/${item.contentId}/${item?.slug}`}>
        <a>
          <StyledButton color="primary" />
        </a>
      </Link>
    </Root>
  )
}

export default ContinueReadingCard

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
  min-width: 260px;
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
  height: 285px;
  object-fit: cover;
  border-radius: 10px;
`

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 45.5px);
  flex: 1;
`

const InfoRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 45.5px;
  margin-left: auto;
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
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 600;
  font-size: 1.2rem;
`
