import styled from '@emotion/styled'
import { create } from 'zustand'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useMemo, useRef } from 'react'

import { useChapterListService } from '../service/ChapterList.service'
import { useChapterContentService } from '../service/ChapterContent.service'

import ChapterSection from '../Section/ChapterSection'
import DetailsSection from '../Section/DetailsSection'

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

const ReadBookPage = () => {
  const router = useRouter()

  const bookId = parseInt(router?.query?.bookId)
  const chapterId = parseInt(router?.query?.chapterId)

  const mainRef = useRef() // container with scrollbar
  const bodyRef = useRef() // child of container which contains all the chapters

  const scrollPositionY = useReadPageMetaStore(state => state.scrollPositionY)
  const setScrollPositionY = useReadPageMetaStore(state => state.setScrollPositionY)
  const bodyHeight = useReadPageMetaStore(state => state.bodyHeight)
  const setBodyHeight = useReadPageMetaStore(state => state.setBodyHeight)
  const isResetScrollPositionRequired = useReadPageMetaStore(state => state.isResetScrollPositionRequired)
  const setResetScrollPositionRequired = useReadPageMetaStore(state => state.setResetScrollPositionRequired)

  const { mutateAsync, isLoading } = useChapterContentService({ bookId: bookId })
  const { ChapterList, setChapterLoadedById, isSuccess } = useChapterListService({
    bookId: bookId,
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
    if (currentChapterIndex === 0) {
      const firstChild = bodyRef?.current?.firstChild
      const secondChild = bodyRef?.current?.children[1]

      const totalHeight = firstChild?.offsetHeight + secondChild?.offsetHeight + scrollPositionY

      mainRef.current?.scrollBy({
        top: totalHeight,
        left: 0,
      })
    } else {
      const firstChild = bodyRef?.current?.firstChild
      const totalHeight = firstChild?.offsetHeight + scrollPositionY

      mainRef.current?.scrollBy({
        top: totalHeight,
        left: 0,
      })
    }
  }, [ChapterList, scrollPositionY])

  useEffect(() => {
    if (isSuccess) {
      mainRef.current?.scrollBy({
        top: 5,
        left: 0,
      })
    }
  }, [isSuccess])

  useEffect(() => {
    if (bodyHeight !== bodyRef?.current?.offsetHeight) {
      if (isResetScrollPositionRequired) {
        handleToScrollToPreviousPosition()
        setResetScrollPositionRequired(false)
      }
      setBodyHeight(bodyRef?.current?.offsetHeight)
    }
  }, [
    bodyHeight,
    handleToScrollToPreviousPosition,
    bodyRef?.current?.offsetHeight,
    setBodyHeight,
    isResetScrollPositionRequired,
    setResetScrollPositionRequired,
  ])

  const handleScrolledTop = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
      if (currentChapterIndex === 0) return

      const previousChapterIndex = currentChapterIndex - 1
      const previousChapterId = ChapterList?.[previousChapterIndex]?.chapterId
      const response = await mutateAsync({ chapterId: previousChapterId })

      if (response?.chapterId === previousChapterId) {
        setScrollPositionY(mainRef.current?.scrollTop)
        setChapterLoadedById(previousChapterId)
        setBodyHeight(bodyRef.current?.offsetHeight)
        setResetScrollPositionRequired(true)
      }
    } catch (error) {
      console.log(error)
    }
  }, [
    ChapterList,
    mutateAsync,
    setScrollPositionY,
    setChapterLoadedById,
    setBodyHeight,
    setResetScrollPositionRequired,
  ])

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
        const isScrolledToBottom =
          Math.ceil(event.target?.scrollHeight - event.target?.scrollTop) === event.target?.clientHeight + 2
        const isScrolledToTop = event.target?.scrollTop === 0

        if (isScrolledToTop) {
          handleScrolledTop()
        }

        if (isScrolledToBottom) {
          handleScrolledBottom()
        }
      }
    },
    [handleScrolledBottom, handleScrolledTop, isLoading],
  )

  return (
    <Root>
      <Main ref={mainRef} onScroll={handleOnScroll}>
        <Body ref={bodyRef}>
          {isFirstChapterLoaded ? <DetailsSection /> : <></>}

          {LoadedChapterList?.map(chapter => (
            <ChapterSection key={chapter?.chapterId} item={chapter} />
          ))}
        </Body>
      </Main>
    </Root>
  )
}
export default memo(ReadBookPage)

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
