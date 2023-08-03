import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import RatingBar from './RatingBar'

const RatingSection = ({ ratingParams }) => {
  return (
    <Root>
      {ratingParams?.map(({ label, value }) => (
        <RatingBar key={label} label={label} rating={value} />
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export default RatingSection
