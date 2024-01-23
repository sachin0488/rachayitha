import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Button, Typography } from '@mui/material'
import { InView } from 'react-intersection-observer'

import DividerBar from 'Container/ReadBookSection/components/DividerBar'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded'
import InfoModal from 'Components/StyledModal/InfoModal'
import { InternalPurchaseOrderType, useInternalPurchaseService } from 'Container/Payment/services/InternalPurchase.service'
import Paywall from './components/Paywall'
import { useUserService } from 'Container/Auth/service/User.service'
import SigninWall from './components/SigninWall'

const ChapterSection = ({ item, isFirstChapter, isLastChapter, disabledReachEvent, onReachedStart, onReachedEnd }) => {
  const { query, replace } = useRouter()
  const { isLoggedIn } = useUserService()
  return (
    <Root
      id={`chapter-${item?.chapterId}`}
      as="div"
      threshold={0}
      delay={200}
      onChange={(inView, entry) => {
        if (inView) {
          replace(
            {
              pathname: `/book/${query.bookId}/${query.slug}/read/${item?.chapterId}`,
            },
            null,
            { shallow: true },
          ).catch(e => {
            if (!e.cancelled) {
              console.error(e)
            }
          })
        }
      }}>
      {/* <TopReachedView
        as="div"
        threshold={0}
        delay={200}
        onChange={inView => {
          if (!disabledReachEvent && inView && isFirstChapter) {
            onReachedStart()
          }
        }}
        > */}
      <ChapterName variant="h5" component="div" color="secondary">
        Chapter: {item?.chapterSequence} {item?.chapterTitle}
      </ChapterName>
      {/* </TopReachedView> */}
      {isLoggedIn ? (
        <>
          {item.isLocked ? (
            <Paywall
              coinRequired={item?.coinRequired}
              bookId={item?.bookId}
              chapterId={item?.chapterId}
              chapterSequence={item?.chapterSequence}
              chapterTitle={item?.chapterTitle}
              isPaid={item?.isPaid}
              isAvailableInSubscription={item?.isAvailableInSubscription}
            />
          ) : (
            <ChapterContentText dangerouslySetInnerHTML={{ __html: item?.chapterContent }} />
          )}
        </>
      ) : (
        <SigninWall />
      )}

      {/* <BottomReachedView
        as="div"
        threshold={0}
        delay={200}
        onChange={inView => {
          if (!disabledReachEvent && inView && isLastChapter) {
            onReachedEnd()
          }
        }}> */}
      <BottomReachedView>
        <DividerBar />
      </BottomReachedView>
    </Root>
  )
}

const Root = styled(InView)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  min-height: 120vh;
  overflow-x: hidden;
  padding-bottom: 10px;
`

// const TopReachedView = styled(InView)``

const BottomReachedView = styled.div`
  margin-top: auto;
`
// const BottomReachedView = styled(InView)`
//   margin-top: auto;
// `

const ChapterName = styled(Typography)`
  font-weight: 600;
`

const ChapterContentText = styled(Typography)`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.secondary.main}ee;
`
export default ChapterSection
