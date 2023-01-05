import styled from '@emotion/styled'
import { useMediaQuery } from '@mui/material'
import React from 'react'
import CreateReviewSection from './components/CreateReviewSection'
import Heading from './components/Heading'
import RatingSection from './components/RatingSection'

const ReviewSection = () => {
  const isTablet = useMediaQuery('(max-width: 735px)')

  return (
    <Root>
      <StyledDivider />
      <Body>
        <Main>
          <Heading />
          <RatingSection />
        </Main>
        {isTablet && <StyledDivider />}
        <CreateReviewSection />
      </Body>
      <StyledDivider />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  gap: 30px;
  margin-inline: var(--main-side-spacing);
  max-width: var(--main-max-width);
  width: calc(100% - var(--main-side-spacing) * 2);
  align-self: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`
const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 735px) {
    align-items: stretch;
    flex-direction: column;
  }
`

const StyledDivider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${({ theme }) => theme.palette.primary.main}18;
  align-self: center;
`

export default ReviewSection
