import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Chapter = ({ chapter, colorProp }) => {
  const router = useRouter()
  const { book } = router.query
  return (
    <>
      <Link href={`${book}/${chapter?.id}`}>
        <EachChapterWrapper colorProp={colorProp}>
          <ChapterName>
            Chapter {chapter?.chapter_sequence} : {chapter?.chapter_content}
          </ChapterName>
        </EachChapterWrapper>
      </Link>
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
  cursor: pointer;
  background-color: ${({ colorProp }) => colorProp};
`
const ChapterName = styled(Typography)`
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  color: #02428c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
