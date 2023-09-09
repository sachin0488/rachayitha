import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Button, Typography } from '@mui/material'
import { InView } from 'react-intersection-observer'

import DividerBar from 'Container/ReadBookSection/components/DividerBar'

const ChapterSection = ({ item, isFirstChapter, isLastChapter, disabledReachEvent, onReachedStart, onReachedEnd }) => {
  const { query, replace } = useRouter()

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
              pathname: `/book/${query.bookId}/read/${item?.chapterId}`,
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
      <TopReachedView
        as="div"
        threshold={0}
        delay={200}
        onChange={inView => {
          if (!disabledReachEvent && inView && isFirstChapter) {
            onReachedStart()
          }
        }}>
        <ChapterName variant="h5" component="div" color="secondary">
          Chapter: {item?.chapterSequence} {item?.chapterTitle}
        </ChapterName>
      </TopReachedView>
      {item.isLocked ? (
        <Paywall>
          <Typography
            variant="h5"
            component="div"
            color="secondary"
            fontWeight={600}
            marginBottom={2}
            textAlign="center">
            This chapter is locked
          </Typography>
          {item.isAvailableInSubscription && item.isPaid ? (
            <Typography variant="body2" component="div" color="secondary" textAlign="center">
              You can unlock this chapter by purchasing our subscription or you can buy this chapter individually in{' '}
              {item.coinRequired} coins
            </Typography>
          ) : item.isAvailableInSubscription ? (
            <Typography variant="body2" component="div" color="secondary" textAlign="center">
              You can unlock this chapter by purchasing our subscription.
            </Typography>
          ) : (
            <Typography variant="body2" component="div" color="secondary" textAlign="center">
              You can unlock this chapter by purchasing this chapter individually in {item.coinRequired} coins
            </Typography>
          )}
          <PaymentButtons>
            {item.isAvailableInSubscription && (
              <Button variant="contained" disableElevation color="primary" sx={{ marginTop: 2 }}>
                Subscribe
              </Button>
            )}
            {item.isPaid && (
              <Button variant="contained" disableElevation color="primary" sx={{ marginTop: 2 }}>
                buy individually
              </Button>
            )}
          </PaymentButtons>
        </Paywall>
      ) : (
        <ChapterContentText dangerouslySetInnerHTML={{ __html: item?.chapterContent }} />
      )}

      <BottomReachedView
        as="div"
        threshold={0}
        delay={200}
        onChange={inView => {
          if (!disabledReachEvent && inView && isLastChapter) {
            onReachedEnd()
          }
        }}>
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

const TopReachedView = styled(InView)``

const BottomReachedView = styled(InView)`
  margin-top: auto;
`

const ChapterName = styled(Typography)`
  font-weight: 600;
`

const Paywall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
  border: 1px solid ${({ theme }) => theme.palette.primary.main}1a;
  border-radius: 13px;
  padding: 20px 10px;
  margin-top: auto;
  margin-bottom: auto;
`
const PaymentButtons = styled.div`
  display: flex;
  gap: 10px;
`

const ChapterContentText = styled(Typography)`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.secondary.main}ee;
`
export default ChapterSection
