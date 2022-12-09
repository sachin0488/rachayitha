import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'

import { useTopCollection } from './api/topCollection.hook'
import ContentListSection from './components/ContentListSection'

const TopCollection = () => {
  const { data } = useTopCollection()

  return (
    <Root>
      <Main>
        <Heading>
          Top collection over <HighlightedHeading>Last 7 days</HighlightedHeading>
        </Heading>
        <CollectionList>
          <ContentListSection contentName="Novel" contentList={data} />
          <ContentListSection contentName="Poems" contentList={data} />
          <ContentListSection contentName="Shorts" contentList={data} />
        </CollectionList>
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
  overflow: hidden;
`

const Main = styled.div`
  width: 100%;
  max-width: var(--main-max-width);
  display: flex;
  flex-direction: column;
  padding-inline: var(--main-side-spacing);
  padding-block: 40px;
  height: calc(100vh - 70px);
  max-height: 1090px;
  gap: 10px;
`

const Heading = styled(Typography)`
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
`

const HighlightedHeading = styled.span`
  font-weight: 600;
  font-size: 29px;
  line-height: 34px;
  color: ${props => props.theme.palette.primary.main};
`

const CollectionList = styled.div`
  width: 100%;
  height: calc(100% - 44px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export default TopCollection
