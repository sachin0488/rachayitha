import React from 'react'
import styled from '@emotion/styled'

import RatingBar from './RatingBar'

const RatingSection = () => {
  return (
    <Root>
      <RatingBar label="Writing Quality" rating={3} />
      <RatingBar label="Stability of Updates" rating={3} />
      <RatingBar label="Story Development" rating={3} />
      <RatingBar label="Character Design" rating={3} />
      <RatingBar label="World Background" rating={3} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export default RatingSection
