import styled from '@emotion/styled'
import React from 'react'
import ContentCard from './ContentCard'

const ContentListSection = ({ contentName, contentList }) => {
  return (
    <Root>
      <ContentName>{contentName}</ContentName>
      {contentList?.map(item => (
        <ContentCard key={item.id} item={item} />
      ))}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 33%;
  height: 100%;
`

const ContentName = styled.div`
  font-weight: 600;
  font-size: 27px;
  color: #000000cb;
  line-height: 3;
`

export default ContentListSection
