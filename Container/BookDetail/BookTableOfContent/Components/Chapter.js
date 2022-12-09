import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const Chapter = ({ chapter, colorProp }) => {
  return (
    <>
      <EachChapterWrapper colorProp={colorProp}>
        <ChapterName>
          Chapter {chapter?.chapter_sequence} : {chapter?.chapter_content}
        </ChapterName>
      </EachChapterWrapper>
    </>
  )
}

export default Chapter

const EachChapterWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 55px;
  align-items: center;
  width: 100%;
  background-color: ${({ colorProp }) => colorProp};
`
const ChapterName = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  color: #02428c;
`
