import React from 'react'
import StyledChip from './StyledChip'
import styled from '@emotion/styled'
import { ContentType } from 'Container/RecommendationSlider/constants/common.constants'

export const ContentTypes = [
  ContentType.BOOK,
  ContentType.POEM,
  //'story',
]

const ContentTabs = ({ currentContent, onChange }) => {
  return (
    <ContentListBox>
      {ContentTypes.map((item, index) => (
        <StyledChip key={item} active={currentContent === item} label={item} onClick={() => onChange(item)} />
      ))}
    </ContentListBox>
  )
}

const ContentListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 415px) {
    justify-content: flex-end;
    margin-left: auto;
    margin-right: 12px;
  }
`
export default ContentTabs
