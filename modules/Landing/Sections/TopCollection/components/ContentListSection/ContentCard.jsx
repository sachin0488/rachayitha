import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { Typography } from '@mui/material'

import { useUserService } from 'modules/Auth/service/User.service'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

const ContentCard = ({ item }) => {
  const { isLoggedIn } = useUserService()

  return (
    <Link href={isLoggedIn ? `/${item?.contentType}/${item?.id}/${item?.slug}` : `/login`}>
      <Root>
        <ImageSection>
          <StyledImage
            alt="Cover Image"
            src={item?.coverImage && item?.coverImage.includes('http') ? item?.coverImage : '/alt-img.svg'}
            width="90px"
            height="115px"
          />
        </ImageSection>
        <InfoSection>
          <Title>{item?.name}</Title>

          <Category variant="subtitle2" noWrap>
            {item?.category?.map(({ name }) => name).join(', ')}
          </Category>
          <Rating variant="subtitle2" color="secondary">
            {item?.avgRatingValue ? parseFloat(item?.avgRatingValue).toFixed(1) : 0}
            <StarRateRoundedIcon sx={{ fontSize: 21, mt: -0.02, color: theme => theme.palette.primary.light }} />
          </Rating>
        </InfoSection>
      </Root>
    </Link>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 1368px) {
    gap: 48px;
  }
  border-radius: 13px;
  gap: 18px;
  width: 100%;
  padding: 8px 9px;

  border: 2px solid transparent;
  transition: 0.3s ease-in-out;
  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    box-shadow: 0px 7px 10px 1px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
  }
`

const ImageSection = styled.div`
  width: fit-content;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled.img`
  border-radius: 8px;
  object-fit: cover;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 0px 0px;
  gap: 4px;
  text-align: left;
`

const Title = styled(Typography)`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const Category = styled(Typography)`
  font-weight: 500;
  /* font-size: 13px; */
  color: ${({ theme }) => theme.palette.secondary.main}78;
  width: 100%;
`

const Rating = styled(Typography)`
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  line-height: 1.5;
  gap: 2px;
`

export default ContentCard
