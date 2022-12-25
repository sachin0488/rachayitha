import React from 'react'
import styled from '@emotion/styled'
import StyledSlider from 'Components/StyledSlider'
import { Typography } from '@mui/material'
import { mobileM, tablet } from 'styles/mediaQuery/breakPoints'

import { ErrorBar, LoadingBar, NotAvailableBar } from 'container/Landing/components/CardComponents'
import { mainMaxWidth } from 'Container/Landing/common/common.styles'
import ContentCard from './components/ContentCard'
import useNewArrivalApi from 'container/Landing/Sections/NewArrivalsCards/Api/newArrivalCard.hook'

const RecommendationSection = () => {
  const { data, isLoading, isError } = useNewArrivalApi({ isReal: true })

  const List = [
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
    ...(data?.data?.data || []),
  ]

  return (
    <Root>
      <Main>
        <Heading>You may also Like</Heading>
        {isLoading ? (
          <LoadingBar />
        ) : isError ? (
          <ErrorBar />
        ) : (data?.data?.data || []).length === 0 ? (
          <NotAvailableBar />
        ) : (
          <StyledSlider CardComponent={ContentCard} List={List} />
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
  @media ${mobileM} {
    padding-block: 0px;
  }
  @media ${tablet} {
    padding-block: 40px;
  }

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

export default RecommendationSection
