import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { InView } from 'react-intersection-observer'

import DividerBar from 'Container/ReadPoemSection/components/DividerBar'

const ChapterSection = ({ item }) => {
  const { query, push } = useRouter()

  return (
    <Root
      id={`chapter-${item?.id}`}
      as="div"
      threshold={0.3}
      delay={200}
      onChange={(inView, entry) => {
        if (inView) {
          push(
            {
              pathname: `/poem/${query.poemId}/read/${item?.chapterId}`,
            },
            undefined,
            { shallow: true },
          )
        }
      }}>
      <ChapterName variant="h5" component="div" color="secondary">
        Chapter: {item?.chapterSequence} {item?.chapterTitle}
      </ChapterName>
      <ChapterContentText dangerouslySetInnerHTML={{ __html: item?.chapterContent }} />
      <DividerBar style={{ marginTop: 'auto' }} />
    </Root>
  )
}

const Root = styled(InView)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  min-height: 100vh;
  overflow-x: hidden;
  padding-bottom: 10px;
`

const ChapterName = styled(Typography)`
  font-weight: 600;
`

const ChapterContentText = styled(Typography)`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.secondary.main}ee;
`

export default ChapterSection
