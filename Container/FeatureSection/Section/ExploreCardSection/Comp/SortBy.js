import { Typography } from '@mui/material'
import GenreButtonLIstMobile from 'Components/GenreButtonList/GenreButtonLIstMobile'
import MuiAccordion from 'Components/MuiAccordion/MuiAccordion'
import SubGenreButton from 'Components/SubGenreButton/SubGenreButton'
import { HorizontalRule, SortByHeading, SortByWrapper } from 'Container/FeatureSection/Common/Common.styles'
import React from 'react'

const SortBy = () => {
  return (
    <>
      <SortByWrapper>
        <MuiAccordion text="Sort By" high="300px">
          {ExploreTextAndNestedRoute.map(comp => (
            <>
              <Typography marginBottom="15px" fontSize="20px">
                {comp.text}
              </Typography>
              <GenreButtonLIstMobile explore={comp.explore} section={comp.section} />
            </>
          ))}
        </MuiAccordion>
      </SortByWrapper>
      <SortByHeading>Sort By</SortByHeading>
      <HorizontalRule />
      <SubGenreButton sectionName="novel" />
    </>
  )
}

export default SortBy

export const ExploreTextAndNestedRoute = [
  {
    text: 'Genre of Novels',
    explore: 'explore/novel',
    section: 'novel',
    high: '480px',
  },
  {
    text: 'Genre of Poems',
    explore: 'explore/poem',
    section: 'poem',
    high: '480px',
  },
  {
    text: 'Genre of Shorts',
    explore: 'explore/short',
    section: 'short',
    high: '480px',
  },
]
