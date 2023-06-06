import { Rating, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import styled from '@emotion/styled'

const RatingBar = ({ avgRatingValue, totalRatingCount }) => {
  return (
    <RatingRoot>
      <Rating
        color="primary"
        sx={{ color: theme => theme.palette.primary.main }}
        value={parseFloat(parseFloat(avgRatingValue).toFixed(1))}
        readOnly
        size="large"
        precision={0.1}
        emptyIcon={<StarIcon fontSize="inherit" sx={{ color: theme => theme.palette.primary.main + '39' }} />}
      />
      {<Typography color="secondary" variant="subtitle2">{`(${totalRatingCount})`}</Typography>}
    </RatingRoot>
  )
}

const RatingRoot = styled.div`
  display: flex;
  gap: 5px;
`

export default RatingBar
