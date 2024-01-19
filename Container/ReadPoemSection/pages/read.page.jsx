import styled from '@emotion/styled'
import { create } from 'zustand'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useChapterListService } from '../service/ChapterList.service'
import { useChapterContentService } from '../service/ChapterContent.service'

import ChapterSection from '../Section/ChapterSection'
import DetailsSection from '../Section/DetailsSection'
import ChapterModal from '../components/ChapterModal'
import { Fab, LinearProgress, useMediaQuery, useTheme } from '@mui/material'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'

const useReadPageMetaStore = create(set => ({
  scrollPositionY: 0,
  bodyHeight: 0,
  isResetScrollPositionRequired: false,
  setResetScrollPositionRequired: value => {
    set(state => ({
      ...state,
      isResetScrollPositionRequired: value,
    }))
  },
  setScrollPositionY: value => {
    set(state => ({
      ...state,
      scrollPositionY: value,
    }))
  },
  setBodyHeight: value => {
    set(state => ({
      ...state,
      bodyHeight: value,
    }))
  },
}))

const ReadPoemPage = () => {
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:480px)')
  const poemId = parseInt(router?.query?.poemId)
  const chapterId = parseInt(router?.query?.chapterId)
  const theme = useTheme()

  const mainRef = useRef()
  const bodyRef = useRef()

  const [IsChapterIndexModalOpen, setIsChapterIndexModalOpen] = useState(false)

  const { mutateAsync, isLoading } = useChapterContentService({ poemId: poemId })
  const { ChapterList, setChapterLoadedById, isSuccess, reload } = useChapterListService({
    poemId: poemId,
    chapterId: chapterId,
  })

  const isFirstChapterLoaded = useMemo(() => {
    const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
    if (currentChapterIndex === 0) return true
    return false
  }, [ChapterList])

  const LoadedChapterList = useMemo(() => {
    return ChapterList?.filter(item => item.isLoaded)
  }, [ChapterList])

  const handleToScrollToPreviousPosition = useCallback(() => {
    const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
    if (currentChapterIndex === 1) {
      const thirdChild = bodyRef?.current?.children[2]
      const thirdChildTop = thirdChild?.getBoundingClientRect().top - theme.mixins.toolbar.minHeight

      mainRef.current?.scrollBy({
        top: thirdChildTop,
        left: 0,
      })
    } else {
      const secondChild = bodyRef?.current?.children[1]
      const secondChildTop = secondChild?.getBoundingClientRect().top - theme.mixins.toolbar.minHeight

      mainRef.current?.scrollBy({
        top: secondChildTop,
        left: 0,
      })
    }
  }, [ChapterList, theme.mixins.toolbar.minHeight])

  useEffect(() => {
    if (isSuccess) {
      mainRef.current?.scrollBy({
        top: 0,
        left: 0,
      })
    }
  }, [isSuccess])

  const handleScrolledTop = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
      if (currentChapterIndex === 0) return

      const previousChapterIndex = currentChapterIndex - 1
      const previousChapterId = ChapterList?.[previousChapterIndex]?.chapterId
      const response = await mutateAsync({ chapterId: previousChapterId })

      if (response?.chapterId === previousChapterId) {
        setChapterLoadedById(previousChapterId)
        handleToScrollToPreviousPosition()
      }
    } catch (error) {
      console.log(error)
    }
  }, [ChapterList, mutateAsync, setChapterLoadedById, handleToScrollToPreviousPosition])

  const handleScrolledBottom = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.chapterId === chapterId)

      if (currentChapterIndex === ChapterList.length - 1) return

      const nextChapterIndex = currentChapterIndex + 1
      const nextChapterId = ChapterList?.[nextChapterIndex]?.chapterId

      const response = await mutateAsync({ chapterId: nextChapterId })
      if (response?.chapterId === nextChapterId) {
        setChapterLoadedById(nextChapterId)
      }
    } catch (error) {
      console.log(error)
    }
  }, [ChapterList, chapterId, mutateAsync, setChapterLoadedById])

  const handleOnScroll = useCallback(
    event => {
      if (!isLoading) {
        const isScrolledToBottom = Math.ceil(event.target?.scrollHeight - event.target?.scrollTop) === event.target?.clientHeight + 2
        const isScrolledToTop = event.target?.scrollTop === 0

        if (isScrolledToTop) {
          if (!isMobile) handleScrolledTop()
        }

        if (isScrolledToBottom && !isMobile) {
          handleScrolledBottom()
        }
      }
    },
    [handleScrolledBottom, handleScrolledTop, isLoading, isMobile],
  )

  const handleOpenChapterModal = useCallback(() => {
    setIsChapterIndexModalOpen(true)
  }, [])

  return (
    <>
      <ChapterModal open={IsChapterIndexModalOpen} setOpen={setIsChapterIndexModalOpen} chapterList={ChapterList} reload={reload} />
      {isLoading && (
        <LinearProgress
          sx={{
            position: 'fixed',
            top: theme => theme.mixins.toolbar.minHeight,
            zIndex: 10000,
            width: '100%',
          }}
        />
      )}
      <Fab
        onClick={handleOpenChapterModal}
        aria-label="Chapter Index"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
        }}>
        <FormatListNumberedRoundedIcon />
      </Fab>
      <Root>
        <Main
          ref={mainRef}
          onScroll={handleOnScroll}
          style={
            isMobile
              ? {
                  overflowY: isLoading ? 'clip' : 'scroll',
                }
              : {}
          }>
          <Body ref={bodyRef}>
            {isFirstChapterLoaded ? <DetailsSection /> : <></>}

            {LoadedChapterList?.map((chapter, index) => (
              <ChapterSection
                key={chapter?.chapterId}
                item={chapter}
                isFirstChapter={index === 0 && isMobile}
                isLastChapter={index === LoadedChapterList.length - 1 && isMobile}
                onReachedStart={handleScrolledTop}
                onReachedEnd={handleScrolledBottom}
                disabledReachEvent={isLoading}
              />
            ))}
          </Body>
        </Main>
      </Root>
    </>
  )
}
export default memo(ReadPoemPage)

const Root = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: auto;
  overflow: hidden;
`

const Main = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.mixins.toolbar.minHeight}px);
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  background-color: ${({ theme }) => theme.palette.primary.main}22;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overscroll-behavior: contain;
`

const Body = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px 28px;
  @media (max-width: 480px) {
    padding: 10px 18px;
  }
  padding-top: 0px;
  background-color: ${({ theme }) => theme.palette.background.paper};
`
