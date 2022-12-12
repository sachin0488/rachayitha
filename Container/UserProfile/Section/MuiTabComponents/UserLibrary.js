import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import useLibraryApi from 'Container/UserProfile/api/userProfile.hook'
import React from 'react'
import { cloudinary } from 'Container/Landing/Sections/NewArrivalsCards/components/ContentCard'
import Link from 'next/link'

const UserLibrary = () => {
  const { data } = useLibraryApi()
  console.log(data?.data?.resources?.data, 'get library')
  return (
    <>
      <Root>
        {data?.data?.resources?.data?.map(card => (
          <Link href={`/book/${card?.id}`}>
            <Card>
              <CardImg src={cloudinary} />
              <CardBelowSection>
                <CardHeading>My legendary class is Husband</CardHeading>
                <CardSubHeading>Progress 1/470</CardSubHeading>
              </CardBelowSection>
            </Card>
          </Link>
        ))}
      </Root>
    </>
  )
}

export default UserLibrary

const Root = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 25px;
  /* padding-top: 20px; */
  width: 100%;
`
const Card = styled(Box)`
  width: 140px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 7px;
`

const CardImg = styled.img`
  width: 100%;
  height: 185px;
  object-fit: cover;
  &:hover {
    border-color: #582ac5;
    transform: scale(1.04, 1.04);
    transition-duration: 0.7s;
    overflow: hidden;
  }
`
const CardBelowSection = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 7px;
  width: 100%;
`
const CardHeading = styled(Typography)`
  font-size: 17px;
  font-weight: 500;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
`
const CardSubHeading = styled(Typography)`
  font-size: 11px;
  font-weight: 300;
  color: #4f4f4f;
`
