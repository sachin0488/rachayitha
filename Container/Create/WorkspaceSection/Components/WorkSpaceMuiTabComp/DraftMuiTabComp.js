import React from 'react'
import { ChapterText, ImportAndDeleteButtonContainer, ImportButton } from '../../../CreateStyle'

const DraftMuiTabComp = () => {
  return (
    <>
      <ChapterText>Chapter 3</ChapterText>
      <ImportAndDeleteButtonContainer>
        <ImportButton textColor="#3B66F5">Import</ImportButton>
        <ImportButton textColor="#EB1551">Delete Draft</ImportButton>
      </ImportAndDeleteButtonContainer>
    </>
  )
}

export default DraftMuiTabComp
