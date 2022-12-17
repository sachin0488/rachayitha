import React from 'react'
import RatingStar from '../../../../Components/RatingComp/Rating'
import { FantasyAndViewSection, RecommendedCardsHeading } from '../../Common/BookDetailStyle'

import { Typography } from '@mui/material'
import Review from './Components/Review'
import Comment from './Components/Comment'

const ReviewSectionCom = () => {
  return (
    <>
      <FantasyAndViewSection>
        <RecommendedCardsHeading>139 Reviews</RecommendedCardsHeading>
        <RatingStar value="4" />
        <Typography sx={{ color: 'black' }}>4.0</Typography>
      </FantasyAndViewSection>
      <Review />
      <Comment />
    </>
  )
}

export default ReviewSectionCom
