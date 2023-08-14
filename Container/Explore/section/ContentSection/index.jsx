import styled from '@emotion/styled'
import { Skeleton, Typography } from '@mui/material'
import useExplore from 'Container/Explore/services/explore.service'
import { useRouter } from 'next/router'
import ContentCard from './components/ContentCard'
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded'
import { InView } from 'react-intersection-observer'
import { useMemo, useRef } from 'react'

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
        <ContentCard
          key={index}
          item={item}
          index={index}
          ranking={ranking}
          contentType={query?.content_type?.toLocaleLowerCase()}
        />
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
        <ClearAllRoundedIcon sx={{ fontSize: 90 }} color="primary" />
        <Typography variant="h5" component="div" textAlign="center" fontWeight={600} color="secondary">
          Content Not Available
        </Typography>
      </NotAvailableBar>
    )

  return (
    <Root ref={mainRef}>
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
  align-items: center;
  justify-content: center;
  height: 400px;
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
