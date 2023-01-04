import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import DividerBar from 'container/ReadSection/components/DividerBar'
import { Typography } from '@mui/material'
import { useChapterContent } from 'container/ReadSection/api/read.hooks'
import LoadingBox from './components/LoadingBox'
import { useDispatch, useSelector } from 'react-redux'
import { selectChapter, setIsLoading } from 'container/ReadSection/slices/chapter.slice'
import { useIntersectionObserver, useTrackVisibility } from 'react-intersection-observer-hook'
import { InView, useInView } from 'react-intersection-observer'

const ChapterSection = ({ item, mainRef }) => {
  const { query, push } = useRouter()
  const { ChapterContent, isLoading } = useChapterContent(query.bookId, item?.id)
  const { loadingForChapterId } = useSelector(selectChapter)
  const dispatch = useDispatch()

  useEffect(() => {
    if (Number(loadingForChapterId) === Number(item?.id)) {
      dispatch(setIsLoading(isLoading))
    }
  }, [dispatch, isLoading, item?.id, loadingForChapterId])

  if (isLoading) {
    return <LoadingBox />
  }

  return (
    <InView
      id={`chapter-${item?.id}`}
      as="div"
      root={mainRef?.current}
      rootMargin="72px"
      threshold={0.3}
      delay={200}
      onChange={(inView, entry) => {
        if (inView) {
          push(
            {
              pathname: `/book/${query.bookId}/read/${item?.id}`,
            },
            undefined,
            { shallow: true },
          )
        }
      }}>
      <Root>
        <ChapterName variant="h5" color="secondary">
          Chapter: {item?.chapter_sequence} {item?.chapter_title}
        </ChapterName>
        {JSON.stringify(ChapterContent)}
        <DividerBar style={{ marginTop: 'auto' }} />
      </Root>
    </InView>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-top: 20px;
  min-height: 100vh;
`

const ChapterName = styled(Typography)`
  font-weight: 600;
`

export default ChapterSection