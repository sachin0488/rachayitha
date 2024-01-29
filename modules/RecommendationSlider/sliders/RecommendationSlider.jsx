import React, { useState } from 'react'
import styled from '@emotion/styled'
import StyledSlider from 'components/StyledSlider'
import { Typography } from '@mui/material'
import { ErrorBar, LoadingBar, NotAvailableBar } from 'modules/RecommendationSlider/cards/components'

import { mainMaxWidth } from 'modules/BookDetail/common/styles'
import { useRecommendationService } from '../services/Recommendation.service'

import MinimalCard from '../cards/MinimalCard'
import ContentTabs, { ContentTypes } from '../components/ContentTabs'
import DataSection from '../components/DataSection'

const RecommendationSection = () => {
  const [currentContent, setCurrentContent] = useState(ContentTypes[0])

  const { List, isLoading, isError, queryKey } = useRecommendationService({ contentType: currentContent })

  return (
    <Root>
      <Main>
        <HeadingBox>
          <Heading variant="h5">You may also Like</Heading>
          <ContentTabs currentContent={currentContent} onChange={setCurrentContent} />
        </HeadingBox>

        <DataSection
          List={List}
          contentType={currentContent}
          isError={isError}
          isLoading={isLoading}
          queryKey={queryKey}
          CardComponent={MinimalCard}
        />
      </Main>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 0px;
  width: 100%;
`

const HeadingBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-block: 30px;
  gap: 10px;
  overflow: hidden;
  /* Styled Slider Settings ----- */
  --element-left-spacing: calc((100vw - var(--main-max-width)) / 2 + var(--main-side-spacing));
  @media (max-width: ${mainMaxWidth}px) {
    --element-left-spacing: var(--main-side-spacing);
  }
  margin-top: 30px;
  @media (min-width: 600px) {
    border-top: 2px solid ${({ theme }) => theme.palette.primary.main}18;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main}18;
  }
`

export const Heading = styled(Typography)`
  font-weight: 600;
  /* font-size: 25px; */
  /* line-height: 29px; */
  color: ${props => props.theme.palette.secondary.main};
  padding-left: var(--element-left-spacing);
`

export default RecommendationSection
