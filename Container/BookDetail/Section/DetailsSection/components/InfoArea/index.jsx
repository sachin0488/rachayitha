import React from 'react'
import styled from '@emotion/styled'
import StyledChip from './StyledChip'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import ToggleToLibraryButton from './ToggleToLibraryButton'
import MoreOptions from './MoreOptions'
import RatingBar from './RatingBar'
import LikeButton from './LikeButton'

import { useBookDetailsService } from 'Container/BookDetail/services/BookDetails.service'

import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Link from 'next/link'

const InfoArea = () => {
  const { query } = useRouter()
  const { Data } = useBookDetailsService({ bookId: query?.bookId })

  return (
    <Root>
      <BookName variant="h3" component="div">
        {Data?.bookName}
      </BookName>

      <InfoChipList>
        {Data?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${Data?.chapterCount} Chapters`} Icon={CollectionsBookmarkRoundedIcon} />
        <StyledChip label={`${Data?.viewCount} Views`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>

      <Author color="secondary">
        Author: <b>{Data?.authorName}</b>
      </Author>

      <RatingBar avgRatingValue={Data?.avgRatingValue} totalRatingCount={Data?.totalRatingCount} />

      <ButtonList>
        <Link href={`/book/${query?.bookId}/read/${Data?.chapter?.[0]?.id}`}>
          <a>
            <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Read
            </Button>
          </a>
        </Link>
        <ToggleToLibraryButton bookId={query?.bookId} libraryAdded={Data?.libraryAdded} />
        <LikeButton bookId={query?.bookId} likeCount={Data?.likeCount} isLiked={Data?.isLiked} />
        <MoreOptions />
      </ButtonList>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 800px) {
    gap: 20px;
  }
`

const BookName = styled(Typography)`
  font-weight: 600;
  color: ${({ theme }) => theme.palette.secondary.main};
`

const InfoChipList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const Author = styled(Typography)`
  margin-top: 4px;
`

const RatingRoot = styled.div`
  display: flex;
  gap: 5px;
`

const TotalRating = styled(Typography)``

const ButtonList = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 5px;
`

export default InfoArea
