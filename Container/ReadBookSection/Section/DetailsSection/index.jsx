import React from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { Typography } from '@mui/material'
import DividerBar from 'Container/ReadBookSection/components/DividerBar'
import { useBookDetailsService } from 'Container/BookDetail/services/BookDetails.service'

const DetailsSection = () => {
  const { query } = useRouter()
  const { Data, isLoading, isError, error } = useBookDetailsService({ bookId: query?.bookId, slug: query?.slug })

  return (
    <Root>
      <ImageContainer>
        <StyledImage alt="Cover Image" src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'} />
        <StyledImage
          className="blur"
          alt="Cover Image"
          src={Data?.coverImage && Data?.coverImage.includes('http') ? Data?.coverImage : '/alt-img.svg'}
        />
      </ImageContainer>

      <InfoSection>
        <BookName variant="h4" component="div">
          {Data?.bookName}
        </BookName>
        <AuthorName variant="h6" component="div">
          Author: <span className="name"> {Data?.authorName} </span>
        </AuthorName>
      </InfoSection>
      <Copyright>
        <span className="symbol">©</span> E Book
      </Copyright>
      <DividerBar />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  padding-top: 20px;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  align-self: center;
  @media (max-width: 400px) {
    /* margin-top: 15px; */
  }
`

const StyledImage = styled.img`
  z-index: 2;
  &.blur {
    z-index: 1;
    position: absolute;
    /* filter: drop-shadow(8px 15px 20px ${({ theme }) => theme.palette.primary.main}44)  */
    filter: blur(20px) opacity(0.5);
    top: -5px;
    left: 0px;
  }
  max-width: 350px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const BookName = styled(Typography)`
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const AuthorName = styled(Typography)`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main};
  .name {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

const Copyright = styled(Typography)`
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.secondary.main}aa;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  .symbol {
    margin-bottom: -3px;
    font-size: 17.5px;
  }
  @media (max-width: 400px) {
    .symbol {
      margin-bottom: 0px;
      font-size: 18px;
    }
  }
`

export default DetailsSection
