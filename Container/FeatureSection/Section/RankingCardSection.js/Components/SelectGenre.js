import { Typography } from '@mui/material'
import GenreButtonLIstMobile from 'Components/GenreButtonList/GenreButtonLIstMobile'
import RankingGenreButtonLIstMobile from 'Components/GenreButtonList/RankingGenreButtonList'
import MuiAccordion from 'Components/MuiAccordion/MuiAccordion'
import SubGenreButton from 'Components/SubGenreButton/SubGenreButton'
import { HorizontalRule, SortByHeading, SortByWrapper } from 'Container/FeatureSection/Common/Common.styles'
import { RankingTextAndNestedRoute } from 'Container/FeatureSection/Common/Config'
import React from 'react'

const SelectGenre = () => {
  return (
    <>
      <SortByWrapper>
        <MuiAccordion text="Select Genre" high="300px">
          {RankingTextAndNestedRoute.map(comp => (
            <>
              <Typography marginBottom="15px" fontSize="20px">
                {comp.text}
              </Typography>
              <RankingGenreButtonLIstMobile explore={comp.explore} section={comp.section} />
            </>
          ))}
        </MuiAccordion>
      </SortByWrapper>
      <SortByHeading>Select Genre</SortByHeading>
    </>
  )
}

export default SelectGenre
