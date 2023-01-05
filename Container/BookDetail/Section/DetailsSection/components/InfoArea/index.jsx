import styled from '@emotion/styled'
import { Button, Rating, Typography } from '@mui/material'
import React from 'react'
import StyledChip from './StyledChip'
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded'
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded'
import StarIcon from '@mui/icons-material/Star'
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import MoreOptions from './MoreOptions'
import { useRouter } from 'next/router'

const InfoArea = ({ item }) => {
  const { query } = useRouter()
  return (
    <Root>
      <BookName variant="h3">{item?.book_name}</BookName>
      <InfoChipList>
        {item?.category?.map(({ name, id }) => (
          <StyledChip label={name} key={id} />
        ))}
        <StyledChip label={`${item?.chapter_count} Chapters`} Icon={CollectionsBookmarkRoundedIcon} />
        <StyledChip label={`${item?.chapter_count} Views`} Icon={RemoveRedEyeRoundedIcon} />
      </InfoChipList>
      <Author color="secondary">
        Author: <b>{item?.alternate_name}</b>
      </Author>
      <RatingRoot>
        <Rating
          color="primary"
          sx={{ color: theme => theme.palette.primary.main }}
          value={item?.rating?.rate__avg}
          readOnly
          size="large"
          precision={0.1}
          emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
        />
        {<TotalRating color="secondary" variant="subtitle2">{`(42 ratings)`}</TotalRating>}
      </RatingRoot>
      <ButtonList>
        <a href={`/book/${query?.bookId}/read/${item?.chapter[0]?.id}`} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
            Read
          </Button>
        </a>
        <Button variant="contained" startIcon={<LibraryAddRoundedIcon />}>
          Add to library
        </Button>
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
  color: ${({ theme }) => theme.palette.headingColor.main};
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
