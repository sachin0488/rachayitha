import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useChapterListService } from '../service/ChapterList.service'
import { useChapterContentService } from '../service/ChapterContent.service'

import ChapterSection from '../Section/ChapterSection'
import DetailsSection from '../Section/DetailsSection'
import ChapterModal from '../components/ChapterModal'
import { Fab, LinearProgress, useMediaQuery, useTheme } from '@mui/material'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import { useUserService } from 'Container/Auth/service/User.service'
import MobileChapterNavigation from '../Section/MobileChapterNavigation'

const ReadPoemPage = () => {
  const theme = useTheme()
  const mainRef = useRef()
  const bodyRef = useRef()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:630px)')
  const [isChapterNavigationVisible, setIsChapterNavigationVisible] = useState(true)
  const poemId = parseInt(router?.query?.poemId)
  const chapterId = parseInt(router?.query?.chapterId)

  const [IsChapterIndexModalOpen, setIsChapterIndexModalOpen] = useState(false)
  const { isLoggedIn } = useUserService()
  const { mutateAsync, isLoading } = useChapterContentService({ poemId: poemId })
  const { ChapterList, setChapterLoadedById, isSuccess, reload } = useChapterListService({
    poemId: poemId,
    chapterId: chapterId,
  })

  const LoadedChapterList = useMemo(() => {
    return ChapterList?.filter(item => item.isLoaded)
  }, [ChapterList])

  const isFirstChapterLoaded = useMemo(() => {
    if (isMobile) {
      const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
      const firstChapter = ChapterList?.[0]
      if (currentChapter?.chapterId === firstChapter?.chapterId) return true
      else return false
    }

    const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
    if (currentChapterIndex === 0) return true
    return false
  }, [ChapterList, LoadedChapterList, chapterId, isMobile])

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
      if (isLoggedIn) {
        const response = await mutateAsync({ chapterId: previousChapterId })

        if (response?.chapterId === previousChapterId) {
          setChapterLoadedById(previousChapterId)
          handleToScrollToPreviousPosition()
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [ChapterList, mutateAsync, setChapterLoadedById, handleToScrollToPreviousPosition, isLoggedIn])

  const handleScrolledBottom = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.chapterId === chapterId)

      if (currentChapterIndex === ChapterList.length - 1) return

      const nextChapterIndex = currentChapterIndex + 1
      const nextChapterId = ChapterList?.[nextChapterIndex]?.chapterId
      if (isLoggedIn) {
        const response = await mutateAsync({ chapterId: nextChapterId })
        if (response?.chapterId === nextChapterId) {
          setChapterLoadedById(nextChapterId)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [ChapterList, chapterId, mutateAsync, setChapterLoadedById, isLoggedIn])

  const handleOnScroll = useCallback(
    event => {
      if (isMobile) return

      if (!isLoading) {
        const isScrolledToBottom = matchNumbers(
          Math.ceil(event.target?.clientHeight),
          Math.ceil(event.target?.scrollHeight - event.target?.scrollTop),
        )
        const isScrolledToTop = event.target?.scrollTop === 0

        if (isScrolledToTop) {
          handleScrolledTop()
        }

        if (isScrolledToBottom) {
          handleScrolledBottom()
        }
      }
    },
    [handleScrolledBottom, handleScrolledTop, isLoading, isMobile],
  )

  const handleOpenChapterModal = useCallback(() => {
    setIsChapterIndexModalOpen(true)
  }, [])

  const renderChapterList = useMemo(() => {
    if (Array.isArray(LoadedChapterList) === false) return <></>

    if (isMobile) {
      const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)

      return (
        <ChapterSection
          item={currentChapter}
          isFirstChapter={currentChapter?.chapterId === LoadedChapterList[0]?.chapterId}
          isLastChapter={currentChapter?.chapterId === LoadedChapterList[LoadedChapterList.length - 1]?.chapterId}
          onReachedStart={handleScrolledTop}
          onReachedEnd={handleScrolledBottom}
          disabledReachEvent={isLoading}
        />
      )
    }

    return LoadedChapterList?.map((chapter, index) => (
      <ChapterSection
        key={chapter?.chapterId}
        item={chapter}
        isFirstChapter={index === 0 && isMobile}
        isLastChapter={index === LoadedChapterList.length - 1 && isMobile}
        onReachedStart={handleScrolledTop}
        onReachedEnd={handleScrolledBottom}
        disabledReachEvent={isLoading}
      />
    ))
  }, [LoadedChapterList, chapterId, handleScrolledBottom, handleScrolledTop, isLoading, isMobile])

  const handleNavigateToNextChapter = useCallback(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === ChapterList.length - 1) return

    const nextChapterIndex = currentChapterIndex + 1
    const nextChapterId = ChapterList?.[nextChapterIndex]?.chapterId

    reload({ chapterId: nextChapterId })

    const query = router?.query
    router
      .replace(
        {
          pathname: `/poem/${query.poemId}/${query.slug}/read/${nextChapterId}`,
        },
        null,
        { shallow: true },
      )
      .catch(e => {
        if (!e.cancelled) {
          console.error(e)
        }
      })
  }, [ChapterList, LoadedChapterList, chapterId, reload, router])

  const handleNavigateToPreviousChapter = useCallback(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === 0) return

    const previousChapterIndex = currentChapterIndex - 1
    const previousChapterId = ChapterList?.[previousChapterIndex]?.chapterId

    reload({ chapterId: previousChapterId })

    const query = router?.query
    router
      .replace(
        {
          pathname: `/poem/${query.poemId}/${query.slug}/read/${previousChapterId}`,
        },
        null,
        { shallow: true },
      )
      .catch(e => {
        if (!e.cancelled) {
          console.error(e)
        }
      })
  }, [ChapterList, LoadedChapterList, chapterId, reload, router])

  const [isFirstChapter, isLastChapter] = useMemo(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === ChapterList?.length - 1) return [false, true]

    if (currentChapterIndex === 0) return [true, false]

    return [false, false]
  }, [ChapterList, LoadedChapterList, chapterId])

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
      {!isMobile && (
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
      )}
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
          <Body ref={bodyRef} onClick={() => setIsChapterNavigationVisible(pre => !pre)}>
            {isFirstChapterLoaded ? <DetailsSection /> : <></>}

            {renderChapterList}
          </Body>
          {isMobile && (
            <MobileChapterNavigation
              isVisible={isChapterNavigationVisible}
              isFirstChapter={isFirstChapter}
              isLastChapter={isLastChapter}
              handleOpenChapterModal={handleOpenChapterModal}
              handleNavigateToPreviousChapter={handleNavigateToPreviousChapter}
              handleNavigateToNextChapter={handleNavigateToNextChapter}
            />
          )}
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
  @media (max-width: 630px) {
    padding-bottom: 90px;
  }
  background-color: ${({ theme }) => theme.palette.background.paper};
`

const matchNumbers = (a, b) => {
  return b >= a - 10 && b <= a + 10
}
