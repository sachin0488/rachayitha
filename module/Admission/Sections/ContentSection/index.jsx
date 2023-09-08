import styled from '@emotion/styled'

import { Button, Typography, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import Body from './components/Body'

const ContentSection = ({ title, contentList, breakPoint }) => {
  const isTablet = useMediaQuery(`(min-width: ${breakPoint}px)`)
  const isTabletSM = useMediaQuery(`(max-width: 850px)`)

  return (
    <Root>
      <Main>
        <HeadingBox>
          <Heading>{title}</Heading>
        </HeadingBox>
        {contentList.map((item, index) => {
          return <Body item={item} key={item.id} />
        })}
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
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  gap: 10px;
  overflow: hidden;
`

const HeadingBox = styled.div`
  display: flex;
  gap: 8px;
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-transform: capitalize;

  @media (max-width: 350px) {
    font-size: 25px;
  }
`

export default ContentSection
