import { Typography } from '@mui/material'
import RankingGenreButtonLIstMobile from '../../GenreSelectionSection/GenreButtonList/RankingGenreButtonList'
import { SortByHeading, SortByWrapper } from 'container/FeatureSection/Common/common.styles'

import { useRouter } from 'next/router'
import React from 'react'
import MobileVersionGenreSection from '../../ExploreCardSection/Comp/MobileVersionGenreSection'
import { GenreHeading } from '../../ExploreCardSection/Comp/SortBy'

const SelectGenre = () => {
  const router = useRouter()
  const { content_type } = router.query
  return (
    <>
      <SortByWrapper>
        <MobileVersionGenreSection>
          <GenreHeading>Genre of {content_type}</GenreHeading>
          <RankingGenreButtonLIstMobile explore={router.pathname} section={content_type} />
        </MobileVersionGenreSection>
      </SortByWrapper>
      <SortByHeading>Select Genre</SortByHeading>
    </>
  )
}

export default SelectGenre
