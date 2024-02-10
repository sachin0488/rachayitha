import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { useChapterListService } from '../service/ChapterList.service'
import { useChapterContentService } from '../service/ChapterContent.service'

import ChapterSection from '../Section/ChapterSection'
import DetailsSection from '../Section/DetailsSection'
import ChapterModal from '../components/ChapterModal'
import { Fab, LinearProgress, Typography, useMediaQuery, useTheme } from '@mui/material'
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded'
import { useUserService } from 'modules/Auth/service/User.service'
import MobileChapterNavigation from '../Section/MobileChapterNavigation'
import clsx from 'clsx'
import { useDebounce } from '@uidotdev/usehooks'
import LoadingBox from '../Section/ChapterSection/components/LoadingBox'

const ReaderSectionPage = ({ contentType, slug, contentId, chapterId, chapterSlug }) => {
  const theme = useTheme()
  const mainRef = useRef()
  const bodyRef = useRef()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:630px)')

  const [isChapterNavigationVisible, setIsChapterNavigationVisible] = useState(true)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const isInitialLoadingDebounced2 = useDebounce(isInitialLoading, 2000)
  const isInitialLoadingDebounced = useDebounce(isInitialLoading, 1000)
  const [IsChapterIndexModalOpen, setIsChapterIndexModalOpen] = useState(false)
  const { isLoggedIn } = useUserService()
  const { mutateAsync, isLoading } = useChapterContentService({ contentId: contentId, contentType })
  const { ChapterList, clearCacheExceptLCN, setChapterLoadedById, isSuccess, isReloading, reload } = useChapterListService({
    contentId: contentId,
    chapterId: chapterId,
    contentType,
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

  const handleToScrollToPreviousPosition = useCallback(
    props => {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)

      let ViewPortHeight = 0

      if (props?.addViewPortHeight && window?.innerHeight) {
        ViewPortHeight = window.innerHeight
      }

      if (currentChapterIndex === 1) {
        const thirdChild = bodyRef?.current?.children[2]
        const thirdChildTop = thirdChild?.getBoundingClientRect().top - theme.mixins.toolbar.minHeight

        mainRef.current?.scrollBy({
          top: thirdChildTop - ViewPortHeight,
          left: 0,
        })
      } else {
        const secondChild = bodyRef?.current?.children[1]
        const secondChildTop = secondChild?.getBoundingClientRect().top - theme.mixins.toolbar.minHeight

        mainRef.current?.scrollBy({
          top: secondChildTop - ViewPortHeight,
          left: 0,
        })
      }
    },
    [ChapterList, theme.mixins.toolbar.minHeight],
  )

  useEffect(() => {
    if (isSuccess) {
      mainRef.current?.scrollBy({
        top: 80,
        left: 0,
      })
      setIsInitialLoading(false)
    }
  }, [isSuccess])

  const handleScrolledTop = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.isLoaded)
      if (currentChapterIndex === 0) return

      const previousChapterIndex = currentChapterIndex - 1
      const previousChapterId = ChapterList?.[previousChapterIndex]?.chapterId

      clearCacheExceptLCN({
        chapterId: previousChapterId,
      })
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
  }, [ChapterList, clearCacheExceptLCN, isLoggedIn, mutateAsync, setChapterLoadedById, handleToScrollToPreviousPosition])

  const handleScrolledBottom = useCallback(async () => {
    try {
      const currentChapterIndex = ChapterList?.findIndex(chapter => chapter?.chapterId === chapterId)

      if (currentChapterIndex === ChapterList.length - 1) return

      const nextChapterIndex = currentChapterIndex + 1
      const nextChapterId = ChapterList?.[nextChapterIndex]?.chapterId

      clearCacheExceptLCN({
        chapterId: nextChapterId,
      })
      if (isLoggedIn) {
        const response = await mutateAsync({ chapterId: nextChapterId })
        if (response?.chapterId === nextChapterId) {
          setChapterLoadedById(nextChapterId)
          handleToScrollToPreviousPosition({ addViewPortHeight: true })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [ChapterList, clearCacheExceptLCN, isLoggedIn, chapterId, mutateAsync, setChapterLoadedById, handleToScrollToPreviousPosition])

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

      return <ChapterSection item={currentChapter} contentId={contentId} contentType={contentType} slug={slug} />
    }

    return LoadedChapterList?.map((chapter, index) => (
      <ChapterSection key={chapter?.chapterId} item={chapter} contentId={contentId} contentType={contentType} slug={slug} />
    ))
  }, [LoadedChapterList, chapterId, contentId, contentType, isMobile, slug])

  const handleNavigateToNextChapter = useCallback(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === ChapterList.length - 1) return

    const nextChapterIndex = currentChapterIndex + 1
    const nextChapterId = ChapterList?.[nextChapterIndex]?.chapterId
    const nextChapterSlug = ChapterList?.[nextChapterIndex]?.chapterSlug

    reload({ chapterId: nextChapterId })

    clearCacheExceptLCN({
      chapterId: nextChapterId,
    })

    router
      .replace(
        {
          pathname: `/${contentType}/${contentId}/${slug}/read/${nextChapterId}/${nextChapterSlug}`,
        },
        null,
        { shallow: true },
      )
      .catch(e => {
        if (!e.cancelled) {
          console.error(e)
        }
      })
    mainRef.current?.scrollTo({
      top: 0,
      left: 0,
    })
  }, [ChapterList, LoadedChapterList, chapterId, clearCacheExceptLCN, contentId, contentType, reload, router, slug])

  const handleNavigateToPreviousChapter = useCallback(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === 0) return

    const previousChapterIndex = currentChapterIndex - 1
    const previousChapterId = ChapterList?.[previousChapterIndex]?.chapterId
    const previousChapterSlug = ChapterList?.[previousChapterIndex]?.chapterSlug

    reload({ chapterId: previousChapterId })

    clearCacheExceptLCN({
      chapterId: previousChapterId,
    })

    router
      .replace(
        {
          pathname: `/${contentType}/${contentId}/${slug}/read/${previousChapterId}/${previousChapterSlug}`,
        },
        null,
        { shallow: true },
      )
      .catch(e => {
        if (!e.cancelled) {
          console.error(e)
        }
      })
    mainRef.current?.scrollTo({
      top: 0,
      left: 0,
    })
  }, [ChapterList, LoadedChapterList, chapterId, clearCacheExceptLCN, contentId, contentType, reload, router, slug])

  const [isFirstChapter, isLastChapter] = useMemo(() => {
    const currentChapter = LoadedChapterList?.find(chapter => chapter.chapterId === chapterId)
    const currentChapterIndex = ChapterList?.findIndex(chapter => currentChapter?.chapterId === chapter?.chapterId)

    if (currentChapterIndex === ChapterList?.length - 1) return [false, true]

    if (currentChapterIndex === 0) return [true, false]

    return [false, false]
  }, [ChapterList, LoadedChapterList, chapterId])

  return (
    <>
      {isInitialLoadingDebounced2 ? (
        <Loader
          className={clsx({
            hidden: !isInitialLoadingDebounced,
          })}>
          <main>
            <Typography variant="h2">Loading</Typography>
            <StyledLinearProgress />
          </main>
        </Loader>
      ) : null}
      <ChapterModal
        contentType={contentType}
        contentId={contentId}
        open={IsChapterIndexModalOpen}
        setOpen={setIsChapterIndexModalOpen}
        chapterList={ChapterList}
        reload={(...props) => {
          mainRef?.current?.scrollTo({
            top: 80,
            left: 0,
          })
          reload(...props)
        }}
        slug={slug}
      />
      {isMobile ? (
        <>{isReloading && <LoadingBox />}</>
      ) : (
        <>
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
        </>
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
            {isFirstChapterLoaded ? <DetailsSection contentType={contentType} contentId={contentId} slug={slug} /> : <></>}
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
export default memo(ReaderSectionPage)

const StyledLinearProgress = styled(LinearProgress)`
  width: 100%;
  width: 200px;
  max-width: 75%;
  border-radius: 4px;
  height: 7px;
`

const Root = styled.div`
  width: 100%;
  height: 100vh;

  margin-top: auto;
  overflow: hidden;
`

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff92;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  main {
    background: #ffffff;
    padding: 15px 20px 26px;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
    box-shadow: 0px 0px 50px 10px ${({ theme }) => theme.palette.primary.main}17;
  }
  transition: all 0.3s;
  opacity: 1;
  &.hidden {
    opacity: 0.3;
    transform: translateY(-120%);
    /* pointer-events: none; */
  }
`

const Main = styled.div`
  width: 100%;
  /* height: calc(100vh - ${({ theme }) => theme.mixins.toolbar.minHeight}px); */
  height: 100%;
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  /* background-color: ${({ theme }) => theme.palette.primary.main}22; */
  background-color: #ede9f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overscroll-behavior: contain;
  padding-top: 20px;
  padding-inline: 15px;
  @media (max-width: 380px) {
    padding-inline: 10px;
    padding-top: 10px;
  }
`

const Body = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  /* padding-top: 0px; */
  @media (max-width: 630px) {
    padding-bottom: 76px;
  }
`

const matchNumbers = (a, b) => {
  return b >= a - 10 && b <= a + 10
}
