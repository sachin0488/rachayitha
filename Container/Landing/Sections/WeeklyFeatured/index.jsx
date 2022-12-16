import React from 'react'
import styled from '@emotion/styled'
import StyledSlider from 'Components/StyledSlider'
import { Typography } from '@mui/material'

import { mainMaxWidth } from 'Container/Landing/common/common.styles'
import { mobileM } from 'styles/mediaQuery/breakPoints'

import ContentCard from './components/ContentCard'
import useWeeklyApi from './api/WeeklyCard.hook'

const WeeklyFeatured = () => {
  const { data } = useWeeklyApi({ isReal: true })

  const List = [
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
  ]

  return (
    <Root>
      <Main>
        <Heading>Weekly Featured</Heading>
        <StyledSlider CardComponent={ContentCard} List={List} />
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

export const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  @media ${mobileM} {
    font-weight: 600;
    font-size: 25px;
    line-height: 29px;
  }
  color: ${props => props.theme.palette.headingColor.main};
  padding-left: var(--element-left-spacing);
`

export default WeeklyFeatured
