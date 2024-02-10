import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Typography, useMediaQuery } from '@mui/material'
import { InView } from 'react-intersection-observer'

import DividerBar from 'modules/ReaderSection/components/DividerBar'
import Paywall from './components/Paywall'
import { useUserService } from 'modules/Auth/service/User.service'
import SigninWall from './components/SigninWall'

const ChapterSection = ({ item, slug, contentId, contentType }) => {
  const { replace } = useRouter()
  const { isLoggedIn } = useUserService()
  const isMobile = useMediaQuery('(max-width:630px)')

  return (
    <Root
      className="quill"
      id={`chapter-${item?.chapterId}`}
      as="div"
      threshold={0}
      delay={200}
      onChange={(inView, entry) => {
        if (inView && isMobile === false) {
          replace(
            {
              pathname: `/${contentType}/${contentId}/${slug}/read/${item?.chapterId}/${item?.chapterSlug}`,
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
      <Main className="ql-container ql-snow">
        <Typography textAlign="center" variant="h3" component="h3" color="secondary" marginTop={2}>
          Chapter: {item?.chapterSequence}
        </Typography>
        <Typography paddingInline="10px" textAlign="center" variant="h4" component="h2" color="secondary" fontWeight={600} marginTop={1.1}>
          {item?.chapterTitle}
        </Typography>
        {isLoggedIn ? (
          <>
            {item?.isLocked ? (
              <Paywall
                coinRequired={item?.coinRequired}
                contentId={item?.contentId}
                contentType={item?.contentType}
                chapterId={item?.chapterId}
                chapterSequence={item?.chapterSequence}
                chapterTitle={item?.chapterTitle}
                isPaid={item?.isPaid}
                isAvailableInSubscription={item?.isAvailableInSubscription}
              />
            ) : (
              <ChapterContentText
                className="ql-editor"
                variant="body1"
                marginTop={2}
                dangerouslySetInnerHTML={{ __html: item?.chapterContent }}
              />
            )}
          </>
        ) : (
          <SigninWall />
        )}
      </Main>
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
  gap: 20px;
  min-height: 120vh;
  overflow-x: hidden;
  padding-bottom: 20px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 28px;
  border-radius: 12px;
  @media (max-width: 670px) {
    padding: 10px 15px;
  }
  @media (max-width: 480px) {
    padding: 10px 12px;
  }
  @media (max-width: 380px) {
    padding: 10px 5px;
  }
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`

const BottomReachedView = styled.div`
  margin-top: auto;
  padding: 10px 18px;
`

const ChapterContentText = styled(Typography)`
  font-family: 'Noto Sans', sans-serif;
  color: ${({ theme }) => theme.palette.secondary.main};

  * {
    font-family: 'Noto Sans', sans-serif;
    color: ${({ theme }) => theme.palette.secondary.main};
    line-height: 1.7;
  }
  & p,
  strong,
  b,
  em,
  ins,
  u,
  del,
  s,
  span,
  ol,
  li {
    font-family: 'Noto Sans', sans-serif;
    color: ${({ theme }) => theme.palette.secondary.main};
    line-height: 1.8;
    font-size: 1.08rem;
  }

  & p {
    font-weight: 435;
    letter-spacing: 0.01px;
  }
  & strong {
    font-weight: 600;
    letter-spacing: 0.04px;
  }
  & b {
    font-weight: 600;
    letter-spacing: 0.04px;
  }
  & em {
    font-style: italic;
    letter-spacing: 0.0005rem;
  }
  & ins,
  u {
    letter-spacing: 0.01px;
  }
  & del,
  s {
    font-weight: 435;
    letter-spacing: 0.01px;
  }
  @media (max-width: 670px) {
    & p,
    strong,
    b,
    em,
    ins,
    u,
    s,
    del,
    span {
      font-size: 1rem;
      line-height: 1.68;
    }
  }
`
export default ChapterSection
