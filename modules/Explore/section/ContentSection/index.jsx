import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import useExplore from 'modules/Explore/services/explore.service'
import { useRouter } from 'next/router'
import ContentCard from './components/ContentCard'
import { InView } from 'react-intersection-observer'
import { useMemo, useRef } from 'react'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
// import AdsComponent from 'components/AdsComponent'
import AdSense from 'react-adsense'

const ContentSection = ({ ranking }) => {
  const { query } = useRouter()
  const mainRef = useRef(null)

  const { ContentList, isFetching, isFetchingNextPage, hasNextPage, isError, fetchNextPage } = useExplore({
    categoryId: query?.category,
    contentType: query?.content_type,
    sortBy: ranking ? 'ranking' : query?.sort_by,
  })

  const renderContentList = useMemo(
    () =>
      ContentList?.map((item, index) => (
        <ContentCard key={index} item={item} index={index} ranking={ranking} contentType={query?.content_type?.toLocaleLowerCase()} />
      )),
    [ContentList, query?.content_type, ranking],
  )

  if (isError) {
    return <h1>Something went wrong!</h1>
  }

  if (ContentList?.length === 0 && isFetching)
    return (
      <Root>
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
        <StyledSkeleton variant="rounded" height={160} />
      </Root>
    )

  if (ContentList?.length === 0)
    return (
      <NotAvailableBar>
        <MenuBookRoundedIcon sx={{ fontSize: 90, color: theme => theme.palette.primary.main + '37' }} />
        <Typography variant="h5" component="div" textAlign="center" fontWeight={600} color="secondary.light">
          {`Currently we don't have this!`}
        </Typography>
      </NotAvailableBar>
    )

  return (
    <Root ref={mainRef}>
      <AdSense.Google
        client="ca-pub-4036020514230622"
        slot="7806394673"
        style={{ width: '100%', maxWidth: '550px', height: 100 }}
        format=""
      />

      {renderContentList}

      {ContentList?.length !== 0 && (
        <InView
          as="div"
          threshold={1}
          delay={500}
          disabled={isFetching || isFetchingNextPage || !hasNextPage}
          onChange={(inView, entry) => {
            if (inView && hasNextPage) {
              fetchNextPage()
            }
          }}
        />
      )}

      {ContentList?.length !== 0 && isFetchingNextPage && (
        <>
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
          <StyledSkeleton variant="rounded" height={160} />
        </>
      )}
    </Root>
  )
}

const NotAvailableBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 350px;
  max-width: 250px;
  margin: 0 auto;
`

const StyledSkeleton = styled(Skeleton)`
  max-width: 550px;
  height: 184px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
  @media (max-width: 465px) {
    height: 184px;
  }
  @media (max-width: 400px) {
    height: 168px;
  }
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 20px 10px;
  width: 100%;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding: 15px;
  @media (max-width: 800px) {
    padding: 0;
  }

  @media (max-width: 400px) {
    padding-top: 0px;
    margin-top: -5px;
  }
  isolation: isolate;
`

export default ContentSection
