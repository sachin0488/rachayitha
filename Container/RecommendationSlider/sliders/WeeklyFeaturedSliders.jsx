import React from 'react'
import styled from '@emotion/styled'
import StyledSlider from 'Components/StyledSlider'
import { Typography } from '@mui/material'

import { mainMaxWidth } from 'Container/Landing/common/styles'

import { ErrorBar, LoadingBar } from 'Container/RecommendationSlider/cards/components'
import { useWeeklyBookService } from '../services/WeeklyFeatured.service'

import MinimalCard from '../cards/MinimalCard'

const WeeklyFeaturedSliders = () => {
  const { List, isLoading, isError, queryKey } = useWeeklyBookService()

  if (List.length === 0) return null

  return (
    <Root>
      <Main>
        <Heading>Weekly Featured</Heading>
        {isLoading && <LoadingBar />}
        {isError && <ErrorBar />}
        {isLoading ? (
          <LoadingBar />
        ) : isError ? (
          <ErrorBar />
        ) : (
          <StyledSlider CardComponent={MinimalCard} List={List} queryKey={queryKey} />
        )}
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10px;
  width: 100%;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-block: 40px;
  gap: 10px;
  overflow: hidden;

  /* Styled Slider Settings ----- */
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: ${props => props.theme.palette.secondary.main};
  padding-left: var(--element-left-spacing);
`

export default WeeklyFeaturedSliders
