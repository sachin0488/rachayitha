import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import GenreButtonLIstMobile from '../../GenreSelectionSection/GenreButtonList/GenreButtonLIstMobile'
import SubGenreButton from 'Components/SubGenreButton/SubGenreButton'
import { HorizontalRule, SortByHeading, SortByWrapper } from 'Container/FeatureSection/Common/Common.styles'
import { useRouter } from 'next/router'
import React from 'react'
import MobileVersionGenreSection from './MobileVersionGenreSection'

const SortBy = () => {
  const router = useRouter()
  const { content_type } = router.query
  return (
    <>
      <SortByWrapper>
        <MobileVersionGenreSection>
          <GenreHeading>Genre of {content_type}</GenreHeading>
          <GenreButtonLIstMobile explore={router.pathname} section={content_type} />
        </MobileVersionGenreSection>
      </SortByWrapper>
      <SortByHeading>Sort By</SortByHeading>
      <HorizontalRule />
      <SubGenreButton sectionName="novel" />
    </>
  )
}

export default SortBy

export const GenreHeading = styled(Typography)`
  margin-bottom: 25px;
  font-size: 22px;

  height: 30px;
`

export const ExploreTextAndNestedRoute = [
  {
    text: 'Genre of Novels',
    explore: 'explore',
    section: 'novel',
    high: '420px',
    id: 0,
  },
  {
    text: 'Genre of Poems',
    explore: 'explore',
    section: 'poem',
    high: '420px',
    id: 1,
  },
  {
    text: 'Genre of Shorts',
    explore: 'explore',
    section: 'short',
    high: '420px',
    id: 2,
  },
]
