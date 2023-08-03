import React from 'react'
import styled from '@emotion/styled'
import StyledChip from './StyledChip'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import ToggleToLibraryButton from './ToggleToLibraryButton'
import MoreOptions from './MoreOptions'
import RatingBar from './RatingBar'
import LikeButton from './LikeButton'

import { usePoemDetailsService } from 'Container/PoemDetail/services/PoemDetails.service'

import CollectionsPoemmarkRoundedIcon from '@mui/icons-material/CollectionsPoemmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'

const InfoArea = () => {
  const { query } = useRouter()
  const { Data } = usePoemDetailsService({ poemId: query?.poemId })

  return (
    <Root>
      <PoemName variant="h3" component="div">
        {Data?.poemName}
      </PoemName>

      <InfoChipList>
        {Data?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${Data?.chapterCount} Chapters`} Icon={CollectionsPoemmarkRoundedIcon} />
        <StyledChip label={`${Data?.viewCount} Views`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>

      <Author color="secondary">
        Author: <b>{Data?.authorName}</b>
      </Author>

      <RatingBar avgRatingValue={Data?.avgRatingValue} totalRatingCount={Data?.totalRatingCount} />

      <ButtonList>
        <a href={`/poem/${query?.poemId}/read/${Data?.chapter?.[0]?.id}`} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
            Read
          </Button>
        </a>
        <ToggleToLibraryButton poemId={query?.poemId} libraryAdded={Data?.libraryAdded} />
        <LikeButton poemId={query?.poemId} likeCount={Data?.likeCount} isLiked={Data?.isLiked} />
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

const PoemName = styled(Typography)`
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
